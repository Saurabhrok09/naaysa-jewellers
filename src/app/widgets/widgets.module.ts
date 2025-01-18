import { WishlistWidgetComponent } from './wishlist-widget/wishlist-widget.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductWidgetComponent } from './product-widget/product-widget.component';
import { MetalWidgetComponent } from './metal-widget/metal-widget.component';
import { PaymentOptionWidgetComponent } from './payment-option-widget/payment-option-widget.component';
import { ReviewWidgetComponent } from './review-widget/review-widget.component';
import { NotificationWidgetComponent } from './notification-widget/notification-widget.component';
import { VendorWidgetComponent } from './vendor-widget/vendor-widget.component';
import { FeatureWidgetComponent } from './feature-widget/feature-widget.component';
import { HistoryComponent } from './history/history.component';
import { MobileCartWidgetComponent } from './mobile-cart-widget/mobile-cart-widget.component';
import { MobileAddressProductWidgetComponent } from './mobile-address-product-widget/mobile-address-product-widget.component';
import { MobileAddressWidgetComponent } from './mobile-address-widget/mobile-address-widget.component';
import { MobileReviewWidgetComponent } from './mobile-review-widget/mobile-review-widget.component';
import { MobileStoreAddressWidgetComponent } from './mobile-store-address-widget/mobile-store-address-widget.component';
import { AdminMobileDashboardWidgetComponent } from './admin-mobile-dashboard-widget/admin-mobile-dashboard-widget.component';
import { FeedbackWidgetsComponent } from './feedback-widgets/feedback-widgets.component';
import { AdminMobileUsersWidgetComponent } from './admin-mobile-users-widget/admin-mobile-users-widget.component';
import { StarsModule } from '../stars/stars.module';


const components = [ ProductWidgetComponent,
  MetalWidgetComponent,
  PaymentOptionWidgetComponent,
  ReviewWidgetComponent,
  NotificationWidgetComponent,
  VendorWidgetComponent,
  FeatureWidgetComponent,
  WishlistWidgetComponent,
  HistoryComponent,
  MobileAddressProductWidgetComponent,
  MobileCartWidgetComponent,
  MobileAddressWidgetComponent,
  MobileReviewWidgetComponent,
  MobileStoreAddressWidgetComponent,
  AdminMobileDashboardWidgetComponent,
  FeedbackWidgetsComponent,
  AdminMobileUsersWidgetComponent
]
@NgModule({
  declarations: [
    components,
    MetalWidgetComponent,
    PaymentOptionWidgetComponent,
    ReviewWidgetComponent,
    NotificationWidgetComponent,
    VendorWidgetComponent,
    FeatureWidgetComponent,
    HistoryComponent,
    MobileCartWidgetComponent,
    MobileAddressProductWidgetComponent,
    MobileAddressWidgetComponent,
    MobileCartWidgetComponent,
    MobileReviewWidgetComponent,
    MobileStoreAddressWidgetComponent,
    AdminMobileDashboardWidgetComponent,
    FeedbackWidgetsComponent,
    AdminMobileUsersWidgetComponent,
  ],
  exports: [components],
  imports: [
    CommonModule,
    RouterModule,
    StarsModule
  ]
})
export class WidgetsModule { }
