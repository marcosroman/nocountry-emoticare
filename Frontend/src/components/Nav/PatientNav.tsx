import SidebarNavItem from "./SidebarNavItem";
import HistoryIcon from "../../icons/History";
import CalendarIcon from "../../icons/Calendar";
import TimeIcon from "../../icons/Time";


type Props = {
    state: boolean
}

function PatientNav({state} : Props) {
  return (
    <>
      <SidebarNavItem title="Mis Consultas" Icon={TimeIcon} state={state} />
      <SidebarNavItem title="Agendar Cita" Icon={CalendarIcon} state={state} />
      <SidebarNavItem title="Mis Resultados" Icon={HistoryIcon} state={state} />
    </>
  );
}

export default PatientNav;
