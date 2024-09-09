import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Sidebar from "../components/Nav/Sidebar";
import { Navigate } from "react-router-dom";

function HomePage() {
  const { userState } = useContext(UserContext);
  const { authenticated } = userState;


  if (!authenticated) return <Navigate to="/login" replace />


  return (
    <main className="flex min-h-screen p-2">
      <Sidebar/>
      <div className="text-center flex-1 font-bold text-xl">Contenido</div>
    </main>
  );
}

export default HomePage;
