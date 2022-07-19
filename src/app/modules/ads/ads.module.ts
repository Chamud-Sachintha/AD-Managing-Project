import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShowSingleAdComponent } from './show-single-ad/show-single-ad.component';

@NgModule({
  declarations: [
    // FindAdComponent,
    // ShowFilterAdsComponent
  
    ShowSingleAdComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule,
  ],
})
export class AdsModule { }
