import z from "zod";


export const SignupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores are allowed"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
});

export const LoginSchema = z.object({
  identifier: z
    .string()
    .min(1, "Username or Email is required")
    .refine(
      (val) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || /^[a-zA-Z0-9_]+$/.test(val),
      "Must be a valid email or username"
    ),
  password: z.string().min(8, "Password must be at least 8 characters long."),
});

export type SignupFields = z.infer<typeof SignupSchema>;
export type LoginFields = z.infer<typeof LoginSchema>;



export const CreatePlaylistSchema = z.object({
  playlistName: z
    .string()
    .min(1, "Playlist name is required")
    .min(2, "Playlist name must be at least 2 characters"),
  bio: z
    .string()
    .max(25, "Bio must be at most 25 characters")
    .optional(),
  privacy: z.enum(["option-one", "option-two"])
});


export type CreatePlaylistFields = z.infer<typeof CreatePlaylistSchema>;

