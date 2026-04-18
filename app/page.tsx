"use client";

import Link from "next/link";
import AnimatedBackground from "./components/molecules/background-animated";
import {
  allTechLanguages,
  comments,
  features,
  menuNavbar,
  openSourceAgents,
} from "./types";
import { ArrowRight, ArrowUpRight, List, Target } from "lucide-react";
import { DarkButton } from "./components/molecules/dark-button";
import { BaseButton } from "./components/molecules/base-button";
import { useIsScrolledToTop } from "@/hoooks/useIsScrolledToTop";
import { LogoComponent } from "./components/atoms/logo-component";
import { useRouter } from "next/navigation";
import FooterComponent from "./components/molecules/footer-component";
import { Menu } from "iconoir-react/regular";
import { MobileMenu } from "./components/sheets/mobile-menu";
import { useState } from "react";

export default function Home() {
  const isAtTop = useIsScrolledToTop(10);
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 100; // altura do teu navbar em px
    const top =
      element.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div>
      <MobileMenu
        open={openMenu}
        onOpenChange={() => {
          setOpenMenu((prev) => !prev);
        }}
      />
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
        className={`flex pot:py-5 py-4 z-50 sticky
          ${isAtTop ? "bg-transparent" : "bg-[#0a0a0a] border-b border-zinc-900"}
          top-0 left-0 right-0 items-center px-6 pot:px-20 justify-between`}
      >
        <div className="flex items-center gap-3">
          <LogoComponent size={7} />
          <p className="ret:text-2xl text-xl text-white uppercase tracking-widest  mt-2 pot:font-extrabold">
            Angopen
          </p>
        </div>
        <nav className="flex items-center gap-16">
          {/* <DarkButton className="pot:flex! hidden!">
            <Search className="size-4 text-white/50" />
            <p className="pt-0.5 pot:font-semibold! text-[15px] text-white">
              Pesquisa
            </p>
          </DarkButton> */}
          {menuNavbar.map((item, index) => (
            <button
              className="pot:font-semibold! cursor-pointer pot:flex hidden transition-all hover:text-white/60 text-[15px] text-white"
              key={index}
              onClick={() => {
                if (item.type === "internal") {
                  scrollToSection(item.href);
                } else if (item.type === "external") {
                  router.push(item.href);
                }
              }}
            >
              {item.name}
            </button>
          ))}
          <BaseButton
            onClick={() => router.push("/private/feedback")}
            className="pot:flex! hidden!"
          >
            <p className="pt-0.5 pot:font-semibold! text-[15px] text-white">
              Contribuir
            </p>
          </BaseButton>
          <button
            onClick={() => setOpenMenu(true)}
            className="pot:hidden cursor-pointer flex items-center justify-center text-white p-2 rounded-md"
          >
            <Menu className="size-6 " />
          </button>
        </nav>
      </div>
      <header id="home" className="relative z-10">
        <section>
          <div className="pot:max-w-xl pot:px-0 px-5 pt-32 mx-auto text-center">
            <h1 className="text-white ret:text-6xl text-4xl pot:text-7xl pot:leading-20 pot:font-semibold">
              O Hub do <span className="text-base-design">Open Source</span>{" "}
              Angolano
            </h1>
            <div className="pt-10">
              <p className="ret:text-lg text-white">
                Descubra, colabore e impulsione o ecossistema de software livre
                em Angola. Junte-se a nós para construir um futuro tecnológico
                mais aberto e inovador.
              </p>
            </div>
            <div className="pt-10 px-5 w-full flex ret:flex-row flex-col items-center justify-center gap-3 ret:gap-5">
              <BaseButton
                onClick={() => {
                  const url = process.env.NEXT_PUBLIC_WHATSAPP_GROUP;
                  if (url) window.open(url, "_blank", "noopener,noreferrer");
                }}
                className="ret:w-auto w-full"
              >
                <p className="pt-0.5 pot:font-semibold! text-[15px]  text-white">
                  Junte-se a nós
                </p>
                <ArrowUpRight className="size-4 stroke-4 text-white/50" />
              </BaseButton>
              <DarkButton
                onClick={() => router.push("/overview")}
                className="ret:w-auto w-full"
              >
                <p className="pt-0.5 pot:font-semibold! text-[15px] text-white">
                  Visão Geral
                </p>
              </DarkButton>
            </div>
          </div>
        </section>

        <section className="mt-20 pot:mx-20 mx-3 super_shadow bg-[#0a0a0a] p-8 rounded-2xl border border-zinc-900">
          <header>
            <h2 className="text-3xl text-white pot:font-semibold">
              Profissionais Open Source
            </h2>
            <p className="text-zinc-600 text-lg uppercase">Angola</p>
          </header>
          <div className="mt-10 grid ret:grid-cols-2 grid-cols-1 pot:grid-cols-4 gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border border-zinc-900 justify-between rounded-2xl  bg-zinc-900/20"
              >
                <header className="">
                  <div className="flex p-5 border-b border-zinc-900 items-center gap-4">
                    <div>
                      <div
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                        className="bg-cover rounded-full bg-center size-10"
                      />
                    </div>
                    <div>
                      <p className="text-white pot:font-semibold">{item.name}</p>
                      <p className="text-zinc-400 line-clamp-1 text-sm">
                        {item.area}
                      </p>
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
                          <p className="text-sm text-white ml-2 pot:font-semibold">
                            {language}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </header>
                <footer className="border-t border-zinc-900  flex items-center justify-between">
                  <button
                    onClick={() => window.open(item.linkedin, "_blank")}
                    className="w-full cursor-pointer  py-4 flex items-center text-white justify-between px-4 gap-2 pot:font-semibold! text-sm transition-all hover:bg-zinc-900/80 rounded-b-2xl"
                  >
                    Visitar Perfil
                    <ArrowRight className="size-4 stroke-2 text-white/50" />
                  </button>
                </footer>
              </div>
            ))}
          </div>
          <footer className="flex items-center justify-end mt-10">
            <Link href={"/private/feedback"}>
              <DarkButton>
                <p className="pt-0.5 pot:font-semibold! text-[15px] text-white">
                  Deixar Feedback
                </p>
                <ArrowUpRight className="size-4 stroke-4 text-white/50" />
              </DarkButton>
            </Link>
          </footer>
        </section>
      </header>

      <main className="mt-42 px-6 pot:px-20">
        <section id="system">
          <header>
            <p className="text-zinc-500 pb-5 text-center uppercase text-lg">
              Sistema
            </p>
            <h2 className="text-white max-w-3xl mx-auto pot:leading-16 ret:text-4xl text-3xl pot:text-5xl text-center pot:font-extrabold">
              Commitando para um Ecossistema de Software Livre
            </h2>
          </header>
          <div className="mt-16 pot:max-w-6xl mx-auto grid ret:grid-cols-2 pot:grid-cols-10 gap-2">
            {features.map((item, index) => (
              <div
                key={index}
                className={`h-80 p-5 ${index == 0 ? "pot:col-span-4" : index == 1 ? "pot:col-span-6" : "pot:col-span-5"} relative bg-zinc-900/30 flex overflow-hidden transition-all group hover:border-base-design cursor-pointer flex-col justify-between rounded-2xl border border-zinc-900`}
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
                    <h3 className="text-white! text-xl pot:font-semibold">
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
                      <List className="size-4 text-zinc-500" />
                      <span className="text-white ml-2 ">{tag}</span>
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
            <h2 className="text-white max-w-2xl mx-auto pot:leading-16 text-3xl ret:text-4xl pot:text-5xl text-center pot:font-extrabold">
              Juntos, Construindo um Futuro de Código Aberto
            </h2>
            <p className="text-zinc-500 mt-5 text-center pot:text-lg max-w-xl mx-auto">
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
            <BaseButton
              onClick={() => {
                const url = process.env.NEXT_PUBLIC_WHATSAPP_GROUP;
                if (url) window.open(url, "_blank", "noopener,noreferrer");
              }}
              className="text-white pot:font-semibold"
            >
              Juntar-se à Comunidade
            </BaseButton>
          </footer>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
}
