import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpPageComponent } from './sign-up-page.component';
import { SignUpPageRoutingModule } from './sign-up-page-routing.module';

@NgModule({
  declarations: [SignUpPageComponent],
  imports: [
    CommonModule,
    SignUpPageRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
})
export class SignUpPageModule {}
