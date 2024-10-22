package utn.estudiantes.servicio;

import utn.estudiantes.modelo.Estudiante;
import java.util.List;

public abstract  class EstudianteServicio implements IEstudianteServicio {
    public void agregarEstudiante(Estudiante estudiante) {
        // Agregar estudiante
    }

    public void modificarEstudiante(Estudiante estudiante) {
        // Modificar estudiante
    }

    public void eliminarEstudiante(Estudiante estudiante) {
        // Eliminar estudiante
    }

    public Estudiante obtenerEstudiante(int id) {
        // Obtener estudiante
        return null;
    }

    public List<Estudiante> obtenerEstudiantes() {
        // Obtener estudiantes
        return null;
    }

    @Override
    public void guardarEstudiante(Estudiante estudiante) {
        // Lógica para guardar estudiante
    }
}
