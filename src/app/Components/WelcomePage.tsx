import Image from "next/image";

export default function WelcomePage() {
  return (
    <div id="hero" className="h-screen flex flex-col-reverse lg:flex-row justify-around items-center mb-8 bg-blue-700">
      <div className="flex flex-col justify-start">
        <h1 className="font-bold lg:text-left text-center text-4xl lg:text-5xl text-neutral-100">Baseus Bowie E18</h1>
        <p className="font-light lg:text-left text-center text-lg lg:text-xl text-neutral-100">Descubra a revolução do áudio Bluetooth.</p>
      </div>
      <aside>
        <Image width={500} height={500} src="/BaseusBowieE18.png" alt="Baseus Bowie E8 da Cor Preta" />
      </aside>
    </div>
  );
}
