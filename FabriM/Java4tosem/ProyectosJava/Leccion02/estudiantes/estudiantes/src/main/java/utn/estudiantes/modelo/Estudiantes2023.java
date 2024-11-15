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
//Boilerplate - Repetitivo
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Estudiantes2023 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idestudiantes2023;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;

    public Integer getIdestudiantes2023() {
        return idestudiantes2023;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
