import { z } from "zod"

export const registerValidationSchema = z.object({
  firstName: z.string().min(1, { message: "Firstname is required" }),
  lastName: z.string().min(1, { message: "Lastname is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z.string().min(6, { message: "must be atleast 6 characters" }),
  confirmPassword: z
    .string()
    .min(6, { message: "must be atleast 6 characters" }),
})

export type RegisterType = z.infer<typeof registerValidationSchema>
