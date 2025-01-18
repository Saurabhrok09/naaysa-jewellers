import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseDeliveryAddressRoutingModule } from './choose-delivery-address-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { ChooseDeliveryAddressComponent } from './choose-delivery-address.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
@NgModule({
  declarations: [
    ChooseDeliveryAddressComponent,
    AddressCardComponent,
    OrderSummaryComponent,
  ],
  imports: [
    CommonModule,
    ChooseDeliveryAddressRoutingModule,
    ComponentsModule,
  ]
})
export class ChooseDeliveryAddressModule { }
