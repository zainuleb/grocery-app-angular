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

import { CartService } from '../api/cart/cart.services';
import { Cart } from '../api/cart/cart.interface';

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
  cartTotal = 0;
  userCheckoutForm: FormGroup;

  states: Array<String> = [
    'KP',
    'PUNJAB',
    'BALOCHISTAN',
    'SINDH',
    'GILGIT BALTISTAN',
  ];

  //Constructor
  constructor(private cartService: CartService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.calcCartTotal();

    this.userCheckoutForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.email]],
      address: this.fb.array([this.addAddressGroup()]),
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
  get email() {
    return this.userCheckoutForm.get('email');
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
