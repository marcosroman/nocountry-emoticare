import { Outlet } from "react-router-dom";
import Sidebar from "../components/Nav/Sidebar";

function HomePage() {
  return (
    <main className="flex min-h-screen p-2">
      <Sidebar />
      <div className="ms-14 md:ms-16 flex-1">
        <Outlet />
      </div>
    </main>
  );
}

export default HomePage;
