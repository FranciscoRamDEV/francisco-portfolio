export const metadata = {
  title: "Sobre mí",
};

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-8">
      <h1 className="text-3xl font-semibold">Sobre mí</h1>

      <p className="text-neutral-400 leading-relaxed">
        Actualmente curso Ingeniería en Informática y estoy construyendo
        una base sólida en desarrollo backend, estructuras de datos
        y arquitectura de software.
      </p>

      <p className="text-neutral-400 leading-relaxed">
        Me interesa entender cómo se diseñan sistemas que escalan,
        cómo se estructuran proyectos profesionales y cómo tomar
        decisiones técnicas que mantengan el código mantenible
        a largo plazo.
      </p>

      <p className="text-neutral-400 leading-relaxed">
        Este sitio documenta mi proceso de aprendizaje y los proyectos
        que voy desarrollando mientras avanzo en mi formación.
      </p>
    </main>
  );
}
