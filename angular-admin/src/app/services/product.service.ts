import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends RestService<Product> {
  endpoint = `${environment.api}/products`;

  all(page?: number): Observable<any> {
    let url = this.endpoint;
    if (page) {
      url += `?page=${page}`;
    }
    return this.http.get<any>(url);
  }
}
