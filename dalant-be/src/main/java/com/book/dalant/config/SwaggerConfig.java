package com.book.dalant.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI() {
        Info info = new Info()
                .title("Dalant Book API Document")
                .version("v1.0")
                .description("달북 프로젝트 API 명세서");

        return new OpenAPI()
                .components(new Components())
                .info(info);
    }
}
