import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminloginRoutingModule } from './adminlogin-routing.module';
import { AdminloginComponent } from './adminlogin.component';


@NgModule({
  declarations: [
    AdminloginComponent
  ],
  imports: [
    CommonModule,
    AdminloginRoutingModule
  ]
})
export class AdminloginModule { }
