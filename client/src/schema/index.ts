import * as z from 'zod';

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
        confirmPassword:z.string().min(8,{message:"Password must be at least 8 characters"})

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