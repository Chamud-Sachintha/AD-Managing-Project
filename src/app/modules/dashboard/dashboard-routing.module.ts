import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAppComponent } from './my-app/my-app.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  {
    path: 'app',
    children: [
      {path: 'start-page', component: MyAppComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
