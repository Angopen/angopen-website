"use client";

import { LogoComponent } from "@/app/components/atoms/logo-component";
import { FinishFeebackModal } from "@/app/components/modals/finish-feedback";
import { BaseButton } from "@/app/components/molecules/base-button";
import { DarkButton } from "@/app/components/molecules/dark-button";
import { Input } from "@/app/components/molecules/input";
import { Textarea } from "@/app/components/molecules/text-area";
import { useIsScrolledToTop } from "@/hoooks/useIsScrolledToTop";
import { ChatLines } from "iconoir-react/regular";
import Link from "next/link";
import { useState } from "react";

export default function FeedbackPage() {
  const isAtTop = useIsScrolledToTop();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="flex items-center flex-col justify-between w-full h-dvh">
      <FinishFeebackModal
        open={openModal}
        onOpenChange={() => setOpenModal(false)}
      />
      <header
        className={`flex sticky top-0 left-0 right-0 items-center justify-between py-4 w-full px-8 z-50 ${isAtTop ? "bg-transparent" : "bg-[#0a0a0a] backdrop-blur-sm border-b border-zinc-800"}`}
      >
        <Link href={"/"}>
          <LogoComponent size={8} />
        </Link>
        <div className="flex items-center gap-4">
          <Link href={"/overview"}>
            <DarkButton className="text-white! bg-transparent! border-none! hover:underline! rounded-lg!">
              Overview
            </DarkButton>
          </Link>
          <Link href={""} className="ret:flex hidden">
            <DarkButton className="text-white! rounded-lg!">
              Bater um papo
            </DarkButton>
          </Link>
          <Link href={""} className="ret:hidden flex">
            <DarkButton className="text-white! size-10 px-0! py-0! rounded-full!">
              <ChatLines className="size-5" />
            </DarkButton>
          </Link>
        </div>
      </header>
      <main className="h-full">
        <main className="w-full max-w-80 mt-10">
          <header>
            <h1 className="text-white text-center text-4xl pt-7 font-extrabold">
              Feedback
            </h1>
            <div className="max-w-80 text-center pt-3 mx-auto">
              <p className="text-sm text-zinc-500">
                Hey, gostaríamos de saber o que achas da{" "}
                <span className="text-base-design">Angopen</span> e como podemos
                melhorar. Deixa aqui o teu feedback, é super importante para
                nós!
              </p>
            </div>
          </header>
          <div className="mt-10 pb-20">
            <div className="flex flex-col gap-3">
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Primeiro nome & Sobrenome"
                className="bg-zinc-900 outline-none focus:border-zinc-500 border border-zinc-700 py-2.5 rounded-lg w-full text-white px-4"
              />
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="dev@dev.com"
                className="bg-zinc-900 outline-none focus:border-zinc-500 border border-zinc-700 py-2.5 rounded-lg w-full text-white px-4"
              />

              <Input
                type="text"
                name="atuation"
                id="atuation"
                placeholder="Área de Atuação"
                className="bg-zinc-900 outline-none focus:border-zinc-500 border border-zinc-700 py-2.5 rounded-lg w-full text-white px-4"
              />

              <Textarea
                name="description"
                id="description"
                rows={4}
                placeholder="Deixa aqui o teu feedback..."
                className="bg-zinc-900 outline-none focus:border-zinc-500 border border-zinc-700 py-2.5 rounded-lg w-full text-white px-4"
              />
              {/*  */}
            </div>
            <BaseButton
              onClick={handleOpenModal}
              className="w-full! mt-6 py-6! font-semibold! rounded-lg! text-base!"
            >
              Enviar Feedback
            </BaseButton>
          </div>
        </main>
      </main>
    </div>
  );
}
