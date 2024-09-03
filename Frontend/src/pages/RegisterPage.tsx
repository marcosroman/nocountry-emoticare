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
    console.log({ ...values });
    reset();
  });

  return (
    <main className="p-4 flex flex-col min-h-screen justify-center items-center bg-gradient-to-r from-blue-400 to-violet-100">
      <form
        className="shadow-lg grid md:grid-cols-2 max-w-5xl"
        onSubmit={onSubmit}
      >
        <section className="flex flex-col bg-white rounded-t-lg md:rounded-s-lg md:rounded-e-none ps-10 pe-10 py-10 gap-10">
          <h2 className="text-2xl mb-5 text-[#2371de]">Información General</h2>
          <div className="grid gap-10 md:grid-cols-2">
            <FormInput
              type="text"
              placeholder="Nombre"
              config={register("name", {
                required: {
                  value: true,
                  message: "Este campo es obligatorio",
                },
              })}
              classes="autofill:input-light-background"
            >
              {errors.name && (
                <FormInputError message={String(errors.name.message)} />
              )}
            </FormInput>
            
            <FormInput
              type="text"
              placeholder="Apellido"
              config={register("lastname", {
                required: {
                  value: true,
                  message: "Este campo es obligatorio",
                },
              })}
              classes="autofill:input-light-background"
            >
              {errors.lastname && (
                <FormInputError message={String(errors.lastname.message)} />
              )}
            </FormInput>
          </div>

          <div>
            <label className="grid gap-2 items-center">
              <select
                className="ps-1 pb-1 border-b-2 border-gray-200 text-black focus:outline-none focus:border-gray-300"
                {...register("sex", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio",
                  },
                })}
              >
                <option value="">Sexo</option>
                <option value="man">Hombre</option>
                <option value="woman">Mujer</option>
              </select>
            </label>
            {errors.sex && (
              <FormInputError message={String(errors.sex.message)} />
            )}
          </div>

          <div>
            <label className="grid md:grid-cols-2 text-black gap-x-2 gap-y-4 ps-2">
              Fecha de Nacimiento
              <input
                type="date"
                max={new Date().toISOString().split("T")[0]}
                className="ps-2 pb-1 text-black border-b-2 bg-transparent border-gray-200 focus:outline-none"
                {...register("birthdate", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio",
                  },
                })}
              />
            </label>
            {errors.birthdate && (
              <FormInputError message={String(errors.birthdate.message)} />
            )}
          </div>

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
            config={register("confirm_password", {
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
            {errors.confirm_password && (
              <FormInputError
                message={String(errors.confirm_password.message)}
              />
            )}
          </FormInput>
        </section>

        <section className="flex flex-col bg-[#4935d4] rounded-b-lg md:rounded-e-lg md:rounded-s-none ps-10 pe-10 py-10 gap-10 relative">
          <h2 className="text-2xl mb-5 text-white">Información de Contacto</h2>

          <FormInput
            type="email"
            placeholder="Correo Electrónico"
            config={register("email", {
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            })}
            classes="text-white placeholder:text-white placeholder:text-opacity-40 focus:border-gray-300 autofill:input-dark-background"
          >
            {errors.email && (
              <FormInputError message={String(errors.email.message)} />
            )}
          </FormInput>

          <FormInput
            type="text"
            placeholder="País"
            config={register("country", {
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            })}
            classes="text-white placeholder:text-white placeholder:text-opacity-40 focus:border-gray-300 autofill:input-dark-background"
          >
            {errors.country && (
              <FormInputError message={String(errors.country.message)} />
            )}
          </FormInput>

          <FormInput
            type="tel"
            placeholder="Teléfono"
            config={register("telephone", {
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            })}
            classes="text-white placeholder:text-white placeholder:text-opacity-40 focus:border-gray-300 autofill:input-dark-background"
          >
            {errors.telephone && (
              <FormInputError message={String(errors.telephone.message)} />
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
