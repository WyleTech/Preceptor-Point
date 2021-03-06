package com.SquirrelMaster.preceptor_point_website;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class PreceptorPointWebsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(PreceptorPointWebsiteApplication.class, args);
	}

}
