package com.store.backend.repository;

import com.store.backend.entity.Category;
//import com.store.backend.entity.Seller;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends CrudRepository<Category,Long> {
}
