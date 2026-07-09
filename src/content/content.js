// Bilingual content for the portfolio, derived from ABOUTME.md.
// Copy is rewritten in an active, concise voice; skills are reconstructed
// as native data (no shields.io badges).

export const SOCIALS = [
  {
    id: "github",
    label: "GitHub",
    handle: "@ByronGG",
    href: "https://github.com/ByronGG",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "luisalardin",
    href: "https://www.linkedin.com/in/luisalardin/",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@luis.alardin.g",
    href: "https://www.instagram.com/luis.alardin.g/",
  },
];

// Skill groups are language-agnostic (the heading is translated, the chips
// stay as proper nouns). Each chip carries a token role for syntax coloring.
export const SKILL_GROUPS = [
  {
    id: "languages",
    role: "kw",
    items: ["Python", "TypeScript", "JavaScript", "HTML5", "CSS3", "Dart", "C#", "Java", "C++", "PHP"],
  },
  {
    id: "frameworks",
    role: "str",
    items: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "Django",
      "FastAPI",
      "Laravel",
      "Flask",
      "Flutter",
      "Node.js",
      "Next.js",
      "NestJS",
      "GraphQL",
      "Prisma",
    ],
  },
  {
    id: "databases",
    role: "fn",
    items: ["PostgreSQL", "MySQL", "SQLite", "Firebase", "MongoDB"],
  },
  {
    id: "devops",
    role: "kw",
    items: [
      "Docker",
      "Nginx",
      "Gunicorn",
      "Apache",
      "Ubuntu",
      "Linux",
      "Plesk",
      "Vercel",
      "Raspberry Pi",
      "Arduino",
      "Windows Terminal",
      "PowerShell",
    ],
  },
  {
    id: "ai",
    role: "str",
    items: ["n8n", "Ollama", "OpenAI", "Claude Routines"],
  },
  {
    id: "tools",
    role: "fn",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Claude Code",
      "NetBeans",
      "JetBrains",
      "IntelliJ IDEA",
      "PyCharm",
      "Figma",
    ],
  },
];

export const CONTENT = {
  en: {
    nav: {
      about: "about",
      skills: "skills",
      experience: "experience",
      projects: "projects",
      contact: "contact",
    },
    hero: {
      command: "whoami",
      name: "Luis Alardin",
      roleLines: [
        "Computer Systems Engineer",
        "Full-Stack Developer · DevOps · AI",
      ],
      tagline:
        "I build web apps, internal tooling, automation and infrastructure — end to end.",
      stat: "2+ years of professional experience",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View projects",
    },
    about: {
      label: "about",
      heading: "Engineer who ships the whole stack",
      body: [
        "I'm a Computer Systems Engineer and full-stack developer. I work across the front and the back, then deploy and keep it running myself.",
        "Currently I lead a software department, where I build and maintain a Django-based ERP platform on a VPS. I design automation and AI workflows with n8n — contact capture, classification and outreach — to extend the company's CRM/ERP.",
        "I'm a strong believer in self-directed learning, constantly leveling up across frontend, backend, DevOps and data.",
      ],
      funFact: "Fun fact: I love music and play World of Warcraft.",
    },
    skills: {
      label: "skills",
      heading: "Tools I work with",
      groups: {
        languages: "Languages",
        frameworks: "Frameworks & Libraries",
        databases: "Databases",
        devops: "DevOps, Cloud & Infra",
        ai: "Automation & AI",
        tools: "Tooling & Design",
      },
    },
    experience: {
      label: "experience",
      heading: "What I'm doing now",
      roles: [
        {
          title: "Software Department Lead",
          period: "Current",
          points: [
            "Build and maintain a Django/ERP platform deployed on a VPS (Ubuntu · Nginx · Gunicorn · Docker).",
            "Design automation & AI workflows with n8n to extend the company's CRM/ERP — contact capture, classification and outreach.",
            "Work across the whole stack: React + Vite + TypeScript on the front, Django / FastAPI on the back.",
          ],
        },
      ],
      goals:
        "Future goals: keep mastering new technologies and never stop creating new ideas.",
    },
    projects: {
      label: "projects",
      heading: "Selected work",
      items: [
        {
          name: "ERP Platform",
          summary:
            "Web platform for managing a company's operations and internal processes, deployed on a VPS.",
          tech: ["Django", "Python", "PostgreSQL", "Nginx", "Gunicorn", "Docker", "FastAPI", "Ubuntu", "Plesk"],
          url: "https://platform.hyteck.mx",
        },
        {
          name: "CRM Automations",
          summary:
            "Workflows that capture contacts from email, classify them with AI and send personalized outreach.",
          tech: ["n8n", "OpenAI", "Python", "Claude Routines"],
        },
        {
          name: "AskQL",
          summary:
            "Text-to-SQL tool: upload a CSV or Excel file, ask a question in plain language, and an LLM turns your schema into SQL that runs in the browser — your data never leaves it.",
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "DuckDB", "SheetJS"],
          url: "https://askql.vercel.app/",
        },
        {
          name: "Developer Portfolio",
          summary: "Personal landing page showcasing my work and skills.",
          tech: ["React", "Vite", "Tailwind CSS"],
        },
      ],
    },
    contact: {
      label: "contact",
      heading: "Let's build something",
      body: "Open to collaboration, freelance work and new opportunities. The fastest way to reach me is below.",
      cta: "Find me online",
    },
    footer: {
      built: "Built with React, Vite & Tailwind CSS",
    },
    ui: {
      reduceHint: "",
    },
  },

  es: {
    nav: {
      about: "perfil",
      skills: "skills",
      experience: "experiencia",
      projects: "proyectos",
      contact: "contacto",
    },
    hero: {
      command: "whoami",
      name: "Luis Alardin",
      roleLines: [
        "Ingeniero en Sistemas Computacionales",
        "Desarrollador Full-Stack · DevOps · IA",
      ],
      tagline:
        "Construyo aplicaciones web, herramientas internas, automatización e infraestructura — de punta a punta.",
      stat: "2+ años de experiencia profesional",
      ctaPrimary: "Contáctame",
      ctaSecondary: "Ver proyectos",
    },
    about: {
      label: "perfil",
      heading: "Ingeniero que entrega todo el stack",
      body: [
        "Soy Ingeniero en Sistemas Computacionales y desarrollador full-stack. Trabajo tanto en el front como en el back, y luego despliego y mantengo todo funcionando.",
        "Actualmente lidero un departamento de software, donde construyo y mantengo una plataforma ERP en Django sobre un VPS. Diseño flujos de automatización e IA con n8n —captura de contactos, clasificación y seguimiento— para extender el CRM/ERP de la empresa.",
        "Creo firmemente en el aprendizaje autodirigido: subo de nivel constantemente en frontend, backend, DevOps y datos.",
      ],
      funFact: "Dato curioso: amo la música y juego World of Warcraft.",
    },
    skills: {
      label: "skills",
      heading: "Herramientas con las que trabajo",
      groups: {
        languages: "Lenguajes",
        frameworks: "Frameworks y Librerías",
        databases: "Bases de datos",
        devops: "DevOps, Cloud e Infra",
        ai: "Automatización e IA",
        tools: "Herramientas y Diseño",
      },
    },
    experience: {
      label: "experiencia",
      heading: "En qué trabajo ahora",
      roles: [
        {
          title: "Líder de Departamento de Software",
          period: "Actual",
          points: [
            "Construyo y mantengo una plataforma Django/ERP desplegada en un VPS (Ubuntu · Nginx · Gunicorn · Docker).",
            "Diseño flujos de automatización e IA con n8n para extender el CRM/ERP de la empresa: captura de contactos, clasificación y seguimiento.",
            "Trabajo en todo el stack: React + Vite + TypeScript en el front, Django / FastAPI en el back.",
          ],
        },
      ],
      goals:
        "Metas a futuro: seguir dominando nuevas tecnologías y nunca dejar de crear ideas nuevas.",
    },
    projects: {
      label: "proyectos",
      heading: "Trabajo seleccionado",
      items: [
        {
          name: "Plataforma ERP",
          summary:
            "Plataforma web para gestionar las operaciones y procesos internos de una empresa, desplegada en un VPS.",
          tech: ["Django", "Python", "PostgreSQL", "Nginx", "Gunicorn", "Docker", "FastAPI", "Ubuntu", "Plesk"],
          url: "https://platform.hyteck.mx",
        },
        {
          name: "Automatizaciones CRM",
          summary:
            "Flujos que capturan contactos desde el correo, los clasifican con IA y envían seguimiento personalizado.",
          tech: ["n8n", "OpenAI", "Python", "Claude Routines"],
        },
        {
          name: "AskQL",
          summary:
            "Herramienta de texto a SQL: sube un archivo CSV o Excel, pregunta en lenguaje natural y un LLM convierte tu esquema en SQL que se ejecuta en el navegador — tus datos nunca salen de él.",
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "DuckDB", "SheetJS"],
          url: "https://askql.vercel.app/",
        },
        {
          name: "Portafolio de Desarrollador",
          summary: "Landing page personal que muestra mi trabajo y habilidades.",
          tech: ["React", "Vite", "Tailwind CSS"],
        },
      ],
    },
    contact: {
      label: "contacto",
      heading: "Construyamos algo",
      body: "Abierto a colaboración, trabajo freelance y nuevas oportunidades. La forma más rápida de contactarme está abajo.",
      cta: "Encuéntrame en línea",
    },
    footer: {
      built: "Hecho con React, Vite y Tailwind CSS",
    },
    ui: {
      reduceHint: "",
    },
  },
};
