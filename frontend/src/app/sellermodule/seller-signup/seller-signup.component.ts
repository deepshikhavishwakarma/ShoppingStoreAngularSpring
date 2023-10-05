import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.scss']
})
export class SellerSignupComponent {

constructor(private seller : SellerService, private router:Router){}


signUp(data:any):void{
  console.log(data); // for testing
  this.seller.sellerSignup(data).subscribe((result) => {
    // console.log(result);
    if(result){
      this.router.navigate(['sellerlogin']);
    }
  })
}

}
