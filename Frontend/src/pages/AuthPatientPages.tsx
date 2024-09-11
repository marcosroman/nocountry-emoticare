import { Navigate, Outlet } from "react-router-dom";
import { authPatient } from "../api/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../components/Loading/Loading";

function AuthPatientPages() {
  const [patientValidation, setPatientValidation] = useState<JSX.Element>(
    <Loading />
  );

  useEffect(() => {
    const verifyAuth = async () => {
      const response = await authPatient();
      return response;
    };

    verifyAuth().then((res) => {
      if (res?.error) {
        toast.error(res?.error, { position: "bottom-right" });
        setPatientValidation(<Navigate to="/login" />);
      } else {
        setPatientValidation(<Outlet />);
      }
    });
  }, []);

  return <>{patientValidation}</>;
}

export default AuthPatientPages;
