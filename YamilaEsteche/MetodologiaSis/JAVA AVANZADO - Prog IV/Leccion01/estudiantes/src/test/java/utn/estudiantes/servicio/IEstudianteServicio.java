package utn.estudiantes.servicio;

import utn.estudiantes.modelo.Estudiante;

import java.util.List;

public interface IEstudianteServicio {
    public abstract List<Estudiante> listarEstudiantes();
    public abstract Estudiante buscarEstudiantePorID(Integer idEstudiante);
    public abstract void guardarEstudiante(Estudiante estudiante);
    public abstract void eliminarEstudiante(Estudiante estudiante);
}
