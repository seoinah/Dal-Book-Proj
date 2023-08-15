package com.book.dalant.domain;

import com.book.dalant.constants.CategoryConstant;
import com.book.dalant.repository.CategoryRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

@SpringBootTest
@Transactional
@Rollback(value = false)
class CategoryEntityTest {

    @Autowired
    private CategoryRepository categoryRepository;

    @Test
    public void createCategoryTest() throws Exception {
        CategoryEntity church = new CategoryEntity();
        church.setCategoryName("test-category");
        church.setCategoryType(CategoryConstant.CategoryType.INCOME);

        categoryRepository.save(church);
    }

}