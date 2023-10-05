import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{
  thumbnailUrl: string = ''
  productName: string = '';
  productId: number = 0;
  userId: number = 0;
  price: number = 0;
  quantity: number = 1;

  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private userService: UserService
  ) { }

  data: any = {}

  ngOnInit(): void {
    this.data = this.userService.getUser();

    this.route.params.subscribe(params => {
      const productId = +params['id'];
      if (!isNaN(productId)) {
        this.productService.getProductById(productId).subscribe(data => {
          this.product = data;
          console.log(this.product);
          this.thumbnailUrl = this.product.thumbnailUrl,
          this.productName = this.product.productName;
          this.price = this.product.price - this.product.discount;
          this.userId = this.data.id;
          this.productId = this.product.id;
        });
      }
    });

  }

  status = "CHECK THIS OUT";

  addToCart(cart: any): void {
    cart = {
      thumbnailUrl: this.thumbnailUrl,
      productName: this.productName,
      productId: this.productId,
      userId: this.userId,
      price: this.price,
      quantity: this.quantity
    }

    this.productService.addToCart(cart).subscribe((result) => {
      if (result) {
        console.log(result);
        this.status = "Product added to cart";
      }
    })

  }

}
