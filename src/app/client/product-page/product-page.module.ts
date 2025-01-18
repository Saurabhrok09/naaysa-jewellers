import { WidgetsModule } from './../../widgets/widgets.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

// import { MatSelectModule } from '@angular/material/select';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatListModule } from '@angular/material/list';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PriceBreakupComponent } from './price-breakup/price-breakup.component';

@NgModule({
  declarations: [
    ProductPageComponent,
    PriceBreakupComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    ComponentsModule,
    WidgetsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    FormsModule,
  ]
})
export class ProductPageModule { }
