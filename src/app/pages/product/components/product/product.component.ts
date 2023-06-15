import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductB } from 'src/app/core/services/products/products.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() public Product?: ProductB;
  @Output() public onSelectProduct: EventEmitter<ProductB> = new EventEmitter();

  public selectProduct() {
    this.onSelectProduct.emit(this.Product);
  }
}
