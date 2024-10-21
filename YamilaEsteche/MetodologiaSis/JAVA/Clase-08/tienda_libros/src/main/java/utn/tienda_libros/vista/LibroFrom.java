package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;


@Component
public class LibroFrom extends JFrame {
    LibroServicio libroServicio;
    private JPanel panel;
    private JTable tablaLibros;
    private DefaultTableModel tablaModeloLibros;


    @Autowired
    public LibroFrom(LibroServicio libroServicio) {
        this.libroServicio = libroServicio;
        iniciarForma();
    }
    private void iniciarForma() {
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
        setSize(900, 700);
        //Para obtener las dimenciones de la pantalla
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        Dimension tamanioPantalla = toolkit.getScreenSize();
        int x = (tamanioPantalla.width - getWidth()/2);
        int y = (tamanioPantalla.height - getHeight()/2);
        setLocation(x, y);
    }

    private void createUIComponents() {
        this.tablaModeloLibros = new DefaultTableModel(0,5);
        String[] cabecera = {"Id", "Libro", "Autor", "Precio", "Stock"};
        this.tablaModeloLibros.setColumnIdentifiers(cabecera);
        // instanciar el objeto de jtable
        this.tablaLibros = new JTable(this.tablaModeloLibros);
        listarLibros();
    }
    private void listarLibros() {
        this.tablaModeloLibros.setRowCount(0);
        //obtener libros
       var libros = this.libroServicio.listarLibros();
        //llenar la tabla
        libros.forEach(libro -> {
            Object[] renglonLibro = {libro.getId(), libro.getNombreLibro(), libro.getAutor(), libro.getPrecio(), libro.getExistencias()};
            this.tablaModeloLibros.addRow(renglonLibro);
        });
    }
}
