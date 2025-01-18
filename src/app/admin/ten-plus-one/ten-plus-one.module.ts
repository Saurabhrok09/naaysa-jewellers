import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenPlusOneRoutingModule } from './ten-plus-one-routing.module';
import { TenPlusOneComponent } from './ten-plus-one.component';


@NgModule({
  declarations: [
    TenPlusOneComponent
  ],
  imports: [
    CommonModule,
    TenPlusOneRoutingModule
  ]
})
export class TenPlusOneModule { }
