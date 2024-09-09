import UsersIcon from "../../icons/Users";
import SidebarNavItem from "./SidebarNavItem";

type Props = {
  state: boolean;
};

function AdminNav({ state }: Props) {
  return (
    <>
      <SidebarNavItem
        title="Listado de Médicos"
        Icon={UsersIcon}
        state={state}
      />
      <SidebarNavItem title="Agregar Médico" Icon={UsersIcon} state={state} />
      <SidebarNavItem
        title="Listado de Reservas"
        Icon={UsersIcon}
        state={state}
      />
    </>
  );
}

export default AdminNav;
