package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.Estudiantes2024;

public interface EstudianteRepositorio extends JpaRepository<Estudiantes2024, Integer> {
}
