import { Mailbox } from "lucide-react";
import { LogoComponent } from "../components/atoms/logo-component";
import { BaseButton } from "../components/molecules/base-button";
import { DarkButton } from "../components/molecules/dark-button";
import { Github } from "iconoir-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center w-full h-dvh">
      <div className="max-w-xl flex flex-col items-center w-full mx-auto ">
        <header className="flex flex-col items-center">
          <LogoComponent size={9} />
          <h1 className="text-white text-4xl pt-7 font-extrabold">
            Iniciar Sessão
          </h1>
          <div className="max-w-80 text-center pt-3 mx-auto">
            <p className="text-sm text-zinc-500">
              Inicie sessão para acessar o painel de controle e gerenciar suas
              tarefas de forma eficiente.
            </p>
          </div>
        </header>
        <main className="w-full max-w-80 mt-10">
          <div>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
              className="bg-zinc-900 outline-none focus:border-zinc-500 border border-zinc-700 py-2.5 rounded-lg w-full text-white px-4"
            />
            <BaseButton className="w-full! mt-3 py-6! font-semibold! rounded-lg! text-base!">
              Entrar
            </BaseButton>
          </div>

          <div className="w-full border-t pt-8 flex flex-col gap-3 mt-8 border-zinc-900">
            <DarkButton className="w-full! py-6! text-white! text-base! font-semibold! rounded-lg!">
              <p>
                <Mailbox size={6} className="size-6" />
              </p>
              Entrar com Google
            </DarkButton>
            <DarkButton className="w-full! py-6!  text-white! text-base! font-semibold! rounded-lg!">
              <Github className="size-5" />
              Entrar com Github
            </DarkButton>
          </div>
        </main>
        <footer className="text-center mt-6 w-full">
          <Link href={"/signup"} className="text-white transition-all group">
            Não tem uma conta?{" "}
            <span className="text-base-design group-hover:underline">
              Registrar-se
            </span>
          </Link>
        </footer>
      </div>
    </div>
  );
}
