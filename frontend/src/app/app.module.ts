import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './dashboard/login/login.component';
import { SellermoduleModule } from './sellermodule/sellermodule.module';
import { HttpClientModule } from '@angular/common/http';

import { UsermoduleModule } from './usermodule/usermodule.module';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './products/product-page/product-page.component';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
//import { ProductsModule } from './products/products.module';


@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    //ProductPageComponent,
    // UserloginComponent,
    // UsersignupComponent,
    // UserdashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    SellermoduleModule,
    HttpClientModule,
    ProductsModule,
    UsermoduleModule,
    CategoriesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
