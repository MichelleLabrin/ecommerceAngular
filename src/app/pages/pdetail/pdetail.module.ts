import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';

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
    ShareModule,
  ],

  exports:[
    PdetailComponent,
  ]

})
export class PdetailModule { }