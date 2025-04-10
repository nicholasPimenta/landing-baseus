import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Cta() {
  return (
    <section className="p-10 text-center shadow-lg my-8 bg-blue-700">
      <h2 className="text-3xl font-bold mb-4 text-neutral-100">Experimente o Melhor Som Agora!</h2>
      <p className="text-lg mb-6 text-neutral-100">Alta qualidade, conforto e tecnologia de ponta. Aproveite esta oferta exclusiva!</p>

      <ul className="flex flex-col items-center gap-2 mb-6">
        <li className="flex items-center gap-2 text-neutral-100">
          <CheckCircle className="text-green-500" /> Frete Grátis para todo Brasil
        </li>
        <li className="flex items-center gap-2 text-neutral-100">
          <CheckCircle className="text-green-500" /> Conectividade Rápida Bluetooth 5.3
        </li>
        <li className="flex items-center gap-2 text-neutral-100">
          <CheckCircle className="text-green-500" /> Cancelamento de Ruído Inteligente
        </li>
      </ul>

      <Button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all text-lg cursor-pointer">
        <a href="https://www.amazon.com.br/Baseus-Bowie-E18-Bluetooth-25Horas/dp/B0DG621R82?th=1" target="_blank">
          Adquira o seu agora
        </a>
      </Button>
    </section>
  );
}