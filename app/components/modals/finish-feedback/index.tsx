import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { DarkButton } from "../../molecules/dark-button";
import { BaseButton } from "../../molecules/base-button";
import { useState } from "react";

const PROVINCIAS = [
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando Cubango",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
  "Huambo",
  "Huíla",
  "Luanda",
  "Lunda Norte",
  "Lunda Sul",
  "Malanje",
  "Moxico",
  "Namibe",
  "Uíge",
  "Zaire",
  "Icolo e Bengo",
  "Quissama",
  "Belas",
];

interface FinishFeebackModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (province: string, evaluation: number) => Promise<void>;
  isLoading?: boolean;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-red-200 text-xs mt-2 ps-1">{message}</p>;
}

export function FinishFeebackModal({
  open,
  onOpenChange,
  onSubmit,
  isLoading = false,
}: FinishFeebackModalProps) {
  const [province, setProvince] = useState("");
  const [evaluation, setEvaluation] = useState<number | null>(null);
  const [errors, setErrors] = useState({ province: "", evaluation: "" });

  const validate = () => {
    const next = { province: "", evaluation: "" };
    if (!province) next.province = "Seleciona a tua província";
    if (evaluation === null) next.evaluation = "Seleciona o nível de impacto";
    setErrors(next);
    return !next.province && !next.evaluation;
  };

  const handleFinish = async () => {
    if (!validate()) return;
    try {
      await onSubmit(province, evaluation!);
      setProvince("");
      setEvaluation(null);
    } catch {}
  };

  const handleClose = () => {
    setProvince("");
    setEvaluation(null);
    setErrors({ province: "", evaluation: "" });
    setEvaluation(null);
    onOpenChange(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        if (isLoading) return; // ← bloqueia fecho durante o envio
        if (!val) handleClose();
      }}
    >
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
                onClick={handleClose}
              >
                <X className="size-5 text-zinc-600 hover:text-zinc-200 transition-colors" />
              </button>
            </div>
            <DialogTitle className="text-white pt-5 text-2xl pot:font-semibold max-w-lg">
              Mais um passo!
            </DialogTitle>
            <DialogDescription className="text-zinc-300 mt-2 text-sm">
              Para finalizar, gostaríamos de saber de onde és e qual o impacto
              que a Angopen tem na tua vida. Esta informação é super importante
              para nós!
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 flex flex-col gap-4">
            {/* ── Província ── */}
            <div>
              <span className="text-white text-sm block mb-2">De onde és?</span>
              <select
                value={province}
                onChange={(e) => {
                  setProvince(e.target.value);
                  if (e.target.value)
                    setErrors((prev) => ({ ...prev, province: "" }));
                }}
                className="w-full bg-zinc-900 text-sm text-zinc-100 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-zinc-600 transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2371717a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  paddingRight: "2.5rem",
                }}
              >
                <option value="" disabled>
                  Seleciona a tua província
                </option>
                {PROVINCIAS.map((p) => (
                  <option
                    key={p}
                    value={p}
                    className="bg-zinc-900 text-zinc-100"
                  >
                    {p}
                  </option>
                ))}
              </select>
              <FieldError message={errors.province} />
            </div>

            {/* ── Nível de impacto ── */}
            <div>
              <span className="text-white font-medium text-sm block mb-3">
                Nível de Impacto
              </span>
              <div className="grid grid-cols-5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <DarkButton
                    key={item}
                    type="button"
                    onClick={() => {
                      setEvaluation(item);
                      setErrors((prev) => ({ ...prev, evaluation: "" }));
                    }}
                    className={`w-full! first:rounded-l-lg! last:rounded-r-lg! rounded-none! leading-0! px-0! py-5! font-mono! text-base! pot:font-semibold! ${
                      evaluation !== null && item <= evaluation
                        ? "bg-orange-500! border-orange-500! text-white!" // ← selecionado e anteriores
                        : "text-white!"
                    }`}
                  >
                    {item}
                  </DarkButton>
                ))}
              </div>
              <FieldError message={errors.evaluation} />
            </div>
          </div>

          <DialogFooter className="bg-zinc-950 border-t border-zinc-800 mt-5">
            <BaseButton
              type="submit"
              disabled={isLoading}
              className="pot:font-semibold"
            >
              {isLoading ? "A enviar..." : "Finalizar Feedback"}
            </BaseButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
