import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Cta() {
  return (
    <section className="p-10 text-center rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Experimente o Melhor Som Agora!</h2>
      <p className="text-lg mb-6">Alta qualidade, conforto e tecnologia de ponta. Aproveite esta oferta exclusiva!</p>

      <ul className="flex flex-col items-center gap-2 mb-6">
        <li className="flex items-center gap-2">
          <CheckCircle className="text-green-400" /> Frete Grátis para todo Brasil
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="text-green-400" /> Conectividade Rápida Bluetooth 5.3
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="text-green-400" /> Cancelamento de Ruído Inteligente
        </li>
      </ul>

      <Button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all text-lg cursor-pointer">
        Adquira o seu agora
      </Button>
    </section>
  );
}