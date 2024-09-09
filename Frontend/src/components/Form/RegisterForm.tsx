import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/auth";
import { toast } from "react-toastify";

import TextInput from "../Input/TextInput";
import SelectInput from "../Input/SelectInput";
import EmailInput from "../Input/EmailInput";
import PasswordInput from "../Input/PasswordInput";
import NumberInput from "../Input/NumberInput";
import TelephoneInput from "../Input/TelephoneInput";
import DateInput from "../Input/DateInput";
import FullButton from "../Button/FullButton";

type Props = {
  rol: "paciente" | "medico";
};

function RegisterForm({ rol }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    values.rol = rol;
    const result = await registerUser(values);
    if (result.message) {
      toast.success(result.message, { position: "bottom-right" });
      navigate("/login");
    }
    if (result.error) {
      toast.error(result.error, { position: "bottom-right" });
    }
  });
  return (
    <form
      className="shadow-lg grid md:grid-cols-2 max-w-5xl"
      onSubmit={onSubmit}
    >
      <section className="flex flex-col bg-white rounded-t-lg md:rounded-s-lg md:rounded-e-none p-10 gap-10">
        <h2 className="text-xl font-semibold text-black">Información General</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <TextInput
            name="nombre"
            placeholder="Nombre"
            register={register}
            errors={errors}
            classes="autofill:input-light-background"
          />

          <TextInput
            name="apellido"
            placeholder="Apellido"
            register={register}
            errors={errors}
            classes="autofill:input-light-background"
          />
        </div>

        <SelectInput
          name="genero"
          placeholder="Género"
          options={[
            { name: "Masculino", value: "Masculino" },
            { name: "Femenino", value: "Femenino" },
          ]}
          register={register}
          errors={errors}
        />

        <DateInput
          name="fecha_nacimiento"
          placeholder="Fecha de Nacimiento"
          register={register}
          errors={errors}
        />

        <EmailInput
          name="email"
          placeholder="Correo Electrónico"
          register={register}
          errors={errors}
          classes="autofill:input-light-background"
        />

        <PasswordInput
          name="password"
          placeholder="Contraseña"
          register={register}
          errors={errors}
          classes="autofill:input-light-background"
        />

        <PasswordInput
          name="repeat_password"
          placeholder="Confirmar Contraseña"
          register={register}
          watch={watch}
          errors={errors}
          classes="autofill:input-light-background"
        />
      </section>

      <section className="flex flex-col bg-blue-700 rounded-b-lg md:rounded-e-lg md:rounded-s-none p-10 gap-10">
        <h2 className="text-xl font-semibold text-white">Información de Contacto</h2>

        <TextInput
          name="nacionalidad"
          placeholder="País"
          register={register}
          errors={errors}
          error_color="yellow"
          classes="text-white placeholder:text-white placeholder:text-opacity-40 focus:border-gray-300 autofill:input-dark-background"
        />

        <SelectInput
          name="tipo_documento"
          placeholder="Tipo de Documento"
          options={[
            { name: "DNI", value: "DNI" },
            { name: "Pasaporte", value: "Pasaporte" },
          ]}
          register={register}
          errors={errors}
          error_color="yellow"
          classes="text-white placeholder:text-white bg-transparent"
        />

        <NumberInput
          name="nro_documento"
          placeholder="Nro de Documento"
          register={register}
          errors={errors}
          error_color="yellow"
          classes="text-white placeholder:text-white placeholder:text-opacity-40 focus:border-gray-300 autofill:input-dark-background"
        />

        <TelephoneInput
          name="telefono"
          placeholder="Teléfono"
          register={register}
          errors={errors}
          error_color="yellow"
          classes="text-white placeholder:text-white placeholder:text-opacity-40 focus:border-gray-300 autofill:input-dark-background"
        />

        <TextInput
          name="direccion"
          placeholder="Dirección"
          register={register}
          errors={errors}
          error_color="yellow"
          classes="text-white placeholder:text-white placeholder:text-opacity-40 focus:border-gray-300 autofill:input-dark-background"
        />

        <FullButton title="Confirmar Registro" color="white" type="submit" />
      </section>
    </form>
  );
}

export default RegisterForm;
