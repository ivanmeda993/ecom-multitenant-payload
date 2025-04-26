"use client";

import {
  REGISTER_SCHEMA,
  type RegisterSchemaInputs,
} from "@/modules/auth/schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BackgroundImage } from "@/modules/auth/ui/components/background-image";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const SignUpView = () => {
  const router = useRouter();

  const queryClient = useQueryClient();
  const trpc = useTRPC();
  const { mutate: register, isPending } = useMutation(
    trpc.auth.register.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries(trpc.auth.session.queryFilter());

        toast.success("Account created successfully");
        router.push("/");
      },
      onError: (err) => {
        toast.error(err.message);
      },
    })
  );

  const form = useForm<RegisterSchemaInputs>({
    resolver: zodResolver(REGISTER_SCHEMA),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
    mode: "all",
  });

  const username = form.watch("username");
  const userNameError = form.formState.errors.username;

  const showPreview = username && !userNameError;

  const onSubmit = (inputs: RegisterSchemaInputs) => {
    register(inputs);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="bg-[#F4F4F0] h-screen w-full lg:col-span-3 overflow-y-auto flex items-center justify-center px-2  ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8 p-4 lg:p-16 w-full lg:min-h-[50dvh] max-w-4xl mx-auto border-1 border-black rounded-lg  "
          >
            <div className="flex items-center justify-between mb-8">
              <Logo />
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-base border-none underline"
              >
                <Link prefetch href="/sign-in">
                  Sign in
                </Link>
              </Button>
            </div>
            <h1 className="text-4xl font-medium">
              Join the funroad community and start selling your products.
            </h1>
            <FormField
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Username</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription
                    className={cn("hidden", showPreview && "block")}
                  >
                    Your store will be accessible at&nbsp;
                    <strong>{username}</strong>
                    .funroard.com
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              Create account
            </Button>
          </form>
        </Form>
      </div>
      <BackgroundImage />
    </div>
  );
};
