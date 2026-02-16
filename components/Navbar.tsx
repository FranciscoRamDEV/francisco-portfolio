"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-sm font-medium tracking-wide hover:text-white transition"
        >
          Francisco
        </Link>

        <nav className="flex gap-8 text-sm text-neutral-400">
          <Link href="/about" className="hover:text-white transition">
            Sobre mí
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            Proyectos
          </Link>
          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contacto
          </Link>

          <Link href="/now" className="hover:text-white transition">
            Now
          </Link>

        </nav>
      </div>
    </header>
  )
}
