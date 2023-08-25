package com.book.dalant.web.rest;

import com.book.dalant.config.Constants;
import com.book.dalant.constants.CategoryConstant;
import com.book.dalant.service.CategoryService;
import com.book.dalant.web.rest.vm.CategoryVM;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@Tag(name = "항목 관리")
@RestController
@RequestMapping("/api/v1/category")
@RequiredArgsConstructor
public class CategoryController {
  
  private final CategoryService categoryService;
  
  @GetMapping
  @Operation(
          summary = "상위 항목 목록 조회",
          description = "상위 항목의 목록을 조회한다. \n\n" +
                  "* offset 파라미터 : 몇 번째 page 인지 \n\n" +
                  "   * ex) 0 \n\n" +
                  "* pageSize 파라미터 : page 크기 \n\n" +
                  "   * ex) 10 \n\n" +
                  "* categoryType 파라미터 : " +
                  "   * INCOME / SPENDING / (x) \n\n" +
                  "   * 파라미터 미전송 시에는 전체 조회 \n\n"
  )
  public Result getCategory(
          @RequestParam(defaultValue = "0") int offset,
          @RequestParam(defaultValue = "10") int pageSize,
          @RequestParam(required = false) CategoryConstant.CategoryType categoryType) {
    return Result.okWithPaging(categoryService.getCategory(offset, pageSize, categoryType));
  }
  
  @PostMapping
  @Operation(
    summary = "상위 항목 생성",
    description = "상위 항목을 생성한다. \n\n"
  )
  public Result createCategory(
          @RequestBody CategoryVM.Create categoryVm) {
    return Result.withMessage(
            Constants.CommonCode.CREATED,
            "Creation of category succeeded.",
            categoryService.createCategory(categoryVm));
  }
  
  @PutMapping("categoryId")
  @Operation(
          summary = "상위 항목 수정",
          description = "상위 항목을 수정한다. \n\n" +
                  "* 수정 가능한 항목 : categoryName \n\n" +
                  "* 수정 불가능한 항목 : categoryType \n\n"
  )
  public Result updateCategory(
          @PathVariable String categoryId,
          @RequestBody CategoryVM.Update categoryVm) {
    return Result.ok(categoryService.updateCategory(categoryId, categoryVm));
  }
  
  @DeleteMapping("{categoryId}")
  @Operation(
          summary = "상위 항목 삭제",
          description = "상위 항목을 삭제한다. \n\n" +
                  "* custom error code: 하위 항목이 존재하는 경우\n\n" +
                  "   ``` \n\n" +
                  "   {\n" +
                  "     \"code\": \"1003\",\n" +
                  "     \"message\": \"SubCategory exists\",\n" +
                  "     \"status\": 424,\n" +
                  "     \"data\": null\n" +
                  "   }\n\n" +
                  "   ```\n\n"
  )
  public Result deleteCategory(@PathVariable String categoryId) {
    return Result.ok(categoryService.deleteCategory(categoryId));
  }
  
}
