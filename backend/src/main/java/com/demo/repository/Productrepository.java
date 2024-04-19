
package com.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.demo.model.Product;
@Repository
public interface Productrepository extends JpaRepository<Product,Integer>
{
}