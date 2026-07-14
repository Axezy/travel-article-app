import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export type RegisterFormData = z.infer<typeof registerSchema>;