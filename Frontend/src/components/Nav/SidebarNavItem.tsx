import { SVGProps } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  Icon: (Props: SVGProps<SVGSVGElement>) => JSX.Element;
  event?: () => void;
  state: boolean;
  path: string;
};

function SidebarNavItem({ title, Icon, event, state, path }: Props) {
  const NavLinkClasses = {
    expanded:
      "flex items-center gap-3 p-2 rounded-full cursor-pointer text-base hover:text-black hover:bg-white transition-all duration-300 select-none tracking-wider",
    reduced:
      "flex justify-center items-center p-2 rounded-full cursor-pointer hover:text-black hover:bg-white transition-all duration-300 select-none tracking-wider",
    expandedActive:
      "flex items-center gap-3 p-2 rounded-full cursor-pointer text-base bg-white text-black transition-all duration-300 select-none tracking-wider",
    reducedActive:
      "flex justify-center items-center p-2 rounded-full cursor-pointer text-black bg-white transition-all duration-300 select-none tracking-wider",
  };

  return (
    <NavLink
      to={path}
      title={title}
      className={({ isActive }) => {
        if (isActive) {
          return state
            ? NavLinkClasses.expandedActive
            : NavLinkClasses.reducedActive;
        } else {
          return state ? NavLinkClasses.expanded : NavLinkClasses.reduced;
        }
      }}
      onClick={event}
    >
      <Icon className="size-6 md:size-8" />{" "}
      <p className={state ? "flex" : "hidden"}>{title}</p>
    </NavLink>
  );
}

export default SidebarNavItem;
