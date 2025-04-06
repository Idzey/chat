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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long"),
  remember: z.boolean(),
});

export default function FormLogin() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: {
    email: string;
    password: string;
    remember: boolean;
  }) => {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: "/",
      });
  
      if (!res || res.error) {
        toast.error("Not found user or invalid credentials");
        return;
      }
  
      router.push("/chat");
    } catch (error) {
      console.error("Login error:", error);
      alert("Ошибка входа. Попробуйте ещё раз.");
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6 text-lg"
        onSubmit={form.handleSubmit(onSubmit)}
      >
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
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    className="transition-all ease-in-out"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Remembe me</FormLabel>
              </FormItem>
            )}
          />
          <Link
            href="/auth/forgot-password"
            className="text-sm text-red cursor-pointer"
          >
            Forgot Password?
          </Link>
        </div>
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
