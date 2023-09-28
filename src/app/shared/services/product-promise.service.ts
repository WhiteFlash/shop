import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { IProduct } from '../model/shop.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductPromiseService {
  url = environment.url;
  http = inject(HttpClient)

  getProducts(): Promise<IProduct[]> {
    const request$ = this.http.get<IProduct[]>(this.url);
    return firstValueFrom(request$);
  }

  getProduct(id: NonNullable<IProduct["id"]>): Promise<IProduct> {
    const url = `${this.url}/${id}`;
    const request$ = this.http.get<IProduct>(url);
    return firstValueFrom(request$);
  }

  createProduct(item: IProduct): Promise<IProduct> {
    const request$ = this.http.post<IProduct>(this.url, item);
    return firstValueFrom(request$);
  }

  updateProduct(item: IProduct): Promise<IProduct> {
    const url = `${this.url}/${item.id}`;
    const request$ = this.http.put<IProduct>(url, item);
    return firstValueFrom(request$);
  }

  deleteProduct(item: IProduct): Promise<unknown> {
    const url = `${this.url}/${item.id}`;
    const request$ = this.http.delete(url);
    return firstValueFrom(request$);
  }
}
