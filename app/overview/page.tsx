"use client";

import Link from "next/link";
import { LogoComponent } from "../components/atoms/logo-component";
import { DarkButton } from "../components/molecules/dark-button";
import { useIsScrolledToTop } from "@/hoooks/useIsScrolledToTop";
import { useEffect, useState } from "react";
import { Github } from "iconoir-react/regular";
import {
  communityBenefits,
  communityFeatures,
  functionalities,
  userPersonas,
} from "./types";
import FooterComponent from "../components/molecules/footer-component";
import { BaseButton } from "../components/molecules/base-button";

export default function Overview() {
  const isAtTop = useIsScrolledToTop();
  const [, setGitStars] = useState<number | null>(null);

  useEffect(() => {
    const getStarsGithub = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/Angopen/angopen-website",
          {
            next: { revalidate: 3600 },
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          },
        );

        if (!res.ok) throw new Error("Falha ao buscar dados");

        const data = await res.json();
        setGitStars(data.stargazers_count);
      } catch (error) {
        console.error("Erro ao buscar stars:", error);
        setGitStars(0);
      }
    };

    getStarsGithub();
  }, []);

  return (
    <div>
      <header
        className={` sticky top-0 left-0 right-0  py-4 w-full px-6 pot:px-20 z-50 ${isAtTop ? "bg-transparent" : "bg-[#0a0a0a] backdrop-blur-sm border-b border-zinc-800"}`}
      >
        <div className="pot:max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href={"/"}
            className="flex gap-3 uppercase items-center text-white text-xl font-semibold"
          >
            <LogoComponent size={7} />
            <span className="mt-2">Angopen</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href={"/private/feedback"} className="ret:flex hidden">
              <BaseButton className="text-white!  font-semibold rounded-lg!">
                Deixe seu Feedback
              </BaseButton>
            </Link>
            <DarkButton
              onClick={() => window.open("https://github.com/Angopen")}
              className="text-white! font-semibold rounded-lg!"
            >
              <Github className="inline-block" />
              Github
            </DarkButton>
          </div>
        </div>
      </header>

      <main className="mt-16">
        <section className="pot:max-w-3xl pot:px-0 px-5 mx-auto">
          <header className="">
            <h1 className="text-white text-3xl ret:text-4xl ">Visão Geral</h1>
            <p className="text-zinc-400 pt-7">
              Criar o maior ecossistema digital de Angola, onde o talento
              nacional deixa de ser invisível. Queremos centralizar o que é
              produzido de Luanda ao Cunene, conectando desenvolvedores,
              soluções e oportunidades.
            </p>
          </header>

          <div>
            <p className="text-zinc-400 pt-2">
              Um ponto de encontro exclusivo para Devs Angolanos. Não é apenas
              um repositório, é o seu bilhete de identidade técnico.
            </p>

            <div className="flex flex-col gap-3 mt-6">
              {communityFeatures.map((feature, index) => (
                <p
                  key={index}
                  className="flex items-center text-zinc-400 gap-3"
                >
                  <span className="text-zinc-600">-</span>
                  <span>
                    <span className="font-semibold uppercase text-white">
                      {feature.title}
                    </span>
                    . {feature.description}
                  </span>
                </p>
              ))}
            </div>

            <div className="mt-10 border-t grid pt-10 grid-cols-1 border-zinc-900">
              <div className="flex border-b pb-5 border-zinc-900 items-center justify-between">
                <p className="text-white">Funcionalidade</p>
                <p className="text-white">O que ganhas com isso?</p>
              </div>
              {functionalities.map((feature, index) => (
                <div
                  key={index}
                  className="flex py-5 border-b border-zinc-900 flex-wrap gap-4  items-center justify-between"
                >
                  <p className="text-white">{feature.title}</p>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <header>
                <h2 className="text-white text-3xl pt-10">
                  Porque participar?
                </h2>
              </header>
              <div className="flex flex-col gap-3 mt-6">
                {communityBenefits.map((feature, index) => (
                  <p
                    key={index}
                    className="flex items-center text-zinc-400 gap-3"
                  >
                    <span className="text-zinc-600">-</span>
                    <span>
                      <span className=" text-white">{feature.title}</span>.{" "}
                      {feature.description}
                    </span>
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-zinc-900">
              <header>
                <h2 className="text-white text-2xl pt-10">
                  Quem pode participar?
                </h2>
              </header>
              <div className="grid ret:grid-cols-2 grid-cols-1 pot:grid-cols-3 gap-3 mt-6">
                {userPersonas.map((persona, index) => (
                  <div
                    key={index}
                    className="p-5 flex flex-col justify-between h-52 bg-zinc-900/30 border border-zinc-900 rounded-2xl"
                  >
                    <div className="flex flex-col gap-3">
                      {persona.title === "O Iniciante" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="text-base-design size-6"
                          fill="currentColor"
                        >
                          <path d="M9 3V5H6V19H9V21H4V3H9ZM15 3H20V21H15V19H18V5H15V3Z"></path>
                        </svg>
                      )}
                      {persona.title === "O Freelancer/Líder" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="text-base-design size-6"
                          fill="currentColor"
                        >
                          <path d="M4 18V14.3C4 13.4716 3.32843 12.8 2.5 12.8H2V11.2H2.5C3.32843 11.2 4 10.5284 4 9.7V6C4 4.34315 5.34315 3 7 3H8V5H7C6.44772 5 6 5.44772 6 6V10.1C6 10.9858 5.42408 11.7372 4.62623 12C5.42408 12.2628 6 13.0142 6 13.9V18C6 18.5523 6.44772 19 7 19H8V21H7C5.34315 21 4 19.6569 4 18ZM20 14.3V18C20 19.6569 18.6569 21 17 21H16V19H17C17.5523 19 18 18.5523 18 18V13.9C18 13.0142 18.5759 12.2628 19.3738 12C18.5759 11.7372 18 10.9858 18 10.1V6C18 5.44772 17.5523 5 17 5H16V3H17C18.6569 3 20 4.34315 20 6V9.7C20 10.5284 20.6716 11.2 21.5 11.2H22V12.8H21.5C20.6716 12.8 20 13.4716 20 14.3Z"></path>
                        </svg>
                      )}
                      {persona.title === "O Entusiasta" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="text-base-design size-6"
                          fill="currentColor"
                        >
                          <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 7C11.4872 7 10.9925 7.07719 10.5269 7.21995C11.3954 7.61175 12 8.48527 12 9.5C12 10.8807 10.8807 12 9.5 12C8.48527 12 7.61175 11.3954 7.22057 10.5268C7.07719 10.9925 7 11.4872 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z"></path>
                        </svg>
                      )}
                      <h4 className=" text-white font-semibold">
                        {persona.title}
                      </h4>
                    </div>
                    <p className="text-zinc-500">{persona.description}</p>
                  </div>
                ))}
              </div>
              <Link href={"/signup"}>
                <BaseButton className="mt-10 ret:w-auto! w-full! py-6! font-semibold! rounded-lg! text-base!">
                  Quero Participar
                </BaseButton>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
}
