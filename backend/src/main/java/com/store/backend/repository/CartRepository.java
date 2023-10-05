package com.store.backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.store.backend.entity.Cart;

public interface CartRepository extends CrudRepository<Cart, Long> {
   public Cart findByUserIdAndProductId(Long userId, Long productId);
   public long countByUserId(Long userId);


   Iterable<Cart> findByUserId(Long userId);
}

