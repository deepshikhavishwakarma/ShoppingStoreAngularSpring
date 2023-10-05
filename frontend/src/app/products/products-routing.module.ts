import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';
import { CartPageComponent } from './cart-page/cart-page.component';


const routes: Routes = [
  { path: 'categories', component: CategoryComponent},
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'products', component: ProductComponent },
  { path: 'cartPage', component: CartPageComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleNameRoutingModule {}
