import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { Router } from '@angular/router';
import { User } from '../register/user.model';
import { Address } from '../models/address.model';

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
    status: 'ACTIVE'
  };

  address: Address = {
    id: '',
    zip: '',
    street: '',
    neighborhood: '',
    number: '',
    city: '',
    state: '',
    idUser: this.user.id
  };

  activeTab: string = 'dados-basicos';

  constructor(private userProfileService: UserProfileService, private router: Router) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.userProfileService.getCurrentUser().subscribe(
      (userData) => {
        this.user = userData;
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
    console.log(this.user);
    this.userProfileService.updateUser(this.user).subscribe(
      (updatedUser) => {
        console.log('Dados do usuário atualizados:', updatedUser);
      },
      (error) => {
        console.error('Erro ao atualizar dados do usuário:', error);
      }
    );
  }

  getAddressByCEP(cep: string): void {
    this.userProfileService.getAddressByCEP(cep).subscribe(
      (data) => {
        this.address = data;
        console.log('Endereço obtido com sucesso:', this.address);
      },
      (error) => {
        console.error('Erro ao obter endereço pelo CEP:', error);
      }
    );
  }
}