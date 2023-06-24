import { ProductsService } from '../../core/services/products/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductB } from 'src/app/core/services/products/products.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pdetail',
  templateUrl: './pdetail.component.html',
  styleUrls: ['./pdetail.component.scss'],
})
export class PdetailComponent {
  public myTitle: string = 'Our product detail';

  public product?: ProductB;
  public productSubscription?: Subscription;

  constructor(
    public activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const productId = params['id'];
      this.productService.getProductsId(productId).subscribe((product: ProductB) => {
          this.product = product;
        });
    });
  }

    public OnDestroy(): void {
      this.productSubscription?.unsubscribe();
    }
  }

