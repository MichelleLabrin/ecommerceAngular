import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { PRODUCT_BEAUTY, ProductBeauty } from './productoption';
import { ProductB } from 'src/app/core/services/products/products.models';
import { ProductsService } from './../../../core/services/products/products.service';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss'],
})
export class ProductformComponent implements OnInit {
  @Input() public product?: ProductB;

  public productForm?: FormGroup;
  public productOption: ProductBeauty[] = PRODUCT_BEAUTY;
  public productSubscription?: Subscription;

  public constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.productForm = this.fb.group({
      //product (no name)
      product: new FormControl (this.product?.product ||"", [Validators.required]),
      price: new FormControl(this.product?.price ||"", [Validators.required]),
      description: new FormControl(this.product?.description ||"", [Validators.maxLength(10)]),
    });
  }

  public createProduct() {
    if (this.productForm?.valid) {
      const productRequest = this.product
        ? this.productsService.editProduct(
            this.product.id,
            this.productForm.value
          ): this.productsService.createProduct();

          productRequest.subscribe((product: ProductB) => {
        this.productForm?.reset();
      });
    }
  }
  public OnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }
}