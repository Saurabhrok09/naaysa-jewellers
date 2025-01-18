import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import { LayoutsModule } from '../layouts/layouts.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    MatTabsModule,
    LayoutsModule,
    WidgetsModule
  ]
})
export class FeedbackModule { }
