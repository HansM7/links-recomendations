import Image from "next/image";
import IndexComponent from ".";

export default function Home() {
  return (
    <div className="pt-12 px-4">
      <div className="w-full text-center mb-8">
        <h1 className="font-bold text-2xl">Recomendaciones de Hans 🚀</h1>
      </div>
      <div>
        <IndexComponent></IndexComponent>
      </div>
    </div>
  );
}
