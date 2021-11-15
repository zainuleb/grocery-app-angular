import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroceriesComponent } from './groceries.component';
import { GroceryDetailComponent } from './grocery-detail/grocery-detail.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GroceriesComponent,
      },
      { path: ':id', component: GroceryDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceriesRoutingModule {}
