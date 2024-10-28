package UTN.presentacion;


import UTN.datos.EstudianteDAO;
import UTN.dominio.Estudiante;

import java.util.Scanner;

public class SistemaEstudiantesApp {
    public static void main(String[] args) {
       var salir = false;
       var consola = new Scanner(System.in);

       var estudianteDao = new EstudianteDAO();

       while (!salir){
           try{
               mostrarMenu();
               salir = ejecutarOpcones(consola, estudianteDao);
           } catch (Exception e){
               System.out.println("Ocurrio un error: " + e.getMessage());
           }
       }
    }

    private static void mostrarMenu(){
        System.out.println("""
                ******** Sistema de Estudiantes ********
                1.Listar estudiantes
                2.Buscar estudiante
                3.Agregar estudiante
                4.Modificar estudiante
                5.Eliminar estudiante
                6.Salir
                Elige una opcion:
                """);

    }

    private static boolean ejecutarOpcones (Scanner consola, EstudianteDAO estudianteDAO){
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion){
            case 1:
                System.out.println("Listado de estudiantes");
                estudianteDAO.listarEstudiantes();
                break;
            case 2:
                System.out.println("Ingrese el id del estudiante a buscar: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var encontrado = estudianteDAO.buscarEstudiantrPorId(estudiante);
                if (encontrado){
                    System.out.println("Estudiante encontrado: " + estudiante);
                } else {
                    System.out.println("Estudiante no encontrado: " + idEstudiante);
                }
                break;
            case 3:
                System.out.println("Ingrese el nombre del estudiante: ");
                var nombre = consola.nextLine();
                System.out.println("Ingrese el apellido del estudiante: ");
                var apellido = consola.nextLine();
                System.out.println("Ingrese el telefono del estudiante: ");
                var telefono = consola.nextLine();
                System.out.println("Ingrese el email del estudiante: ");
                var email = consola.nextLine();
                var estudianteN = new Estudiante(nombre, apellido, telefono, email);
                var agregado = estudianteDAO.agregarEstudiante(estudianteN);
                if (agregado){
                    System.out.println("Estudiante agregado: " + estudianteN);
                } else {
                    System.out.println("Estudiante no agregado: " + estudianteN);
                }
                break;
            case 4:
                System.out.println("Ingrese el id del estudiante a modificar: ");
                var idModificar = Integer.parseInt(consola.nextLine());
                System.out.println("Ingrese el nombre del estudiante: ");
                var nombreM = consola.nextLine();
                System.out.println("Ingrese el apellido del estudiante: ");
                var apellidoM = consola.nextLine();
                System.out.println("Ingrese el telefono del estudiante: ");
                var telefonoM = consola.nextLine();
                System.out.println("Ingrese el email del estudiante: ");
                var emailM = consola.nextLine();
                var estudianteM = new Estudiante(nombreM, apellidoM, telefonoM, emailM);
                var modificado = estudianteDAO.modificarEstudiante(estudianteM);
                if (modificado){
                    System.out.println("Estudiante agregado: " + estudianteM);
                } else {
                    System.out.println("Estudiante no agregado: " + estudianteM);
                }
                break;
            case 5:
                System.out.println("Ingrese el id del estudiante a eliminar: ");
                var idEliminar = Integer.parseInt(consola.nextLine());
                var eliminado = new Estudiante(idEliminar);
                var eliminar = estudianteDAO.eliminarEstudiante(eliminado);
                if (eliminar){
                    System.out.println("Estudiante eliminado: " + eliminado);
                } else {
                    System.out.println("Estudiante no eliminado: " + eliminado);
                }
                break;
            case 6:
                salir = true;
                break;
            default:
                System.out.println("Opcion no valida");
        }
        return salir;
    }





}