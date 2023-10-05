package com.store.backend.repository;

import com.store.backend.entity.Product;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product,Long> {
    Iterable<Product> findByCategoryId(Long categoryId);

    Iterable<Product> findBySellerId(Long sellerId);
    
}
