import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../model/shop.model';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<IProduct>, key: string, isAsc: boolean) {
    if (isAsc)
      return array.sort((a, b) => a.price - b.price);

  }

}
