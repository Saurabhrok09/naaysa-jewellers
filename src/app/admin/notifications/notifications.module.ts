import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { LayoutsModule } from '../layouts/layouts.module';


@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    WidgetsModule,
    LayoutsModule
  ]
})
export class NotificationsModule { }
