import { footerContent } from "@/app/types";
import { LogoComponent } from "../atoms/logo-component";
import Link from "next/link";

interface FooterComponentProps {
  className?: string;
}

export default function FooterComponent({ className }: FooterComponentProps) {
  return (
    <footer
      className={`border-t p-5 pt-10 mt-20 border-zinc-900 ${className || ""}`}
    >
      <div className="w-full pot:max-w-[90%] mx-auto grid grid-cols-1 gap-y-10 pot:grid-cols-[40%_20%_20%_20%] ">
        <header className="max-w-xs">
          <Link href={"/"} className="flex items-center gap-3 text-white text-2xl">
            <LogoComponent size={8} />
            <span className="mt-2 uppercase">{footerContent.brand.name}</span>
          </Link>
          <p className="text-zinc-600 pt-5">{footerContent.brand.slogan}</p>

          <Link
            href={`mailto:${footerContent.brand.email}`}
            className="text-zinc-100 underline transition-all hover:text-white/60 pt-6 block"
          >
            {footerContent.brand.email}
          </Link>
        </header>
        {footerContent.sections.map((section, index) => (
          <div key={index}>
            <h5 className="text-zinc-600 text-lg">{section.title}</h5>

            <div className="flex flex-col mt-7 gap-5">
              {section.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/80 hover:underline hover:text-white transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pot:max-w-[90%] mx-auto w-full flex  gap-6 pot:items-center justify-between border-zinc-900 mt-10 pt-8">
        <div>
          <p className="text-zinc-600">{footerContent.brand.copyright}</p>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          {footerContent.bottom.legal.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white/80 hover:underline hover:text-white transition-all text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
