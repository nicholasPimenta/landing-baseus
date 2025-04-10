"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <header className="bg-blue-700 bg-opacity-90 w-full">
      <div className="flex justify-between items-center mx-auto px-6 py-4 max-w-6xl">
        <nav className="hidden md:flex items-center gap-6 text-neutral-100">
          <Image
            width={110}
            height={110}
            src="/BaseusLogo.png"
            alt="Logo do Fone de ouvido bluetooth Baseus Bowie E18"
          />
          <a href="#hero" className="hover:text-neutral-300 transition-all">
            Inicio
          </a>
          <a href="#features" className="hover:text-neutral-300 transition-all">
            Recursos
          </a>
          <a
            href="#testimonials"
            className="hover:text-neutral-300 transition-all"
          >
            Depoimentos
          </a>
          <a href="#faq" className="hover:text-neutral-300 transition-all">
            Perguntas Frequentes
          </a>
          <a
            href="https://www.amazon.com.br/Baseus-Bowie-E18-Bluetooth-25Horas/dp/B0DG621R82?th=1"
            className="hover:text-neutral-100 bg-yellow-400 hover:bg-yellow-500 p-2 rounded-lg transition-all font-bold text-lg"
            target="_blank"
          >
            Compre agora
          </a>
        </nav>

        {/* Logo Baseus Mobile */}
        <Image
          width={100}
          height={50}
          className="md:hidden"
          src="/BaseusLogo.png"
          alt="Logo do Fone de ouvido bluetooth Baseus Bowie E18"
        />

        {/* Navegação Mobile usando o Sheet */}
        <Sheet open={open} onOpenChange={setOpen} modal={false}>
          <SheetTrigger className="md:hidden text-neutral-100">☰</SheetTrigger>
          <SheetContent className="md:hidden flex flex-col items-start pl-6 bg-blue-700 text-neutral-100 py-6 space-y-4">
            <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>

            <a onClick={() => handleNavClick("hero")}>Início</a>
            <a onClick={() => handleNavClick("features")}>Recursos</a>
            <a onClick={() => handleNavClick("testimonials")}>Depoimentos</a>
            <a onClick={() => handleNavClick("faq")}>Perguntas Frequentes</a>

            <a
              href="https://www.amazon.com.br/Baseus-Bowie-E18-Bluetooth-25Horas/dp/B0DG621R82?th=1"
              target="_blank"
              className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-neutral-100"
            >
              Compre agora
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
