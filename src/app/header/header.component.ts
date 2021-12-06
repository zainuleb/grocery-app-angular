import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class HeaderComponent implements OnInit, OnDestroy {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private cartService: CartService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.cartService.cartTotal.subscribe((response) => {
      this.cartTotal = response;
    });
  }

  cartList: Cart[];
  cartTotal = 0;

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartList = this.cartService.getCartList();
  }

  ngOnDestroy() {
    this.cartService.cartTotal.unsubscribe();
  }
}
