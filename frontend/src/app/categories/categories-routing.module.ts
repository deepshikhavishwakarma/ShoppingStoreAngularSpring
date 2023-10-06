import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { Routes } from '@angular/router';
import { ProductPageComponent } from '../products/product-page/product-page.component';
import { MobileComponent } from './mobile/mobile.component';


const routes: Routes = [
  { path: 'mobiles', component: MobileComponent},
  { path: 'product/:id', component: ProductPageComponent },
];
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CategoriesRoutingModule { }
