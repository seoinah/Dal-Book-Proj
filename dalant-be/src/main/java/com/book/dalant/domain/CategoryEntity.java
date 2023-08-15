package com.book.dalant.domain;

import com.book.dalant.constants.CategoryConstant;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class CategoryEntity extends AbstractAuditingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "CATEGORY_ID", columnDefinition = "VARCHAR(100)", nullable = false, length = 100)
    private String categoryId;

    @Column(name = "CATEGORY_NAME", length = 100, nullable = false)
    private String categoryName;

    @Enumerated(EnumType.STRING)
    @Column(name = "CATEGORY_TYPE", length = 10, nullable = false)
    private CategoryConstant.CategoryType categoryType;

}
