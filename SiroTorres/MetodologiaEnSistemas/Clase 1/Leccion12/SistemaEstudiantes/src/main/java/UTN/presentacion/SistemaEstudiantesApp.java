package UTN.presentacion;

import UTN.conexion.Conexion;
import UTN.datos.EstudianteDAO;
import UTN.dominio.Estudiante;
import org.w3c.dom.ls.LSOutput;

import javax.lang.model.SourceVersion;
import java.sql.SQLOutput;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class SistemaEstudiantesApp {
    public static void main(String[] args) {
        var salir = false;
        var consola = new Scanner(System.in);//Para leer informacion de la consola
        //Se crea una instancia de la clase servicio, esto lo hacemos fuera del ciclo
        var estudianteDao = new EstudianteDAO();//Esta instancia debe hacerse una vez
        while (!salir) {
            try {
                mostrarMenu(); //Mostramos el menu
                //Este sera el metodo ejecutarOpciones que devolvera un booleano
                salir = ejecutarOpciones(consola, estudianteDao); //Este arroja una excepcion
            } catch (Exception e) {
                System.out.println("Ocurrio un error al ejecutar la operacion: " + e.getMessage());
            }
        }//Fin while
    }//Fn Main

    public static void mostrarMenu() {
        System.out.print("""
                ****Sistema de estudiantes****
                1. Listar Estudiantes
                2. Buscar Estudiantes
                3. Agregar Estudiantes
                4. Modificar Estudiantes
                5. Eliminar Estudiante
                6. Salir
                Elige una opcion: 
                """);
    }

    //Metodo para ejecutar las opciones, va a regresar un valor booleano, ya que es el que
    //puede modificar el valor de la variable salir, si es verdadero termina el ciclo while
    private static boolean ejecutarOpciones(Scanner consola, EstudianteDAO estudianteDao) {
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion) {
            case 1 -> {//Listar estudiantes
                System.out.println("Listado de Estudiantes...");
                //No muestra la informacion, solo recupera la info y regresa una lista
                var estudiantes = estudianteDao.listarEstudiantes();//Recibe el listado
                //vamos a iterar cada objeto de tipo estudiante
                estudiantes.forEach(System.out::println);//Para imprimir la lista
            }//Fin caso 1
            case 2 -> { //Buscar estudiante por id
                System.out.println("Introduce el id_estudiante a buscar: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var encontrado = estudianteDao.buscarEstudiantePorId(estudiante);
                if (encontrado)
                    System.out.println("Estudiante encontrado: " + estudiante);
                else
                    System.out.println("Estudiante NO encontrado: " + estudiante);
            }//Fin caso 2
            case 3 -> { //Agregar estudiante
                System.out.println("Agregar estudiante: ");
                System.out.println("Nombre: ");
                var nombre = consola.nextLine();
                System.out.println("Apellido: ");
                var apellido = consola.nextLine();
                System.out.println("Telefono: ");
                var telefono = consola.nextLine();
                System.out.println("Email: ");
                var email = consola.nextLine();
                //Crear objeto estudiante(sin id)
                var estudiante = new Estudiante(nombre, apellido, telefono, email);
                var agregado = estudianteDao.agregarEstudiante(estudiante);
                if (agregado)
                    System.out.println("Estudiante agregado: " + estudiante);
                else
                    System.out.println("Estudiante NO agregado: " + estudiante);
            }//Fin caso 3
            case 4 -> { //Modificar estudiante
                System.out.println("Modificar estudiante: ");
                //Aqui lo primeroo es especificar cual es el id del objeto a modificar
                System.out.println("Id Estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                System.out.println("Nombre: ");
                var nombre = consola.nextLine();
                System.out.println("Apellido: ");
                var apellido = consola.nextLine();
                System.out.println("Telefono: ");
                var telefono = consola.nextLine();
                System.out.println("Email: ");
                var email = consola.nextLine();
                //Crea el objeto estudiante a modificar
                var estudiante =
                        new Estudiante(idEstudiante, nombre, apellido, telefono, email);
                var modificado = estudianteDao.modificarEstudiante(estudiante);
                if (modificado)
                    System.out.println("Estudiante modificado: " + estudiante);
                else
                    System.out.println("Estudiante NO modificado: " + estudiante);
            }//Fin caso 4
            case 5 -> { //Eliminar estudiante
                System.out.println("Eliminar estudiante: ");
                System.out.println("Id estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var eliminado = estudianteDao.eliminarEstudiante(estudiante);
                if (eliminado)
                    System.out.println("Estudiante eliminado: " + estudiante);
                else
                    System.out.println("Estudiante NO eliminado: " + estudiante);
            }//Fin caso 5
            case 6 -> { //Salir
                System.out.println("Hasta pronto!!!");
                salir = true;
            }//Fin caso 6
            default -> System.out.println("Opcion no reconocida, ingrese otra opcion");
        }//Fin switch
        return salir;
    }
}//Fin clase