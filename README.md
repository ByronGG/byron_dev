# Portafolio — Luis Alardin

Landing page personal de **Luis Alardin**, Ingeniero en Sistemas Computacionales y desarrollador Full-Stack. Una sola página con estética de terminal / IDE, bilingüe (español / inglés) y construida con React 19, Vite 8 y Tailwind CSS v4.

## Stack

- **React 19** + JSX
- **Vite 8** (HMR, build)
- **Tailwind CSS v4** vía el plugin `@tailwindcss/vite` (sin `tailwind.config.js`)
- **Oxlint** como linter

## Scripts

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo con HMR
npm run build      # build de producción en dist/
npm run preview    # servir el build de dist/ localmente
npm run lint       # ejecutar Oxlint
```

> No hay suite de pruebas. Los cambios se verifican con el servidor de desarrollo y `npm run lint`.

## Estructura

```
src/
├── content/content.js     # Todo el contenido (CONTENT por idioma + SOCIALS, SKILL_GROUPS)
├── context/LangContext.jsx# Contexto de idioma (en/es), persistido en localStorage
├── components/            # Section, TopBar, Hero, About, Skills, Experience, Projects, Contact, Footer…
├── hooks/                 # useReveal, useTypewriter, usePrefersReducedMotion
├── index.css             # Design tokens de Tailwind v4 (@theme)
├── App.jsx               # Orden de secciones, envuelto en LangProvider
└── main.jsx              # Punto de entrada
```

### Detalles clave

- **Contenido desacoplado:** toda la copia vive en `src/content/content.js`, indexada por idioma. Los componentes no contienen texto literal — lo leen con `useLang()`. Para editar copy, cambia **ambos** idiomas (`en` y `es`).
- **Bilingüe:** `LangContext` provee `{ lang, setLang, toggle, t }` y persiste la elección en `localStorage` (`portfolio-lang`).
- **Animaciones:** centralizadas en hooks y respetan `prefers-reduced-motion` (revelado al hacer scroll, efecto máquina de escribir).
- **Estilos:** sistema de diseño en `src/index.css` (`@theme`) con estética terminal/IDE; los acentos mapean a roles de token (`kw`, `str`, `fn`).

`ABOUTME.md` es la fuente canónica de la bio, skills y proyectos; `content.js` es su derivación estructurada.
