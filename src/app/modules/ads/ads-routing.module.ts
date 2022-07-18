import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAdComponent } from './find-ad/find-ad.component';

const routes: Routes = [
  {
    path: 'find-ad',
    children: [{path: 'all', component: FindAdComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
