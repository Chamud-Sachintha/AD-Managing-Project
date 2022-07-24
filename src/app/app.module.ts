import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdsRoutingModule } from './modules/ads/ads-routing.module';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FindAdComponent } from './modules/ads/find-ad/find-ad.component';
import { ShowFilterAdsComponent } from './modules/ads/show-filter-ads/show-filter-ads.component';
import { ShowCategoryComponent } from './modules/ads/show-category/show-category.component';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { AdminHeaderComponent } from './modules/dashboard/admin-header/admin-header.component';
import { StartPageComponent } from './modules/dashboard/start-page/start-page.component';
import { MyAppComponent } from './modules/dashboard/my-app/my-app.component';
import { HomeBannerComponent } from './modules/home/home-banner/home-banner.component';
import { LatestAdvertismentsComponent } from './modules/home/latest-advertisments/latest-advertisments.component';
import { HeaderComponent } from './modules/home/header/header.component';
import { WelcomePageComponent } from './modules/home/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FindAdComponent,
    ShowFilterAdsComponent,
    ShowCategoryComponent,
    SignInComponent,
    SignUpComponent,
    AdminHeaderComponent,
    StartPageComponent,
    MyAppComponent,
    HomeBannerComponent,
    HeaderComponent,
    WelcomePageComponent,
    LatestAdvertismentsComponent
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
    DashboardRoutingModule,
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
