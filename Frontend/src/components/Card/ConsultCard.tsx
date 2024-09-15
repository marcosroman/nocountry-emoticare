import CalendarMonthIcon from "../../icons/CalendarMonth";
import HospitalIcon from "../../icons/Hospital";
import ProfileIcon from "../../icons/Profile";
import TimeIcon from "../../icons/Time";
import { Consult } from "../Section/AllConsultsSection";

type Props = {
  consult: Consult
};

function ConsultCard({ consult }: Props) {
  const statusClasses = {
    Cancelado:
      "p-2 rounded-full text-sm max-w-fit justify-self-end bg-red-300 text-red-900",
    Reservado:
      "p-2 rounded-full text-sm max-w-fit justify-self-end bg-sky-300 text-sky-900",
    Finalizado:
      "p-2 rounded-full text-sm max-w-fit justify-self-end bg-green-300 text-green-900",
  };

  return (
    <li className="p-4 mx-auto w-full bg-white shadow-lg flex flex-col rounded-xl gap-2 max-w-80 border-2 hover:border-black transition-all duration-300 select-none">
      <header className="grid gap-4 items-center sm:flex sm:flex-row-reverse sm:justify-between ">
        <span className={statusClasses[consult.estado]}>{consult.estado}</span>
        <h2 className="flex gap-2">
          <CalendarMonthIcon className="text-blue-600" />
          {consult.fecha}
        </h2>
      </header>
      <span className="flex gap-2">
        <HospitalIcon className="text-blue-600" /> {consult.medico}
      </span>
      <span className="flex gap-2">
        <ProfileIcon className="text-blue-600" /> {consult.paciente}
      </span>
      <span className="flex gap-2">
        <TimeIcon className="text-blue-600" />
        {consult.horaInicio} - {consult.horaFin}
      </span>
    </li>
  );
}

export default ConsultCard;
