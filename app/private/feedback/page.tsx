"use client";

import { LogoComponent } from "@/app/components/atoms/logo-component";
import { BaseButton } from "@/app/components/molecules/base-button";
import { DarkButton } from "@/app/components/molecules/dark-button";
import { Input } from "@/app/components/molecules/input";
import { Textarea } from "@/app/components/molecules/text-area";
import { useIsScrolledToTop } from "@/hoooks/useIsScrolledToTop";
import { ChatLines } from "iconoir-react/regular";
import Link from "next/link";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm, useWatch } from "react-hook-form";
import { FinishFeebackModal } from "@/app/components/modals/finish-feedback";
import { toast } from "sonner";
import axios from "axios";

type FeedbackForm = {
  name: string;
  email: string;
  message: string;
  profession: string;
};

type FeedbackPayload = FeedbackForm & {
  province: string;
  evaluation: number;
};

// ─── api ────────────────────────────────────────────────────────────────────

async function fetchFeedback() {
  try {
    const res = await axios.get("/api/feedbacks");
    return res.data.data;
  } catch (error) {
    throw error;
  }
}

async function submitFeedback(data: FeedbackPayload) {
  try {
    const res = await axios.post("/api/feedbacks", data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

// ─── componente de erro ─────────────────────────────────────────────────────

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1 text-red-200 text-sm mt-3 ps-2">
      {message}
    </p>
  );
}

// ─── página ─────────────────────────────────────────────────────────────────

export default function FeedbackPage() {
  const feedback = useQuery({
    queryKey: ["feedback"],
    queryFn: fetchFeedback,
  });

  const feedbackMutation = useMutation({
    mutationFn: submitFeedback,
    onSuccess: (data) => {
      console.log("Feedback enviado com sucesso:", data);
      feedback.refetch();
      setOpenModal(false);
      reset();
      toast.success("Feedback enviado com sucesso! Obrigado.", {
        duration: 5000,
        position: "top-right",
      });
    },
    onError: (error) => {
      console.error("Erro ao enviar feedback:", error);
      if (axios.isAxiosError(error)) {
        const mensagem =
          error.response?.data?.message ||
          error.response?.data?.error ||
          "Ops, algo deu errado ao enviar o feedback. Tente novamente.";
        toast.error(mensagem);
        return;
      }
      toast.error("Ops, erro no servidor. Tente novamente.");
    },
  });

  const isAtTop = useIsScrolledToTop();
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    control,
    formState: { errors },
  } = useForm<FeedbackForm>({
    defaultValues: {
      name: "",
      email: "",
      profession: "",
      message: "",
    },
  });

  // abre o modal só se o form for válido
  const onValid = () => setOpenModal(true);

  // chamado pelo modal ao confirmar — recebe province e evaluation
  const handleSubmitFinal = (
    province: string,
    evaluation: number,
  ): Promise<void> => {
    return feedbackMutation
      .mutateAsync({
        ...getValues(),
        province,
        evaluation,
      })
      .catch(() => {
        // deixa o onError da mutation tratar — só evita o unhandled rejection
      });
  };
  return (
    <div className="flex items-center flex-col justify-between w-full h-dvh">
      <FinishFeebackModal
        open={openModal}
        onOpenChange={() => setOpenModal(false)}
        onSubmit={handleSubmitFinal}
        isLoading={feedbackMutation.isPending}
      />

      {/* ── HEADER ── */}
      <header
        className={`flex sticky top-0 left-0 right-0 items-center justify-between py-4 w-full px-8 z-50 ${
          isAtTop
            ? "bg-transparent"
            : "bg-[#0a0a0a] backdrop-blur-sm border-b border-zinc-800"
        }`}
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
          <Link
            href={
              "https://www.linkedin.com/company/himersus/?viewAsMember=true"
            }
            target="_blank"
            className="ret:flex hidden"
          >
            <DarkButton className="text-white! rounded-lg!">
              Bater um papo
            </DarkButton>
          </Link>
          <Link
            href={
              "https://www.linkedin.com/company/himersus/?viewAsMember=true"
            }
            target="_blank"
            className="ret:hidden flex"
          >
            <DarkButton className="text-white! size-10 px-0! py-0! rounded-full!">
              <ChatLines className="size-5" />
            </DarkButton>
          </Link>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="h-full">
        <main className="w-full max-w-80 mt-10">
          <header>
            <h1 className="text-white text-center text-4xl pt-7 pot:font-extrabold">
              Feedback
            </h1>
            <div className="max-w-80 text-center pt-3 mx-auto mb-7">
              <p className="text-sm text-zinc-400">
                Hey, gostaríamos de saber o que achas da{" "}
                <span className="text-base-design">Angopen</span> e como podemos
                melhorar. Deixa aqui o teu feedback, é super importante para
                nós!
              </p>
            </div>
          </header>

          <form
            onSubmit={handleSubmit(onValid)}
            noValidate
            className="flex flex-col gap-3"
          >
            {/* Nome */}
            <div>
              <Input
                type="text"
                id="name"
                placeholder="Primeiro & Último Nome"
                aria-invalid={!!errors.name}
                {...register("name", {
                  required: "Nome é obrigatório",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" },
                })}
              />
              <FieldError message={errors.name?.message} />
            </div>

            {/* Email */}
            <div>
              <Input
                type="email"
                id="email"
                placeholder="dev@dev.com"
                aria-invalid={!!errors.email}
                {...register("email", {
                  required: "Email é obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email inválido",
                  },
                })}
              />
              <FieldError message={errors.email?.message} />
            </div>

            {/* Área de atuação */}
            <div>
              <Input
                type="text"
                id="profession"
                placeholder="Área de Atuação"
                aria-invalid={!!errors.profession}
                {...register("profession", {
                  required: "Área de atuação é obrigatória",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
              />
              <FieldError message={errors.profession?.message} />
            </div>

            {/* Mensagem */}
            <div>
              <Textarea
                id="message"
                rows={4}
                maxLength={500}
                placeholder="Deixa aqui o teu feedback..."
                aria-invalid={!!errors.message}
                {...register("message", {
                  required: "A mensagem é obrigatória",
                  minLength: { value: 10, message: "Mínimo 10 caracteres" },
                  maxLength: { value: 500, message: "Máximo 500 caracteres" },
                })}
              />
              <FieldError message={errors.message?.message} />
              <p className="text-zinc-200 text-end w-full text-sm">
                {useWatch({
                  control,
                  name: "message",
                })?.length || 0}
                /500 caracteres
              </p>
            </div>

            <BaseButton
              type="submit"
              className="w-full! mt-3 py-6! pot:font-semibold! rounded-lg! text-base!"
            >
              Enviar Feedback
            </BaseButton>
          </form>
        </main>
      </main>
    </div>
  );
}
