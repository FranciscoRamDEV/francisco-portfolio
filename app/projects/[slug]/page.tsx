import Reveal from "@/components/Reveal"

import Link from "next/link"
import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return notFound()
  }

  return (
    <Reveal>
    <div className="max-w-4xl mx-auto px-6 py-32 space-y-12">

      {/* Breadcrumb */}
      <div className="text-sm text-neutral-500">
        <Link href="/projects" className="hover:text-white transition">
          Proyectos
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-400">{project.title}</span>
      </div>

      {/* Header */}
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">
          {project.title}
        </h1>

        <p className="text-neutral-400 max-w-2xl">
          {project.description}
        </p>

        {/* Botones */}
        <div className="flex gap-4 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="px-5 py-2 bg-white text-black text-sm rounded-lg font-medium hover:scale-[1.03] transition"
            >
              Ver código
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="px-5 py-2 border border-white/10 text-sm rounded-lg hover:border-white/30 hover:bg-white/5 transition"
            >
              Ver demo
            </a>
          )}
        </div>
      </div>

      {/* Tecnologías */}
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

      <div className="border border-white/10 rounded-2xl p-6 bg-white/2">
        <h3 className="text-lg font-semibold mb-4">
          Arquitectura general
        </h3>

       <div className="text-sm text-neutral-400 space-y-2">
         <p>Cliente → API REST → Servicios → Base de datos</p>
         <p>Separación clara entre lógica de negocio e infraestructura.</p>
        </div>
      </div>


      {/* Contenido */}
      <div className="space-y-4">
        {project.content.split("\n").map((line, index) => {
          if (line.startsWith("## ")) {
            return (
              <h2 key={index} className="text-2xl font-semibold mt-10">
                {line.replace("## ", "")}
              </h2>
            )
          }

          if (line.startsWith("- ")) {
            return (
              <li key={index} className="ml-5 list-disc text-neutral-400">
                {line.replace("- ", "")}
              </li>
            )
          }

          if (line.trim() === "") return null

          return (
            <p key={index} className="text-neutral-400 leading-relaxed">
              {line}
            </p>
          )
        })}
      </div>

    </div>
  </Reveal>
)
}

