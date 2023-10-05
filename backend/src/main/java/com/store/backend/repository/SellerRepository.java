package com.store.backend.repository;

import com.store.backend.entity.Seller;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepository extends CrudRepository<Seller,Long> {


    Seller findAllByUsername(String username);
}
