import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-sellerproduct',
  templateUrl: './sellerproduct.component.html',
  styleUrls: ['./sellerproduct.component.scss']
})
export class SellerproductComponent {
  constructor(private productservice : ProductService, private sellerservice:SellerService){}
  products: any[] = [];
  seller:any = {}
  ngOnInit(): void {
    this.seller = this.sellerservice.getSeller();
    this.productservice.getProductsBySellerId(this.seller.id).subscribe((result) => {
      this.products = result;
    })
  }

}
