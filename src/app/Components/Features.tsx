import Image from "next/image";

export default function Features() {
  return (
    <div id="features">
      <h1 className="font-semibold text-4xl text-center mb-4 text-blue-700">Recursos</h1>
      <p className="font-normal text-lg text-center mb-6 w-screen px-12">Potência, conforto e tecnologia de ponta reunidos em um único fone. Descubra os recursos que fazem do Baseus Bowie E18 a escolha perfeita para quem busca qualidade e desempenho sem limites!</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mx-8 mb-8">
        <aside>
          <Image
            height={500}
            width={500}
            src="/BaseusBowieE182.png"
            alt="Baseus Bowie E18 da Cor Preta"
          />
        </aside>
        <div className="flex flex-col gap-4 mb-4">
          <div className="border border-blue-700 rounded-2xl p-4 shadow-sm">
            <h2 className="font-semibold text-lg text-blue-700">
              Conectividade Avançada com Bluetooth 5.3
            </h2>
            <p className="font-light text-gray-800">
              Oferece uma conexão rápida e estável, garantindo transmissão de
              áudio sem interrupções e maior eficiência energética.
            </p>
          </div>
          <div className="border border-blue-700 rounded-2xl p-4 shadow-sm">
            <h2 className="font-semibold text-lg text-blue-700">Bateria de Longa Duração</h2>
            <p className="font-light text-gray-800">
              Proporciona até 25 horas de reprodução contínua com o estojo de
              carregamento, permitindo uso prolongado sem preocupações com
              recargas frequentes.
            </p>
          </div>
          <div className="border border-blue-700 rounded-2xl p-4 shadow-sm">
            <h2 className="font-semibold text-lg text-blue-700">
              Design Ergonômico e Confortável
            </h2>
            <p className="font-light text-gray-800">
              Projetado para se ajustar confortavelmente aos ouvidos,
              possibilitando uso prolongado sem desconforto, ideal para
              atividades diárias e exercícios físicos.
            </p>
          </div>
          <div className="border border-blue-700 rounded-2xl p-4 shadow-sm">
            <h2 className="font-semibold text-lg text-blue-700">
              Resistência à Água e Poeira (IPX4)
            </h2>
            <p className="font-light text-gray-800">
              Com certificação IPX4, é resistente a respingos de água e suor,
              tornando-o adequado para uso durante exercícios e em condições
              climáticas variadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
