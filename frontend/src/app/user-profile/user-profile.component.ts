import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(private userProfileService: UserProfileService) { }

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
}