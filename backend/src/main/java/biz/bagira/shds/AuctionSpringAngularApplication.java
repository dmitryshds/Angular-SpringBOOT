package biz.bagira.shds;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "biz.bagira.shds")
public class AuctionSpringAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuctionSpringAngularApplication.class, args);
	}
}
