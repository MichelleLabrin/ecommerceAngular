import { ProductB } from 'src/app/core/services/products/products.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public URL = 'https://648444a2ee799e3216267233.mockapi.io/BeautyApp';
  
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<ProductB[]> {
    return this.http.get<ProductB[]>(`${this.URL}`);
  }

  public getProductsId(id: string): Observable<ProductB> {
    return this.http.get<ProductB>(`${this.URL}/${id}`);
  }

  public createProduct (product: ProductB): Observable<ProductB> {
    return this.http.post<ProductB>(`${this.URL}/`, product);
  }

public editProduct (id: string, body: ProductB): Observable<ProductB> {
  return this.http.put<ProductB>(`${this.URL}/${id}`, body);
}

public deleteProduct (id: string): Observable<ProductB> {
  return this.http.delete<ProductB>(`${this.URL}/${id}`);
}

}
