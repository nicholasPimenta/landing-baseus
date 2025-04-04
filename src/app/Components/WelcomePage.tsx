import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="h-screen flex flex-row justify-around items-center">
      <div className="flex flex-col justify-start">
        <h1 className="font-bold text-5xl">Baseus Bowie E18</h1>
        <p className="font-light text-xl">Descubra a revolução do áudio Bluetooth.</p>
      </div>
      <aside>
        <Image width={500} height={500} src="/BaseusBowieE18.png" alt="Baseus Bowie E8 da Cor Preta" />
      </aside>
    </div>
  );
}
