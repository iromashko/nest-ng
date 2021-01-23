import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  infoForm: FormGroup;
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.infoForm = this.fb.group({
      first_name: '',
      last_name: '',
      email: '',
    });
    this.passwordForm = this.fb.group({
      password: '',
      password_confirm: '',
    });
  }

  infoSubmit(): void {
    this.authService
      .updateInfo(this.infoForm.getRawValue())
      .subscribe((res) => console.log(res));
  }

  passwordSubmit(): void {
    this.authService
      .updatePassword(this.passwordForm.getRawValue())
      .subscribe((res) => console.log(res));
  }
}
