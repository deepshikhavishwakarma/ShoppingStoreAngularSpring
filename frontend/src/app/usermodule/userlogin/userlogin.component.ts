import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/datatype';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent {

  constructor(private userService: UserService, private router: Router) { }


  loginUser(data: UserLogin): void {
    console.log(data);
     // for testing
     this.userService.loginUser(data).subscribe((result) => {
      console.log(result);
      // console.log()

      if (result) {
        this.router.navigate(['Home']);
        this.userService.setUser(result)
        //alert("Login Successfully.")
      }
      else{
        alert("Please Fill Valid Data.")
      }
    })

}
}