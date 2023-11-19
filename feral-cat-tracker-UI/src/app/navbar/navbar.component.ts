import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../authservice/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthServiceService){}

  isAuthenticated(): boolean {
    return this.authService.authenticated;

  }

  getUsername(): string | undefined {
    return this.authService.username;
  }

}
