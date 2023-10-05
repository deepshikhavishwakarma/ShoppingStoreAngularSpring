import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProducts(data:number): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/Api/Products/FindByCategoryId/${data}`)
  }

  getAllProducts(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/Api/Products/getAllProduct`)
  }
  
  getProductById(data:number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/Api/Products/FindByProductId/${data}`)
  }

  addToCart(data:any):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/Api/Products/addToCart`, data)
  }

  getCartSize(data: number): Observable<number> {
    return this.http.get<number>(`http://localhost:8080/Api/Products/getCartSize/${data}`);
  }

  getCartItems(data: number): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/Api/Products/getCart/${data}`);
  }

  checkout(userId: number, shippingAddress: string, pinCode: string): Observable<any> {
    const checkoutRequest = {
      userId: userId,
      shippingAddress: shippingAddress,
      pinCode: pinCode,
    };

    return this.http.post<any>('http://localhost:8080/Api/Products/checkout', checkoutRequest);
  }

  getProductsBySellerId(data:number): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/Api/Products/GetProductsBySellerId/${data}`)
  }






}
