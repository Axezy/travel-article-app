import { api } from "../api/axios";

import type { LoginFormData } from "../schemas/loginSchema";
import type { RegisterFormData } from "../schemas/registerSchema";

export const registerUser = async (data: RegisterFormData) => {
  const response = await api.post("/auth/local/register", {
    username: data.fullName,
    email: data.email,
    password: data.password,
  });

  return response.data;
};

export const loginUser = async (data: LoginFormData) => {
  const response = await api.post("/auth/local", {
    identifier: data.email,
    password: data.password,
  });

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/users/me");
  return response.data;
};