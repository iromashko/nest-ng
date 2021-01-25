import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends RestService<any> {
  endpoint = `${environment.api}/orders`;

  all(page?: number): Observable<any> {
    let url = this.endpoint;
    if (page) {
      url += `?page=${page}`;
    }
    return this.http.get(url);
  }
}
