export type Project = {
  title: string
  slug: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  content: string
}

export const projects: Project[] = [
  {
    title: "Expense Manager Pro",
    slug: "expense-manager-pro",
    description:
      "Sistema full-stack para gestión financiera personal con autenticación y arquitectura limpia.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker", "JWT"],
    github: "https://github.com/tuusuario/expense-manager-pro",
    demo: "",
    content: `
## Contexto

Expense Manager Pro nace como un ejercicio práctico para aplicar arquitectura limpia en un entorno full-stack real.

El objetivo principal fue diseñar una base mantenible, extensible y preparada para producción.

## Decisiones técnicas

- Separación por capas (dominio, aplicación, infraestructura).
- Manejo centralizado de errores.
- Validación estructurada de inputs.
- Autenticación basada en JWT.

## Arquitectura

El backend sigue un enfoque modular. Cada módulo encapsula su lógica de negocio y evita dependencias innecesarias.

La aplicación está preparada para escalar agregando nuevos módulos sin afectar los existentes.

## Infraestructura

- Docker para entorno reproducible.
- Variables de entorno separadas por entorno.
- Base de datos PostgreSQL.
- Preparado para despliegue serverless.

## Aprendizajes

Este proyecto permitió reforzar conceptos de:

- Diseño de APIs mantenibles.
- Organización de código en proyectos reales.
- Gestión de estados y autenticación.
`
,
  },
]
