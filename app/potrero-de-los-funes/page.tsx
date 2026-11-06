
import Link from "next/link";

export default function PotreroDeLosFunes() {
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
            Naturaleza y aventura
          </p>

          <h1 className="mb-8 text-4xl font-black md:text-6xl">
            Potrero de los Funes<span className="text-[#b47b43]">.</span>
          </h1>

          <img
            src="/imagenes/potrero.png"
            alt="Paisaje de Potrero de los Funes, San Luis"
            className="h-[300px] w-full rounded-[2rem] object-cover shadow-xl md:h-[480px]"
          />

          <div className="mt-10 max-w-4xl">
            <h2 className="mb-4 text-2xl font-black md:text-3xl">
              Un destino entre las sierras
            </h2>

            <p className="text-lg leading-8 text-[#637166]">
              Situado a unos 15 kilómetros de San Luis capital y rodeado
              de un imponente paisaje natural, Potrero de los Funes es
              uno de los destinos favoritos de quienes visitan la provincia.
              Su oferta de alojamientos y gastronomía, junto con las vistas
              del lago y las grandes sierras, lo convierten en un lugar ideal
              para disfrutar de los servicios urbanos sin perder el contacto
              con la naturaleza.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-black md:text-3xl">
              Naturaleza y aventura
            </h2>

            <p className="text-lg leading-8 text-[#637166]">
              Durante la estadía se pueden realizar distintos recorridos
              y excursiones por cerros, cascadas, ríos y arroyos. También
              se pueden disfrutar actividades como cabalgatas y senderismo.
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
              href="https://www.google.com/maps/search/?api=1&query=Potrero+de+los+Funes%2C+San+Luis%2C+Argentina"
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
