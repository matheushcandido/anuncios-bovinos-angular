import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log('Erro ao carregar usuários', error);
      }
    );
  }

  blockUser(id: string): void {
    if (confirm('Tem certeza que deseja bloquear este usuário?')) {
      this.userService.blockUser(id).subscribe(
        () => {
          this.loadUsers();
        },
        (error) => {
          console.error('Erro ao bloquear usuário', error);
        }
      );
    }
  }

  unlockUser(id: string): void {
    if (confirm('Tem certeza que deseja desbloquear este usuário?')) {
      this.userService.unlockUser(id).subscribe(
        () => {
          this.loadUsers();
        },
        (error) => {
          console.error('Erro ao desbloquear usuário', error);
        }
      );
    }
  }
}
