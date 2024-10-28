package UTN.datos;

import UTN.dominio.Estudiante;
import static UTN.coneccion.conexion.getConexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDAO {
    // método Listar
    public List<Estudiante> listarEstudiantes() {
        List<Estudiante> estudiantes = new ArrayList<>();
        // objetos para comunicarnos con la base de datos
        PreparedStatement ps;
        ResultSet rs;
        Connection conn = getConexion();
        String sql = "SELECT * FROM estudiantes2022 ORDER BY idestudiante2022";
        try {
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                var estudiante = new Estudiante();
                estudiante.setIdestudiantes(rs.getInt("idestudiantes2022"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));

                // agregar el objeto a la lista
                estudiantes.add(estudiante);
            }
        } catch (Exception e) {
            System.out.println("Ocurrio un error en la coneccion: " + e.getMessage());
        }
        finally {
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la coneccion: " + e.getMessage());
            }
        }
        return estudiantes;
    }
    // método por id
    public boolean buscarEstudiantrPorId(Estudiante estudiante){
        PreparedStatement ps;
        ResultSet rs;
        Connection conn = getConexion();
        String sql = "SELECT * FROM estudiantes2022 WHERE idestudiante2022 = ?";
        try {
            ps = conn.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdestudiantes());
            rs = ps.executeQuery();
            if (rs.next()) {
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true;
            }
        } catch (Exception e) {
            System.out.println("Ocurrio un error al buscar estudiante: " + e.getMessage());
        }
        finally {
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la coneccion: " + e.getMessage());
            }
        }
        return false;
    }
    // método agregar nuevo estudiante
    public boolean agregarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection conn = getConexion();
        String sql = "INSERT INTO estudiantes2022 (nombre, apellido, telefono, email) VALUES (?,?,?,?)";
        try {
            ps = conn.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.executeUpdate();
            return true;
        } catch (Exception e) {
            System.out.println("Ocurrio un error al agregar estudiante: " + e.getMessage());
        }
        finally {
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la coneccion: " + e.getMessage());
            }
        }
        return false;
    }

    // método actualizar estudiante
    public boolean modificarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection conn = getConexion();
        String sql = "UPDATE estudiantes2022 SET nombre = ?, apellido = ?, telefono = ?, email = ? WHERE idestudiante2022 = ?";
        try {
            ps = conn.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setInt(5, estudiante.getIdestudiantes());
            ps.executeUpdate();
            return true;
        } catch (Exception e) {
            System.out.println("Ocurrio un error al actualizar estudiante: " + e.getMessage());
        }
        finally {
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la coneccion: " + e.getMessage());
            }
        }
        return false;
    }

    public boolean eliminarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection conn = getConexion();
        String sql = "DELETE FROM estudiantes2022 WHERE idestudiante2022 = ?";
        try {
            ps = conn.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdestudiantes());
            ps.executeUpdate();
            return true;
        } catch (Exception e) {
            System.out.println("Ocurrio un error al eliminar estudiante: " + e.getMessage());
        }
        finally {
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la coneccion: " + e.getMessage());
            }
        }
        return false;
    }
    public static void main(String[] args) {
        var estudianteDAO = new EstudianteDAO();

        var nuevoEstudiante = new Estudiante("Carlos", "Lara", "12345678", "LAra@mail.com");
        var agregado = estudianteDAO.agregarEstudiante(nuevoEstudiante);
        if (agregado) {
            System.out.println("Estudiante agregado: " + nuevoEstudiante);
        } else {
            System.out.println("Estudiante no agregado: " + nuevoEstudiante);
        }

        // modificar estudiantes
        var estudainteModificado= new Estudiante(1, "Juan", "Juarez", "53453453478", "juan@mial.com");
        var modificado = estudianteDAO.modificarEstudiante(estudainteModificado);
        if (modificado) {
            System.out.println("Estudiante modificado: " + estudainteModificado);
        } else {
            System.out.println("Estudiante no modificado: " + estudainteModificado);
        }


        System.out.println(" Listado de estudiantes: ");
        List<Estudiante> estudiantes = estudianteDAO.listarEstudiantes();
        estudiantes.forEach(System.out::println);
        // agregar estudiante

        // eliminar estudiante con id 3
        var estudianteEliminar = new Estudiante(3);
        var eliminado = estudianteDAO.eliminarEstudiante(estudianteEliminar);
        if (eliminado) {
            System.out.println("Estudiante eliminado: " + estudianteEliminar);
        } else {
            System.out.println("Estudiante no eliminado: " + estudianteEliminar);
        }

        // buscar por id
        var estudiante1 = new Estudiante(1);
        System.out.println("estudaintes antes de la usqueda: " + estudiante1);
        var encontrado = estudianteDAO.buscarEstudiantrPorId(estudiante1);
        if (encontrado) {
            System.out.println("Estudiante encontrado: " + estudiante1);
        } else {
            System.out.println("Estudiante no encontrado: " + estudiante1.getIdestudiantes());
        }
    }

}