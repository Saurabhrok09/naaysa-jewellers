import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars.component';



@NgModule({
  declarations: [StarsComponent],
  imports: [
    CommonModule
  ],
  exports:[StarsComponent]
})
export class StarsModule { }
