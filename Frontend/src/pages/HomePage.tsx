import { Outlet } from "react-router-dom";
import Sidebar from "../components/Nav/Sidebar";

function HomePage() {
  return (
    <main className="flex min-h-screen p-2">
      <Sidebar />
      <Outlet/>
    </main>
  );
}

export default HomePage;
