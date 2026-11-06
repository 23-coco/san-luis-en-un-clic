
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
          <a href="#escuela" className="hover:text-[#b47b43]">
            Escuela
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
            Conocer San Luis.
            <br />
            Compartí su belleza.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#e1e9e2]">
            San Luis en un clic es una propuesta que busca dar a conocer
            nuestra provincia a través de sus localidades, paisajes,
            atractivos naturales y espacios culturales.
          </p>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#e1e9e2]">
            A través de esta plataforma queremos acercar información
            turística de manera sencilla y accesible, invitando a descubrir
            los diferentes lugares que forman parte de la identidad
            San Luis.
          </p>
        </div>
      </section>

      <section id="escuela" className="bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a36e3d]">
              Nuestra institución
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              La escuela detrás del proyecto.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#637166]">
              Una propuesta educativa que conecta el aprendizaje,
              la formación técnica y el conocimiento de nuestra provincia.
            </p>
          </div>

          <div className="grid items-center gap-10 rounded-[2rem] border border-[#e9e7df] bg-[#faf9f5] p-7 md:grid-cols-[0.8fr_1.2fr] md:p-12">
            <div className="flex flex-col items-center">
              <img
                src="/imagenes/escuela.png"
                alt="Escudo de la Escuela Técnica N.º 3 Eva Duarte de Perón"
                className="w-full max-w-[260px] rounded-2xl object-contain"
              />

              <p className="mt-5 text-center text-sm font-bold uppercase tracking-widest text-[#a36e3d]">
                Escuela Técnica N.º 3
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black md:text-3xl">
                Eva Duarte de Perón
              </h3>

              <p className="mt-2 font-medium text-[#a36e3d]">
                Villa Mercedes · San Luis
              </p>

              <p className="mt-6 leading-8 text-[#637166]">
                La Escuela Técnica N.º 3 Eva Duarte de Perón es la
                institución educativa en la que nace esta propuesta.
                Su formación técnica busca brindar a los estudiantes
                herramientas y conocimientos que les permitan comprender
                su entorno, desarrollar capacidades y prepararse para
                nuevos desafíos.
              </p>

              <h4 className="mb-3 mt-8 text-xl font-black">
                Nuestra orientación: Servicios Turísticos
              </h4>

              <p className="leading-8 text-[#637166]">
                La orientación en Servicios Turísticos permite acercarse
                al mundo del turismo, conocer el patrimonio natural y
                cultural, comprender la importancia de los destinos y
                reconocer el valor de los servicios que forman parte
                de la actividad turística.
              </p>

              <p className="mt-5 leading-8 text-[#637166]">
                Esta formación también invita a desarrollar una mirada
                sobre el potencial turístico de nuestra región, valorar
                sus recursos y aprender a comunicar sus atractivos.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] bg-[#f2eee4] p-8 text-center md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a36e3d]">
              Aprender haciendo
            </p>

            <h3 className="mt-3 text-2xl font-black md:text-3xl">
              De la formación a la experiencia.
            </h3>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-[#637166]">
              San Luis en un clic representa una manera de llevar los
              conocimientos al terreno práctico: investigar destinos,
              organizar información, comunicar atractivos y utilizar
              herramientas digitales para acercar el turismo a las personas.
            </p>

            <p className="mx-auto mt-4 max-w-3xl font-semibold leading-8 text-[#294a39]">
              Conocer nuestra provincia también es una forma de valorar
              nuestra identidad.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e4e0d5] px-6 py-8 text-center text-sm text-[#637166]">
        <p className="font-semibold">San Luis en un clic</p>
        <p className="mt-2">
          Proyecto escolar · Escuela Técnica N.º 3 Eva Duarte de Perón
        </p>
      <div className="mt-5 text-xs leading-7">
  <p className="mb-2 font-bold">Fuentes de información:</p>

  <a href="https://www.argentinaturismo.com.ar/" target="_blank" className="block hover:text-[#b47b43]">
    Argentina Turismo
  </a>

  <a href="https://visitarsanluis.com/localidad/la-punta" target="_blank" className="block hover:text-[#b47b43]">
    Visitar San Luis - La Punta
  </a>

  <a href="https://agenciasanluis.com/2025/02/22/1028786-potrero-de-los-funes-sierras-rios-y-una-destacada-infraestructura-turistica/" target="_blank" className="block hover:text-[#b47b43]">
    Agencia San Luis - Potrero de los Funes
  </a>

  <a href="https://agenciasanluis.com/2025/05/25/1056217-estancia-grande-historia-naturaleza-y-tradicion-en-un-solo-lugar/" target="_blank" className="block hover:text-[#b47b43]">
    Agencia San Luis - Estancia Grande
  </a>
</div>      </footer>
    </main>
  );
}
         