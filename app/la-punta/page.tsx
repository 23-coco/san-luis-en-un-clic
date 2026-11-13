
import Link from "next/link";

const fotografias = [
  {
    titulo: "Centro de Convenciones",
    descripcion: "Un espacio destacado para encuentros culturales y eventos.",
    imagen: "/imagenes/la-punta.webp",
  },
  {
    titulo: "Parque Astronómico",
    descripcion: "Un lugar para descubrir el universo y aprender astronomía.",
    imagen: "/imagenes/parque-astronomico.jpg",
  },
  {
    titulo: "Estadio Juan Gilberto Funes",
    descripcion: "Uno de los espacios deportivos más importantes de la ciudad.",
    imagen: "/imagenes/estadio-la-punta.jpg",
  },
];

const caracteristicas = [
  {
    titulo: "Ubicación",
    texto:
      "Se encuentra en el departamento Juan Martín de Pueyrredón, aproximadamente a 20 kilómetros al norte de la ciudad de San Luis.",
  },
  {
    titulo: "Relieve",
    texto:
      "Su entorno presenta terrenos de llanura y paisajes serranos, con las sierras de San Luis como parte del horizonte.",
  },
  {
    titulo: "Clima",
    texto:
      "Presenta un clima templado con características semiáridas, veranos cálidos e inviernos relativamente frescos.",
  },
  {
    titulo: "Urbanismo",
    texto:
      "Su planificación urbana incorpora barrios, avenidas, espacios verdes y sectores destinados a actividades educativas, culturales y tecnológicas.",
  },
];

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
              La Punta es una ciudad del departamento Juan Martín de
              Pueyrredón, ubicada a unos 20 kilómetros al norte de
              San Luis capital. Fue fundada el 26 de marzo de 2003
              y se destaca por su planificación urbana y su propuesta
              de desarrollo tecnológico y educativo.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#637166]">
              Su crecimiento combina espacios residenciales,
              instituciones educativas, propuestas culturales,
              instalaciones deportivas y áreas verdes.
            </p>
          </div>

          {/* CARACTERÍSTICAS */}
          <section className="mt-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a36e3d]">
              Conocé la ciudad
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

          {/* HISTORIA Y DESARROLLO */}
          <section className="mt-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a36e3d]">
              Identidad local
            </p>

            <h2 className="mb-8 text-3xl font-black md:text-4xl">
              Historia y desarrollo
            </h2>

            <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
              <h3 className="mb-3 text-2xl font-black">
                Una ciudad joven
              </h3>

              <p className="leading-8 text-[#637166]">
                Fundada el 26 de marzo de 2003, La Punta representa
                un proyecto urbano planificado desde sus comienzos.
                Su desarrollo busca integrar viviendas, educación,
                tecnología, cultura y espacios recreativos.
              </p>

              <h3 className="mb-3 mt-8 text-2xl font-black">
                Educación y tecnología
              </h3>

              <p className="leading-8 text-[#637166]">
                La ciudad cuenta con instituciones educativas
                y espacios vinculados al conocimiento, la ciencia
                y la innovación. Estos proyectos forman parte
                de su identidad y de su crecimiento.
              </p>
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

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="mb-3 text-2xl font-black">
                  Parque Astronómico
                </h3>

                <p className="leading-7 text-[#637166]">
                  Es un espacio dedicado a la divulgación científica
                  y la astronomía, donde se pueden conocer conceptos
                  relacionados con el universo y la observación del cielo.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="mb-3 text-2xl font-black">
                  Estadio Juan Gilberto Funes
                </h3>

                <p className="leading-7 text-[#637166]">
                  Es un importante escenario deportivo de la provincia,
                  preparado para recibir encuentros de fútbol y otros
                  acontecimientos.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="mb-3 text-2xl font-black">
                  Universidad de La Punta
                </h3>

                <p className="leading-7 text-[#637166]">
                  Es una institución educativa vinculada con la
                  formación, la investigación, la ciencia y la tecnología.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="mb-3 text-2xl font-black">
                  Centro de Convenciones
                </h3>

                <p className="leading-7 text-[#637166]">
                  Es un espacio destinado a encuentros, congresos,
                  actividades culturales y eventos de diferentes tipos.
                </p>
              </article>
            </div>
          </section>

          {/* NATURALEZA */}
          <section className="mt-16 rounded-3xl bg-[#294a39] p-8 text-white md:p-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#e5c49e]">
              Entorno natural
            </p>

            <h2 className="mb-6 text-3xl font-black">
              Naturaleza y paisaje
            </h2>

            <p className="leading-8 text-[#e3e9e2]">
              Aunque se caracteriza por su desarrollo urbano,
              La Punta conserva espacios verdes y se encuentra
              próxima a ambientes serranos. Su entorno permite
              apreciar la vegetación propia de la región y
              disfrutar de paisajes abiertos.
            </p>
          </section>

          {/* GALERÍA */}
          <section className="mt-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a36e3d]">
              Descubrí sus espacios
            </p>

            <h2 className="mb-8 text-3xl font-black md:text-4xl">
              Galería de imágenes
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {fotografias.map((foto) => (
                <article key={foto.titulo}>
                  <img
                    src={foto.imagen}
                    alt={foto.titulo + " en La Punta"}
                    loading="lazy"
                    className="h-64 w-full rounded-3xl object-cover shadow-md"
                  />

                  <h3 className="mt-4 text-xl font-black">
                    {foto.titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#637166]">
                    {foto.descripcion}
                  </p>
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
