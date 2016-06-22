package com.foo;

import org.springframework.stereotype.Service;

@Service
public class MyService {
    public Domain getData(Long id) {
        return new Domain(id, "foo");
    }
}
