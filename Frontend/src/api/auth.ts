import axios from "axios";
import { FieldValues} from "react-hook-form";

const frontend = axios.create({
  baseURL: "http://localhost:3000"
})

export const registerUser = async (values: FieldValues) => {
  try {
    const response = await frontend.post(`/register`, values);
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data
    }
  }
};

export const loginUser = async (values: FieldValues) => {
  try {
    const response = await frontend.post(`/login`, values);
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data
    }
  }
};
