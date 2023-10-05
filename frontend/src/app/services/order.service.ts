import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  getOrdersByuserId(data: number): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/Api/Orders/getOrdersByUserId/${data}`);
  }

  removeFromCart(data: number): Observable<string> {
    return this.http.delete<string>(`http://localhost:8080/Api/Orders/oveFromCart/${data}`);
  }



}
