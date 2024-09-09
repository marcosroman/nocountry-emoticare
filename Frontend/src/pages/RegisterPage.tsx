import { useContext } from "react";
import RegisterForm from "../components/Form/RegisterForm";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function RegisterPage() {
  const { userState } = useContext(UserContext);
  const { authenticated } = userState;

  if (authenticated) return <Navigate to="/home" replace />;

  return (
    <main className="p-4 flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-blue-200 to-blue-500">
      <RegisterForm rol="paciente" />
    </main>
  );
}

export default RegisterPage;
