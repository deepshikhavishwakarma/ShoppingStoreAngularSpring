import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{    
  constructor(private userService:UserService){}
  data:any = {};
  Verified = false;


  ngOnInit(): void {
      this.data = this.userService.getUser();
      console.log("home data");
      console.log(this.data);
      this.Verified = this.userService.getValidation();
  }



}
