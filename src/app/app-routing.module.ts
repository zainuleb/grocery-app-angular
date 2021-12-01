import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageModule } from './home-page/home-page.module';
import { GroceriesModule } from './groceries/groceries.module';
import { CheckoutPageModule } from './checkout-page/checkout-page.module';
import { GroceriesComponent } from './groceries/groceries.component';
import { SignUpPageModule } from './sign-up-page/sign-up-page.module';

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
    path: 'signup',
    loadChildren: () =>
      import('./sign-up-page/sign-up-page.module').then(
        (m) => m.SignUpPageModule
      ),
  },
  {
    path: 'groceries',
    loadChildren: () =>
      import('./groceries/groceries.module').then((m) => m.GroceriesModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout-page/checkout-page.module').then(
        (m) => m.CheckoutPageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact-page/contact-page.module').then(
        (m) => m.ContactPageModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
