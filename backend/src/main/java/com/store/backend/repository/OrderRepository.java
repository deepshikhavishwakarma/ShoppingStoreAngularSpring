package com.store.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.store.backend.entity.Orders;

@Repository
public interface OrderRepository extends CrudRepository<Orders, Long> {
   Iterable<Orders> findByUserId(Long userId);
}
