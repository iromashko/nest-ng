import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends RestService<any> {
  endpoint = `${environment.api}/orders`;
}
