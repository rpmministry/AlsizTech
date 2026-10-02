import React from "react";

// Interfaces for our component props (empty for now, as it's static)
export interface SkateCoreoProjectProps {
  className?: string;
}

const features = [
  {
    title: "Pista 2D Interactiva",
    description:
      "Lienzo digital para el trazado espacial de trayectorias, cálculo de curvas y visualización del movimiento sincronizado con la música.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        ></path>
      </svg>
    ),
  },
  {
    title: "Audio Studio Integrado",
    description:
      "Motor DAW multicanal en el navegador para recortes, ajuste de BPM y generación de Voice Cues automatizados.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        ></path>
      </svg>
    ),
  },
  {
    title: "Visión por Computadora",
    description:
      "Escaneo inteligente que transforma rutinas dibujadas a mano en papel a vectores digitales proporcionales exactos.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Panel del Entrenador",
    description:
      "Directorio centralizado de atletas, gestión deportiva y generación automática de reportes técnicos bajo reglamentos oficiales.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
      </svg>
    ),
  },
];

const techStack = [
  "React 18",
  "TypeScript",
  "Vite",
  "Zustand",
  "Tailwind CSS",
  "Web Audio API",
  "Canvas API",
  "Supabase",
];

export const SkateCoreoProject: React.FC<SkateCoreoProjectProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-sm font-semibold tracking-wider text-blue-600 bg-blue-100 rounded-full dark:text-blue-400 dark:bg-blue-900/30">
              NUEVO LANZAMIENTO
            </span>
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              PWA / Sports Tech
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            SkateCoreo
          </h2>
          <h3 className="text-2xl md:text-3xl font-light text-zinc-600 dark:text-zinc-300 mb-6">
            Plataforma para Patinaje Artístico.
          </h3>
          <p className="text-xl font-medium text-blue-600 dark:text-blue-400 mb-8 italic">
            "Tecnología para crear el movimiento perfecto. Tu coreografía, del
            papel a la pista en segundos."
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            SkateCoreo es la principal herramienta digital progresiva (PWA)
            especializada en la creación, gestión y análisis de coreografías
            para patinaje artístico. Diseñada para cerrar la brecha entre la
            conceptualización artística en papel y la ejecución técnica en la
            pista, integrando herramientas de trazado espacial interactivo con
            edición de audio multicanal en un entorno local-first.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Desktop Mockup (Spans 8 cols on large screens) */}
          <div className="md:col-span-12 lg:col-span-8 group relative rounded-3xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-xl transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src="/assets/skatecoreo-desktop.webp"
              alt="SkateCoreo Desktop Workspace"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="px-4 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                <p className="text-sm font-semibold">
                  Entorno de Trabajo Completo
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Mockup (Spans 4 cols on large screens) */}
          <div className="md:col-span-6 lg:col-span-4 group relative rounded-3xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-xl transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src="/assets/skatecoreo-mobile.webp"
              alt="SkateCoreo Mobile Interface"
              className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="px-4 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                <p className="text-sm font-semibold">Interfaz Responsiva</p>
              </div>
            </div>
          </div>

          {/* Features Grid (Spans full width, internal grid) */}
          <div className="md:col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 md:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-5">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack (Spans 4 cols on large screens) */}
          <div className="md:col-span-6 lg:col-span-4 p-8 md:p-10 rounded-3xl bg-blue-600 text-white shadow-xl mt-2 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-6">Stack Tecnológico</h4>
              <p className="text-blue-100 mb-8">
                Construido con las últimas tecnologías web para garantizar un
                rendimiento óptimo, capacidades offline y una experiencia de
                usuario fluida.
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-blue-700/50 backdrop-blur-sm border border-blue-500/30 text-sm font-medium hover:bg-blue-700 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkateCoreoProject;
