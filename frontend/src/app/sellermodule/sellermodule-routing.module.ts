import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerproductComponent } from './sellerproduct/sellerproduct.component';


const routes: Routes = [
  { path: 'sellerlogin', component: SellerLoginComponent },
  { path: 'sellersignup', component: SellerSignupComponent },
  { path: 'sellerdashboard', component: SellerDashboardComponent },
  { path: 'sellerproduct', component: SellerproductComponent },
  // Add more routes for additional components if needed
  { path: '', redirectTo: 'sellersignup', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellermoduleRoutingModule { }
