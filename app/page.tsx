import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Inicio",
};

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32">
      <Reveal>
        <div className="space-y-8">

          <p className="text-sm text-neutral-500 tracking-wider uppercase">
            Software Developer
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight">
            Construyendo software
            <br />
            sólido y escalable.
          </h1>

          <p className="text-neutral-400 max-w-xl leading-relaxed">
            Estudiante de Ingeniería en Informática enfocado en backend,
            arquitectura limpia y sistemas bien estructurados.
            Este sitio documenta mi evolución técnica.
          </p>

          <div className="flex gap-6 pt-6">
            <a
              href="/projects"
              className="px-6 py-3 bg-white text-black text-sm rounded-lg font-medium hover:scale-[1.03] transition"
            >
              Ver proyectos
            </a>

            <a
              href="/blog"
              className="px-6 py-3 border border-white/10 text-sm rounded-lg hover:border-white/30 hover:bg-white/5 transition"
            >
              Leer blog
            </a>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
