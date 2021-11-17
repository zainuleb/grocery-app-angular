import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageModule } from './home-page/home-page.module';
import { GroceriesComponent } from './groceries/groceries.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
    pathMatch: 'full',
  },
  {
    path: 'groceries',
    loadChildren: () =>
      import('./groceries/groceries.module').then((m) => m.GroceriesModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout-page/checkout-page-routing.module').then(
        (m) => m.CheckoutPageRoutingModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
