"use client";

import axios from "axios";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { FcGoogle } from "react-icons/fc";

import Form from "./Form";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";

/**
 * @description Login Form component
 */
const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // Form control
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submit
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.error) {
        toast.error(`Une erreur est survenue. ${callback.error}}`);
      }

      if (callback?.ok) {
        toast.success("Vous êtes connecté");
        router.push("/dashboard");
      }
    });
  };

  // Form body content
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Bienvenue sur BOC" subtitle="Connexion à votre compte" />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  // Form footer content
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <div className="relative flex py-4 items-center">
        <div className="flex-grow border-t border-neutral-400"></div>
        <span className="flex-shrink mx-6 text-neutral-400">ou</span>
        <div className="flex-grow border-t border-neutral-400"></div>
      </div>

      <Button
        outline
        label="Continuer avec Google"
        icon={FcGoogle}
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      />

      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="">Vous n&apos;avez pas de compte ?</div>

          <div
            onClick={() => {}}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Inscription
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Form
      disabled={isLoading}
      title="Connexion"
      actionLabel="Continuer"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginForm;
