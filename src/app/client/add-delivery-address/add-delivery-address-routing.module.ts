import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeliveryAddressComponent } from './add-delivery-address.component';

const routes: Routes = [{ path: '', component: AddDeliveryAddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDeliveryAddressRoutingModule { }
