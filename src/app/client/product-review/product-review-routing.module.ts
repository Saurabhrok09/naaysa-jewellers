import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductReviewComponent } from './product-review.component';

const routes: Routes = [{ path: '', component: ProductReviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductReviewRoutingModule { }
