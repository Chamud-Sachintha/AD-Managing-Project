import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { FindAdComponent } from './find-ad/find-ad.component';
import { SharedModule } from '../shared/shared.module';
import { ShowFilterAdsComponent } from './show-filter-ads/show-filter-ads.component';

@NgModule({
  declarations: [
    FindAdComponent,
    ShowFilterAdsComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule,
  ],
})
export class AdsModule { }
