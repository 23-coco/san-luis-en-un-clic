
import Link from "next/link";

const lugares = [
  {
    nombre: "Potrero de los Funes",
    categoria: "Naturaleza y aventura",
    descripcion:
      "Un destino rodeado de sierras, con un lago ideal para disfrutar del paisaje y realizar actividades al aire libre.",
    imagen: "/imagenes/potrero.png",
    ruta: "/potrero-de-los-funes",
  },
  {
    nombre: "La Punta",
    categoria: "Cultura e historia",
    descripcion:
      "Una ciudad moderna de San Luis, con espacios culturales, lugares históricos y atractivos para conocer.",
    imagen: "/imagenes/la-punta.webp",
    ruta: "/la-punta",
  },
  {
    nombre: "Estancia Grande",
    categoria: "Sierras y tranquilidad",
    descripcion:
      "Un lugar para descubrir los paisajes serranos, disfrutar de la naturaleza y conocer otra parte de San Luis.",
    imagen: "/imagenes/estancia-grande.jpg",
    ruta: "/estancia-grande",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#20352b]">
      <header className="flex items-center justify-between px-6 py-5 md:px-12">
        <Link href="/" className="text-xl font-black tracking-tight">
          SAN LUIS<span className="text-[#b47b43]">.</span>
        </Link>

        <nav className="flex gap-5 text-sm font-medium">
          <a href="#lugares" className="hover:text-[#b47b43]">
            Destinos
          </a>
          <a href="#proyecto" className="hover:text-[#b47b43]">
            Proyecto
          </a>
        </nav>
      </header>

      <section className="px-6 pb-16 pt-12 md:px-12 md:pb-24 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#a36e3d]">
              Descubrí nuestra provincia
            </p>

            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              San Luis
              <br />
              en un clic<span className="text-[#b47b43]">.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#637166]">
              Naturaleza, cultura y aventura. Explorá los rincones de San
              Luis y descubrí todo lo que nuestra provincia tiene para ofrecer.
            </p>

            <a
              href="#lugares"
              className="mt-8 inline-block rounded-full bg-[#294a39] px-7 py-4 font-semibold text-white transition hover:bg-[#3b654d]"
            >
              Explorar destinos ↗
            </a>
          </div>

          <div className="relative">
            <img
              src={lugares[0].imagen}
              alt="Paisaje natural de montañas y lago"
              className="h-[340px] w-full rounded-[2rem] object-cover shadow-xl md:h-[470px]"
            />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-lg">
              <p className="text-xs uppercase tracking-widest text-[#8b795f]">
                Un lugar para descubrir
              </p>
              <p className="mt-1 font-bold">La belleza de San Luis</p>
            </div>
          </div>
        </div>
      </section>

      <section id="lugares" className="bg-white px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a36e3d]">
                Guía turística
              </p>
              <h2 className="text-3xl font-black md:text-4xl">
                Lugares para conocer
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#637166]">
              Tres destinos para empezar a explorar nuestra provincia.
              Descubrí sus paisajes y atractivos.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {lugares.map((lugar, indice) => (
              <Link
                href={lugar.ruta}
                key={lugar.nombre}
                className="block overflow-hidden rounded-3xl border border-[#e9e7df] bg-[#faf9f5] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={lugar.imagen}
                  alt={lugar.nombre}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#a36e3d]">
                    0{indice + 1} · {lugar.categoria}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    {lugar.nombre}
                  </h3>

                  <p className="mt-3 leading-7 text-[#637166]">
                    {lugar.descripcion}
                  </p>

                  <p className="mt-5 font-bold text-[#a36e3d]">
                    Descubrir destino →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="proyecto" className="px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#294a39] px-7 py-12 text-center text-white md:px-16 md:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e6c49b]">
            Nuestro proyecto escolar
          </p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Conocé San Luis.
            <br />
            Compartí su belleza.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#e1e9e2]">
            Creamos este espacio para dar a conocer los lugares, paisajes y
            atractivos de nuestra provincia y compartirlos con todos.
          </p>
        </div>
      </section>

      <footer className="border-t border-[#e4e0d5] px-6 py-7 text-center text-sm text-[#637166]">
        San Luis en un clic · Proyecto escolar
      </footer>
    </main>
  );
}
