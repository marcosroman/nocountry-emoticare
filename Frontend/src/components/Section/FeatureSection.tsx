import FeatureCard from "../Card/FeatureCard";
import VideocameraIcon from "../../icons/Videocamera";
import CalendarIcon from "../../icons/Calendar"
import UsersIcon from "../../icons/Users";
import HistoryIcon from "../../icons/History";

function FeatureSection() {
  return (
    <section className="bg-gray-100 px-6 py-8">
      <h2 className="text-3xl font-semibold text-center py-6">
        Servicios
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
        <li>
          <FeatureCard
            title="Horario Flexible"
            desc="Agenda tu cita en el horario que mejor se adapte a tu rutina."
          >
            <CalendarIcon className="text-blue-400 size-10" />
          </FeatureCard>
        </li>
        <li>
          <FeatureCard
            title="Atención Personalizada"
            desc="Consultas privadas y seguras con médicos desde cualquier parte del mundo."
          >
            <VideocameraIcon className="text-blue-400 size-10" />
          </FeatureCard>
        </li>
        <li>
          <FeatureCard
            title="Expertos Especialistas"
            desc="Escoge entre una variedad de especialistas el más conveniente a tus necesidades."
          >
            <UsersIcon className="text-blue-400 size-10" />
          </FeatureCard>
        </li>
        <li>
          <FeatureCard
            title="Respaldo de tu Historial Médico"
            desc="Lleva en un solo lugar tu historial médico para que puedas observar tu progreso."
          >
            <HistoryIcon className="text-blue-400 size-10" />
          </FeatureCard>
        </li>
      </ul>
    </section>
  );
}

export default FeatureSection;
