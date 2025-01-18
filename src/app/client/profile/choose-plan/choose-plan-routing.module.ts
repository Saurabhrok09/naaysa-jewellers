import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosePlanComponent } from './choose-plan.component';

const routes: Routes = [{ path: '', component: ChoosePlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoosePlanRoutingModule { }
