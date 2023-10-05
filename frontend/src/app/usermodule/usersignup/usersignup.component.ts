import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/datatype';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.scss']
})
export class UsersignupComponent {
  constructor(private userService: UserService, private router:Router) { }


  signUp(data:User):void{
    console.log(data);
    if(data.username!= "" && data.password!="" && data.email!= ""){
      this.userService.registerUser(data).subscribe((result) => {
        if(result){
          alert("User registered.")
          this.router.navigate(['UserLogin']);
        }
      })
    }
    
  }


}
