import { filter } from 'rxjs'
import { Pipe, PipeTransform } from '@angular/core';
import { ProductB } from 'src/app/core/services/products/products.models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ProductB[], filterValue: string): ProductB[] {
    return value.filter((product) => product.product.toUpperCase().includes(filterValue.toUpperCase()))

  }

}
