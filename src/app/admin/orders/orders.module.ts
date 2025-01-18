import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { LayoutsModule } from '../layouts/layouts.module';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTabsModule,
    LayoutsModule
  ]
})
export class OrdersModule { }
