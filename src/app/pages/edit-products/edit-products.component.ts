import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ProductB } from 'src/app/core/services/products/products.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent {
  public myTitleEditProducts: string = 'EDIT PRODUCTS!';
  public product?: ProductB;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
  ) {
    this.activatedRoute.params.subscribe((params) => { 
      const productId = params['id'];

      this.productService.getProductsId(productId).subscribe((product: ProductB) => {
        this.product = product;
      });
    });
  }
} 