import { PdetailRoutingModule } from './pdetail-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdetailComponent } from './pdetail.component';


@NgModule({
  declarations: [
  PdetailComponent,
  ],
  
  imports: [
    CommonModule,
    PdetailRoutingModule,
  ],
  exports: [
    PdetailComponent,
  ]
})
export class PdetailModule { }