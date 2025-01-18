import { RouterModule } from '@angular/router';
import { WidgetsModule } from './../../widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';
import { SwiperModule } from 'swiper/angular';
import { MatExpansionModule } from '@angular/material/expansion';
// import { PopularCollectionComponent } from './popular-collection/popular-collection.component';

@NgModule({
  declarations: [
    HomeComponent,
    // PopularCollectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    SwiperModule,
    WidgetsModule,
    RouterModule,
    MatExpansionModule
  ]
})
export class HomeModule { }
