import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerDashboardComponent } from './sellermodule/seller-dashboard/seller-dashboard.component';
import { SellerLoginComponent } from './sellermodule/seller-login/seller-login.component';
import { SellerSignupComponent } from './sellermodule/seller-signup/seller-signup.component';

import { CategoryComponent } from './products/category/category.component';
import { UserloginComponent } from './usermodule/userlogin/userlogin.component';
import { UsersignupComponent } from './usermodule/usersignup/usersignup.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './products/product-page/product-page.component';
import { SellerproductComponent } from './sellermodule/sellerproduct/sellerproduct.component';
import { ProductComponent } from './products/product/product.component';
import { CartPageComponent } from './products/cart-page/cart-page.component';
import { UserdashboardComponent } from './usermodule/userdashboard/userdashboard.component';
import { MobileComponent } from './categories/mobile/mobile.component';

// const routes: Routes = [];
const routes: Routes = [
  // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

  { path: 'sellerdashboard', component:SellerDashboardComponent }, // Default route
  { path: 'sellerlogin', component:SellerLoginComponent }, // Default route
  { path: 'sellerproduct', component: SellerproductComponent },
  { path: 'sellersignup', component:SellerSignupComponent }, // Default route
  { path: 'categories', component:CategoryComponent }, // Default route
  { path: 'UserLogin', component:UserloginComponent }, // Default route
  { path: 'UserSignup', component: UsersignupComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'products', component: ProductComponent },
  { path: 'cartPage', component: CartPageComponent },
  { path: 'Userdashboard', component: UserdashboardComponent},
  { path: 'mobiles', component: MobileComponent},
  
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }





