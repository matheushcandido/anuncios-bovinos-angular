import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Address } from '../models/address.model';
import { States } from '../models/states';
import { Contact } from '../models/contact.model';
import { PhoneVerification } from '../models/phoneVerification.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = {
    id: '',
    name: '',
    login: '',
    password: '',
    role: '',
    status: 'ACTIVE',
    address: {
      id: '',
      zip: '',
      street: '',
      neighborhood: '',
      number: '',
      city: '',
      state: '',
      user_id: ''
    },
    contact: {
      id: '',
      phoneNumber: '',
      verified: false,
      user_id: ''
    }
  };

  address: Address = {
    id: '',
    zip: '',
    street: '',
    neighborhood: '',
    number: '',
    city: '',
    state: '',
    user_id: ''
  };

  contact: Contact = {
    id: '',
    phoneNumber: '',
    verified: false,
    user_id: ''
  };

  states = States;
  activeTab: string = 'dados-basicos';

  constructor(private userProfileService: UserProfileService, private router: Router) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.userProfileService.getCurrentUser().subscribe(
      (userData) => {
        this.user = userData;
        if (userData.address) {
          this.address = userData.address;
        }
        if (userData.contact) {
          this.contact = userData.contact;
        }
      },
      (error) => {
        console.error('Erro ao obter dados do usuário:', error);
      }
    );
  }   

  deleteUser(id: string): void {
    if (confirm('Tem certeza que deseja deletar seu usuário?')) {
      this.userProfileService.deleteUser(id).subscribe(
        () => {
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Erro ao deletar usuário', error);
        }
      );
    }
  }

  updateUser(): void {

    this.user.contact = this.contact;
    console.log(this.user)
    this.userProfileService.updateUser(this.user).subscribe(
      (updatedUser) => {
        console.log('Dados do usuário atualizados:', updatedUser);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Erro ao atualizar dados do usuário:', error);
      }
    );
  }

  getAddressByCEP(cep: string): void {
    this.userProfileService.getAddressByCEP(cep).subscribe(
      (data) => {
        this.address.street = data.logradouro;
        this.address.neighborhood = data.bairro;
        this.address.city = data.localidade;
        this.address.state = data.uf;
        
        console.log('Endereço obtido com sucesso:', this.address);
      },
      (error) => {
        console.error('Erro ao obter endereço pelo CEP:', error);
      }
    );
  }  

  verifyPhone(phoneNumber: string, userId: string): void {
    const code = Math.floor(1000 + Math.random() * 9000);

    const body : PhoneVerification = {
      userId: userId,
      phoneNumber: phoneNumber,
      code: code,
    };

    this.userProfileService.verifyPhone(body).subscribe(
      (response) => {
        this.router.navigate(['/verificar'], { queryParams: { userId: userId } });
      },
      (error) => {
        console.error('Erro ao enviar solicitação:', error);
      }
    );
  }
}