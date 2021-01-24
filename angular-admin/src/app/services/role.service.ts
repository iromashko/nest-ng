import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Role } from '../interfaces/role';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends RestService<Role> {
  endpoint = `${environment.api}/roles`;
}
