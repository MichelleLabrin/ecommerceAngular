import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductsRoutingModule } from './edit-products-routing.module';
import { EditProductsComponent } from './edit-products.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    EditProductsComponent,
  ],

  imports: [
    CommonModule,
    EditProductsRoutingModule,
    ShareModule,
  ]
})
export class EditProductsModule { }
