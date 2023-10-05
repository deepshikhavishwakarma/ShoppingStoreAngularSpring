import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/datatype';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent implements OnInit{
  constructor(private userService: UserService, private orderService: OrderService, private router:Router){}
  data:any = {}
  orders:any = []
  notification:string = 'NO NEW NOTIFICATIONS';
  style:string = "success"


  ngOnInit(): void {
    this.data = this.userService.getUser();
    this.orderService.getOrdersByuserId(this.data.id).subscribe((result) => {
      this.orders = result;

      console.log(this.orders);
    })    
  }


  Update(data: User){
    console.log(data);
    this.userService.updateUser(data).subscribe((result) => {
      if(result){
        console.log(result);
        this.notification = "USER DETAILS UPDATED Login again to see the changes";
        this.style = "danger"
      }else{
        console.log("nothing")
      }
    })
  }

}
