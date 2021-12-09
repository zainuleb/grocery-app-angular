import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Order } from './order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  placeOrder(order: Order) {
    let url = `${environment.NODEURL}/order`;
    this.http.post<Order>(url, order).subscribe((data) => {
      console.log(data);
    });
  }
}
