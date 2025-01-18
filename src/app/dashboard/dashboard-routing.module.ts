import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent }, { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }, { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) }, { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }, { path: 'support', loadChildren: () => import('./support/support.module').then(m => m.SupportModule) }, { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
