import Reveal from "@/components/Reveal"
import Link from "next/link"
import { projects } from "@/lib/projects"

export const metadata = {
  title: "Proyectos",
}

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <Reveal>
        <div className="space-y-16">

          <div className="space-y-4">
            <p className="text-sm text-neutral-500 tracking-wider uppercase">
              Trabajo técnico
            </p>

            <h1 className="text-4xl font-semibold tracking-tight">
              Proyectos
            </h1>

            <p className="text-neutral-400 max-w-xl">
              Aplicaciones desarrolladas con foco en arquitectura,
              mantenibilidad y escalabilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  )
}
