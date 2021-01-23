import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './../public.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  public submit(): void {
    this.http
      .post(`${environment.api}/login`, this.form.getRawValue(), {
        withCredentials: true,
      })
      .subscribe(() => this.router.navigate(['/']));
  }
}
