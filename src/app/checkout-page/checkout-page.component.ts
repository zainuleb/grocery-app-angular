import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { CartService } from '../api/cart/cart.services';
import { OrderService } from '../api/order/order.services';
import { Cart } from '../api/cart/cart.interface';
import { Order, OrderItems } from '../api/order/order.interface';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutPageComponent implements OnInit {
  //Decorators
  @Input() jsonFormData: any;

  //Declarations
  cartList: Cart[];

  dataSource: MatTableDataSource<Cart> = new MatTableDataSource<Cart>([]);

  cartTotal = 0;
  displayedColumns: string[] = [
    'title',
    'image',
    'price',
    'quantity',
    'remove',
  ];

  userCheckoutForm: FormGroup;
  email;

  states: Array<String> = [
    'KP',
    'PUNJAB',
    'BALOCHISTAN',
    'SINDH',
    'GILGIT BALTISTAN',
  ];

  //Constructor
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.calcCartTotal();

    this.userCheckoutForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      emails: this.fb.array([this.newEmail()]),
      /* email: [null, [Validators.required, Validators.email]], */
      address: this.fb.array([]),
    });
  }

  get emails(): FormArray {
    return this.userCheckoutForm.controls['emails'] as FormArray;
  }
  addEmail() {
    this.emails.push(this.newEmail());
  }
  removeEmail(i: number) {
    this.emails.removeAt(i);
  }

  newEmail(): FormGroup {
    return this.fb.group({
      email: '',
    });
  }

  //Form Array Functions
  addAddressGroup() {
    return this.fb.group({
      primaryFlg: [],
      streetAddress: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zipcode: [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]],
    });
  }

  addAddress() {
    this.addressArray.push(this.addAddressGroup());
  }
  removeAddress(index) {
    this.addressArray.removeAt(index);
  }
  get firstName() {
    return this.userCheckoutForm.get('firstName');
  }
  get lastName() {
    return this.userCheckoutForm.get('lastName');
  }

  get addressArray() {
    return this.userCheckoutForm.controls['address'] as FormArray;
  }
  submitHandler() {
    console.log(this.userCheckoutForm.value);
  }

  //Pane Expansions Foo's
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }

  //Service Functions

  loadCartItems() {
    this.dataSource.data = this.cartService.getCartList();
    this.calcCartTotal();
  }

  incrementProduct(element) {
    this.cartService.addToCart(element.item);
    this.calcCartTotal();
    console.log(this.dataSource.data);
  }

  decrementProduct(element) {
    this.cartService.removeOneProduct(element.item);
    this.calcCartTotal();
    this.loadCartItems();
  }

  removeHandler(element) {
    this.cartService.removeProduct(element.item);
    this.calcCartTotal();
    this.loadCartItems();
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.dataSource.data.forEach((item) => {
      this.cartTotal += item.quantity * item.item.price;
    });
  }

  postOrder() {
    let orderItemsCollection: OrderItems[] = [];
    let addressCollection: string[] = [];

    this.dataSource.data.map((item) => {
      orderItemsCollection.push({
        quantity: item.quantity,
        productId: item.item.id,
        price: item.item.price,
      });
    });

    this.userCheckoutForm.value.emails.map((item) => {
      addressCollection.push(item.email);
    });

    let order: Order = {
      total: this.cartTotal,
      shippingAddress: addressCollection,
      discount: 100,
      userId: '5f15d467f3a046427a1c26e1',
      orderItems: orderItemsCollection,
    };

    console.log(order);
    this.orderService.placeOrder(order);
  }
}
