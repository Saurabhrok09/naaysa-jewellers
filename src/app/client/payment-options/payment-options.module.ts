import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentOptionsRoutingModule } from './payment-options-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { PaymentOptionsComponent } from './payment-options.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { PaymentItemComponent } from './payment-item/payment-item.component';


@NgModule({
  declarations: [
    PaymentOptionsComponent,
    PaymentTypeComponent,
    PaymentItemComponent
  ],
  imports: [
    CommonModule,
    PaymentOptionsRoutingModule,
    ComponentsModule
  ]
})
export class PaymentOptionsModule { }
