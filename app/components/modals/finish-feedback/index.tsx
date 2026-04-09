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

interface FinishFeebackModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FinishFeebackModal({
  open,
  onOpenChange,
}: FinishFeebackModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogContent
          showCloseButton={false}
          className="sm:max-w-sm px-5 bg-zinc-950 border border-zinc-800"
        >
          <DialogHeader>
            <div className="flex items-center justify-end">
              <button
                className="cursor-pointer"
                onClick={() => onOpenChange(false)}
              >
                <X className="size-5 text-zinc-600 hover:text-zinc-200 transition-colors" />
              </button>
            </div>
            <DialogTitle className="text-white pt-5 text-2xl font-semibold  max-w-lg">
              Província
            </DialogTitle>
            <DialogDescription className="text-zinc-300 mt-2 text-sm">
              Para finalizar, gostaríamos de saber de onde és. Esta informação é
              super importante para nós, pois nos ajuda a entender melhor a
              nossa comunidade!
            </DialogDescription>
          </DialogHeader>
          <div className="-mt-4">
            <label htmlFor="province">De onde és?</label>
            <GenericSelect
              className="py-5"
              groups={[
                {
                  label: "Portugal",
                  options: [
                    { value: "lisboa", label: "Lisboa" },
                    { value: "porto", label: "Porto" },
                    { value: "coimbra", label: "Coimbra" },
                  ],
                },
              ]}
              placeholder="Selecione a sua província"
            />

            <div className="pt-4 ">
              <span className="text-white font-medium">Nível de Impacto</span>
              <div className="grid grid-cols-5 mt-3 justify-start items-center">
                {["1", "2", "3", "4", "5"].map((item) => (
                  <DarkButton
                    key={item}
                    className="w-full!  first:rounded-l-lg! last:rounded-r-lg! rounded-none leading-0! px-0! py-5! text-white! font-mono! text-base! font-semibold!"
                  >
                    {item}
                  </DarkButton>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter className="bg-zinc-950 border-t border-zinc-800 mt-5">
            <BaseButton className="font-semibold">
              Finalizar Feedback
            </BaseButton>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
