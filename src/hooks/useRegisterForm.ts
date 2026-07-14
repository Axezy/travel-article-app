import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../schemas/registerSchema";
import type { RegisterFormData } from "../schemas/registerSchema";

import { registerUser } from "../services/authService";
import axios from "axios";

export default function useRegisterForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data);

      toast.success("Register berhasil!");

      navigate("/login");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.error?.message ??
          "Register gagal"
        );
      } else {
        toast.error("Register gagal");
      }
    }

  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}