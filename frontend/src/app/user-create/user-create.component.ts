import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserCreateService } from './user-create.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent implements OnInit {
  user: User = {
    id: '',
    name: '',
    login: '',
    password: '',
    role: 'USER',
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

  confirmPassword: string = '';

  constructor(private userCreateService: UserCreateService) {}

  checkPasswordMatch() {
    return this.user.password === this.confirmPassword || this.confirmPassword === '';
  }

  ngOnInit() {}

  onSubmit() {

    if (!this.checkPasswordMatch()) {
      console.error('As senhas não coincidem.');
      return;
    }

    this.userCreateService.createUser(this.user).subscribe(
      (response) => {
        console.log('Usuário registrado com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao registrar usuário:', error);
      }
    );
  }
}
