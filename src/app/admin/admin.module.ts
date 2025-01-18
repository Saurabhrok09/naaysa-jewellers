import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LayoutsModule } from './layouts/layouts.module';
import { MaterialUpdateModalComponent } from './material-update-modal/material-update-modal.component';
import { DialogModule } from '@angular/cdk/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 

@NgModule({
  declarations: [
    AdminComponent,
    MaterialUpdateModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DialogModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class AdminModule { }
