"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-300 bg-opacity-90 w-full">
      <div className="flex justify-between items-center mx-auto px-6 py-4 max-w-6xl">
        <nav className="hidden md:flex items-center gap-6 text-gray-600">
          <a href="#hero" className="hover: text-gray-800">
            Inicio
          </a>
          <a href="#features" className="hover: text-gray-800">
            Recursos
          </a>
          <a href="#testimonials" className="hover: text-gray-800">
            Depoimentos
          </a>
          <a href="#faq" className="hover: text-gray-800">
            Perguntas Frequentes
          </a>
          <a href="#buyit" className="hover: text-gray-800 bg-yellow-400 hover:bg-yellow-500 p-2 rounded-lg transition-all font-bold text-lg">
            Compre agora
          </a>
        </nav>

        {/* Menu Mobile */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu Responsivo */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center  text-gray-600 py-4 space-y-4">
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Início
            </a>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Recursos
            </a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Depoimentos
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              Perguntas Frequentes
            </a>
            <a
              href="https://wa.me/seunumerodetelefone"
              target="_blank"
              className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-gray-800"
            >
              Compre agora
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
