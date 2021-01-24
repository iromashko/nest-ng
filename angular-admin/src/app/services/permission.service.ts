import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Permission } from '../interfaces/permission';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionService extends RestService<Permission> {
  endpoint = `${environment.api}/permissions`;
}
