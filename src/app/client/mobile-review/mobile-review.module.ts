import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileReviewRoutingModule } from './mobile-review-routing.module';
import { MobileReviewComponent } from './mobile-review.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    MobileReviewComponent
  ],
  imports: [
    CommonModule,
    MobileReviewRoutingModule,
    ComponentsModule,
    WidgetsModule
  ]
})
export class MobileReviewModule { }
