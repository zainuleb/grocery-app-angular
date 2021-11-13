import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroceriesComponent } from './groceries/groceries.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/groceries', pathMatch: 'full' },
  {
    path: 'groceries',
    loadChildren: () =>
      import('./groceries/groceries.module').then((m) => m.GroceriesModule),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./shopping-list/shopping-list.module').then(
        (m) => m.ShoppingListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
