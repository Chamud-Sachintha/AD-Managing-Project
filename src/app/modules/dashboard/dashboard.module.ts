import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { StartPageComponent } from './start-page/start-page.component';
import { MyAppComponent } from './my-app/my-app.component';


@NgModule({
  declarations: [
    AdminHeaderComponent,
    StartPageComponent,
    MyAppComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
