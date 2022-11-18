import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-content',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginContentComponent implements OnInit {
  user: { username: string; password: string };

  constructor(public authService: AuthService, private router: Router) {
    this.user = {
      username: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  loginService(username: string, password: string) {
    this.authService.login(username, password);

    if (this.authService.auth === true) {
      this.router.navigate(['/dashboard']);
      this.authService.isLogged = true;
    } else {
      this.user = {
        username: this.user.username,
        password: '',
      };
    }
  }
}
