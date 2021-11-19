import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { CartService } from '../api/cart/cart.services';
import { Cart } from '../api/cart/cart.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private cartService: CartService,
    private breakpointObserver: BreakpointObserver
  ) {}

  cartList: Cart[];
  cartTotal = 0;

  ngOnInit(): void {
    this.loadCartItems();
    this.calcCartTotal();
  }

  loadCartItems() {
    this.cartList = this.cartService.getCartList();
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartList.forEach((item) => {
      this.cartTotal += item.quantity * item.item.price;
    });
  }
}
