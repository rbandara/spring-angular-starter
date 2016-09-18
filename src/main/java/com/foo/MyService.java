package com.foo;

import org.springframework.stereotype.Service;

@Service
public class MyService {
    public Domain getData(Long id) {
        System.out.println("request received ");
        return new Domain(id == null ? 0 : id + 1, "foo");
    }
}
