import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPageComponent } from './checkout-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { CheckoutPageRoutingModule } from './checkout-page-routing.module';

@NgModule({
  declarations: [CheckoutPageComponent],
  imports: [CommonModule, BrowserModule, CheckoutPageRoutingModule],
})
export class CheckoutPageModule {}
