import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "src/environments/environment";
import { IProduct } from "../model/shop.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ProductsService {
    private readonly url = environment.url;
    private readonly http = inject(HttpClient);

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.url);
    }

    getProduct(productId: number): Observable<IProduct> {
        return this.http.get<IProduct>(`${this.url}/${productId}`);
    }

    updateProduct(product: IProduct): Observable<IProduct> {
        return this.http.put<IProduct>(this.url, product);
    }

    createProduct(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>(this.url, product)
    }

    deleteProduct(productId: number): Observable<null> {
        return this.http.delete<null>(`${this.url}/${productId}`);
    }
}