import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpPageComponent } from './sign-up-page.component';
import { SignUpPageRoutingModule } from './sign-up-page-routing.module';

@NgModule({
  declarations: [SignUpPageComponent],
  imports: [
    CommonModule,
    SignUpPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SignUpPageModule {}
