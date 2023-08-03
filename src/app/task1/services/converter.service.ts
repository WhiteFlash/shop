import { Injectable } from '@angular/core';
import { Category } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  convertCategory(value: Category): string {
    switch (value) {
      case Category.Laptop:
        return 'Laptop'
      case Category.Phone:
        return 'Phone'
      case Category.Car:
        return 'Car'
    }
  }

  converIsAvaliable(value: boolean): string { return value ? 'Yes' : 'No'; }
}
