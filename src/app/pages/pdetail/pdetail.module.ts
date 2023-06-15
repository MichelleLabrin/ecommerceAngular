import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdetailComponent } from './pdetail.component';
import { PdetailRoutingModule } from './pdetail-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  PdetailComponent,
  ],
  
  imports: [
    CommonModule,
    PdetailRoutingModule,
    RouterModule,
  ],

})
export class PdetailModule { }