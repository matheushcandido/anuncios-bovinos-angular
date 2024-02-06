// header.component.ts
import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropdownOpen: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.loginService.logout();
  }

  profile() {
    this.router.navigate(['/perfil']);
  }
}
