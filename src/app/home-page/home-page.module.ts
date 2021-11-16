import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

import { IvyCarouselModule } from 'angular-responsive-carousel';
@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, IvyCarouselModule],
})
export class HomePageModule {}
