export default function Features() {
  return (
    <div>
      <h1 className="font-semibold text-4xl text-center mb-4">Recursos</h1>
      <div className="grid grid-cols-2 gap-4 mx-8 py-4">
        <div className="border-2 border-gray-400 rounded-2xl p-4">
          <h2 className="font-semibold text-lg">
            Conectividade Avançada com Bluetooth 5.3
          </h2>
          <p className="font-light">
            Oferece uma conexão rápida e estável, garantindo transmissão de
            áudio sem interrupções e maior eficiência energética.
          </p>
        </div>
        <div className="border-2 border-gray-400 rounded-2xl p-4">
          <h2 className="font-semibold text-lg">Bateria de Longa Duração</h2>
          <p className="font-light">
            Proporciona até 25 horas de reprodução contínua com o estojo de
            carregamento, permitindo uso prolongado sem preocupações com
            recargas frequentes.
          </p>
        </div>
        <div className="border-2 border-gray-400 rounded-2xl p-4">
          <h2 className="font-semibold text-lg">
            Design Ergonômico e Confortável
          </h2>
          <p className="font-light">
            Projetado para se ajustar confortavelmente aos ouvidos,
            possibilitando uso prolongado sem desconforto, ideal para atividades
            diárias e exercícios físicos.
          </p>
        </div>
        <div className="border-2 border-gray-400 rounded-2xl p-4">
          <h2 className="font-semibold text-lg">
            Resistência à Água e Poeira (IPX4)
          </h2>
          <p className="font-light">
            Com certificação IPX4, é resistente a respingos de água e suor,
            tornando-o adequado para uso durante exercícios e em condições
            climáticas variadas.
          </p>
        </div>
      </div>
    </div>
  );
}
