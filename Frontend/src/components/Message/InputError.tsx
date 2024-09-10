import ExclamationIcon from "../../icons/Exclamation";

type Props = {
  message: string;
  color?: "red" | "yellow";
};

const ERROR_COLORS = {
  red: "text-red-500",
  yellow: "text-yellow-300"
}

function InputError({ message, color="red" }: Props) {
  return (
    <span className={"flex gap-1 items-center text-sm font-semibold mt-1 w-fit justify-center select-none " + ERROR_COLORS[color]}>
      <ExclamationIcon className="size-5" />
      {message}
    </span>
  );
}

export default InputError;