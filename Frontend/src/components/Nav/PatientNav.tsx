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
      <SidebarNavItem title="Mis Citas" Icon={TimeIcon} state={state} path="./mis-citas" />
      <SidebarNavItem title="Agendar Cita" Icon={CalendarIcon} state={state} path="./agendar-cita" />
      <SidebarNavItem title="Mis Resultados" Icon={HistoryIcon} state={state} path="./mis-resultados" />
    </>
  );
}

export default PatientNav;
