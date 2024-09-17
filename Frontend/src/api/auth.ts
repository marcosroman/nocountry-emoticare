import axios from "axios";
import { FieldValues } from "react-hook-form";

const frontend = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000",
});

export const registerUser = async (values: FieldValues) => {
  try {
    const response = await frontend.post(`/register`, values);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const loginUser = async (values: FieldValues) => {
  try {
    const response = await frontend.post(`/login`, values);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const logoutUser = async () => {
  try {
    const response = await frontend.post(`/logout`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const authenticate = async () => {
  try {
    const response = await frontend.get(`/auth/status`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const authPatient = async () => {
  try {
    const response = await frontend.get(`/patient`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const authDoctor = async () => {
  try {
    const response = await frontend.get(`/doctor`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const authAdmin = async () => {
  try {
    const response = await frontend.get(`/admin`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const getAllConsult = async () => {
  try {
    const response = await frontend.get(`/agendamientos`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const getAllDoctors = async () => {
  try {
    const response = await frontend.get(`/admin/doctors`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
  }
};