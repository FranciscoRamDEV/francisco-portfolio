export const metadata = {
  title: "Contacto",
};

export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-8">
      <h1 className="text-3xl font-semibold">Contacto</h1>

      <p className="text-neutral-400">
        Si quieres conversar sobre desarrollo o proyectos,
        puedes escribirme directamente.
      </p>

      <div className="space-y-2 text-neutral-300">
        <p>Email: francisco.dev@example.com</p>
        <p>GitHub: github.com/tuusuario</p>
        <p>LinkedIn: linkedin.com/in/tuusuario</p>
      </div>
    </main>
  );
}
