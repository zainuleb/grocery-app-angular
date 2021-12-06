import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Subject } from 'rxjs';

import { Cart } from './cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  subject = new Subject();
  cartList: Cart[] = [];

  cartTotal: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  addToCart(product) {
    const existingCartItem = this.cartList.find(
      (cartItem) => cartItem.item.id === product.id
    );

    if (existingCartItem) {
      this.cartList.map((cartItem) =>
        cartItem.item.id === product.id ? cartItem.quantity++ : cartItem
      );
    } else {
      this.cartList.push({ item: product, quantity: 1 });
    }

    this.cartTotal.next(this.cartList.length);
  }

  removeOneProduct(product) {
    const existingCartItem = this.cartList.find(
      (cartItem) => cartItem.item.id === product.id
    );

    if (existingCartItem.quantity === 1) {
      this.cartList.splice(this.cartList.indexOf(existingCartItem), 1);
    } else {
      this.cartList.map((cartItem) =>
        cartItem.item.id === product.id ? cartItem.quantity-- : cartItem
      );
    }

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
