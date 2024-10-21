package utn.estudiantes.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
//Boilerplate -> cogigo repetitivo (mas corto)

@Data //crea met get y set
@NoArgsConstructor //const sin arg
@AllArgsConstructor //cont con todos los arg
@ToString //to string

public class Estudiante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer idEstudiante;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
}
