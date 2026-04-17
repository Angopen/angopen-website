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
import { useQuery, useMutation } from "@tanstack/react-query";

type feedbackForm = {
  name: string;
  email: string;
  message: string;
  profession: string;
  province: string;
  evaluation: number;
};

type feedback = {
  id: string;
  name: string;
  email: string;
  profession: string;
  province: string;
  evaluation: number;
  message: string;
  createdAt: string;
  updatedAt: string;
}

//const API_URL = "https://api-angopen.himersus.com/api/v1/";
// app/private/feedback/page.tsx

const API_URL = "/api/";

async function fetchFeedback() {
  const res = await fetch(`/api/feedbacks`);
  const json = await res.json();
  return json.data;
}

async function submitFeedback(data: feedbackForm) {
  const res = await fetch(`${API_URL}feedbacks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export default function FeedbackPage() {
  const feedback = useQuery({
    queryKey: ["feedback"],
    queryFn: fetchFeedback,
  });

  const feedbackMutation = useMutation({
    mutationFn: submitFeedback,
    onSuccess: () => {
      feedback.refetch();
      setOpenModal(false);
    },
  });

  const isAtTop = useIsScrolledToTop();
  const [openModal, setOpenModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    profession: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOpenModal = () => {
    if (!form.name || !form.email || !form.profession || !form.message) return;
    setOpenModal(true);
  };

  const handleSubmit = (province: string, evaluation: number) => {
    feedbackMutation.mutate({ ...form, province, evaluation });
  };

  return (
    <div className="flex items-center flex-col justify-between w-full h-dvh">
      <FinishFeebackModal
        open={openModal}
        onOpenChange={() => setOpenModal(false)}
        onSubmit={handleSubmit}
        isLoading={feedbackMutation.isPending}
      />
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
            {feedback.isLoading ? (
              <p className="text-sm text-zinc-500 text-center mt-2">
                Carregando feedbacks...
              </p>
            ) : feedback.isError ? (
              <p className="text-sm text-zinc-500 text-center mt-2">
                Erro ao carregar feedbacks.
              </p>
            ) : (
              <p className="text-sm text-zinc-500 text-center mt-2">
                Já recebemos {feedback.data?.length ?? 0} feedbacks. Deixa o
                teu também!
              </p>
            )}

            {feedback.data && feedback.data.length > 0 && (
  <div className="mt-5 flex flex-col gap-3 max-h-80 overflow-y-auto pr-1
    [&::-webkit-scrollbar]:w-[3px]
    [&::-webkit-scrollbar-thumb]:bg-zinc-700
    [&::-webkit-scrollbar-thumb]:rounded-full">

    {feedback.data.map((fb: feedback) => {
      const initials = fb.name
        .split(" ")
        .map((n: string) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

      return (
        <div
          key={fb.id}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-4"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="size-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-zinc-300 shrink-0">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{fb.name}</p>
              <p className="text-xs text-zinc-500 truncate">{fb.profession}</p>
            </div>
            <div className="flex gap-0.5 shrink-0">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-sm ${
                    star <= fb.evaluation
                      ? "text-amber-400"
                      : "text-zinc-700"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed border-t border-zinc-800 pt-3">
            {fb.message}
          </p>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-zinc-600">{fb.province}</span>
            <span className="text-xs text-zinc-700">
              {new Date(fb.created_at).toLocaleDateString("pt-AO", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      );
    })}
  </div>
)}

            <div className="max-w-80 text-center pt-10 mx-auto mb-4">
              <p className="text-sm text-zinc-500">
                Hey, gostaríamos de saber o que achas da{" "}
                <span className="text-base-design">Angopen</span> e como
                podemos melhorar. Deixa aqui o teu feedback, é super importante
                para nós!
              </p>
            </div>
          </header>

          <div className="flex flex-col gap-3">
            <Input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Primeiro nome & Sobrenome"
              required
            />
            <Input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="dev@dev.com"
              required
            />
            <Input
              type="text"
              name="profession"
              id="profession"
              value={form.profession}
              onChange={handleChange}
              placeholder="Área de Atuação"
              required
            />
            <Textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Deixa aqui o teu feedback..."
              required
            />
          </div>

          <BaseButton
            onClick={handleOpenModal}
            className="w-full! mt-6 py-6! font-semibold! rounded-lg! text-base!"
          >
            Enviar Feedback
          </BaseButton>
        </main>
      </main>
    </div>
  );
}
