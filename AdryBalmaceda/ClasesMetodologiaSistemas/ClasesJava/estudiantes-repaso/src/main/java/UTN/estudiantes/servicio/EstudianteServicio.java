package utn.estudiantes.servicio;

import utn.estudiantes.modelo.Estudiante;
import java.util.List;

public abstract  class EstudianteServicio implements IEstudianteServicio {
    public void agregarEstudiante(Estudiante estudiante) {
        // agregar estudiante
    }

    public void modificarEstudiante(Estudiante estudiante) {
        // modificar estudiante
    }

    public void eliminarEstudiante(Estudiante estudiante) {
        // eliminar estudiante
    }

    public Estudiante obtenerEstudiante(int id) {
        // obtener estudiante
        return null;
    }

    public List<Estudiante> obtenerEstudiantes() {
        // obtener estudiantes
        return null;
    }

    @Override
    public void guardarEstudiante(Estudiante estudiante) {
        // lógica para guardar estudiante
    }
}