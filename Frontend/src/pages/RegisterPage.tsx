import { useContext } from "react";
import RegisterForm from "../components/Form/RegisterForm";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Section/Navbar";

function RegisterPage() {
  const { userState } = useContext(UserContext);
  const { authenticated } = userState;

  if (authenticated) {
    toast.info("Ya tiene una sección activa", { position: "bottom-right" });
    return <Navigate to="/home" replace />;
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="p-4 flex flex-1 flex-col justify-center items-center bg-gradient-to-br from-blue-200 to-blue-500">
        <RegisterForm rol="paciente" />
      </section>
    </main>
  );
}

<RegisterForm rol="paciente" />;

export default RegisterPage;
