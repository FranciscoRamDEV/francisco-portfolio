import Link from "next/link"


type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
};

export default function ProjectCard({
  title,
  description,
  stack,
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/2 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

      {/* Glow radial interno */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-white/5 via-transparent  to-transparent pointer-events-none" />

      {/* Contenido */}
      <Link href="/projects/expense-manager-pro" className="...">

        <h3 className="text-xl font-semibold text-white mb-2">
          Expense Manager Pro
        </h3>

        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Aplicación full-stack con autenticación JWT, PostgreSQL y arquitectura limpia.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
            Next.js
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
            PostgreSQL
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
            Docker
          </span>
        </div>

        <div className="text-sm text-white/40 group-hover:text-white/70 transition">
          Ver proyecto →
        </div>
      </Link>
    </div>
  );
}
