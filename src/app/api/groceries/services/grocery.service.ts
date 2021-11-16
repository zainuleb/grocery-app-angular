import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Grocery } from '../interfaces/grocery.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  constructor(private http: HttpClient) {}

  //get all products
  getProducts(): Observable<Grocery[]> {
    let url = `${environment.URL}/products`;
    return this.http.get<Grocery[]>(url);
  }

  //get single products
  getProduct(id): Observable<Grocery> {
    let url = `${environment.URL}/products/${id}`;
    console.log('Url', url);
    return this.http.get<Grocery>(url);
  }
}
