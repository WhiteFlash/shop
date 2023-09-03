import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../model/shop.model';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<IProduct>, key: string, isAsc: boolean): Array<IProduct> {
    switch (key) {
      case 'price':
        array.sort((a, b) => a.price - b.price);
        break;
      case 'name':
        array.sort();
        break;
      case 'quantity':
        array.sort((a, b) => a.quantity - b.quantity);
        break;
      default:
        array.sort();
    }

    if (!isAsc)
      array.reverse();

    return array;
  }

}
