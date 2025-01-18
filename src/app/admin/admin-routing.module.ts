import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
       {
        path: 'offers',
        loadChildren: () =>
          import('./offers/offers.module').then((m) => m.OffersModule),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./orders/orders.module').then((m) => m.OrdersModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./customers/customers.module').then((m) => m.CustomersModule),
      },
      {
        path: 'pricing',
        loadChildren: () =>
          import('./pricing/pricing.module').then((m) => m.PricingModule),
      },
      {
        path: 'shipment',
        loadChildren: () =>
          import('./shipment/shipment.module').then((m) => m.ShipmentModule),
      },
      {
        path: 'ten-plus-one',
        loadChildren: () =>
          import('./ten-plus-one/ten-plus-one.module').then(
            (m) => m.TenPlusOneModule
          ),
      },

      { path: 'notification',
        loadChildren: () => 
        import('./notifications/notifications.module').then(m => m.NotificationsModule) 
      },
      { path: 'vendors',
       loadChildren: () =>
        import('./vendors/vendors.module').then(m => m.VendorsModule) 
      },
      { path: 'wallet', 
      loadChildren: () => 
      import('./wallet/wallet.module').then(m => m.WalletModule) 
      },
      { path: 'feedback',
      loadChildren: () =>
      import('./feedback/feedback.module').then(m => m.FeedbackModule)}
      ,
      // { path: 'reviews',
      // loadChildren: () =>
      // import('./feedback/feedback.module').then(m => m.FeedbackModule)},

      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
      { path: 'adminlogin', loadChildren: () => import('./adminlogin/adminlogin.module').then(m => m.AdminloginModule) },
      { path: 'notification', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) },
      { path: 'vendors', loadChildren: () => import('./vendors/vendors.module').then(m => m.VendorsModule) },
      { path: 'wallet', loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule) },
      { path: 'feedback', loadChildren: () => import('./feedback/feedback.module').then(m => m.FeedbackModule) },
      { path: 'materials', loadChildren: () => import('./materials/materials.module').then(m => m.MaterialsModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
