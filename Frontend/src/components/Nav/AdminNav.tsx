import CalendarMonthIcon from "../../icons/CalendarMonth";
import UserPlusIcon from "../../icons/UserPlus";
import UsersIcon from "../../icons/Users";
import SidebarNavItem from "./SidebarNavItem";

type Props = {
  state: boolean;
};

function AdminNav({ state }: Props) {
  return (
    <>
      <SidebarNavItem
        title="Lista de Médicos"
        Icon={UsersIcon}
        state={state}
        path="./lista-de-medicos"
      />
      <SidebarNavItem title="Registrar Médico" Icon={UserPlusIcon} state={state} path="./registrar-medico" />
      <SidebarNavItem
        title="Todas las Citas"
        Icon={CalendarMonthIcon}
        state={state}
        path="./todas-las-citas"
      />
    </>
  );
}

export default AdminNav;
