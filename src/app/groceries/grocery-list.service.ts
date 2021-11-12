import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocery } from './grocery.interface';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GroceryListService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Grocery[]> {
    let url = `${environment.URL}/products`;
    return this.http.get<Grocery[]>(url);
  }
}
