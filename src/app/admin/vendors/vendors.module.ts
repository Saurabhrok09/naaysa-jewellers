import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorsComponent } from './vendors.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { LayoutsModule } from '../layouts/layouts.module';


@NgModule({
  declarations: [
    VendorsComponent
  ],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    WidgetsModule,
    LayoutsModule
  ]
})
export class VendorsModule { }
