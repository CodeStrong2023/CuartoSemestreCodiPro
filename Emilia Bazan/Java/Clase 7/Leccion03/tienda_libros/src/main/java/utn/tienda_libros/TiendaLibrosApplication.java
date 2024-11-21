package utn.tienda_libros;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;
import utn.tienda_libros.vista.LibroFrom;

import java.awt.EventQueue;

@SpringBootApplication
public class TiendaLibrosApplication {

	public static void main(String[] args) {

		ConfigurableApplicationContext contextoSrping =
				new SpringApplicationBuilder(TiendaLibrosApplication.class)
						.headless(false)
						.web(WebApplicationType.NONE)
						.run(args);
		//Ejecutamos el codigo para cargar el formularioo
		EventQueue.invokeLater(() -> { //Metodo Lambda
			//Obtenemos el objeto from a traves del spring
			LibroFrom libroFrom = contextoSrping.getBean(LibroFrom.class);
			libroFrom.setVisible(true);
		});
	}
}
