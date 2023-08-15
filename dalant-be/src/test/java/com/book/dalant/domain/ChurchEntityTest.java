package com.book.dalant.domain;

import com.book.dalant.repository.ChurchRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

@SpringBootTest
@Transactional
@Rollback(value = false)
public class ChurchEntityTest {

    @Autowired
    private ChurchRepository churchRepository;

    @Test
    public void createChurchTest() throws Exception {
        String churchName = "test-church";

        ChurchEntity church = new ChurchEntity();
        church.setChurchName(churchName);

        churchRepository.save(church);
    }
}
