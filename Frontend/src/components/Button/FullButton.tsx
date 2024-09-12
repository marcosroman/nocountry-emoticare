

type Props = {
    title: string
    type?: "button" | "submit"
    color: "blue" | "white"

}

const BUTTON_COLORS = {
    blue: "text-white bg-blue-600 hover:bg-blue-700",
    white: "text-black bg-white hover:bg-slate-200",
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
