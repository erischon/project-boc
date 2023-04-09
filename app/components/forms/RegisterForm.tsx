"use client";

import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

import Form from "./Form";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";

/**
 * @description Register form component.
 */
const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Form control
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Handle form submit
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .catch((err) => {
        toast.error("Une erreur est survenue");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Form body content
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Bienvenue sur BOC" subtitle="Créez un compte" />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="name"
        label="Nom"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        type="password"
        label="Mot de passe"
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
        onClick={() => {}}
      />

      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="">Vous avez déjà un compte ?</div>

          <div
            onClick={() => {}}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Connexion
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Form
        disabled={isLoading}
        title="Inscription"
        actionLabel="Continuer"
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default RegisterForm;
