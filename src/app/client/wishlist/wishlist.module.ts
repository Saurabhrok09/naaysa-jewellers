import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    WidgetsModule,
    ComponentsModule,
  ]
})
export class WishlistModule { }
