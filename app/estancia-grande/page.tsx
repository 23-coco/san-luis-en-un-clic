
import Link from "next/link";

export default function EstanciaGrande() {
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
            Sierras y tranquilidad
          </p>

          <h1 className="mb-8 text-4xl font-black md:text-6xl">
            Estancia Grande<span className="text-[#b47b43]">.</span>
          </h1>

          <img
            src="/imagenes/estancia-grande.jpg"
            alt="Paisaje de Estancia Grande, San Luis"
            className="h-[300px] w-full rounded-[2rem] object-cover shadow-xl md:h-[480px]"
          />

          <div className="mt-10 max-w-4xl">
            <h2 className="mb-4 text-2xl font-black md:text-3xl">
              Un pueblo entre las sierras
            </h2>

            <p className="text-lg leading-8 text-[#637166]">
              Enclavada entre sierras y bañada por el arroyo Estancia Grande
              y los ríos Virorco y Las Águilas, esta localidad de estilo
              colonial se caracteriza por su geografía serrana, sus aguas
              cristalinas y sus tradicionales pulperías. Sus calles
              empedradas esconden rincones de gran belleza para descubrir
              y disfrutar de San Luis.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-black md:text-3xl">
              Tradición y vida campestre
            </h2>

            <p className="text-lg leading-8 text-[#637166]">
              A unos 30 kilómetros de la capital provincial, Estancia
              Grande invita a recorrer un ambiente campestre, con una
              fuente de agua, tiendas locales, un auditorio y un
              anfiteatro. Sus caminos de pulperías reúnen emprendimientos
              gastronómicos y productores regionales que ofrecen platos
              típicos de la zona.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#637166]">
              Sus calles pintorescas, las frondosas arboledas y los
              paisajes serranos acompañan el crecimiento turístico de
              la localidad. Cuenta con hosterías, cabañas y sectores
              de acampe para quienes desean disfrutar de la naturaleza.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-black md:text-3xl">
              Deportes y recreación
            </h2>

            <p className="text-lg leading-8 text-[#637166]">
              El predio municipal cuenta con canchas de fútbol, tenis,
              pádel y vóley, además de una pileta y un tobogán acuático.
              La plaza central también ofrece juegos para los más pequeños.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-black md:text-3xl">
              Lugares destacados
            </h2>

            <p className="text-lg leading-8 text-[#637166]">
              Entre sus atractivos se destaca el dique Berta Vidal de
              Battini, construido en 2012 sobre el arroyo Las Vegas.
              También sobresale el Club de Polo de Estancia Grande,
              que cuenta con instalaciones para 350 caballos y cuatro
              campos de juego, convirtiéndose en un importante atractivo
              turístico.
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
              href="https://www.google.com/maps/search/?api=1&query=Estancia+Grande%2C+San+Luis%2C+Argentina"
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
