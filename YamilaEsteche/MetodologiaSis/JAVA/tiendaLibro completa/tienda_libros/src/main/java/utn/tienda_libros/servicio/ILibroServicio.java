package utn.tienda_libros.servicio;

import utn.tienda_libros.modelo.Libro;

import java.util.List;
import java.util.Optional;

public interface ILibroServicio {

    public List<Libro> listarLibros();

    public Libro buscarLibroPorId(Integer idLibro);

    public void guardarLibro(Libro libro);

    public void eliminarLibro(Libro libro);

}
