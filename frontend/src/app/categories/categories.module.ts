import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { MobileComponent } from './mobile/mobile.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MobileComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    AppRoutingModule
  ]
})
export class CategoriesModule { }
