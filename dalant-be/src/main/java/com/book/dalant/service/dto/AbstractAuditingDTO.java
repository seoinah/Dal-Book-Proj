package com.book.dalant.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

public class AbstractAuditingDTO {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Default  {
        public String createdBy;
        public LocalDateTime createdDt;
        public String updatedBy;
        public LocalDateTime updatedDt;
    }
}
