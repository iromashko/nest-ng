import { Component, Input, OnInit } from '@angular/core';
import { Auth } from 'src/app/classes/auth';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    Auth.userEmitter.subscribe((user: User) => (this.user = user));
  }

  public logout(): void {
    this.authService.logout().subscribe(() => {
      console.log(`success`);
    });
  }
}
