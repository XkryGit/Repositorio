import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  usernameToken: string = 'fallo';
  auth: Boolean = false;

  login(username: string, password: string): boolean {
    if (
      (username === 'master@gmail.com' || username === 'adolfo@gmail.com') &&
      password === '12345678'
    ) {
      this.usernameToken = username;
      alert('Login correcto');
      this.auth = true;
      return true;
    } else {
      alert('Login incorrecto');
      this.auth = false;
      return false;
    }
  }

  isLogged: boolean = false;

  logout(): void {
    this.isLogged = false;
    this.router.navigate(['/menu']);
  }

  getUsername(): string {
    return 'Hola ' + this.usernameToken;
  }
}
