import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserProvider from "./context/UserProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AuthPatientPages from "./pages/AuthPatientPages";
import WhyUsSection from "./components/Section/WhyUsSection";
import TestimonialSection from "./components/Section/TestimonialsSection";
import FeatureSection from "./components/Section/FeatureSection";
import AppointmentsList from "./components/Section/Dashboard-Dr.tsx/AppointmentList";
import DailyAppointments from "./components/Section/Dashboard-Dr.tsx/DailyAppointments";
import ScheduleAppointments from "./components/Section/Dashboard-Dr.tsx/ScheduleAppointment";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<AuthPatientPages />}>
            <Route path="/home/*" element={<HomePage />}>
              <Route path="mis-consultas" element={<WhyUsSection/>} />
              <Route path="agendar-citas" element={<TestimonialSection />} />
              <Route path="mis-resultados" element={<FeatureSection />} />
              <Route path="" element={<Navigate to="mis-consultas" />} />
            </Route>
          </Route>
          
          <Route path="/prueba-paciente/*" element={<HomePage />}>
            <Route path="mis-consultas" element={<WhyUsSection />} />
            <Route path="agendar-citas" element={<TestimonialSection />} />
            <Route path="mis-resultados" element={<FeatureSection />} />
            <Route path="ver-perfil" element={<FeatureSection />} />
            <Route path="" element={<Navigate to="mis-consultas" />} />
          </Route>

          <Route path="/prueba-medico/*" element={<HomePage />}>
            <Route path="citas-del-dia" element={<DailyAppointments />} />
            <Route path="consultar-cita-del-mes" element={<AppointmentsList />} />
            <Route path="consultar-horario" element={<ScheduleAppointments />} />
            <Route path="listado-de-pacientes" element={<FeatureSection />} />
            <Route path="ver-perfil" element={<FeatureSection />} />
            <Route path="" element={<Navigate to="citas-del-dia" />} />
          </Route>

          <Route path="/prueba-admin/*" element={<HomePage />}>
            <Route path="listado-de-medicos" element={<WhyUsSection />} />
            <Route path="crear-un-medico" element={<TestimonialSection />} />
            <Route path="lista-de-reservas" element={<FeatureSection />} />
            <Route path="ver-perfil" element={<FeatureSection />} />
            <Route path="" element={<Navigate to="listado-de-medicos" />} />
          </Route>


          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
