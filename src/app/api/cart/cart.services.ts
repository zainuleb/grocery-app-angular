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

  cartTotal: Subject<number> = new Subject<number>();

  addToCart(product) {
    const productExistInCart = this.cartList.find(
      (item) => item.item.id === product.id
    );
    if (!productExistInCart) {
      this.cartList.push({ item: product, quantity: 1 });
      return;
    }
    productExistInCart.quantity += 1;
    this.cartTotal.next(this.cartList.length);
  }

  removeProduct(product) {
    this.cartList = this.cartList.filter((item) => item.item.id !== product.id);
    this.cartTotal.next(this.cartList.length);
  }

  getCartList() {
    return this.cartList;
  }
}
