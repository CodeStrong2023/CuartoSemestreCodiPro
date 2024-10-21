package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.modelo.Estudiantes2024;
import utn.estudiantes.servicio.EstudianteServicio;

import java.util.List;
import java.util.Scanner;

@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner {

    @Autowired
    private EstudianteServicio estudianteServicio;
    private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);


    String nl = System.lineSeparator();

    public static void main(String[] args) {
        logger.info("Iniciando la aplicacion...");
        // Levantar la fabrica Spring
        SpringApplication.run(EstudiantesApplication.class, args);
        logger.info("Aplicacion Finalizada");
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info(nl + "Ejecutando el método run de Spring" + nl);
        var salir = false;
        var consola = new Scanner(System.in);
        while (!salir) {
            mostrarMenu();
            salir = ejecutarOpcion(consola);
            logger.info(nl);
        }// Fin ciclo while
    }

    private void mostrarMenu() {
//        logger.info(nl);
        logger.info("""
                ******* Sistema de estudiantes *********
                1. Listar estudiantes
                2. Buscar Estudiante
                3. Agregar Estudiante
                4. Modificar Estuciante
                5. Eliminar Estudiante
                6. Salir
                Elija una opcion: """);
    }

    private boolean ejecutarOpcion(Scanner consola) {
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion) {
            case 1 -> {// listar estudiantes
                logger.info(nl + "Listado de estudiantes: " + nl);
                List<Estudiantes2024> estudiantes = estudianteServicio.listarEstudiantes();
                estudiantes.forEach((estudiante -> logger.info((estudiante.toString() + nl))));
            }
            case 2 -> {//Buscar Estudiante por id
                logger.info("Digite el id estudiante a buscar: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                Estudiantes2024 estudiante =
                        estudianteServicio.buscarEstudiantePorId(idEstudiante);
                if (estudiante != null) {
                    logger.info("Estudiante encontrado: " + estudiante + nl);
                } else {
                    logger.info("Estudiante NO encontrado: " + estudiante + nl);
                }
            }
            case 3 -> {// Agregar Estudiantes
                logger.info("Agregar estudiante: " + nl);
                logger.info("Nombre: ");
                var nombre = consola.nextLine();
                logger.info("Apellido: ");
                var apellido = consola.nextLine();
                logger.info("Telefono: ");
                var telefono = consola.nextLine();
                logger.info("Email: ");
                var email = consola.nextLine();
                // Crear el objeto estudiante sin el id
                var estudiante = new Estudiantes2024();
                estudiante.setNombre(nombre);
                estudiante.setApellido(apellido);
                estudiante.setTelefono(telefono);
                estudiante.setEmail(email);
                estudianteServicio.guardarEstudiante(estudiante);
                logger.info("Estudiamte agregado: " + estudiante + nl);
            }
            case 4 -> {//Modificar Estuciante
                logger.info("Modificar estudiante: " + nl);
                logger.info("ingrese el id estudiante: ");
                var idEstudante = Integer.parseInt(consola.nextLine());
                // Buscamos el estudiante a modificar
                Estudiantes2024 estudiante =
                        estudianteServicio.buscarEstudiantePorId(idEstudante);
                if (estudiante != null) {
                    logger.info("Nombre: ");
                    var nombre = consola.nextLine();
                    logger.info("Apellido: ");
                    var apellido = consola.nextLine();
                    logger.info("Telefono: ");
                    var telefono = consola.nextLine();
                    logger.info("Email: ");
                    var email = consola.nextLine();
                    estudiante.setNombre(nombre);
                    estudiante.setApellido(apellido);
                    estudiante.setTelefono(telefono);
                    estudiante.setEmail(email);
                    estudianteServicio.guardarEstudiante(estudiante);
                    logger.info("Estudiante modificado: " + estudiante + nl);
                } else {
                    logger.info("Estudiante NO encontrado con el id: " + idEstudante + nl);
                }
            }
            case 5 -> {//Eliminar Estudiante
                logger.info("Eliminar estudiante: " + nl);
                logger.info("Digite el id estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                // buscamos el id estudiante a eliminar
                var estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
                if (estudiante != null) {
                    estudianteServicio.eliminarEstudiante(estudiante);
                    logger.info("Estudiante Eliminado: " + estudiante + nl);
                } else {
                    logger.info("Estudiante NO encontrado: " + idEstudiante + nl);
                }
            }
            case 6 -> {// Salir
                logger.info("Hsta pronto!" + nl + nl);
                salir = true;
            }
            default -> logger.info("Opcion no reconocida: " + opcion + nl);
        }//Fin switch
        return salir;
    }// Fin método ejecutar Opciones
}
