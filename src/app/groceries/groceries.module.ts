import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceriesComponent } from './groceries.component';
import { GroceriesRoutingModule } from './groceries-routing.module';

@NgModule({
  declarations: [GroceriesComponent],
  imports: [CommonModule, GroceriesRoutingModule],
})
export class GroceriesModule {}
