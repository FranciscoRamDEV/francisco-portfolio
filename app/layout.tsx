import type { Metadata } from "next"
import "./globals.css"
import Spotlight from "@/components/Spotlight"
import Navbar from "@/components/Navbar"
import { Inter } from "next/font/google"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: {
    default: "Francisco | Software Developer",
    template: "%s | Francisco",
  },
  description:
    "Portfolio de desarrollo enfocado en backend, arquitectura limpia y sistemas escalables.",
  openGraph: {
    title: "Francisco | Software Developer",
    description:
      "Proyectos y documentación técnica sobre backend y arquitectura.",
    type: "website",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans bg-black text-neutral-200 antialiased overflow-x-hidden`}
      >
        {/* Fondo elegante con profundidad */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-b from-black via-neutral-950 to-black" />
          <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-225 h-125 bg-purple-600/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-50 -right-50 w-150 h-100 bg-blue-600/10 blur-3xl rounded-full" />
        </div>

        <div className="min-h-screen flex flex-col">
          {/* Navbar inteligente */}
          <Navbar />

          {/* Contenido */}
          <main className="pt-24">
            <Suspense>
              {children}
            </Suspense>
          </main>

          {/* Footer minimal premium */}
          <footer className="border-t border-white/5 py-8 text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} Francisco — Built with Next.js
          </footer>

          <Spotlight />
        </div>
      </body>
    </html>
  )
}
