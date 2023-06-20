import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProductsComponent } from './new-products.component';
import { NewProductsRoutingModule } from './new-products-routing.module';

import { ShareModule } from 'src/app/share/share.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewProductsComponent,
  ],

  imports: [
    CommonModule,
    NewProductsRoutingModule,
    ShareModule,
    ReactiveFormsModule,
  ]
})
export class NewProductModule { }
