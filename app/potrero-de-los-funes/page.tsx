
import Link from "next/link";

const fotografias = [
  {
    titulo: "El dique y las sierras",
    descripcion: "El lago rodeado por el paisaje serrano.",
    imagen:
      "https://www.argentina.gob.ar/sites/default/files/b_caminos_potrero_de_los_funes_viajaxarg_1.png",
    fuente: "https://www.argentina.gob.ar/jefatura/turismo/viaja-por-argentina/descansar-en-potrero-de-los-funes",
  },
  {
    titulo: "Salto de la Moneda",
    descripcion: "Una cascada rodeada de vegetación autóctona.",
    imagen:
      "https://statics.guiaturista.com.ar/2022/03/13d87e892910b9e40225ddbbebd4239a.jpg",
    fuente: "https://www.guiaturista.com.ar/potrero-funes/salto-moneda-n538",
  },
  {
    titulo: "Parque Nativo",
    descripcion: "Un espacio verde junto al lago.",
    imagen:
      "https://agenciasanluis.com/wp-content/uploads/2018/10/nativo-3.jpg",
    fuente: "https://agenciasanluis.com/2018/10/08/486586-parque-nativo-un-atractivo-imperdible-en-potrero-de-los-funes/",
  },
];

const caracteristicas = [
  {
    titulo: "Ubicación",
    texto:
      "Se encuentra aproximadamente a 20 kilómetros de la ciudad de San Luis, en un valle rodeado de sierras.",
  },
  {
    titulo: "Relieve",
    texto:
      "Su paisaje combina cerros, quebradas, valles y pendientes serranas que ofrecen diferentes vistas panorámicas.",
  },
  {
    titulo: "Hidrografía",
    texto:
      "El dique Potrero de los Funes, los arroyos y los cursos de agua forman parte de sus principales atractivos naturales.",
  },
  {
    titulo: "Flora",
    texto:
      "La zona conserva vegetación autóctona. En el Parque Nativo también se encuentran especies exóticas y espacios verdes para recorrer.",
  },
];

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
            alt="Paisaje de Potrero de los Funes"
            className="h-[300px] w-full rounded-[2rem] object-cover shadow-xl md:h-[480px]"
          />

          <div className="mt-10 max-w-4xl">
            <h2 className="mb-4 text-2xl font-black md:text-3xl">
              Un destino entre las sierras
            </h2>

            <p className="text-lg leading-8 text-[#637166]">
              Situado aproximadamente a 20 kilómetros de San Luis capital,
              Potrero de los Funes es una localidad turística rodeada de
              cerros, valles y paisajes naturales. Su emblemático dique,
              sus espacios verdes y sus atractivos serranos lo convierten
              en uno de los destinos más reconocidos de la provincia.
            </p>
          </div>

          {/* CARACTERÍSTICAS */}
          <section className="mt-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a36e3d]">
              Conocé el lugar
            </p>

            <h2 className="mb-8 text-3xl font-black md:text-4xl">
              Características geográficas
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              {caracteristicas.map((item) => (
                <article
                  key={item.titulo}
                  className="rounded-3xl bg-white p-7 shadow-sm"
                >
                  <h3 className="mb-3 text-xl font-black">
                    {item.titulo}
                  </h3>

                  <p className="leading-7 text-[#637166]">
                    {item.texto}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ATRACTIVOS */}
          <section className="mt-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a36e3d]">
              Lugares destacados
            </p>

            <h2 className="mb-8 text-3xl font-black md:text-4xl">
              Atractivos turísticos
            </h2>

            <div className="grid gap-7 md:grid-cols-2">
              <article className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="mb-3 text-2xl font-black">
                  Dique Potrero de los Funes
                </h3>

                <p className="leading-7 text-[#637166]">
                  Construido originalmente en 1860 y reconstruido
                  posteriormente, el embalse actual es uno de los
                  más antiguos de la región. Es un lugar destacado
                  para contemplar el paisaje, disfrutar de la costa
                  y realizar actividades recreativas.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="mb-3 text-2xl font-black">
                  Salto de la Moneda
                </h3>

                <p className="leading-7 text-[#637166]">
                  Es una cascada natural ubicada entre las sierras.
                  Su entorno se caracteriza por las rocas, los
                  helechos y la vegetación autóctona. Se puede
                  conocer mediante una caminata por senderos.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="mb-3 text-2xl font-black">
                  Parque Nativo
                </h3>

                <p className="leading-7 text-[#637166]">
                  Es un espacio verde de aproximadamente siete
                  hectáreas ubicado junto al lago. Cuenta con
                  vegetación autóctona y exótica, senderos,
                  espacios recreativos y miradores.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="mb-3 text-2xl font-black">
                  Circuito Internacional
                </h3>

                <p className="leading-7 text-[#637166]">
                  El circuito rodea el embalse y es reconocido
                  por sus paisajes serranos y su historia vinculada
                  al automovilismo nacional e internacional.
                </p>
              </article>
            </div>
          </section>

          {/* ACTIVIDADES */}
          <section className="mt-16 rounded-3xl bg-[#294a39] p-8 text-white md:p-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#e5c49e]">
              Experiencias
            </p>

            <h2 className="mb-6 text-3xl font-black">
              Actividades para disfrutar
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                "Caminatas por senderos serranos.",
                "Paseos y recorridos en bicicleta.",
                "Actividades recreativas en el lago.",
                "Observación de paisajes y naturaleza.",
                "Visitas a cascadas y espacios verdes.",
                "Paseos y excursiones a caballo.",
              ].map((actividad) => (
                <p key={actividad} className="flex gap-3 leading-7">
                  <span className="text-[#e5c49e]">✦</span>
                  {actividad}
                </p>
              ))}
            </div>
          </section>

          {/* GALERÍA */}
          <section className="mt-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a36e3d]">
              Descubrí sus paisajes
            </p>

            <h2 className="mb-8 text-3xl font-black md:text-4xl">
              Galería de imágenes
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {fotografias.map((foto) => (
                <article key={foto.titulo}>
                  <img
                    src={foto.imagen}
                    alt={foto.titulo + " en Potrero de los Funes"}
                    loading="lazy"
                    className="h-64 w-full rounded-3xl object-cover shadow-md"
                  />

                  <h3 className="mt-4 text-xl font-black">
                    {foto.titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#637166]">
                    {foto.descripcion}
                  </p>

                  <a
                    href={foto.fuente}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-semibold text-[#a36e3d] underline"
                  >
                    Consultar fuente de la fotografía
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* NAVEGACIÓN */}
          <div className="mt-16 flex flex-wrap gap-4">
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
