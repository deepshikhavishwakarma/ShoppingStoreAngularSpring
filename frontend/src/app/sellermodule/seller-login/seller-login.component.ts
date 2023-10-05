import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss']
})
export class SellerLoginComponent {
// signUp(arg0: any) {
// throw new Error('Method not implemented.');

  // constructor() {}

  // login(formData: any) {
  //   // Log the form data to the console (for demonstration purposes)
  //   console.log('Form data:', formData);

  //   // Here, you can call your Angular service to send the form data to the backend for login
  //   // Example: this.sellerService.loginSeller(formData);

  //   // Optionally, you can reset the form after submission
  //   // form.resetForm();
  // }
  constructor(private seller : SellerService, private router:Router){}


  signUp(data:any):void{
    console.log(data); // for testing
    this.seller.sellerLogin(data).subscribe((result) => {
      console.log(result);
      // this.isAuthenticated = result;
      console.log()
      if(result){
        this.router.navigate(['sellerdashboard']);
        this.seller.setSeller(result);
      }


    })
  }

}
