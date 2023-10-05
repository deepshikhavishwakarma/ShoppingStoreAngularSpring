package com.store.backend.services;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.store.backend.entity.Cart;
import com.store.backend.entity.Orders;
import com.store.backend.repository.CartRepository;
@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private OrderService orderService;

    public Cart addToCart(Cart cart){
        return cartRepository.save(cart);
    }

    public long countTotalItemsInCart(Long userId) {
        return cartRepository.countByUserId(userId);
    }

    public Iterable<Cart> getCartProducts(Long userId){
        return cartRepository.findByUserId(userId);
    }

    public Iterable<Cart> getAllCartProducts(){
        return cartRepository.findAll();
    }

    public Iterable<Orders> checkout(Long userId, String shippingAddress, String pinCode) {
        Iterable<Cart> cartItems = cartRepository.findByUserId(userId);
        List<Orders> orders = new ArrayList<>();

        for (Cart cartItem : cartItems) {
            Orders order = new Orders();
            order.setUserId(userId);
            order.setThumbnailImg(cartItem.getThumbnailUrl());
            order.setProductName(cartItem.getProductName());
            order.setOrderDate(LocalDateTime.now());
            order.setQuantity(cartItem.getQuantity());
            order.setTotalPrice(BigDecimal.valueOf(cartItem.getPrice()).multiply(BigDecimal.valueOf(cartItem.getQuantity())));
            order.setShippingAddress(shippingAddress);
            order.setPinCode(pinCode);
            order.setStatus("PROCESSED");

            Orders savedOrder = orderService.createOrder(order);
            orders.add(savedOrder);

            cartRepository.delete(cartItem);
        }

        return orders;
    }

    public ResponseEntity<String> deleteCartItem(Long cartId) {
        if (cartRepository.existsById(cartId)) {
            cartRepository.deleteById(cartId);
            return ResponseEntity.ok("Success");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
