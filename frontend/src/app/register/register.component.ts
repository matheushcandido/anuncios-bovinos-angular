import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { RegisterService } from './register.service';

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
    status: 'ACTIVE'
  };

  confirmPassword: string = '';

  constructor(private registerService: RegisterService) {}

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
      },
      (error) => {
        console.error('Erro ao registrar usuário:', error);
      }
    );
  }
}