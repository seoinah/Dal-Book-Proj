package com.book.dalant.service.dto;

import com.book.dalant.constants.CategoryConstant;
import com.book.dalant.domain.CategoryEntity;
import com.book.dalant.domain.SubCategoryEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class CategoryDTO {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Category extends AbstractAuditingDTO.Default {
        private String categoryId;
        private String categoryName;
        private CategoryConstant.CategoryType categoryType;

        public Category(CategoryEntity categoryEntity) {
            this.categoryId = categoryEntity.getCategoryId();
            this.categoryName = categoryEntity.getCategoryName();
            this.categoryType = categoryEntity.getCategoryType();
            this.createdBy = categoryEntity.getCreatedBy();
            this.createdDt = categoryEntity.getCreatedDt();
            this.updatedBy = categoryEntity.getUpdatedBy();
            this.updatedDt = categoryEntity.getUpdatedDt();
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class SubCategory extends AbstractAuditingDTO.Default {
        private String subCategoryId;
        private String subCategoryName;
        private String subCategoryDesc;
        private boolean isUserType;

        public SubCategory(SubCategoryEntity subCategoryEntity) {
            this.subCategoryId = subCategoryEntity.getSubCategoryId();
            this.subCategoryName = subCategoryEntity.getSubCategoryName();
            this.subCategoryDesc = subCategoryEntity.getSubCategoryDesc();
            this.isUserType = subCategoryEntity.isUserTypeYn();
            this.createdBy = subCategoryEntity.getCreatedBy();
            this.createdDt = subCategoryEntity.getCreatedDt();
            this.updatedBy = subCategoryEntity.getUpdatedBy();
            this.updatedDt = subCategoryEntity.getUpdatedDt();
        }
    }
}
