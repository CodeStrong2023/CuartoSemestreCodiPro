package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.Estudiantes2023;

public interface EstudianteRepositorio extends JpaRepository<Estudiantes2023, Integer> {
}
