package com.foo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @Autowired
    private MyService myService;

    @RequestMapping(value = "/data")
    public Domain getData(Long id) {
        return myService.getData(id);
    }
}
