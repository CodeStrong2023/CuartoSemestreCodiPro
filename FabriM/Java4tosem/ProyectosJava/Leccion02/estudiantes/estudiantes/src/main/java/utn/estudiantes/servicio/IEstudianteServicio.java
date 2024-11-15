package utn.estudiantes.servicio;

import utn.estudiantes.modelo.Estudiantes2023;

import java.util.List;

public interface IEstudianteServicio {
    public List<Estudiantes2023> listarEstudiantes();
    public Estudiantes2023 buscarEstudiantePorId(Integer idEstudiantes2023);
    public void guardarEstudiante(Estudiantes2023 estudiante);
    public void eliminarEstudiante(Estudiantes2023 estudiante);
}
