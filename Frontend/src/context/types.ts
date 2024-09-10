export type User = {
  rol: "paciente" | "medico" | "admin";
  nombre: string;
  apellido: string;
  email: string;
  genero: "Masculino" | "Femenino";
  fecha_nacimiento: string;
  nacionalidad: string;
  tipo_documento: "DNI" | "Pasaporte";
  nro_documento: number;
  telefono: string;
};

export type UserState = {
  authenticated: boolean;
  user?: User;
};
