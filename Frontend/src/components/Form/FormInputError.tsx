import ExclamationIcon from "../../icons/Exclamation";

type Props = {
  message: string;
};

function FormInputError({ message }: Props) {
  return (
    <p className="flex gap-1 items-center bg-red-500 text-white rounded-full py-2 px-4 text-xs mt-3 w-fit">
      <ExclamationIcon className="size-4" />
      {message}
    </p>
  );
}

export default FormInputError;
