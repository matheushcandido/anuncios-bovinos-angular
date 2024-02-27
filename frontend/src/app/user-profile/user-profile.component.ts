import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any = {};
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

  saveUser(): void {
    this.userProfileService.saveUser(this.user.id, this.user).subscribe(
      () => {
        console.log('Usuário atualizado com sucesso!');
      },
      (error) => {
        console.error('Erro ao atualizar usuário:', error);
      }
    );
  }
}