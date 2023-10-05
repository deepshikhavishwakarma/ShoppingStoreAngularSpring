package com.store.backend.controller;

import com.store.backend.entity.Cart;
import com.store.backend.entity.CheckoutRequest;
import com.store.backend.entity.Orders;
import com.store.backend.entity.Product;
import com.store.backend.services.CartService;
import com.store.backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController // for restApi,,, To tell the compiler it's a rest controller
@RequestMapping("/Api/Products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    private CartService cartService;

    @CrossOrigin
    @GetMapping("/getAllProduct")
    public Iterable<Product> getAllProduct() {
        return productService.getAllProduct();
    }

    @CrossOrigin
    @GetMapping("/FindByCategoryId/{Id}")
    public Iterable<Product> FindByCategoryId(@PathVariable Long Id) {
        return productService.findByCategoryId(Id);
    }

    @CrossOrigin
    @GetMapping("/FindByProductId/{Id}")
    public Product FindByProductId(@PathVariable Long Id) {
        return productService.getProductById(Id);
    }

    @CrossOrigin
    @PostMapping("/addToCart")
    public Cart addTocart(@RequestBody Cart cart) {
        return cartService.addToCart(cart);
    }

    @CrossOrigin
    @GetMapping("/getCartSize/{userId}")
    public long geCartSize(@PathVariable Long userId) {
        return cartService.countTotalItemsInCart(userId);
    }

    @CrossOrigin
    @GetMapping("/getCart/{userId}")
    public Iterable<Cart> getCartItems(@PathVariable Long userId) {
        return cartService.getCartProducts(userId);
    }

    @CrossOrigin
    @GetMapping("/getAllCarts")
    public Iterable<Cart> getAllCarts() {
        return cartService.getAllCartProducts();
    }

    @CrossOrigin
    @PostMapping("/checkout")
    public Iterable<Orders> checkout(@RequestBody CheckoutRequest checkoutRequest) {
        Long userId = checkoutRequest.getUserId();
        String shippingAddress = checkoutRequest.getShippingAddress();
        String pinCode = checkoutRequest.getPinCode();

        return cartService.checkout(userId, shippingAddress, pinCode);
    }

    @CrossOrigin
    @GetMapping("/GetProductsBySellerId/{id}")
    public Iterable<Product> getProductBysellerId(@PathVariable Long id) {
        return productService.getProdctBySellerId(id);
    }

}

// controller call service call repository