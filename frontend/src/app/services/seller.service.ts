import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private sellerDataKey = "sellerData";
  private isSellerAuthorisedKey = "authKey2"   //for session implementation 

  constructor(private http:HttpClient) { }
  isSellerAuthorised:boolean = false;

  sellerSignup(data:any){
    return this.http.post('http://localhost:8080/Api/Sellers/RegisterSeller', data);

  }
  sellerLogin(data:any){
    return this.http.post('http://localhost:8080/Api/Sellers/LoginSeller', data);
  }

  isAllowed = false;
  setSeller(seller: any){
    localStorage.setItem(this.sellerDataKey, JSON.stringify(seller));
    localStorage.setItem(this.isSellerAuthorisedKey, this.isAllowed.toString());

    if(seller) this.isAllowed = true;

    console.log('Seller is set');
    console.log(seller);
  }
  getSeller(): any | null {
    const sellerData = localStorage.getItem(this.sellerDataKey);
    return sellerData ? JSON.parse(sellerData) : null;
  }

  getValidation(): boolean{
    const auth = localStorage.getItem(this.isSellerAuthorisedKey);
    return auth ? true:false;
  }

  clearSeller(){
    localStorage.removeItem(this.sellerDataKey);
    localStorage.removeItem(this.isSellerAuthorisedKey);
    this.isAllowed = false;
    console.log('user data cleared');
  }

  addCategory(data: any ){
    return this.http.post("http://localhost:8080/Api/Sellers/AddCategory", data);
  }
  saveProduct(data:any){
    return this.http.post("http://localhost:8080/Api/Sellers/AddProduct", data)
  }

  findAllCategories(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8080/Api/Sellers/GetAllCategory")
  }


}
