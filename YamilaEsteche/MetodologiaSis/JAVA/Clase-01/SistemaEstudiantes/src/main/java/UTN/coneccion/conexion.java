package UTN.coneccion;

import java.sql.Connection;
import java.sql.DriverManager;

public class conexion {
    public static Connection getConexion() {
        Connection connection = null;
        //Variables apra conectarnos
        var baseDatos = "estudiantes2022";
        var url = "jdbc:mysql://localhost:3306/" + baseDatos;
        var usuario = "root";
        var password = "root";

        //cargamos la clase del driver
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(url, usuario, password);
        } catch (Exception e) {
            System.out.println("OCurrio un error en la coneccion: " +e.getMessage() ); ;
        }
        return connection;
    }
}
