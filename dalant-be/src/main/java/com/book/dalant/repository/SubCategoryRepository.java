package com.book.dalant.repository;

import com.book.dalant.domain.CategoryEntity;
import com.book.dalant.domain.SubCategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubCategoryRepository extends JpaRepository<SubCategoryEntity, String> {
  List<SubCategoryEntity> findAllByCategory(CategoryEntity category);
  
  boolean existsByCategory(CategoryEntity category);
}
