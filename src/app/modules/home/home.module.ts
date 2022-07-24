import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { LatestAdvertismentsComponent } from './latest-advertisments/latest-advertisments.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeBannerComponent,
    WelcomePageComponent,
    LatestAdvertismentsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class HomeModule { }
