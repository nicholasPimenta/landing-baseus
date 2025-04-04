import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mb-4">
        Perguntas frequentes
      </h1>
      <Accordion type="single" collapsible className="mx-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Qual é a duração da bateria do Baseus Bowie E18?
          </AccordionTrigger>
          <AccordionContent>
            A bateria dos fones pode durar até 6 horas de uso contínuo, com a
            base de carregamento estendendo a autonomia para até 30 horas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            O Baseus Bowie E18 possui cancelamento de ruído?
          </AccordionTrigger>
          <AccordionContent>
            Sim! Ele conta com cancelamento de ruído ENC, que melhora a
            qualidade das chamadas ao reduzir sons externos indesejados.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Os fones são compatíveis com iOS e Android?
          </AccordionTrigger>
          <AccordionContent>
            Sim, o Baseus Bowie E18 funciona perfeitamente com iPhones,
            dispositivos Android, tablets e até notebooks via Bluetooth 5.3.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Posso usar os fones individualmente?
          </AccordionTrigger>
          <AccordionContent>
            Sim! Você pode usar apenas um fone por vez enquanto o outro
            permanece carregando na base.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            O Baseus Bowie E18 é resistente à água?
          </AccordionTrigger>
          <AccordionContent>
            Sim, ele possui certificação IPX4, que protege contra respingos
            de água e suor, ideal para exercícios leves e uso no dia a dia.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Os fones possuem comandos touch?</AccordionTrigger>
          <AccordionContent>
            Sim! Com toques intuitivos, você pode pausar músicas, atender
            chamadas, ativar assistentes de voz e muito mais.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            Quanto tempo demora para carregar completamente?
          </AccordionTrigger>
          <AccordionContent>
            O estojo de carregamento leva cerca de 1,5 horas para carregar
            completamente via USB-C. Já os fones carregam dentro do estojo em
            aproximadamente 1 hora.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            O Baseus Bowie E18 tem modo de baixa latência para jogos?
          </AccordionTrigger>
          <AccordionContent>
            Sim! Ele possui modo de baixa latência que reduz o atraso do áudio,
            tornando-o ideal para jogos e vídeos sem atrasos perceptíveis.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
