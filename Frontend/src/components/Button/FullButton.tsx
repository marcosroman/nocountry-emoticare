

type Props = {
    title: string
    type?: "button" | "submit"
    color: "blue" | "white"

}

const BUTTON_COLORS = {
    blue: "text-white bg-blue-600",
    white: "text-black bg-white",
  };

function FullButton({title, type="button", color}: Props) {
  return (
    <button
      type={type}
      className={"py-2 rounded-lg font-semibold " + BUTTON_COLORS[color]}
    >
      {title}
    </button>
  );
}

export default FullButton;
