import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    // FindAdComponent,
    // ShowFilterAdsComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    SharedModule,
  ],
})
export class AdsModule { }
