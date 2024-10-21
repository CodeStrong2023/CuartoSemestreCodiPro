package UTN.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static Connection getConnection(){
        Connection conexion = null;
        // Variables para conectarnos
        var baseDeDatos = "estudiantes";  // Nombre correcto de la base de datos
        var url = "jdbc:mysql://localhost:3306/" + baseDeDatos;
        var usuario = "root";
        var password = "123456";

        // Cargamos la clase del driver de MySQL en memoria
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");  // Nombre correcto del driver
            conexion = DriverManager.getConnection(url, usuario, password);
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println("Ocurrio un error en la conexion: " + e.getMessage());
        } // FIN CATCH
        return conexion;
    } // FIN METODO Connection
} // FIN CLASS Conexion
