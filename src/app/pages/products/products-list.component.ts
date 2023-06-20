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
  public myTitleProducts: string = 'OUR PRODUCTS!';

    
  public productList: ProductB[] = [];
  public filterValue: string= "";

  public productSubscription?: Subscription;

  constructor(private productService: ProductsService) {}

  public ngOnInit(): void { 
    this.getProducts();
  }
    
    public getProducts(){
      this.productService.getProducts().subscribe((products: ProductB[]) => {
      console.log(products);
      this.productList = products;
    });
    }

    public deleteProduct(product: ProductB) {
      this.productService.deleteProduct(product.id).subscribe(()=> {
        this.getProducts()
      });
    }

    public OnDestroy(): void {
      this.productSubscription?.unsubscribe();
    
  }
}
