"use client";

import { LogoComponent } from "../components/atoms/logo-component";
import { BaseButton } from "../components/molecules/base-button";
import Link from "next/link";
import { Input } from "../components/molecules/input";
import { useState } from "react";
import { RiMailSendLine } from "@remixicon/react";

export default function ResetPassword() {
  const [emailSent, setEmailSent] = useState(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("emailSent") === "true";
    }
    return false;
  });

  const handleSubmit = () => {
    setEmailSent(true);
    window.history.pushState({}, "", "/reset?emailSent=true");
  };

  return (
    <div className="flex items-center justify-center w-full h-dvh">
      {emailSent ? (
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center">
          <RiMailSendLine className="size-28 text-zinc-600" strokeWidth={1} />
          <div className="text-center flex flex-col justify-center items-center max-w-xs pt-8">
            <h5 className="text-white font-semibold text-3xl">
              Instruções Enviadas
            </h5>
            <p className="text-zinc-500 pt-5">
              Verifique seu e-mail para obter as instruções de redefinição de
              senha.
            </p>
            <BaseButton
              onClick={() => {
                setEmailSent(false);
                window.history.pushState({}, "", "/reset");
              }}
              className="mt-8 py-6! w-full font-semibold! rounded-lg! text-base!"
            >
              Enviar Novamente
            </BaseButton>
            <Link
              href={"/signin"}
              className="text-white hover:underline hover:text-white/70 transition-all group mt-8 block"
            >
              Voltar para Login
            </Link>
          </div>
        </div>
      ) : (
        <div className="pot:max-w-xl px-5 flex flex-col items-center w-full mx-auto ">
          <header className="flex flex-col items-center">
            <Link href={"/"} className="">
              <LogoComponent size={9} />
            </Link>
            <h1 className="text-white text-2xl ret:text-3xl pt-7 font-extrabold">
              Redefinir Palavra-chave
            </h1>
            <div className="max-w-80 text-center pt-3 mx-auto">
              <p className="ret:text-sm text-base text-zinc-500">
                Insira seu e-mail para receber as instruções de redefinição de
                senha.
              </p>
            </div>
          </header>
          <main className="w-full max-w-80 mt-10">
            <div>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="E-mail"
                className="bg-zinc-900 outline-none focus:border-zinc-500 border border-zinc-700 py-2.5 rounded-lg w-full text-white px-4"
              />
              <BaseButton
                onClick={handleSubmit}
                className="w-full! mt-3 py-6! font-semibold! rounded-lg! text-base!"
              >
                Enviar Instruções
              </BaseButton>
            </div>
          </main>
          <footer className="text-center mt-6 w-full">
            <Link
              href={"/signin"}
              className="text-white hover:underline hover:text-white/70 transition-all group"
            >
              Voltar para Login
            </Link>
          </footer>
        </div>
      )}
    </div>
  );
}
