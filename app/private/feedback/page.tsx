"use client";

import { LogoComponent } from "@/app/components/atoms/logo-component";
import { BaseButton } from "@/app/components/molecules/base-button";
import { DarkButton } from "@/app/components/molecules/dark-button";
import { useIsScrolledToTop } from "@/hoooks/useIsScrolledToTop";
import Link from "next/link";

export default function FeedbackPage() {
  const isAtTop = useIsScrolledToTop();

  return (
    <div className="flex items-center flex-col justify-between w-full h-dvh">
      <header
        className={`flex sticky top-0 left-0 right-0 items-center justify-between py-4 w-full px-8 z-50 ${isAtTop ? "bg-transparent" : "bg-[#0a0a0a] backdrop-blur-sm border-b border-zinc-800"}`}
      >
        <Link href={"/"}>
          <LogoComponent size={8} />
        </Link>
        <div className="flex items-center gap-4">
          <DarkButton className="text-white! bg-transparent! border-none! hover:underline! rounded-lg!">
            Documentação
          </DarkButton>
          <DarkButton className="text-white! rounded-lg!">
            Bater um papo
          </DarkButton>
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
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Primeiro nome & Sobrenome"
                className="bg-zinc-900 outline-none focus:border-zinc-500 border border-zinc-700 py-2.5 rounded-lg w-full text-white px-4"
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="dev@dev.com"
                className="bg-zinc-900 outline-none focus:border-zinc-500 border border-zinc-700 py-2.5 rounded-lg w-full text-white px-4"
              />

              <input
                type="text"
                name="atuation"
                id="atuation"
                placeholder="Área de Atuação"
                className="bg-zinc-900 outline-none focus:border-zinc-500 border border-zinc-700 py-2.5 rounded-lg w-full text-white px-4"
              />

              <textarea
                name="description"
                id="description"
                rows={4}
                placeholder="Deixa aqui o teu feedback..."
                className="bg-zinc-900 outline-none focus:border-zinc-500 border border-zinc-700 py-2.5 rounded-lg w-full text-white px-4"
              />
              <div className="pt-4 text-center">
                <span className="text-white">Nível de Impacto</span>
                <div className="flex mt-3 justify-center items-center gap-4">
                  {["1", "2", "3", "4", "5"].map((item) => (
                    <DarkButton
                      key={item}
                      className="w-full! size-10! leading-0! px-0! py-0! text-white! font-mono! text-base! font-semibold! rounded-full!"
                    >
                      {item}
                    </DarkButton>
                  ))}
                </div>
              </div>
            </div>
            <BaseButton className="w-full! mt-6 py-6! font-semibold! rounded-lg! text-base!">
              Enviar Feedback
            </BaseButton>
          </div>
        </main>
      </main>
    </div>
  );
}
