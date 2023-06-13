import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductB } from './products.models';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public URL = 'https://648444a2ee799e3216267233.mockapi.io/BeautyApp';
  
  constructor(private http: HttpClient) {}

  public getProducts(id: string): Observable<ProductB[]> {
    return this.http.get<ProductB[]>(`${this.URL}`);
  }
}
