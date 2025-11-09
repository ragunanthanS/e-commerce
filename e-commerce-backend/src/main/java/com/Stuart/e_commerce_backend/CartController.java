package com.Stuart.e_commerce_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:5173")
public class CartController {

    @Autowired
    private CartItemRepository cartItemRepository;

    @PostMapping
    public CartItem addToCart(@RequestBody CartItem item) {
        return cartItemRepository.save(item);
    }

    @GetMapping
    public List<CartItem> getCartItems() {
        return cartItemRepository.findAll();
    }
}