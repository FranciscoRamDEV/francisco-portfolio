import Link from "next/link"

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 text-center space-y-6">
      <h1 className="text-4xl font-semibold">
        Página no encontrada
      </h1>

      <p className="text-neutral-400">
        El recurso que buscas no existe o fue movido.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-white text-black text-sm rounded-lg font-medium hover:scale-[1.03] transition"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
