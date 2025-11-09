package com.Stuart.e_commerce_backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.Stuart.e_commerce_backend.CartItem;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    // Optional: Add custom queries if needed

}