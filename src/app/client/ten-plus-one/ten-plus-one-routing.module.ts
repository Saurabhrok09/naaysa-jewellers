import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenPlusOneComponent } from './ten-plus-one.component';

const routes: Routes = [{ path: '', component: TenPlusOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenPlusOneRoutingModule { }
