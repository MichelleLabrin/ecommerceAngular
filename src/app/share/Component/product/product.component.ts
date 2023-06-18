import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductB } from 'src/app/core/services/products/products.models';
//import { ProductsService } from 'src/app/core/services/products/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    
  @Input() public productInfo?: ProductB;
  @Output() public OnDeleteProduct: EventEmitter<ProductB> = new EventEmitter()

  public deleteProduct(){
    this.OnDeleteProduct.emit(this.productInfo)
  }

}

// public productList: ProductB[] = [];

//   constructor(
//     private productService: ProductsService) {}

//   public ngOnInit(): void {
    
//     this.productService.getProducts().subscribe((data: ProductB[]) => {
//       console.log(data);
//       this.productList = [...data]; });
//     }