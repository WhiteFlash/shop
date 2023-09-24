import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/model/shop.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartObservableService {
  url = environment.url;
  http = inject(HttpClient);

  getCartItems = (): Observable<IProduct[]> => this.http.get<IProduct[]>(this.url);
  updateCartItem = (item: IProduct): Observable<IProduct> => this.http.put<IProduct>(`${this.url}/${item.id}`, item);
  createCartItem = (item: IProduct): Observable<IProduct> => this.http.post<IProduct>(this.url, item);
  deleteCartItem = (id: NonNullable<IProduct["id"]>): Observable<unknown> => this.http.delete(`${this.url}/${id}`);
}
