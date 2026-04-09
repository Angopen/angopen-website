import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`bg-zinc-900 outline-none focus:border-zinc-500 border border-zinc-700 py-2.5 rounded-lg w-full text-white px-4 resize-none ${className}`}
    />
  );
}
