import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Subject } from 'rxjs';

import { Cart } from './cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  subject = new Subject();
  cartList: Cart[] = [];

  cartTotal: Observable<{ total: 0 }>;

  firstSubscription: Subscription;
  subscribeTotalValue: number = 0;

  ngOnInit() {
    this.subscribeTotalValue = Observable.create((observer) => {
      let total = 0;
      this.cartList.forEach((item) => {
        total += item.quantity * item.item.price;
      });
      observer.next({ total: total });
    });
  }

  cartTotalSubscribe() {
    this.firstSubscription = this.cartTotal.subscribe({
      next: (value) => {
        this.subscribeTotalValue = value.total;
      },
    });
    console.log(this.subscribeTotalValue);
  }

  addToCart(product) {
    const productExistInCart = this.cartList.find(
      (item) => item.item.id === product.id
    );
    if (!productExistInCart) {
      this.cartList.push({ item: product, quantity: 1 });
      return;
    }
    productExistInCart.quantity += 1;
    this.subject.next(product);
  }
  removeProduct(product) {
    this.cartList = this.cartList.filter((item) => item.item.id !== product.id);
  }

  getCartList() {
    return this.cartList;
  }
}
