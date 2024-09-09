import UsersIcon from "../../icons/Users";
import SidebarNavItem from "./SidebarNavItem";

type Props = {
  state: boolean;
};

function DoctorNav({ state }: Props) {
  return (
    <>
      <SidebarNavItem title="Citas del Día" Icon={UsersIcon} state={state} />
      <SidebarNavItem
        title="Consultar Citas del Mes"
        Icon={UsersIcon}
        state={state}
      />
      <SidebarNavItem
        title="Consultar Horario"
        Icon={UsersIcon}
        state={state}
      />
      <SidebarNavItem
        title="Listado de Pacientes"
        Icon={UsersIcon}
        state={state}
      />
    </>
  );
}

export default DoctorNav;
