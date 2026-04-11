import { menuNavbar } from "@/app/types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChevronRight, X } from "lucide-react";
import { BaseButton } from "../molecules/base-button";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SheetDemoProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileMenu({ open, onOpenChange }: SheetDemoProps) {
  const router = useRouter();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        showCloseButton={false}
        side="right"
        className="ret:max-w-1/2 bg-zinc-950 border-zinc-900 w-screen pot:hidden"
      >
        <SheetHeader>
          <div className="flex  items-center gap-4 justify-between">
            <SheetTitle className="text-white">Menu</SheetTitle>
            <button
              onClick={() => onOpenChange(false)}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>
          <SheetDescription className="hidden"></SheetDescription>
        </SheetHeader>
        <div className="">
          <div className="flex flex-col items-start px-5 gap-6">
            {menuNavbar.map((item, index) => (
              <button
                className="font-semibold! justify-between w-full flex items-center transition-all hover:text-white/50 text-[15px] text-white"
                key={index}
              >
                {item.name}
                <ChevronRight className="size-4 text-white/50 ml-2" />
              </button>
            ))}
          </div>
          <footer className="mt-7 px-5 w-full">
            <div className="border-t flex flex-col gap-6 pt-5 border-zinc-900 w-full mb-5">
              <Link href={"/overview"}>
                <button className="font-semibold! justify-between w-full flex items-center transition-all hover:text-white/50 text-[15px] text-white">
                  Overview
                  <ChevronRight className="size-4 text-white/50 ml-2" />
                </button>
              </Link>
              <Link href={"https://github.com/Angopen"} target="_blank">
                <button className="font-semibold! justify-between w-full flex items-center transition-all hover:text-white/50 text-[15px] text-white">
                  Github
                  <ChevronRight className="size-4 text-white/50 ml-2" />
                </button>
              </Link>
            </div>
            <BaseButton
              onClick={() => router.push("/signin")}
              className="w-full!"
            >
              <p className="pt-0.5  font-semibold! text-[15px] text-white">
                Entrar
              </p>
            </BaseButton>
          </footer>
        </div>
      </SheetContent>
    </Sheet>
  );
}
