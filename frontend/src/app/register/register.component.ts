import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

  constructor(private registerService: RegisterService, private router: Router) {}

  checkPasswordMatch() {
    return this.user.password === this.confirmPassword || this.confirmPassword === '';
  }

  ngOnInit() {}

  onSubmit() {

    if (!this.checkPasswordMatch()) {
      console.error('As senhas não coincidem.');
      return;
    }

    this.registerService.register(this.user).subscribe(
      (response) => {
        console.log('Usuário registrado com sucesso:', response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Erro ao registrar usuário:', error);
      }
    );
  }
}