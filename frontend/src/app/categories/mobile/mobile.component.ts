import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {
  constructor(private productService : ProductService){}

  mobiles:any = {}

  ngOnInit(): void {
      this.productService.getProducts(1).subscribe((data) => {
        this.mobiles = data;
        console.log(this.mobiles);
      })
  }
}
