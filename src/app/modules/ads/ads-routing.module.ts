import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAdComponent } from './find-ad/find-ad.component';
import { ShowSingleAdComponent } from './show-single-ad/show-single-ad.component';

const routes: Routes = [
  {
    path: 'find-ad',
    children: [
      {
        path: 'all', component: FindAdComponent
      },
      {
        path: 'single',
        component: ShowSingleAdComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
