import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import Input from "../components/Input";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Auth() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant(variant === "login" ? "register" : "login");
  }, [variant]);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-white w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-4 flex items-end gap-1">
          <img src="/images/logo.png" alt="logo" className="h-8" />
          <span className="text-xl font-semibold">OC</span>
        </nav>

        <div className="flex justify-center mx-4">
          <div className="bg-[var(--color-primary)] bg-opacity-30 px-16 py-10 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full shadow-md">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Se connecter" : "S'enregistrer"}
            </h2>

            <div className="flex flex-col gap-4">
              {variant === "register" ? (
                <Input
                  label="Username"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  type="text"
                  value={name}
                />
              ) : null}

              <Input
                label="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                type="email"
                value={email}
              />

              <Input
                label="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                type="password"
                value={password}
              />
            </div>

            <button
              onClick={variant === "login" ? login : register}
              className="bg-orange-500 py-3 text-white rounded-md w-full mt-10 hover:bg-orange-600 transition"
            >
              {variant === "login" ? "Vous connecter" : "Vous enregistrer"}
            </button>

            <div className="flex flex-row items-center justify-center gap-4 mt-8">
              <div
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={30} />
              </div>

              <div
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={30} />
              </div>
            </div>

            <p className="text-neutral-300 mt-12">
              {variant === "login"
                ? "Nouveau sur BOC ?"
                : "Vous avez déjà un compte ?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Vous enregistrer." : "Vous connecter."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
