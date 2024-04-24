"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

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

export function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { reset } = form;
  const router = useRouter();

  const { toast } = useToast();
  const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    setLoading(true);
    if (data.password !== data.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Incorrect Password",
        description: "Passwords do not match.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      reset({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: "",
        confirmPassword: "",
      });
    } else {
      const { confirmPassword, ...userData } = data;
      const res = await fetch("http://localhost:8080/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      //if data not
      const body = await res.json();
      console.log(body.error);
      if (body.status === "error") {
        toast({
          variant: "destructive",
          title: "Account Creation Failed",
          description: <p>{body.error}</p>,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      } else {
        // router.push("/auth/emailverification");

        toast({
          title: "Account Created 🎉",
          description: (
            <div>
              <p>
                <b>Name: </b> {data.firstName} {data.lastName}
              </p>
              <p>
                <b>Email: </b>
                {data.email}
              </p>
              <p>
                <b>Password: </b>
                {data.password}
              </p>
            </div>
          ),
        });
      }
    }
    setLoading(false);
  };

  const { pending } = useFormStatus();

  return (
    <CardWrapper
      label="Enter your information to create an account"
      title="Sign Up"
      backButtonTitle="Log In"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account ? "
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input {...field} type="name" placeholder="John" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input {...field} type="name" placeholder="Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="********" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={pending}>
            {loading ? "Loading" : "Sign In"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
