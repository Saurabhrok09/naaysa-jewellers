import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisclaimerRoutingModule } from './disclaimer-routing.module';
import { DisclaimerComponent } from './disclaimer.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    DisclaimerComponent
  ],
  imports: [
    CommonModule,
    DisclaimerRoutingModule,
    ComponentsModule
  ]
})
export class DisclaimerModule { }
