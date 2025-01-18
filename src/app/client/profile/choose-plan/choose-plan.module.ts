import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoosePlanRoutingModule } from './choose-plan-routing.module';
import { ChoosePlanComponent } from './choose-plan.component';
// import { TenPlusOneModule } from '../../ten-plus-one/ten-plus-one.module';


@NgModule({
  declarations: [
    ChoosePlanComponent
  ],
  imports: [
    CommonModule,
    ChoosePlanRoutingModule,
    // TenPlusOneModule
  ]
})
export class ChoosePlanModule { }
