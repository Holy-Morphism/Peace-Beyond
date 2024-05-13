"use client";
import { CldUploadWidget, CldImage, getCldImageUrl } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
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
import { useState, useRef } from "react";
import { signUp } from "@/api/auth";
import Image from "next/image";

export function SignUpForm() {
  const [avatarURL, setAvatarURL] = useState("");

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

  const { toast } = useToast();
  const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    setLoading(true);
    const result = SignUpSchema.safeParse(data);
    if (avatarURL === "/images/default.png") {
      toast({
        variant: "destructive",
        title: "No Image Error",
        description: "Please upload an image",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }
    if (!result.success) {
      // Display the error message
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: result.error.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }
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
      const body = await signUp({ ...userData, avatarURL });
      if (!body) {
        return;
      }
      console.log(body.error);
      if (body.status === "error") {
        toast({
          variant: "destructive",
          title: "Account Creation Failed",
          description: <p>{body.error}</p>,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      } else {
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

  const renderFormField = (
    control: any,
    name: string,
    label: string,
    type: string,
    placeholder: string
  ) => {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input {...field} type={type} placeholder={placeholder} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };

  return (
    <CardWrapper
      label="Enter your information to create an account"
      title="Sign Up"
      backButtonTitle="Log In"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account ? "
    >
      <div className="flex justify-center rounded-full object-cover h-full">
        {avatarURL === "" ? (
          <Image
            src={"/images/default.png"}
            alt="Preview"
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        ) : (
          <CldImage
            width="100"
            height="100"
            src={avatarURL}
            sizes="100vw"
            alt="Description of my image"
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        )}
      </div>
      <CldUploadWidget
        uploadPreset="profile_pictures"
        onSuccess={(results) => {
          console.log("Public ID", results.info.public_id);
          setAvatarURL(results.info.public_id);
        }}
      >
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {renderFormField(
              form.control,
              "firstName",
              "First name",
              "name",
              "John"
            )}
            {renderFormField(
              form.control,
              "lastName",
              "Last name",
              "name",
              "Doe"
            )}
          </div>
          {renderFormField(
            form.control,
            "email",
            "Email",
            "email",
            "email@company.com"
          )}
          {renderFormField(
            form.control,
            "password",
            "Password",
            "password",
            "********"
          )}
          {renderFormField(
            form.control,
            "confirmPassword",
            "Confirm Password",
            "password",
            "********"
          )}

          <Button type="submit" className="w-full" disabled={pending}>
            {loading ? "Loading" : "Sign In"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
