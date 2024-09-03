CREATE TABLE usuarios(
	nro_documento INTEGER PRIMARY KEY,
	nombre varchar(255) NOT NULL,
	apellido VARCHAR(255) NOT NULL,
	fecha_nacimiento varchar(20) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	password VARCHAR(100) NOT NULL,
	rol VARCHAR(50) NOT NULL CHECK (rol IN ('paciente', 'admin', 'medico')),
	nacionalidad VARCHAR(50) NOT NULL,
	tipo_documento VARCHAR(50) NOT NULL,
	telefono VARCHAR(15) NOT NULL,
	creadaEl VARCHAR(20) NOT NULL,
	actualizadaEl VARCHAR(20) NOT NULL

);

CREATE TABLE especialidades(
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(50),
	descripcion VARCHAR(100),
	creadaEl VARCHAR(20) NOT NULL,
	actualizadaEl VARCHAR(20) NOT NULL
);

CREATE TABLE medicos(
	id SERIAL PRIMARY KEY,
	usuario_id INTEGER REFERENCES usuarios(nro_documento),
	especialidad_id INTEGER REFERENCES especialidades(id),
	numero_registro INTEGER NOT NULL,
	creadaEl VARCHAR(20) NOT NULL,
	actualizadaEl VARCHAR(20) NOT NULL
);

CREATE TABLE pacientes(
	id SERIAL PRIMARY KEY,
	usuario_id INTEGER REFERENCES usuarios(nro_documento),
	direccion VARCHAR(50),
	creadaEl VARCHAR(20) NOT NULL,
	actualizadaEl VARCHAR(20) NOT NULL

);

CREATE TABLE admins(
	id SERIAL PRIMARY KEY,
	usuario_id INTEGER REFERENCES usuarios(nro_documento),
	creadaEl VARCHAR(20) NOT NULL,
	actualizadaEl VARCHAR(20) NOT NULL
);



/* INSERT TABLA USUARIOS */

INSERT INTO usuarios (nro_documento, nombre, apellido, fecha_nacimiento, email, password, rol, nacionalidad, tipo_documento, telefono, creadaEl, actualizadaEl)
VALUES
(123456789, 'Juan', 'Pérez', '12-07-1985', 'juan.perez@example.com', 'password123', 'medico', 'Argentino', 'DNI', '1234567890', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(987654321, 'Ana', 'Gómez', '23-05-1990', 'ana.gomez@example.com', 'password456', 'paciente', 'Chileno', 'RUT', '0987654321', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(192837465, 'Luis', 'Martínez', '02-11-1982', 'luis.martinez@example.com', 'password789', 'admin', 'Uruguayo', 'CI', '1122334455', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(564738291, 'Laura', 'Fernández', '15-08-1995', 'laura.fernandez@example.com', 'password012', 'paciente', 'Peruano', 'DNI', '2233445566', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(374829165, 'Carlos', 'Vargas', '30-12-1988', 'carlos.vargas@example.com', 'password345', 'medico', 'Boliviano', 'CI', '3344556677', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY'));



/* INSERT TABLA ESPECIALIDADES */

INSERT INTO especialidades (nombre, descripcion, creadaEl, actualizadaEl)
VALUES
('Cardiología', 'Especialidad en el corazón y sistema circulatorio', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
('Neurología', 'Especialidad en el sistema nervioso', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
('Pediatría', 'Especialidad en la salud infantil', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
('Dermatología', 'Especialidad en la piel', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
('Ginecología', 'Especialidad en el sistema reproductor femenino', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY'));



/* INSERT TABLE MEDICOS */

INSERT INTO medicos (usuario_id, especialidad_id, numero_registro, creadaEl, actualizadaEl)
VALUES
(123456789, 1, 1001, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(374829165, 2, 1002, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(564738291, 3, 1003, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(192837465, 4, 1004, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(987654321, 5, 1005, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY'));



/* INSERT TABLE PACIENTES */

INSERT INTO pacientes (usuario_id, direccion, creadaEl, actualizadaEl)
VALUES
(987654321, 'Calle Falsa 123', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(564738291, 'Avenida Siempre Viva 456', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(374829165, 'Boulevard del Río 789', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(192837465, 'Plaza Mayor 101', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(123456789, 'Ruta Nacional 500', TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY'));



/* INSERT TABLE ADMINS */

INSERT INTO admins (usuario_id, creadaEl, actualizadaEl)
VALUES
(192837465, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(987654321, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(123456789, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(374829165, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY')),
(564738291, TO_CHAR(NOW(), 'DD-MM-YYYY'), TO_CHAR(NOW(), 'DD-MM-YYYY'));