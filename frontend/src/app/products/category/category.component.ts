import { Component } from '@angular/core';
import { Category } from 'src/app/datatype';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  categories: Category[] = [];


  constructor(public sellerService: SellerService) { }


  ngOnInit(): void {
    this.sellerService.findAllCategories().subscribe((data) => {
      this.categories = data;
    })
  }

}
