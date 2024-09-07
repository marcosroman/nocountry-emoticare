import {HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  config: UseFormRegisterReturn;
  classes?: string;
  children?: JSX.Element
};

function FormInput({ type, placeholder, config, classes, children }: Props) {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        className={
          "ps-2 pb-1 border-b-2 bg-transparent border-gray-200 focus:outline-none " +
          classes
        }
        {...config}
      />
      {children}
    </div>
  );
}

export default FormInput;
