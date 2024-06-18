package com.ts;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Product;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {

    @GetMapping("getProduct")
    public Product getProduct() {
        Product product = new Product();
        product.setProductId(101);
        product.setProductName("Laptop");
        product.setPrice(45000.00);

        return product;
    }

    @GetMapping("getProducts")
    public List<Product> getProducts() {
        List<Product> products = new ArrayList<>();

        Product product1 = new Product();
        product1.setProductId(102);
        product1.setProductName("Laptop");
        product1.setPrice(45000.00);
        products.add(product1);

        Product product2 = new Product();
        product2.setProductId(103);
        product2.setProductName("Mobile");
        product2.setPrice(25000.00);
        products.add(product2);

        Product product3 = new Product();
        product3.setProductId(104);
        product3.setProductName("Mouse");
        product3.setPrice(1500.00);
        products.add(product3);

        return products;
    }
}
