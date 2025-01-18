import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VrProductTryComponent } from './vr-product-try.component';

const routes: Routes = [{ path: '', component: VrProductTryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VrProductTryRoutingModule { }
