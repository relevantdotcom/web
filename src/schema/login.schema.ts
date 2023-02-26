import { z } from "zod"

export const loginValidationSchema = z.object({
  email: z
    .string({ required_error: "is required" })
    .email({ message: "not a valid email" }),
  password: z.string({ required_error: "is required" }),
})

export type LoginType = z.infer<typeof loginValidationSchema>
