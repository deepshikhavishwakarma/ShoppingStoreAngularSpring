package com.store.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.store.backend.entity.Orders;
import com.store.backend.services.CartService;
import com.store.backend.services.OrderService;
@RestController
@RequestMapping("/Api/Orders")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private CartService cartService;

    @CrossOrigin
    @GetMapping("/getOrdersByUserId/{userId}")
    public Iterable<Orders> getAllordersByUserId(@PathVariable Long userId){
        return orderService.getOrdersByUserId(userId);
    }

    @CrossOrigin
    @DeleteMapping("/removeFromCart/{id}")
    public ResponseEntity<String> removeFromCart(@PathVariable Long id){
        String result = String.valueOf(cartService.deleteCartItem(id));
//        System.out.println(result);
        if (result.contains("Success")) {
            return ResponseEntity.ok("Item removed successfully");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error removing item from cart");
        }
    }

}
