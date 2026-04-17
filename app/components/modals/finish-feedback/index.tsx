import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GenericSelect } from "../../molecules/selectable";
import { X } from "lucide-react";
import { DarkButton } from "../../molecules/dark-button";
import { BaseButton } from "../../molecules/base-button";
import { useState } from "react";

interface FinishFeebackModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (province: string, evaluation: number) => void;
  isLoading?: boolean;
}

export function FinishFeebackModal({
  open,
  onOpenChange,
  onSubmit,
  isLoading = false,
}: FinishFeebackModalProps) {
  const [province, setProvince] = useState("");
  const [evaluation, setEvaluation] = useState<number | null>(null);

  const handleFinish = () => {
    if (!province || evaluation === null) return;
    onSubmit(province, evaluation);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-sm px-5 bg-zinc-950 border border-zinc-800"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFinish();
          }}
        >
          <DialogHeader>
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => onOpenChange(false)}
              >
                <X className="size-5 text-zinc-600 hover:text-zinc-200 transition-colors" />
              </button>
            </div>
            <DialogTitle className="text-white pt-5 text-2xl font-semibold max-w-lg">
              Província
            </DialogTitle>
            <DialogDescription className="text-zinc-300 mt-2 text-sm">
              Para finalizar, gostaríamos de saber de onde és. Esta informação é
              super importante para nós, pois nos ajuda a entender melhor a
              nossa comunidade!
            </DialogDescription>
          </DialogHeader>

          <div className="-mt-4">
            <span className="text-white text-sm">De onde és?</span>
            <GenericSelect
              className="py-5"
              onValueChange={(val: string) => setProvince(val)}
              groups={[
                {
                  label: "Angola",
                  options: [
                    { value: "luanda", label: "Luanda" },
                    { value: "benguela", label: "Benguela" },
                    { value: "huila", label: "Huíla" },
                  ],
                },
              ]}
              placeholder="Selecione a sua província"
            />

            <div className="pt-4">
              <span className="text-white font-medium">Nível de Impacto</span>
              <div className="grid grid-cols-5 mt-3 justify-start items-center">
                {[1, 2, 3, 4, 5].map((item) => (
                  <DarkButton
                    key={item}
                    type="button" 
                    onClick={() => setEvaluation(item)}
                    className={`w-full! first:rounded-l-lg! last:rounded-r-lg! rounded-none! leading-0! px-0! py-5! font-mono! text-base! font-semibold! ${
                      evaluation === item
                        ? "text-base-design! border-base-design!"
                        : "text-white!"
                    }`}
                  >
                    {item}
                  </DarkButton>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter className="bg-zinc-950 border-t border-zinc-800 mt-5">
            <BaseButton
              type="submit"
              disabled={!province || evaluation === null || isLoading}
              className="font-semibold"
            >
              {isLoading ? "A enviar..." : "Finalizar Feedback"}
            </BaseButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}