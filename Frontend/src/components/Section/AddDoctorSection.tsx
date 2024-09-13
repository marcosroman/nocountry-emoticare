import RegisterForm from "../Form/RegisterForm";

function AddDoctorSection() {
  return (
    <main className="flex flex-col items-center justify-center min-h-full md:gap-10">
      <section className="p-4 rounded-lg">
        <RegisterForm rol="medico" />
      </section>
    </main>
  );
}

export default AddDoctorSection;
