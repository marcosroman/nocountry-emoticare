import { SVGProps } from "react";

type Props = {
  title: string;
  Icon: (Props: SVGProps<SVGSVGElement>) => JSX.Element;
  event?: () => void;
  state: boolean;
};

function SidebarNavItem({ title, Icon, event, state }: Props) {
  return (
    <li
    title={title}
      className={ state 
        ? "flex items-center gap-2 p-2 rounded-full cursor-pointer text-base hover:text-black hover:bg-white transition-all duration-300 select-none"
        : "flex justify-center items-center p-2 rounded-full cursor-pointer hover:text-black hover:bg-white transition-all duration-300 select-none"
      }
      onClick={event}
    >
      <Icon className="size-8" />
      <p className={state ? "flex" : "hidden"}>{title}</p>
    </li>
  );
}

export default SidebarNavItem;