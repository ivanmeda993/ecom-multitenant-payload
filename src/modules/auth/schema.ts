import { z } from "zod";

export const LOGIN_SCHEMA = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .max(63)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,63}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export type LoginSchemaInputs = z.infer<typeof LOGIN_SCHEMA>;

export const REGISTER_SCHEMA = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .max(63)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,63}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(63, "Username must be at most 63 characters")
    .regex(
      /^[a-z0-9][a-z0-9-]*[a-z0-9]$/,
      "Username can only contain lowercase letters, numbers, and dashes. Must start and end with a letter or number."
    )
    .refine((val) => !val.includes("--"), {
      message: "Username cannot contain two consecutive dashes",
    })
    .transform((val) => val.toLowerCase()),
});

export type RegisterSchemaInputs = z.infer<typeof REGISTER_SCHEMA>;
