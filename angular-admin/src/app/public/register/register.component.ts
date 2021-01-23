import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../public.component.scss'],
})
export class RegisterComponent {
  firstName: '';
  lastName: '';
  email: '';
  password: '';
  passwordConfirm: '';

  constructor(private authService: AuthService, private router: Router) {}

  public submit(): void {
    this.authService
      .register({
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        password_confirm: this.passwordConfirm,
      })
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}
