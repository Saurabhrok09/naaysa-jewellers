import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTabsModule
  ]
})
export class CustomersModule { }
