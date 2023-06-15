import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './/products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ProductComponent } from './components/product/product.component';
//import { PdetailComponent } from '../pdetail/pdetail.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent,
    //PdetailComponent,
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule
  ]

})
export class ProductsListModule { }
