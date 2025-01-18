import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VrProductTryRoutingModule } from './vr-product-try-routing.module';
import { VrProductTryComponent } from './vr-product-try.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    VrProductTryComponent
  ],
  imports: [
    CommonModule,
    VrProductTryRoutingModule,
    ComponentsModule
  ]
})
export class VrProductTryModule { }
