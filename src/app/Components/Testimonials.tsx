import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const testimonialsData = [
  {
    id: 0,
    name: "Mariana R.",
    img: "/Female.png",
    text: "Estou simplesmente apaixonada por esses fones! O design é elegante, o som é bem equilibrado e os graves são incríveis. A bateria dura muito e o encaixe nos ouvidos é super confortável, não incomoda nem depois de horas de uso. Uso tanto para música quanto para chamadas, e a qualidade do microfone me surpreendeu. Valeu cada centavo!",
    rating: "5/5",
    label: "Apaixonada",
  },
  {
    id: 1,
    name: "Yasmim",
    img: "/Female2.png",
    text: "A qualidade de som e o isolamento acústico são ótimos! A bateria dura bastante e a conexão é super rápida. Só achei um pouco grande para minha orelha, mas nada que atrapalhe a experiência. No geral, um ótimo produto!",
    rating: "4/5",
    label: "Bom custo-benefício",
  },
  {
    id: 2,
    name: "Flávio",
    img: "/Male3.png",
    text: "Comprei para minha esposa e ela simplesmente amou! O design é moderno, confortável e o som tem uma ótima definição. Além disso, o custo-benefício é excelente. Recomendo!",
    rating: "5/5",
    label: "Ótima compra",
  },
  {
    id: 3,
    name: "Robson de Sousa Nascimento",
    img: "/Male.png",
    text: "Estou impressionado com a qualidade de som e a durabilidade da bateria. Posso passar o dia todo ouvindo música sem precisar recarregar. Ótima escolha para quem busca um fone premium por um preço acessível!",
    rating: "5/5",
    label: "Recomendado",
  },
  {
    id: 4,
    name: "Jackson Mota",
    img: "/Male2.png",
    text: "Fiquei surpreso com a beleza e eficiência desse fone. Além de ter um design elegante, a bateria realmente dura muito. Perfeito para quem gosta de curtir músicas ou chamadas sem preocupações!",
    rating: "4/5",
    label: "Impressionante",
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials">
      <h1 className="text-center text-4xl font-semibold mb-4 text-blue-700">Depoimentos</h1>
      {testimonialsData.map((testimonial) => (
        <React.Fragment key={testimonial.id}>
          <div
            className="mb-6 mx-6 flex flex-col sm:flex-row items-center sm:items-start gap-4"
          >
            {/* Ícone com tamanho fixo */}
            <div className="w-[130px] min-w-[130px] h-[130px] flex justify-center items-center">
              <Image
                width={130}
                height={130}
                src={testimonial.img}
                alt={`Perfil de ${testimonial.name}`}
              />
            </div>

            {/* Texto do depoimento */}
            <div className="flex-1">
              <p className="font-medium text-blue-700">{testimonial.name}</p>
              <p className="text-gray-800">{testimonial.text}</p>
            </div>
          </div>
          <div className="mb-8 mx-6 flex flex-col sm:flex-row items-center justify-start sm:items-start gap-4">
            {/* Estrelas e resumo */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex flex-row gap-2">
                <Star className="text-yellow-500" />
                <p>{testimonial.rating}</p>
              </div>
              <p className="text-sm">{testimonial.label}</p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
