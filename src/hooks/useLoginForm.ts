import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../schemas/loginSchema";
import type { LoginFormData } from "../schemas/loginSchema";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";


export default function useLoginForm() {
    const { login } = useAuth();
    const navigate = useNavigate();
    

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await loginUser(data);

        login(response.jwt, response.user);

        toast.success("Login berhasil!");

        navigate("/dashboard");
    }

  catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    toast.error(
      error.response?.data?.error?.message ??
      "Login gagal"
    );
  } else {
    toast.error("Login gagal");
  }
  }


  }
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}