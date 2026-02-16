import Reveal from "@/components/Reveal"

export const metadata = {
  title: "Now",
}

export default function NowPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-32">
      <Reveal>
        <div className="space-y-12">

          <div className="space-y-4">
            <p className="text-sm text-neutral-500 tracking-wider uppercase">
              Actualidad
            </p>

            <h1 className="text-4xl font-semibold tracking-tight">
              En qué estoy trabajando ahora
            </h1>

            <p className="text-neutral-400 leading-relaxed">
              Esta página refleja mi enfoque actual. La actualizo
              periódicamente para documentar en qué estoy invirtiendo
              mi tiempo y energía.
            </p>
          </div>

          {/* Bloque 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">
              Backend & Arquitectura
            </h2>

            <ul className="space-y-2 text-neutral-400 list-disc ml-5">
              <li>Profundizando en arquitectura limpia aplicada a proyectos reales.</li>
              <li>Mejorando patrones de diseño en APIs REST.</li>
              <li>Optimización de consultas SQL en PostgreSQL.</li>
            </ul>
          </div>

          {/* Bloque 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">
              Infraestructura
            </h2>

            <ul className="space-y-2 text-neutral-400 list-disc ml-5">
              <li>Mejorando manejo de Docker en entornos locales.</li>
              <li>Preparando proyectos para despliegue en Vercel.</li>
              <li>Buenas prácticas en variables de entorno.</li>
            </ul>
          </div>

          {/* Bloque 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">
              Aprendizaje
            </h2>

            <ul className="space-y-2 text-neutral-400 list-disc ml-5">
              <li>Profundizando en sistemas escalables.</li>
              <li>Lectura sobre diseño de software mantenible.</li>
              <li>Mejorando documentación técnica en proyectos personales.</li>
            </ul>
          </div>

          <div className="pt-8 text-sm text-neutral-500">
            Última actualización: Febrero 2026
          </div>

        </div>
      </Reveal>
    </section>
  )
}
