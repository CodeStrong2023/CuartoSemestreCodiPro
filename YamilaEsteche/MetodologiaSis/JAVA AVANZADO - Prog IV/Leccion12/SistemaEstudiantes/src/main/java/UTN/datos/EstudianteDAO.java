package UTN.datos;
import UTN.dominio.Estudiante;
import com.mysql.cj.x.protobuf.MysqlxPrepare;
import org.w3c.dom.ls.LSOutput;

import static UTN.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class EstudianteDAO {
    //metodo listar:
    public List<Estudiante> listarEstudiantes(){
        List<Estudiante> estudiantes = new ArrayList<>();
        //Creamos algunos objetos para comunicarnos a la bd:
        PreparedStatement ps; //preparar la sentencia sql para ejecutar a la bd
        ResultSet rs; //almacena resultado obtenido de la bd
        //creamos objeto conexion:
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2024 ORDER BY idestudiantes2024";
        try{
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while(rs.next()){
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2024"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                //Lo agregamos a la lista:
                estudiantes.add(estudiante);
            }
        } catch (Exception e){
            System.out.println("Ocurrio un error al seleccionar datos: "+e.getMessage());
        }
        finally {
           try {
                con.close();
           } catch (Exception e){
               System.out.println("Ocurrio un error al cerrar la conexion: "+e.getMessage());
           }
        }//FIN FINALLY
        return estudiantes;
    }// FIN METODO 'LISTAR'

    //Metodo por id -> fin by id
    public boolean buscarEstudiantePorId(Estudiante estudiante){
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2024 WHERE idestudiantes2024=?";
        try{
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if(rs.next()){
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true;
            } //FIN IF
        } catch (Exception e){
            System.out.println("Ocurrio un error al buscar estudiante: "+e.getMessage());
        } //FIN CATCH
        finally {
            try{
                con.close();
            } catch (Exception e){
                System.out.println("Ocurrio un error al cerrar conexion: "+e.getMessage());
            } //FIN CATCH
        } //FIN FINALLY
        return false;
    }

    //Metodo agregar un nuevo estudiante
    public boolean agregarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "INSERT INTO estudiantes2024 (nombre, apellido, telefono, email) VALUES (?,?,?,?)";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return true;
        }catch(Exception e){
            System.out.println("Ocurrio un error al agregar estudiante: "+e.getMessage());
        }//Fin cath
        finally {
            try{
                con.close();
            }catch(Exception e){
                System.out.println("Error al cerror la conexion: "+e.getMessage());
            }
        }
        return false;
    }//Fin metodo agregarEstudiante

    //Metodo para modificar estudiante
    public boolean modificarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "UPDATE estudiantes2024 SET nombre=?, apellido=?, telefono=?, email=? WHERE idestudiantes2024=?";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1,estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3,estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setInt(5,estudiante.getIdEstudiante());
            ps.execute();
            return true;
        }catch(Exception e){
            System.out.println("Error al modificar el estudiante: "+e.getMessage());
        }//Fin catch
        finally {
            try{
                con.close();
            } catch (Exception e){
                System.out.println("Error al cerrar la conexion: "+e.getMessage());
            }//Fin catch
        }//Fin finally
        return false;
    }//Fin metodo modificarEstudiante

    public boolean eliminarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "DELETE FROM estudiantes2024 WHERE idestudiantes2024=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch(Exception e){
            System.out.println("Error al eliminar estudiante: " + e.getMessage());
        }
        finally {
            try{
                con.close();
            } catch (Exception e){
                System.out.println("Error al cerrar la conexion: " + e.getMessage());
            }
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); //Leo opciones y datos ingresados
        EstudianteDAO estudianteDao = new EstudianteDAO();
        int opcion;
        //ciclo para repetir hasta opcion 6
        do {
            System.out.println("\n*** Sistema de Estudiantes ***");
            System.out.println("1. Listar estudiantes");
            System.out.println("2. Buscar estudiante");
            System.out.println("3. Agregar estudiante");
            System.out.println("4. Modificar estudiante");
            System.out.println("5. Eliminar estudiante");
            System.out.println("6. Salir");
            System.out.print("Elige una opción: ");
            opcion = scanner.nextInt();

            switch (opcion) {
                case 1:
                    System.out.println("Listado de estudiantes: ");
                    List<Estudiante> estudiantes = estudianteDao.listarEstudiantes();
                    estudiantes.forEach(System.out::println);
                    break;

                case 2:
                    System.out.print("Ingresa el ID del estudiante a buscar: ");
                    int idBuscar = scanner.nextInt();
                    Estudiante estudianteBuscar = new Estudiante();
                    estudianteBuscar.setIdEstudiante(idBuscar);
                    if (estudianteDao.buscarEstudiantePorId(estudianteBuscar)) {
                        System.out.println("Estudiante encontrado: " + estudianteBuscar);
                    } else {
                        System.out.println("No se encontró el estudiante con ID: " + idBuscar);
                    }
                    break;

                case 3:
                    System.out.print("Ingresa el nombre del estudiante: ");
                    String nombre = scanner.next();
                    System.out.print("Ingresa el apellido del estudiante: ");
                    String apellido = scanner.next();
                    System.out.print("Ingresa el teléfono del estudiante: ");
                    String telefono = scanner.next();
                    System.out.print("Ingresa el email del estudiante: ");
                    String email = scanner.next();
                    Estudiante nuevoEstudiante = new Estudiante(nombre, apellido, telefono, email);
                    if (estudianteDao.agregarEstudiante(nuevoEstudiante)) {
                        System.out.println("Estudiante agregado: " + nuevoEstudiante);
                    } else {
                        System.out.println("No se ha agregado el estudiante.");
                    }
                    break;

                case 4:
                    System.out.print("Ingresa el ID del estudiante a modificar: ");
                    int idModificar = scanner.nextInt();
                    Estudiante estudianteModificar = new Estudiante();
                    estudianteModificar.setIdEstudiante(idModificar);
                    if (estudianteDao.buscarEstudiantePorId(estudianteModificar)) {
                        System.out.print("Ingresa el nuevo nombre: ");
                        estudianteModificar.setNombre(scanner.next());
                        System.out.print("Ingresa el nuevo apellido: ");
                        estudianteModificar.setApellido(scanner.next());
                        System.out.print("Ingresa el nuevo teléfono: ");
                        estudianteModificar.setTelefono(scanner.next());
                        System.out.print("Ingresa el nuevo email: ");
                        estudianteModificar.setEmail(scanner.next());
                        if (estudianteDao.modificarEstudiante(estudianteModificar)) {
                            System.out.println("Estudiante modificado: " + estudianteModificar);
                        } else {
                            System.out.println("No se ha podido modificar el estudiante.");
                        }
                    } else {
                        System.out.println("No se encontró el estudiante con ID: " + idModificar);
                    }
                    break;
                case 5:
                    System.out.print("Ingresa el ID del estudiante a eliminar: ");
                    int idEliminar = scanner.nextInt();
                    Estudiante estudianteEliminar = new Estudiante();
                    estudianteEliminar.setIdEstudiante(idEliminar);
                    if (estudianteDao.eliminarEstudiante(estudianteEliminar)) {
                        System.out.println("Estudiante eliminado: " + estudianteEliminar);
                    } else {
                        System.out.println("No se ha podido eliminar el estudiante.");
                    }
                    break;
                case 6:
                    System.out.println("Saliendo del sistema...");
                    break;
                default:
                    System.out.println("Opción no válida, intenta de nuevo.");
            }
        } while (opcion != 6);
    }
}


