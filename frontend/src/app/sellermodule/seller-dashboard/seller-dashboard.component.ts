import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent {
  sellerId: number = 0;


  productName: string = "";
  productDescription: string = "";


  sellerName: string = "";
  sellerIdDisp: number = 0;
  categoryName: string = '';


  thumbnailUrl: string = '';
  imageUrl1: string = '';
  imageUrl2: string = '';
  imageUrl3: string = '';


  categoryId: number = 0;
  price: number = 0;
  discount: number = 0;
  stock: number = 0;


  categories: any[] = [];
  categoryThumbnail:string = '';
  categoryRoute: string = '';


  // sellerData: Seller = {};
  sellerData: any = {};


  constructor(public sellerService: SellerService, private router:Router) { }


  isAllowed = false;
  ngOnInit(): void {
    this.sellerData = this.sellerService.getSeller();


    this.sellerName = this.sellerData.username;
    this.sellerId = this.sellerData.id;
    this.isAllowed = this.sellerService.getValidation();


    this.sellerService.findAllCategories().subscribe((data) => {
      this.categories = data;
      // console.log(this.categories); // for testing
    })
  }


  isCategoryAdded = false;
  categoryAdditionCount = 0;


  createCategory(category: any): void {
    category = { categoryName: this.categoryName, categoryThumbnail: this.categoryThumbnail, categoryRoute: this.categoryRoute };


    this.sellerService.addCategory(category).subscribe((result) => {
      if (result) {
        this.isCategoryAdded = true;
        this.categoryAdditionCount++;
      } else {
        this.isCategoryAdded = false;
      }
    });
  }


  logout(): void {
    this.sellerService.clearSeller()
    this.router.navigate(['userSignup']);
  }


  isNewProductAdded = false;
  newProductCount = 0;


  submitProduct(product: any): void {
    product = {
      productName : this.productName,
      productDescription: this.productDescription,
      thumbnailUrl: this.thumbnailUrl,
      imageUrl1: this.imageUrl1,
      imageUrl2: this.imageUrl2,
      imageUrl3: this.imageUrl3,
      sellerId: this.sellerId,
      categoryId: this.categoryId,
      price: this.price,
      discount: this.discount,
      stock: this.stock
    }


    this.sellerService.saveProduct(product).subscribe((result) => {
      if(result){
        this.isNewProductAdded = true;
        this.newProductCount++;
      }
    })
  }

}
