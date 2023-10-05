package com.store.backend.services;

import com.store.backend.entity.Product;
import com.store.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Iterable<Product> getAllProduct(){
        return productRepository.findAll();
    }
    public Product getProductById(Long Id){
        return productRepository.findById(Id).orElse(null);  //not match then return null
    }
    public Iterable<Product> findByCategoryId(Long categoryId){
        return productRepository.findByCategoryId(categoryId);
    }
    
public Iterable<Product> getProdctBySellerId(Long sellerId){
    return productRepository.findBySellerId(sellerId);
 }
 
}
