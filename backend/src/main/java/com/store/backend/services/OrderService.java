package com.store.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.backend.entity.Orders;
import com.store.backend.repository.OrderRepository;
@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public Orders createOrder(Orders order){
        return orderRepository.save(order);
    }

    public Iterable<Orders> getOrdersByUserId(Long userId){
        return orderRepository.findByUserId(userId);
    }

}
