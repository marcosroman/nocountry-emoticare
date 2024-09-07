import CircleCheckIcon from "../../icons/CircleCheck";
import DoctorImg from "../../images/doctor-laptop.webp";

function WhyUsSection() {
  return (
    <section className="px-6 py-8 mx-auto max-w-6xl">
      <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">
        ¿Por qué elegirnos?
      </h2>
      <section className="flex flex-col-reverse lg:flex-row justify-around gap-x-10 items-center">
        <aside className="py-4 leading-loose lg:max-w-[50%]">
          <ol className="text-gray-600">
            <li className="flex mb-4">
              <CircleCheckIcon className="size-8 text-blue-500" />
              <p className="flex-1 ps-2">
                <strong>Atención Médica a un Clic de Distancia: </strong>
                Nuestra plataforma te conecta con especialistas de renombre
                desde la comodidad de tu hogar, facilitando el acceso a una
                atención médica de calidad en cualquier momento.
              </p>
            </li>
            <li className="flex mb-4">
              <CircleCheckIcon className="size-8 text-blue-500" />
              <p className="flex-1 ps-2">
                <strong>Documentación Médica Clara y Accesible: </strong>
                Recibe un informe detallado con los resultados de tu consulta
                después de cada sesión. Accede a tus documentos médicos de forma
                segura y en cualquier momento, para que tengas toda la
                información relevante a tu alcance.
              </p>
            </li>
            <li className="flex mb-4">
              <CircleCheckIcon className="size-8 text-blue-500" />
              <p className="flex-1 ps-2">
                <strong>Seguridad y Privacidad: </strong>
                Tu seguridad es nuestra prioridad. Utilizamos tecnología de
                vanguardia para proteger tu información personal y garantizar
                que todas las consultas sean confidenciales y seguras.
              </p>
            </li>
          </ol>
        </aside>
        <img
          src={DoctorImg}
          className="w-[300px] h-[200px] md:w-[495px] md:h-[330px]"
          alt="doctor image"
        />
      </section>
    </section>
  );
}

export default WhyUsSection;
