"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
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
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useState, useRef } from "react";

interface UpdateFormFieldProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  submit: (data: any) => any;
  schema: any;
}

const UpdateFormField = (props: UpdateFormFieldProps) => {
  const [loading, setLoading] = useState(false);
  //for Validation
  const form = useForm({
    resolver: zodResolver(props.schema),
    defaultValues: {
      [props.name]: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof props.schema>) => {
    console.log(`data ${data}`);
    setLoading(true);
    const res = await props.submit(data);
    console.log(`res ${res}`);
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-2 items-end gap-y-10"
      >
        <FormField
          control={form.control}
          name={props.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{props.label}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type={props.type}
                  placeholder={props.placeholder}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-color4 text-color2">
          {loading ? "Loading" : "Update"}
        </Button>
      </form>
    </Form>
  );
};

export default UpdateFormField;
