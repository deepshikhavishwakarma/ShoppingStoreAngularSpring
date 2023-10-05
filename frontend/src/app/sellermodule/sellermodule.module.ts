import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { RouterModule } from '@angular/router';
import { SellermoduleRoutingModule } from './sellermodule-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SellerproductComponent } from './sellerproduct/sellerproduct.component';
//import {SellerComponent } from './seller.component';



@NgModule({
  declarations: [
    // SellerLoginComponent,
    SellerLoginComponent,
    SellerSignupComponent,
    SellerDashboardComponent,
    SellerproductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SellermoduleRoutingModule, // Add the routing module to imports
    FormsModule,
    HttpClientModule
  ]
})
export class SellermoduleModule { }
