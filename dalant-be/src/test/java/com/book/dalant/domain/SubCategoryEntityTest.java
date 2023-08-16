package com.book.dalant.domain;

import com.book.dalant.constants.CategoryConstant;
import com.book.dalant.repository.CategoryRepository;
import com.book.dalant.repository.SubCategoryRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

@SpringBootTest
@Transactional
@Rollback(value = false)
class SubCategoryEntityTest {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Test
    public void createSubCategoryTest() {
        SubCategoryEntity subCategory = new SubCategoryEntity();
        subCategory.setSubCategoryName("test-sub-category");
        subCategory.setUserTypeYn(true);

        CategoryEntity church = new CategoryEntity();
        church.setCategoryName("test-category");
        church.setCategoryType(CategoryConstant.CategoryType.INCOME);
        CategoryEntity category = categoryRepository.save(church);
        subCategory.setCategory(category);

        subCategoryRepository.save(subCategory);
    }
}