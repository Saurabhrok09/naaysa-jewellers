import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { LocateStoreRoutingModule } from './locate-store-routing.module';
import { LocateStoreComponent } from './locate-store.component';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    LocateStoreComponent
  ],
  imports: [
    CommonModule,
    LocateStoreRoutingModule,
    MatDividerModule,
    MatTabsModule,
    WidgetsModule,
    ComponentsModule
    
  ]
})
export class LocateStoreModule { }
