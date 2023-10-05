package com.store.backend.services;

import com.store.backend.entity.Product;
import com.store.backend.entity.Seller;
import com.store.backend.repository.ProductRepository;
import com.store.backend.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class SellerService {
    @Autowired
    private SellerRepository sellerRepository;
    @Autowired
    private ProductRepository productRepository;
    public Seller saveseller(Seller seller){

        return sellerRepository.save(seller);
    }
    public  Seller ValidateSeller(Seller seller){
        Seller valid = sellerRepository.findAllByUsername(seller.getUsername());   //custom function
        if(Objects.equals(valid.getPassword(), seller.getPassword())){
            return valid;
        }else {
            return null;
        }
    }
    public Product createproduct(Product product){

        return productRepository.save(product);  //save->inbuilt fn insert into table
    }


}
