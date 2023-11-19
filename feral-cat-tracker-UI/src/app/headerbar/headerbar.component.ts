import { Component } from '@angular/core';
import { AuthServiceService } from '../authservice/auth-service.service';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent {
  constructor(private authService: AuthServiceService) {}

  isAuthenticated(): boolean {
    return this.authService.authenticated;
  }

  getUsername(): string | undefined {
    return this.authService.username;
  }

  logout(): void {
    this.authService.logout().subscribe(
      () => {
        // Redirect or perform additional actions upon successful logout
      },
      (error) => {
        console.error('Logout failed', error);
      }
    );
  }
}

