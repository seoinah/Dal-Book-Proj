package com.book.dalant.repository;

import com.book.dalant.domain.SubCategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubCategoryRepository extends JpaRepository<SubCategoryEntity, String> {
}
