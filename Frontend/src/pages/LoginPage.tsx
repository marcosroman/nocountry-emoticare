import { useContext } from "react";
import LoginForm from "../components/Form/LoginForm";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const { userState } = useContext(UserContext);
  const { authenticated } = userState;
  
  if (authenticated) return <Navigate to="/home" replace />;

  return (
    <main className="p-4 flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-blue-200 to-blue-500">
      <LoginForm />
    </main>
  );
}

export default LoginPage;
