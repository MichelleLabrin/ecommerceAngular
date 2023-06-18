import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ShareModule } from 'src/app/share/share.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    ShareModule,
    RouterModule,
    HttpClientModule, 
    FormsModule,
  ],
  
  exports: [
    ProductsListComponent,
  ],
})
export class ProductsListModule { }

