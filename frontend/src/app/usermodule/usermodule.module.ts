import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsermoduleRoutingModule } from './usermodule-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserloginComponent } from './userlogin/userlogin.component';

import { AppRoutingModule } from '../app-routing.module';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';



@NgModule({
  declarations: [
    UsersignupComponent,
    UserloginComponent,
    UserdashboardComponent,
  ],
  imports: [
    CommonModule,
    UsermoduleRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    
  ]
})
export class UsermoduleModule { }
