package com.book.dalant.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 서비스 Properties
 * <p>
 * Properties are configured in the {@code application.yml} file.
 */
@Component
@Data
@ConfigurationProperties(prefix = "application")
public class ApplicationProperties {
  
  private String errorPage;

}
