import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenPlusOneRoutingModule } from './ten-plus-one-routing.module';
import { TenPlusOneComponent } from './ten-plus-one.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    TenPlusOneComponent
  ],
  exports:[TenPlusOneComponent],
  imports: [
    CommonModule,
    TenPlusOneRoutingModule,
    WidgetsModule,
    ComponentsModule,
    RouterModule
  ]
})
export class TenPlusOneModule { }
