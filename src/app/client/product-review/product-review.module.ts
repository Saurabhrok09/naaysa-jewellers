import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductReviewRoutingModule } from './product-review-routing.module';
import { ProductReviewComponent } from './product-review.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ProductReviewComponent
  ],
  imports: [
    CommonModule,
    ProductReviewRoutingModule,
    ComponentsModule,
  ]
})
export class ProductReviewModule { }
