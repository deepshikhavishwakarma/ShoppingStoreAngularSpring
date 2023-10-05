package com.store.backend.controller;

import com.store.backend.entity.Category;
import com.store.backend.entity.Product;
import com.store.backend.entity.Seller;
import com.store.backend.services.CategoryService;
import com.store.backend.services.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Api/Sellers")
public class SellerController {
@Autowired
    private SellerService  sellerService;
@Autowired
    public CategoryService categoryService;
    @CrossOrigin
    @PostMapping("/RegisterSeller")
    public Seller RegisterSeller(@RequestBody Seller seller){
       return sellerService.saveseller(seller);
    }
    @CrossOrigin
    @PostMapping("/LoginSeller")
    public Seller LoginSeller(@RequestBody Seller seller){
        return sellerService.ValidateSeller(seller);
    }
    @CrossOrigin
    @PostMapping("/AddCategory")
    public Category AddCategory(@RequestBody Category category){
        return categoryService.saveCategory(category);
    }
    @CrossOrigin
    @GetMapping("/GetAllCategory")
    public  Iterable<Category> GetAllCategory(){
        return categoryService.getAllCategory();
    }
    @CrossOrigin
    @PostMapping("/AddProduct")
    public Product AddProduct(@RequestBody Product product){
        return sellerService.createproduct(product);
    }


}
