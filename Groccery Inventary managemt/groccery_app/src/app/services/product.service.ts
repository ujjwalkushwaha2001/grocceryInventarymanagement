import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../../data';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct() {
    return this.http.get<product[]>('http://localhost:3000/products')
  }
  saveproduct(data: product) {
    return this.http.post<product>("http://localhost:3000/products", data).pipe(map((res: product) => {
      return res;
    }))
  }
}
