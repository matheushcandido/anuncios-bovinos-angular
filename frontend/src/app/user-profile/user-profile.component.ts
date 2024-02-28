import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { Router } from '@angular/router';
import { User } from '../register/user.model';

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
        // Atualização bem-sucedida
        console.log('Dados do usuário atualizados:', updatedUser);
      },
      (error) => {
        console.error('Erro ao atualizar dados do usuário:', error);
      }
    );
  }
}