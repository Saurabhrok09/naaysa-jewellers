import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocateStoreComponent } from './locate-store.component';

const routes: Routes = [{ path: '', component: LocateStoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocateStoreRoutingModule { }
