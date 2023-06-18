import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductComponent } from './Component/product/product.component';
import { ProductformComponent } from './Component/productform/productform.component';
import { FilterPipe } from '../share/pipe/filter.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    ProductformComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],

  exports: [
    ProductComponent,
  ]
})
export class ShareModule { }

