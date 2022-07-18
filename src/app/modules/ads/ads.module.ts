import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { FindAdComponent } from './find-ad/find-ad.component';


@NgModule({
  declarations: [
    FindAdComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule
  ]
})
export class AdsModule { }
