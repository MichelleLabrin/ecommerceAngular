import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductformRoutingModule } from './productform-routing.module';
import { ProductComponent } from '../product/product.component';
import { ProductformComponent } from './productform.component';


@NgModule({
  declarations: [
    ProductComponent,
  ],

  imports: [
    CommonModule,
    ProductformRoutingModule,
    ReactiveFormsModule,
  ],

  exports: [
    ProductformComponent,
  ]
})
export class ProductformModule { }
