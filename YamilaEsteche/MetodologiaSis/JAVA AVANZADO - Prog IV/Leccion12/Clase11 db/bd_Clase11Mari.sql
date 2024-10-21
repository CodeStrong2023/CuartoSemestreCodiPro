-- Comenzamos con CRUD: CREATE (insertar), READ (leer), UPDATE(actualizar), DELETE (eliminar)
-- Listar los estudiantes:
SELECT * FROM estudiantes.estudiantes2024;
-- Insertar estudiante:
INSERT INTO estudiantes.estudiantes2024 (nombre, apellido, telefono, email) VALUES ("Juan","Perez", "23456789", "jperez@kmail.com");
-- update (modificar):
UPDATE estudiantes.estudiantes2024 SET nombre="Juan Carlos", apellido="Garcia" WHERE idestudiantes2024= 1;
-- Delete (eliminar):
DELETE FROM estudiantes.estudiantes2024 WHERE idestudiantes2024=2;
-- Para modificar el idestudiantes2024 (reiniciarlo):
ALTER TABLE estudiantes.estudiantes2024 AUTO_INCREMENT = 1;