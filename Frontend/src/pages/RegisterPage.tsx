import RegisterForm from "../components/Form/RegisterForm";


function RegisterPage() {


  return (
    <main className="p-4 flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-blue-200 to-blue-500">
      <RegisterForm rol="paciente" />
    </main>
  );
}

export default RegisterPage;
