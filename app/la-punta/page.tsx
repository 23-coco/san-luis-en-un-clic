
import Link from "next/link";

export default function LaPunta() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#20352b]">
      <header className="flex items-center justify-between px-6 py-5 md:px-12">
        <Link href="/" className="text-xl font-black tracking-tight">
          SAN LUIS<span className="text-[#b47b43]">.</span>
        </Link>

        <Link href="/" className="text-sm font-medium hover:text-[#b47b43]">
          ← Volver al inicio
        </Link>
      </header>

      <section className="px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#a36e3d]">
            Innovación y naturaleza
          </p>

          <h1 className="mb-8 text-4xl font-black md:text-6xl">
            La Punta<span className="text-[#b47b43]">.</span>
          </h1>

          <img
            src="/imagenes/la-punta.webp"
            alt="Paisaje de La Punta, San Luis"
            className="h-[300px] w-full rounded-[2rem] object-cover shadow-xl md:h-[480px]"
          />

          <div className="mt-10 max-w-4xl">
            <h2 className="mb-4 text-2xl font-black md:text-3xl">
              Una ciudad del siglo XXI
            </h2>

            <p className="text-lg leading-8 text-[#637166]">
              La Punta es una ciudad localizada en el departamento de Juan
              Martín de Pueyrredón, a unos 20 kilómetros al norte de la
              capital provincial. Fue fundada el 26 de marzo de 2003 y se
              convirtió en una de las ciudades más jóvenes del país.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#637166]">
              Su desarrollo abarca aproximadamente 23.000 hectáreas y
              combina el crecimiento urbano con espacios naturales,
              propuestas turísticas y un importante polo tecnológico.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-black md:text-3xl">
              Turismo y desarrollo
            </h2>

            <p className="text-lg leading-8 text-[#637166]">
              La ciudad se destaca por su propuesta de desarrollo
              sostenible y por integrar la tecnología con el turismo.
              Sus espacios y atractivos permiten conocer una localidad
              moderna, rodeada por los paisajes característicos de San Luis.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-block rounded-full bg-[#294a39] px-7 py-4 font-semibold text-white transition hover:bg-[#3b654d]"
            >
              ← Volver a los destinos
            </Link>

            <a
              href="https://www.google.com/maps/search/?api=1&query=La+Punta%2C+San+Luis%2C+Argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-2 border-[#294a39] px-7 py-4 font-semibold text-[#294a39] transition hover:bg-[#294a39] hover:text-white"
            >
              📍 Ubicación
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
