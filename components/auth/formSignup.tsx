"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const checkEmailExists = async (email: string) => {
  const res = await fetch(`/api/check-email?email=${email}`);
  const data = await res.json();
  return data.exists;
};

const checkPhoneExists = async (phone: string) => {
  const res = await fetch(`/api/check-phone?phone=${phone}`);
  const data = await res.json();
  return data.exists;
};

const formSchema = z
  .object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required")
      .refine(
        async (email) => !(await checkEmailExists(email)),
        "Этот email уже занят"
      ),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long"),
    privacy: z.boolean(),
    confirm_password: z.string().min(1, "Confirm password is required"),
    phone: z
      .string()
      .regex(
        /^\d{10,15}$/,
        "The phone number should contain only numbers and be 10-15 characters long."
      )
      .refine(
        async (email) => !(await checkPhoneExists(email)),
        "Этот email уже занят"
      ),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export default function FormSignup() {
  const form = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone: "",
      privacy: false,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
    privacy: boolean;
  }) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6 text-lg"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex gap-2 justify-between">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-2 justify-between">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="78005553535" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="•••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="•••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2">
              <FormControl>
                <Checkbox
                  className="transition-all ease-in-out"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>
                <p>
                    I agree to all the&nbsp; 
                    <Link href="/" className="text-red">
                        Terms
                    </Link>
                    &nbsp;and&nbsp; 
                    <Link href="/" className="text-red">
                        Privacy Policies
                    </Link>
                </p>
              </FormLabel>
            </FormItem>
          )}
        />

        <Button
          className="w-full rounded-sm mt-6 text-white bg-blue"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Form>
  );
}
