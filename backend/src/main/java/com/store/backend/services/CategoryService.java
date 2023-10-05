package com.store.backend.services;

import com.store.backend.entity.Category;
import com.store.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public Category saveCategory(Category category){
        return categoryRepository.save(category);
    }

    public Iterable<Category> getAllCategory(){
        return categoryRepository.findAll();    //return whole table
    }

}
