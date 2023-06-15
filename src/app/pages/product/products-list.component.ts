import { Component, OnInit } from '@angular/core';
import { ProductB } from 'src/app/core/services/products/products.models';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
    
  public productList: ProductB[] = [];
  public productSubscription?: Subscription;

  constructor(
    private productService: ProductsService) {}

  public ngOnInit(): void {
    
    this.productService.getProducts().subscribe((data: ProductB[]) => {
      console.log(data);
      this.productList = data;
    });
  }
}
