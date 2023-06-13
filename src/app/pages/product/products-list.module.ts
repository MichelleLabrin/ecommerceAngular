import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './/products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
//import { PdetailComponent } from '../pdetail/pdetail.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    //PdetailComponent,
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule
  ]
})
export class ProductsListModule { }
