import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserLogin } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDataKey = 'userData';
  private isAuthorisedKey = "authKey"

  constructor(private http : HttpClient) { }

  registerUser(data: User) {
    console.log("Service data->" +data);
    return this.http.post("http://localhost:8080/Api/User/UserSignup", data);

  }

  loginUser(data: UserLogin) {
    return this.http.post("http://localhost:8080/Api/User/UserLogin", data);
  }

  isAllowed = false;

  setUser(user: any) {
    localStorage.setItem(this.userDataKey, JSON.stringify(user));
    localStorage.setItem(this.isAuthorisedKey, this.isAllowed.toString());

    if(user) this.isAllowed = true;

    console.log('User is set');
    console.log(user);
  }

  getUser(): User | null {
    const userData = localStorage.getItem(this.userDataKey);
    return userData ? JSON.parse(userData) : null;
  }

  getValidation():boolean{
    const auth = localStorage.getItem(this.isAuthorisedKey);
    return auth ? true : false;
  }

  clearUser() {
    localStorage.removeItem(this.userDataKey);
    localStorage.removeItem(this.isAuthorisedKey);
    this.isAllowed = false;
    console.log('User data cleared');
  }

  updateUser(data: any): Observable<any>{
    return this.http.post<any>("http://localhost:8080/Api/User/UserUpdate", data)
  }

}
