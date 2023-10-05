import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

const routes: Routes = [
  { path: 'UserLogin', component: UserloginComponent },
  { path: 'UserSignup', component: UsersignupComponent },
 // { path: 'Userdashboard', component:  },
  // Add more routes for additional components if needed
  { path: '', redirectTo: 'sellersignup', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsermoduleRoutingModule { }
