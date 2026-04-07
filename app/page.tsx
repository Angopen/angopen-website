"use client";

import Link from "next/link";
import AnimatedBackground from "./components/molecules/background-animated";
import {
  allTechLanguages,
  comments,
  features,
  footerContent,
  menuNavbar,
  openSourceAgents,
} from "./types";
import { ArrowRight, ArrowUpRight, Check, Search } from "lucide-react";
import { DarkButton } from "./components/molecules/dark-button";
import { BaseButton } from "./components/molecules/base-button";
import { useIsScrolledToTop } from "@/hoooks/useIsScrolledToTop";
import { LogoComponent } from "./components/atoms/logo-component";
import { useRouter } from "next/navigation";

export default function Home() {
  const isAtTop = useIsScrolledToTop(10);
  const router = useRouter();

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-dvh">
        <AnimatedBackground
          variant="square"
          pixelSize={4}
          color={"#2e2e2e"}
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.4}
          edgeFade={0.25}
          transparent
        />
      </div>
      <div
        className={`flex py-5 z-50 sticky
          ${isAtTop ? "bg-transparent" : "bg-[#0a0a0a] border-b border-zinc-900"}
          top-0 left-0 right-0 items-center px-20 justify-between`}
      >
        <div className="flex items-center gap-3">
          <LogoComponent size={7} />
          <p className="text-2xl text-white tracking-widest  mt-2 font-extrabold">
            Angopen
          </p>
        </div>
        <nav className="flex items-center gap-16">
          <DarkButton>
            <Search className="size-4 text-white/50" />
            <p className="pt-0.5 font-semibold! text-[15px] text-white">
              Pesquisa
            </p>
          </DarkButton>
          {menuNavbar.map((item, index) => (
            <Link
              className="font-semibold! transition-all hover:text-white/60 text-[15px] text-white"
              key={index}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
          <BaseButton onClick={() => router.push("/signin")}>
            <p className="pt-0.5 font-semibold! text-[15px] text-white">
              Entrar
            </p>
          </BaseButton>
        </nav>
      </div>
      <header className="relative z-10">
        <section>
          <div className="max-w-xl pt-32 mx-auto text-center">
            <h1 className="text-white text-7xl leading-20 font-semibold">
              O Hub do <span className="text-base-design">Open Source</span>{" "}
              Angolano
            </h1>
            <div className="pt-10">
              <p className="text-lg text-white">
                Descubra, colabore e impulsione o ecossistema de software livre
                em Angola. Junte-se a nós para construir um futuro tecnológico
                mais aberto e inovador.
              </p>
            </div>
            <div className="pt-10 flex items-center justify-center gap-5">
              <BaseButton>
                <p className="pt-0.5 font-semibold! text-[15px] text-white">
                  Junte-se a nós
                </p>
                <ArrowUpRight className="size-4 stroke-4 text-white/50" />
              </BaseButton>
              <DarkButton>
                <p className="pt-0.5 font-semibold! text-[15px] text-white">
                  Explorar Plataforma
                </p>
              </DarkButton>
            </div>
          </div>
        </section>

        <section className="mt-20 mx-20 super_shadow bg-[#0a0a0a] p-8 rounded-2xl border border-zinc-900">
          <header>
            <h2 className="text-3xl text-white font-semibold">
              Profissionais Open Source
            </h2>
            <p className="text-zinc-600 text-lg uppercase">Angola</p>
          </header>
          <div className="mt-10 grid grid-cols-4 gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border border-zinc-900 justify-between rounded-2xl  bg-zinc-900/20"
              >
                <header className="">
                  <div className="flex p-5 border-b border-zinc-900 items-center gap-4">
                    <div>
                      <img src={item.image} className="size-10 rounded-full" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{item.name}</p>
                      <p className="text-zinc-400 text-sm">{item.area}</p>
                    </div>
                  </div>
                  <div className="mt-1 p-5">
                    <p className="text-white text-sm">
                      {item.comment.length > 100
                        ? item.comment.substring(0, 100) + "..."
                        : item.comment}
                    </p>

                    <div className="flex flex-wrap mt-5 items-center gap-3">
                      {item.languages.map((language, index) => (
                        <div
                          key={index}
                          className="flex py-1.5 items-center px-3 rounded-full bg-zinc-900 border border-zinc-800"
                        >
                          <div
                            className="size-2.5 rounded-full"
                            style={{
                              backgroundColor:
                                allTechLanguages.find(
                                  (lang) => lang.name == language,
                                )?.color || "#999",
                            }}
                          />
                          <p className="text-sm text-white ml-2 font-semibold">
                            {language}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </header>
                <footer className="border-t border-zinc-900  flex items-center justify-between">
                  <button className="w-full cursor-pointer  py-4 flex items-center text-white justify-between px-4 gap-2 font-semibold! text-sm transition-all hover:bg-zinc-900/80 rounded-b-2xl">
                    Visitar Perfil
                    <ArrowRight className="size-4 stroke-2 text-white/50" />
                  </button>
                </footer>
              </div>
            ))}
          </div>
          <footer className="flex items-center justify-end mt-10">
            <DarkButton>
              <p className="pt-0.5 font-semibold! text-[15px] text-white">
                Deixar Feedback
              </p>
              <ArrowUpRight className="size-4 stroke-4 text-white/50" />
            </DarkButton>
          </footer>
        </section>
      </header>

      <main className="mt-42  px-20">
        <section id="system">
          <header>
            <p className="text-zinc-500 pb-5 text-center uppercase text-lg">
              Sistema
            </p>
            <h2 className="text-white max-w-3xl mx-auto leading-16 text-5xl text-center font-extrabold">
              Commitando para um Ecossistema de Software Livre
            </h2>
          </header>
          <div className="mt-16 max-w-5xl mx-auto grid grid-cols-10 gap-2">
            {features.map((item, index) => (
              <div
                key={index}
                className={`h-80 p-5 ${index == 0 ? "col-span-4" : index == 1 ? "col-span-6" : "col-span-5"} relative bg-zinc-900/30 flex overflow-hidden transition-all group hover:border-base-design cursor-pointer flex-col justify-between rounded-2xl border border-zinc-900`}
              >
                <span className="absolute group-hover:-bottom-7 group-hover:-right-10 transition-all -bottom-10 -right-12">
                  {
                    <item.icon
                      className={`size-40 text-white/20 transition-all group-hover:text-base-design/40 `}
                    />
                  }
                </span>
                <div>
                  <header className="flex gap-3 items-center">
                    <span>
                      {<item.icon className={`size-6 text-white `} />}
                    </span>
                    <h3 className="text-white! text-xl font-semibold">
                      {item.title}
                    </h3>
                  </header>
                  <div className="pt-5 max-w-sm">
                    <p className="text-zinc-500 text-lg">{item.description}</p>
                  </div>
                </div>

                <footer className="flex flex-col gap-2">
                  {item.tags.map((tag, index) => (
                    <p key={index} className="flex items-center ">
                      <Check className="size-4 text-white" />
                      <span className="text-white ml-2 text-sm">{tag}</span>
                    </p>
                  ))}
                </footer>
              </div>
            ))}
          </div>
        </section>

        <section id="community" className="mt-40">
          <header>
            <p className="text-zinc-500 pb-5 text-center uppercase text-lg">
              Comunidade
            </p>
            <h2 className="text-white max-w-2xl mx-auto leading-16 text-5xl text-center font-extrabold">
              Juntos, Construindo um Futuro de Código Aberto
            </h2>
            <p className="text-zinc-500 mt-5 text-center text-lg max-w-xl mx-auto">
              A comunidade é o coração da{" "}
              <span className="text-white">Angopen</span>. Junte-se a nós para{" "}
              <span className="text-white">compartilhar conhecimentos</span>,
              colaborar em projetos e impulsionar o{" "}
              <span className="text-white">ecossistema</span>.
            </p>
          </header>

          <div className="max-w-4xl mx-auto items-start  relative overflow-hidden  mt-16 flex flex-col gap-8">
            <div className="w-full h-full absolute top-0 left-0 right-0 flex items-center justify-between">
              <div className="h-full w-40 bg-linear-to-r from-[#0a0a0a] to-transparent" />
              <div className="h-full w-40 bg-linear-to-r to-[#0a0a0a] from-transparent" />
            </div>
            <div className="flex items-center flex-nowrap gap-3">
              {openSourceAgents.slice(0, 8).map((agent, index) => (
                <p
                  key={index}
                  className="bg-zinc-900 text-white whitespace-nowrap rounded-full border border-base-design/40 px-3 py-2"
                >
                  {agent}
                </p>
              ))}
            </div>
          </div>
          <div className="max-w-3xl mx-auto items-start mt-5 relative overflow-hidden  flex flex-col gap-8">
            <div className="w-full h-full absolute top-0 left-0 right-0 flex items-center justify-between">
              <div className="h-full w-40 bg-linear-to-r from-[#0a0a0a] to-transparent" />
              <div className="h-full w-40 bg-linear-to-r to-[#0a0a0a] from-transparent" />
            </div>
            <div className="flex items-center flex-nowrap gap-3">
              {openSourceAgents.slice(8, 18).map((agent, index) => (
                <p
                  key={index}
                  className="bg-zinc-900 text-white whitespace-nowrap rounded-full border border-base-design/40 px-3 py-2"
                >
                  {agent}
                </p>
              ))}
            </div>
          </div>
          <div className="max-w-2xl mx-auto items-start mt-5 relative overflow-hidden  flex flex-col gap-8">
            <div className="w-full h-full absolute top-0 left-0 right-0 flex items-center justify-between">
              <div className="h-full w-40 bg-linear-to-r from-[#0a0a0a] to-transparent" />
              <div className="h-full w-40 bg-linear-to-r to-[#0a0a0a] from-transparent" />
            </div>
            <div className="flex items-center flex-nowrap gap-3">
              {openSourceAgents.slice(19, 25).map((agent, index) => (
                <p
                  key={index}
                  className="bg-zinc-900 text-white whitespace-nowrap rounded-full border border-base-design/40 px-3 py-2"
                >
                  {agent}
                </p>
              ))}
            </div>
          </div>

          <footer className="flex items-center justify-center mt-12">
            <BaseButton className="text-white font-semibold">
              Juntar-se à Comunidade
            </BaseButton>
          </footer>
        </section>
      </main>

      <footer className="border-t p-5 pt-10 mt-20 border-zinc-900">
        <div className="w-full max-w-[90%] mx-auto grid grid-cols-[40%_20%_20%_20%] ">
          <header className="max-w-xs">
            <p className="flex items-center gap-3 text-white text-2xl">
              <LogoComponent size={8} />
              <span className="mt-2">{footerContent.brand.name}</span>
            </p>
            <p className="text-zinc-600 pt-5">{footerContent.brand.slogan}</p>

            <p className="text-zinc-100 underline pt-3">
              {footerContent.brand.email}
            </p>
          </header>
          {footerContent.sections.map((section, index) => (
            <div key={index}>
              <h5 className="text-zinc-600 text-lg">{section.title}</h5>

              <div className="flex flex-col mt-7 gap-5">
                {section.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-white/80 hover:underline hover:text-white transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t max-w-[90%] mx-auto flex items-center justify-between border-zinc-900 mt-10 pt-8">
          <div>
            <p className="text-zinc-600">{footerContent.brand.copyright}</p>
          </div>
          <div className="flex items-center gap-8">
            {footerContent.bottom.legal.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white/80 hover:underline hover:text-white transition-all text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
