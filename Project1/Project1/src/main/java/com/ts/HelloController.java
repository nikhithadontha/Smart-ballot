package com.ts;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	@RequestMapping("hello")
	public String sayHello(){
		return "hello!!from HelloController";
	}
	
	@RequestMapping("welcome")
		public String Welcome(){
			return "Welcome to SpringBoot";
		}
	}