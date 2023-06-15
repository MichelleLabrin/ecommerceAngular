import { ProductsService } from '../../core/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductB } from 'src/app/core/services/products/products.models';

@Component({
  selector: 'app-pdetail',
  templateUrl: './pdetail.component.html',
  styleUrls: ['./pdetail.component.scss']
})
export class PdetailComponent implements OnInit {
  
  public product?: ProductB;
  public productList: ProductB[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    private productService: ProductsService,
  ) {}

 public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const productId = params['id'];

      this.productService.getProducts().subscribe((data: ProductB[]) => {
        this.productList = data;

        this.product = this.productList.find((product) => product.id === productId);
      });
    });
  }
}
