import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ComponentsModule } from '../../components/components.module';
import { CartAddedItemComponent } from './cart-added-item/cart-added-item.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { ApplyCouponComponent } from '../apply-coupon/apply-coupon.component'
import { PincodeComponent } from './pincode/pincode.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CartComponent,
    CartAddedItemComponent,
    ApplyCouponComponent,
    PincodeComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ComponentsModule,
    WidgetsModule,
    MatDialogModule
  ]
})
export class CartModule { 

}
