import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { OrderHistoryComponent } from './order-history.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';


@NgModule({
  declarations: [
    OrderHistoryComponent,
  ],
  imports: [
    CommonModule,
    OrderHistoryRoutingModule,
    ComponentsModule,
    WidgetsModule
  ]
})
export class OrderHistoryModule { }
