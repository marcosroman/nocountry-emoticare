import ReactLoading from "react-loading";

function Loading() {
  return (
    <div className="flex items-center justify-center font-bol flex-1 min-h-screen">
      <ReactLoading type="spin" color="blue" />
    </div>
  );
}

export default Loading;
