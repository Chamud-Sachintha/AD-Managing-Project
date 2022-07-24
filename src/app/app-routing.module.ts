import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './modules/home/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path: '' ,component: WelcomePageComponent},
    ]
  },
  {
    path: 'auth',
    redirectTo: '/auth/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'find-ad',
    redirectTo: '/find-ad/all',
    pathMatch: 'full'
  },
  {
    path: 'app',
    redirectTo: '/app/start-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
