import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseDeliveryAddressComponent } from './choose-delivery-address.component';
const routes: Routes = [{ path: '', component: ChooseDeliveryAddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseDeliveryAddressRoutingModule {

 }
