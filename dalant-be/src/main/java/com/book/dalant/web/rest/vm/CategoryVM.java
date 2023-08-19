package com.book.dalant.web.rest.vm;

import com.book.dalant.constants.CategoryConstant;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class CategoryVM {
    
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Create {
        private String categoryName;
        private CategoryConstant.CategoryType categoryType;
    }
    
    @Getter
    @Setter
    @NoArgsConstructor
    public static class SubCreate {
        private String subCategoryName;
        private boolean isUserType;
        private String subCategoryDesc;
    }
    
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Update {
        private String categoryName;
    }
    
    @Getter
    @Setter
    @NoArgsConstructor
    public static class SubUpdate {
        private String subCategoryName;
        private String subCategoryDesc;
    }

    public static class Filter {
        private String key;
        private String value;

    }
}
