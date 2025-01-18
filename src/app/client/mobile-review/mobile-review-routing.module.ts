import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileReviewComponent } from './mobile-review.component';

const routes: Routes = [{ path: '', component: MobileReviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileReviewRoutingModule { }
