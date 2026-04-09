
import { LogoComponent } from "../components/atoms/logo-component";
import { BaseButton } from "../components/molecules/base-button";
import Link from "next/link";
import { Input } from "../components/molecules/input";

export default function ResetPassword() {
  return (
    <div className="flex items-center justify-center w-full h-dvh">
      <div className="pot:max-w-xl px-5 flex flex-col items-center w-full mx-auto ">
        <header className="flex flex-col items-center">
          <Link href={"/"} className="">
            <LogoComponent size={9} />
          </Link>
          <h1 className="text-white text-3xl ret:text-3xl pt-7 font-extrabold">
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
            <BaseButton className="w-full! mt-3 py-6! font-semibold! rounded-lg! text-base!">
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
    </div>
  );
}
