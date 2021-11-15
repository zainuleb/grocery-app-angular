import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceriesComponent } from './groceries.component';
import { GroceriesRoutingModule } from './groceries-routing.module';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryItemComponent } from './grocery-list/grocery-item/grocery-item.component';
import { GroceryDetailComponent } from './grocery-detail/grocery-detail.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    GroceriesComponent,
    GroceryListComponent,
    GroceryItemComponent,
    GroceryDetailComponent,
  ],
  imports: [
    CommonModule,
    GroceriesRoutingModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
  ],
})
export class GroceriesModule {}
