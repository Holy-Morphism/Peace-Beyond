"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LogInSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import CardWrapper from "./card-wrapper";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import Link from "next/link";
import { login } from "@/api/auth";

export function LogInForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(LogInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const onSubmit = async (data: z.infer<typeof LogInSchema>) => {
    setLoading(true);
    const res = await login(data);
    console.log(res);
    setLoading(false);
  };

  const { pending } = useFormStatus();

  return (
    <CardWrapper
      label="Enter your email below to login to your account"
      title="Log In"
      backButtonTitle="Sign Up"
      backButtonHref="/auth/signup"
      backButtonLabel="Don't have an account ? "
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="hello@yellow.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="********" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link href="/auth/forgetpassword" className="text-grey underline  ">
            Forgot Password ?
          </Link>
          <Button type="submit" className="w-full" disabled={pending}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
