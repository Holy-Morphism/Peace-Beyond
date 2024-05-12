import * as z from 'zod';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const fileSchema = z.object({
  type: z.string().refine(type => SUPPORTED_FORMATS.includes(type), {
    message: 'Unsupported file format',
  }),
  // Add other file properties here if needed
});

export const SignUpSchema = z.object(
    {
        email:z.string().email({
            message:"Come on, you know that's not a valid email."
        }),
        firstName:z.string().min(3,{
            message:"Enter a proper name"
        }),
        lastName:z.string().min(3,{
            message:"Enter a proper name"
        }),
        password:z.string().min(8,{message:"Password must be at least 8 characters"}),
        confirmPassword:z.string().min(8,{message:"Password must be at least 8 characters"}),
        profilePicture: fileSchema,
    }
);

export const LogInSchema = z.object(
    {
        email:z.string().email({
            message:"Come on, you know that's not a valid email."
        }),
        password:z.string().min(8,{message:"Password must be at least 8 characters"}),
    }
);

export const ForgetPasswordSchema = z.object(
    {
        password:z.string().min(8,{message:"Password must be at least 8 characters"}),
        confirmPassword:z.string().min(8,{message:"Password must be at least 8 characters"})
    }
);