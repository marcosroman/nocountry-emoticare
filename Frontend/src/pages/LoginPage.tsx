import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../components/Form/FormInput";
import FormInputError from "../components/Form/FormInputError";
import { Link } from "react-router-dom";
import EyeIcon from "../icons/Eye";
import EyeoffIcon from "../icons/Eyeoff";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = handleSubmit((values) => {
    console.log(values);
    reset();
  });

  return (
    <main className="p-4 flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-blue-200 to-blue-500">
      <form
        className="shadow-lg grid md:grid-cols-2 max-w-5xl"
        onSubmit={onSubmit}
      >
        <section className="flex flex-col bg-blue-700 rounded-t-lg md:rounded-s-lg md:rounded-e-none p-4 gap-10 justify-center">
          <h2 className="max-w-[24ch] md:text-2xl text-white text-center md:max-w-[24ch]">
            Tu salud, nuestra prioridad ¡Agenda tu cita médica!
          </h2>
        </section>
        <section className="flex flex-col bg-white rounded-b-lg md:rounded-e-lg md:rounded-s-none p-8 md:p-10 gap-10 relative">
          <h2 className="font-semibold text-xl">Iniciar Sesión</h2>
          <FormInput
            type="text"
            placeholder="Correo Electrónico"
            classes="autofill:input-light-background"
            config={register("email", {
              required: { value: true, message: "Este campo es requerido" },
            })}
          >
            {errors.email && (
              <FormInputError message={String(errors.email.message)} />
            )}
          </FormInput>
          <div className="relative">
            <FormInput
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              classes="autofill:input-light-background"
              config={register("password", {
                required: { value: true, message: "Este campo es requerido" },
              })}
            >
              {errors.password && (
                <FormInputError message={String(errors.password.message)} />
              )}
            </FormInput>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-0 right-0"
            >
              {showPassword ? (
                <EyeoffIcon className="hover:opacity-60" />
              ) : (
                <EyeIcon className="hover:opacity-60" />
              )}
            </button>
          </div>

          <footer className="flex flex-col gap-4">
            <Link
              to="/forgot-password"
              className="text-end text-blue-500 text-sm"
            >
              ¿Olvistaste tu contraseña?
            </Link>
            <button
              type="submit"
              className="bg-blue-600 py-2 rounded-lg text-white"
            >
              Iniciar Sesión
            </button>
          </footer>

          <span className="text-sm">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="text-blue-500">
              Registrarse
            </Link>
          </span>
        </section>
      </form>
    </main>
  );
}

export default LoginPage;
