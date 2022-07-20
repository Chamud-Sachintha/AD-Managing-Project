import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LatestAdvertismentsComponent } from './latest-advertisments/latest-advertisments.component';
import { AdsRoutingModule } from './modules/ads/ads-routing.module';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FindAdComponent } from './modules/ads/find-ad/find-ad.component';
import { ShowFilterAdsComponent } from './modules/ads/show-filter-ads/show-filter-ads.component';
import { ShowCategoryComponent } from './modules/ads/show-category/show-category.component';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeSliderComponent,
    LatestAdvertismentsComponent,
    FindAdComponent,
    ShowFilterAdsComponent,
    ShowCategoryComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    MatSidenavModule,
    FlexLayoutModule,
    CarouselModule,
    AdsRoutingModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
