package com.book.dalant.repository;

import com.book.dalant.domain.ChurchEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChurchRepository extends JpaRepository<ChurchEntity, String> {
}
