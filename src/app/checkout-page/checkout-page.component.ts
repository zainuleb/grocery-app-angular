import { Component, OnInit } from '@angular/core';
import { CartService } from '../api/cart/cart.services';
import { Cart } from '../api/cart/cart.interface';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  cartList: Cart[];
  cartTotal = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.calcCartTotal();
  }

  loadCartItems() {
    this.cartList = this.cartService.getCartList();
  }

  removeHandler(item) {
    this.cartService.removeProduct(item);
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartList.forEach((item) => {
      this.cartTotal += item.quantity * item.item.price;
    });
  }
}
