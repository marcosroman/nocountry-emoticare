import { useForm } from "react-hook-form";
import FormInput from "../components/Form/FormInput";
import FormInputError from "../components/Form/FormInputError";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    values.rol = "paciente";
    console.log({ ...values });
    reset();
  });

  return (
    <main className="p-4 flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-blue-200 to-blue-500">
      <form
        className="shadow-lg grid md:grid-cols-2 max-w-5xl"
        onSubmit={onSubmit}
      >
        <section className="flex flex-col bg-white rounded-t-lg md:rounded-s-lg md:rounded-e-none ps-10 pe-10 py-10 gap-10">
          <h2 className="text-2xl mb-5 text-blue-600">Información General</h2>
          <div className="grid gap-10 md:grid-cols-2">
            <FormInput
              type="text"
              placeholder="Nombre"
              config={register("nombre", {
                required: {
                  value: true,
                  message: "Este campo es obligatorio",
                },
              })}
              classes="autofill:input-light-background"
            >
              {errors.nombre && (
                <FormInputError message={String(errors.nombre.message)} />
              )}
            </FormInput>

            <FormInput
              type="text"
              placeholder="Apellido"
              config={register("apellido", {
                required: {
                  value: true,
                  message: "Este campo es obligatorio",
                },
              })}
              classes="autofill:input-light-background"
            >
              {errors.apellido && (
                <FormInputError message={String(errors.apellido.message)} />
              )}
            </FormInput>
          </div>

          <div>
            <label className="grid gap-2 items-center">
              <select
                className="ps-1 pb-1 border-b-2 border-gray-200 text-black focus:outline-none focus:border-gray-300"
                {...register("genero", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio",
                  },
                  pattern: {
                    value: /^(masculino|femenino)$/,
                    message: "Seleccione uno de los dos géneros disponibles",
                  },
                })}
              >
                <option value="">Género</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>
            </label>
            {errors.genero && (
              <FormInputError message={String(errors.genero.message)} />
            )}
          </div>

          <div>
            <label className="grid md:grid-cols-2 text-black gap-x-2 gap-y-4 ps-2">
              Fecha de Nacimiento
              <input
                type="date"
                max={new Date().toISOString().split("T")[0]}
                className="ps-2 pb-1 text-black border-b-2 bg-transparent border-gray-200 focus:outline-none"
                {...register("fecha_nacimiento", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio",
                  },
                })}
              />
            </label>
            {errors.fecha_nacimiento && (
              <FormInputError
                message={String(errors.fecha_nacimiento.message)}
              />
            )}
          </div>

          <FormInput
            type="email"
            placeholder="Correo Electrónico"
            classes="autofill:input-light-background"
            config={register("email", {
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            })}
          >
            {errors.email && (
              <FormInputError message={String(errors.email.message)} />
            )}
          </FormInput>

          <FormInput
            type="password"
            placeholder="Contraseña"
            classes="autofill:input-light-background"
            config={register("password", {
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
              minLength: {
                value: 3,
                message: "La contraseña debe tener entre 3 y 30 caracteres",
              },
              maxLength: {
                value: 30,
                message: "La contraseña debe tener entre 3 y 30 caracteres",
              },
            })}
          >
            {errors.password && (
              <FormInputError message={String(errors.password.message)} />
            )}
          </FormInput>

          <FormInput
            type="password"
            placeholder="Confirmar Contraseña"
            classes="autofill:input-light-background"
            config={register("repeat_password", {
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
              validate: (value) => {
                if (value === watch("password")) {
                  return true;
                } else {
                  return "Las contraseñas no coinciden";
                }
              },
            })}
          >
            {errors.repeat_password && (
              <FormInputError
                message={String(errors.repeat_password.message)}
              />
            )}
          </FormInput>
        </section>

        <section className="flex flex-col bg-blue-700 rounded-b-lg md:rounded-e-lg md:rounded-s-none ps-10 pe-10 py-10 gap-10 relative">
          <h2 className="text-2xl mb-5 text-white">Información de Contacto</h2>

          <FormInput
            type="text"
            placeholder="País"
            config={register("nacionalidad", {
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            })}
            classes="text-white placeholder:text-white placeholder:text-opacity-40 focus:border-gray-300 autofill:input-dark-background"
          >
            {errors.nacionalidad && (
              <FormInputError message={String(errors.nacionalidad.message)} />
            )}
          </FormInput>

          <FormInput
            type="text"
            placeholder="Tipo de Documento"
            config={register("tipo_documento", {
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            })}
            classes="text-white placeholder:text-white placeholder:text-opacity-40 focus:border-gray-300 autofill:input-dark-background"
          >
            {errors.tipo_documento && (
              <FormInputError message={String(errors.tipo_documento.message)} />
            )}
          </FormInput>

          <FormInput
            type="number"
            placeholder="Nro de Documento"
            config={register("nro_documento", {
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
              pattern: {
                value: /\d+/,
                message: "Este campo debe ser un número",
              },
              min: {
                value: 0,
                message: "Este campo debe ser un número entero",
              },
              maxLength: {
                value: 9,
                message: "Este campo no puede tener más de 9 dígitos",
              },
            })}
            classes="text-white placeholder:text-white placeholder:text-opacity-40 focus:border-gray-300 autofill:input-dark-background"
          >
            {errors.nro_documento && (
              <FormInputError message={String(errors.nro_documento.message)} />
            )}
          </FormInput>

          <FormInput
            type="tel"
            placeholder="Teléfono"
            config={register("telefono", {
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            })}
            classes="text-white placeholder:text-white placeholder:text-opacity-40 focus:border-gray-300 autofill:input-dark-background"
          >
            {errors.telefono && (
              <FormInputError message={String(errors.telefono.message)} />
            )}
          </FormInput>

          <FormInput
            type="text"
            placeholder="Dirección"
            config={register("direccion", {
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            })}
            classes="text-white placeholder:text-white placeholder:text-opacity-40 focus:border-gray-300 autofill:input-dark-background"
          >
            {errors.direccion && (
              <FormInputError message={String(errors.direccion.message)} />
            )}
          </FormInput>

          <footer className="flex-1 flex justify-end items-end">
            <button
              type="submit"
              className="bg-white text-black font-bold py-2 px-4 rounded-full"
            >
              Confirmar Registro
            </button>
          </footer>
        </section>
      </form>
    </main>
  );
}

export default RegisterPage;
