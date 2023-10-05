import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{
  Items: any = [];
  data:any = {};
  totalPrice: number = 0;

  userId = 0;
  shippingAddress = '';
  pinCode = '';


  constructor(private productService: ProductService, private userService: UserService, private orderService : OrderService){
    
  }

  updateAddress(shippingAddress: string){
    this.shippingAddress = shippingAddress;
  }

  updatePincode(pinCode: string){
    this.pinCode = pinCode;
  }

  

  orderStatus = 'YOU ARE ONE STEP AWAY';
  

  ngOnInit(): void {
      this.data = this.userService.getUser();

      this.productService.getCartItems(this.data.id).subscribe((result) => {
        this.Items = result;
        console.log(this.Items);
        this.calculateTotalPrice()

        render({
          id:'#payPalButtons',
          currency: 'INR',
          value: (this.totalPrice/50 + 50).toString(),
          onApprove: (details) =>{
            alert("Transaction Successful");
            this.checkout(this.userId, this.shippingAddress, this.pinCode);
          }
        })
      })

      this.userId = this.data.id;
  }

  calculateTotalPrice() {
    this.totalPrice = this.Items.reduce((acc:number, item:any) => acc + item.price * item.quantity, 0);
  }

  checkout(userId: number, shippingAddress: string, pinCode: string) {
    this.productService.checkout(userId, shippingAddress, pinCode).subscribe(
      (response) => {
        console.log('Checkout successful:', response);
        this.orderStatus = 'ORDER IS SUCCESSFULLY PLACED'
      },
      (error) => {
        console.error('Checkout error:', error);
        this.orderStatus = 'THERE WAS A ERROR PROCESSING YOUR REQUEST'
      }
    );
  }


  deleteFromCart(data:number){
    try{
      // console.log(data);  //this is working
      this.orderService.removeFromCart(data).subscribe((result) => {
        console.log(result);
      })
    }catch(error){
      console.log(error);
    }
  }

}
