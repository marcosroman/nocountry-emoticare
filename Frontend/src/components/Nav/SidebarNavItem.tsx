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
  return (
    <NavLink
      to={path}
      title={title}
      className={
        state
          ? "flex items-center gap-3 p-2 rounded-full cursor-pointer text-base hover:text-black hover:bg-white transition-all duration-300 select-none tracking-wider"
          : "flex justify-center items-center p-2 rounded-full cursor-pointer hover:text-black hover:bg-white transition-all duration-300 select-none tracking-wider"
      }
      onClick={event}
    >
      <Icon className="size-6 md:size-8" />{" "}
      <p className={state ? "flex" : "hidden"}>{title}</p>
    </NavLink>
  );
}

export default SidebarNavItem;
