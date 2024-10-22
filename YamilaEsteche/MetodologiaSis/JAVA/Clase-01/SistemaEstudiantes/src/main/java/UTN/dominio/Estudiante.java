package UTN.dominio;

public class Estudiante {
    private int idestudiantes;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;

    public Estudiante() {
    }

    public Estudiante(int idEstudiante) {
        this.idestudiantes = idEstudiante;
    }
    public Estudiante(String nombre, String apellido, String telefono, String email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }

    public Estudiante(int idEstudiante, String nombre, String apellido, String telefono, String email) {
        this.idestudiantes = idEstudiante;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }

    public int getIdestudiantes() {
        return idestudiantes;
    }

    public void setIdestudiantes(int idestudiantes) {
        this.idestudiantes = idestudiantes;
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

    @Override
    public String toString() {
        return "Estudiante{" +
                "id=" + idestudiantes +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", telefono='" + telefono + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
