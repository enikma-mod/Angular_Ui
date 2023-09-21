import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable'
import { Product } from '../Interface/product';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createProduct(productData: any): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/api/products/create`, productData);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/api/products`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/api/products/${id}`);
  }

  getProductByName(name: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/api/products/findByName?plant_Name=${name}`);
  }

  updateProduct(id: string, productData: any): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/api/products/${id}`, productData);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/api/products/${id}`);
  }

  // getAllPublishedProducts(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/api/products/findAllPublished`);
  // }
}
