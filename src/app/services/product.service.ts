import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 selectedProduct$ = new Observable();

  constructor(private http: HttpClient) { }

  getProducts() {
    const url = 'https://fakestoreapi.com/products'
    return this.http.get(url);
  }

  setProduct(item){
   this.selectedProduct$ = of(item);
  }

  getProduct(){
   return this.selectedProduct$;
   }

}
