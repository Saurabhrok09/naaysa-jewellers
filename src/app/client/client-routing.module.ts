import { WishlistModule } from './wishlist/wishlist.module';
import { TenPlusOneSchemaModule } from './wallet/wallet.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'product-page',
    loadChildren: () =>
      import('./product-page/product-page.module').then(
        (m) => m.ProductPageModule
      ),
  },
  {
    path: 'product-review',
    loadChildren: () =>
      import('./product-review/product-review.module').then(
        (m) => m.ProductReviewModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'choose-delivery-address',
    loadChildren: () =>
      import('./choose-delivery-address/choose-delivery-address.module').then(
        (m) => m.ChooseDeliveryAddressModule
      ),
  },
  {
    path: 'payment-options',
    loadChildren: () =>
      import('./payment-options/payment-options.module').then(
        (m) => m.PaymentOptionsModule
      ),
  },
  {
    path: 'add-delivery-address',
    loadChildren: () =>
      import('./add-delivery-address/add-delivery-address.module').then(
        (m) => m.AddDeliveryAddressModule
      ),
  },
  {
    path: 'vr-product-try',
    loadChildren: () =>
      import('./vr-product-try/vr-product-try.module').then(
        (m) => m.VrProductTryModule
      ),
  },
  {
    path: 'ten-plus-one-scheme',
    loadChildren: () =>
      import('./ten-plus-one/ten-plus-one.module').then(
        (m) => m.TenPlusOneModule
      ),
  },
  {
    path: 'wallet',
    loadChildren: () =>
      import('./wallet/wallet.module').then(
        (m) => m.TenPlusOneSchemaModule
      ),
  },
  {
    path: 'order-details',
    loadChildren: () =>
      import('./order-details/order-details.module').then(
        (m) => m.OrderDetailsModule
      ),
  },
  {
    path: 'order-history',
    loadChildren: () =>
      import('./order-history/order-history.module').then(
        (m) => m.OrderHistoryModule
      ),
  },

  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },

  {
    path: 'all-product',
    loadChildren: () =>
      import('./all-products/all-products.module').then(
        (m) => m.AllProductsModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },

  { path: 'order-detail', loadChildren: () => import('./order-detail/order-detail.module').then(m => m.OrderDetailModule) },
  { path: 'locate-store', loadChildren: () => import('./locate-store/locate-store.module').then(m => m.LocateStoreModule) },
  { path: 'disclaimer', loadChildren: () => import('./disclaimer/disclaimer.module').then(m => m.DisclaimerModule) },
  { path: 'privacy-policy', loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
  { path: 'wishlist', loadChildren: () => import('./wishlist/wishlist.module').then(m => m.WishlistModule) },
  { path: 'mobile-review', loadChildren: () => import('./mobile-review/mobile-review.module').then(m => m.MobileReviewModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule { }
