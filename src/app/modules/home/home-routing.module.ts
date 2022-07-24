import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAdComponent } from './find-ad/find-ad.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { ShowSingleAdComponent } from './show-single-ad/show-single-ad.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: WelcomePageComponent},
      {path: 'all-ads', component: FindAdComponent},
      {path: 'category/:id', component: ShowCategoryComponent},
      {path: 'single-ad/:id', component: ShowSingleAdComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
