// ============================================================
// SINCO · config.js
// ------------------------------------------------------------
// ESTE ES EL ARCHIVO MÁS IMPORTANTE DEL BOILERPLATE.
// Todo el branding, copy, features y configuración del producto vive aquí.
// Cambiar este archivo cambia el producto entero — sin abrir JSX.
//
// Estructura:
//   - app:      identidad del producto (nombre, descripción, dominio, color)
//   - features: toggles para encender/apagar funcionalidades
//   - ai:       configuración de OpenAI
//   - email:    configuración de Resend
//   - auth:     providers habilitados
//   - landing:  copy de la página pública
//   - pricing:  planes
// ============================================================

const config = {
  // -----------------------------------------------------------
  // Identidad del producto
  // -----------------------------------------------------------
  app: {
    name: "SINCO",
    description:
      "Firma especializada en comunicación integral que diagnostica, diseña y ejecuta estrategias para conectar la comunicación de las organizaciones con sus objetivos.",
    domain: "sinco.com.mx",
    locale: "es",
    defaultUrl: "http://localhost:3000",
  },

  // -----------------------------------------------------------
  // Identidad visual
  // -----------------------------------------------------------
  brand: {
    primary: "#086EB8",
    accent: "#16213B",
    logoText: "SINCO",
    logoSrc: "/sinco-logo.png",
    radius: "1rem",
  },

  // -----------------------------------------------------------
  // Toggles de features
  // -----------------------------------------------------------
  features: {
    waitlist: true,
    googleAuth: false,
    emailLogin: false,
    aiChat: false,
    toolUse: false,
    agents: false,
    resend: true,
    pricing: false,
    paypal: false,
    adminPanel: true,
  },

  // -----------------------------------------------------------
  // PayPal.me
  // -----------------------------------------------------------
  payment: {
    paypalMeUsername: "",
    defaultAmount: 0,
    currency: "USD",
    buttonText: "Pagar con PayPal",
  },

  // -----------------------------------------------------------
  // OpenAI
  // -----------------------------------------------------------
  ai: {
    chatModel: "gpt-4o-mini",
    structuredModel: "gpt-4o-mini",
    agentModel: "gpt-4o",
    maxTokens: 1500,
    temperature: 0.4,
  },

  // -----------------------------------------------------------
  // Resend
  // -----------------------------------------------------------
  email: {
    from: "SINCO <onboarding@resend.dev>",
    replyTo: null,
    supportEmail: null,
    waitlist: {
      subject: "Recibimos tu solicitud de diagnóstico",
      preview: "Gracias por contactar a SINCO",
      heading: "Gracias por iniciar la conversación.",
      body: "Recibimos tu correo. Nos pondremos en contacto para conocer el contexto de tu organización y entender el reto de comunicación que quieres resolver.",
    },
  },

  // -----------------------------------------------------------
  // Auth providers
  // -----------------------------------------------------------
  auth: {
    loginUrl: "/login",
    afterLoginUrl: "/dashboard",
    afterLogoutUrl: "/",
    providers: ["google"],
  },

  // -----------------------------------------------------------
  // Landing
  // -----------------------------------------------------------
  landing: {
    nav: [
      { label: "Enfoque", href: "#enfoque" },
      { label: "Servicios", href: "#servicios" },
      { label: "Método", href: "#metodo" },
      { label: "Preguntas", href: "#faq" },
    ],

    hero: {
      eyebrow: "Soluciones Integrales de Comunicación",
      title: "Una estrategia para todo lo que tu organización comunica.",
      subtitle:
        "Diagnosticamos cómo circulan tus mensajes, conectamos cada frente de comunicación y convertimos los hallazgos en acciones alineadas con tus objetivos.",
      cta: {
        label: "Solicita un diagnóstico",
        href: "#contacto",
      },
      ctaSecondary: { label: "Conoce nuestros servicios", href: "#servicios" },
      trustLine: "Estrategia a la medida · De la planeación a la operación",
      areas: [
        "Institucional",
        "Interna",
        "Comercial",
        "Digital",
        "Política",
      ],
    },

    problem: {
      eyebrow: "Nuestro enfoque",
      title: "Cuando la comunicación se fragmenta, la organización pierde fuerza.",
      subtitle:
        "Los mensajes internos, la reputación, las ventas, la presencia digital y la relación con el entorno forman un mismo sistema. SINCO analiza el conjunto antes de proponer una solución.",
      items: [
        {
          icon: "MessagesSquare",
          title: "Mensajes desconectados",
          body: "Cada área comunica por su cuenta y la organización termina proyectando prioridades distintas.",
        },
        {
          icon: "Activity",
          title: "Problemas que se repiten",
          body: "Sin un diagnóstico integral se atienden síntomas, mientras las causas siguen afectando productividad, imagen y resultados.",
        },
        {
          icon: "ShieldAlert",
          title: "Reacción en lugar de estrategia",
          body: "Las decisiones llegan después de una crisis o una oportunidad perdida, en vez de anticiparse con información y objetivos claros.",
        },
      ],
    },

    features: {
      eyebrow: "Cinco áreas, una sola visión",
      title: "Soluciones que se complementan.",
      subtitle:
        "Activamos las especialidades que tu organización necesita sin perder de vista el sistema completo.",
      items: [
        {
          icon: "Building2",
          title: "Comunicación institucional",
          body: "Identidad, reputación, relaciones públicas, manejo de medios y comunicación de crisis con los públicos del entorno.",
        },
        {
          icon: "UsersRound",
          title: "Comunicación interna",
          body: "Flujos de información, clima organizacional, medios internos, capacitación y programas que conectan a los equipos.",
        },
        {
          icon: "LineChart",
          title: "Comunicación comercial",
          body: "Análisis de mercado, marca, posicionamiento y campañas que impulsan resultados sin descuidar identidad y prestigio.",
        },
        {
          icon: "MonitorSmartphone",
          title: "Comunicación digital",
          body: "Estrategia web y de redes sociales, producción audiovisual, medición y mensajes coherentes con la organización.",
        },
        {
          icon: "Landmark",
          title: "Comunicación política",
          body: "Análisis del entorno, imagen pública, posicionamiento mediático y estrategias para instituciones, gobiernos y actores públicos.",
        },
      ],
    },

    process: {
      eyebrow: "Cómo trabajamos",
      title: "Del problema visible a una solución sostenible.",
      subtitle:
        "Cada proyecto parte de la realidad de la organización. No ofrecemos paquetes prefabricados.",
      steps: [
        {
          number: "01",
          title: "Diagnóstico",
          body: "Escuchamos, analizamos mensajes, canales, públicos y objetivos para encontrar las causas del problema.",
        },
        {
          number: "02",
          title: "Estrategia integral",
          body: "Definimos prioridades y conectamos las áreas necesarias en una ruta clara, medible y adecuada al contexto.",
        },
        {
          number: "03",
          title: "Implementación",
          body: "Ejecutamos, coordinamos a equipos y proveedores o acompañamos la operación para convertir la estrategia en resultados.",
        },
      ],
    },

    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Antes de trabajar con SINCO.",
      items: [
        {
          q: "¿Qué diferencia a SINCO de una agencia de publicidad?",
          a: "SINCO no parte de vender un servicio predeterminado. Primero diagnostica integralmente la comunicación para identificar qué necesita realmente la organización.",
        },
        {
          q: "¿Cómo funciona el diagnóstico integral?",
          a: "Analizamos la comunicación interna, externa, comercial, digital e institucional para detectar causas, conexiones y prioridades antes de diseñar la estrategia.",
        },
        {
          q: "¿Puede trabajar con nuestro equipo y proveedores actuales?",
          a: "Sí. SINCO puede integrarse con tu departamento de comunicación y coordinar a los proveedores existentes bajo una estrategia común.",
        },
        {
          q: "¿SINCO también ejecuta las soluciones?",
          a: "Sí. Podemos ejecutar directamente, coordinar a tu equipo y proveedores o recomendar especialistas externos según lo que indique el diagnóstico.",
        },
      ],
    },

    finalCta: {
      eyebrow: "Comencemos por entender",
      title: "Tu organización no necesita comunicar más. Necesita comunicar mejor.",
      subtitle:
        "Una conversación inicial nos permite identificar el reto y definir si un diagnóstico integral es el siguiente paso.",
      cta: {
        label: "Solicita un diagnóstico",
        href: "#contacto",
      },
      ctaSecondary: null,
    },

    waitlist: {
      eyebrow: "Contacto",
      title: "Cuéntanos dónde comienza el reto.",
      subtitle:
        "Comparte tu correo y nos pondremos en contacto para conocer el contexto de tu organización.",
      successMessage: "Gracias. Recibimos tu correo y nos pondremos en contacto.",
      buttonLabel: "Quiero conversar",
      placeholder: "correo@organizacion.com",
    },

    footer: {
      tagline:
        "Comunicación institucional, interna, comercial, digital y política bajo una estrategia común.",
      columns: [
        {
          title: "Explora",
          links: [
            {
              label: "Nuestro enfoque",
              href: "#enfoque",
            },
            {
              label: "Servicios",
              href: "#servicios",
            },
            {
              label: "Método de trabajo",
              href: "#metodo",
            },
          ],
        },
        {
          title: "Especialidades",
          links: [
            {
              label: "Institucional e interna",
              href: "#servicios",
            },
            {
              label: "Comercial y digital",
              href: "#servicios",
            },
            {
              label: "Política y gubernamental",
              href: "#servicios",
            },
          ],
        },
        {
          title: "Conversemos",
          links: [
            {
              label: "Solicitar diagnóstico",
              href: "#contacto",
            },
          ],
        },
      ],
      legal: "Soluciones Integrales de Comunicación",
      links: [],
    },
  },

  // -----------------------------------------------------------
  // Pricing
  // -----------------------------------------------------------
  pricing: {
    eyebrow: "Servicios a la medida",
    title: "El alcance parte del diagnóstico.",
    subtitle: "Cada propuesta responde al contexto, prioridades y objetivos de la organización.",
    plans: [
      {
        id: "starter",
        name: "Diagnóstico",
        price: 0,
        currency: "USD",
        interval: "mes",
        description: "Para comprender el problema antes de actuar.",
        features: [
          "Análisis del contexto",
          "Identificación de causas",
          "Prioridades de acción",
        ],
        cta: "Solicitar diagnóstico",
      },
      {
        id: "pro",
        name: "Estrategia integral",
        price: 29,
        currency: "USD",
        interval: "mes",
        description: "Para transformar hallazgos en acciones coordinadas.",
        features: [
          "Planeación a la medida",
          "Coordinación de especialidades",
          "Implementación y seguimiento",
        ],
        cta: "Conversemos",
        highlighted: true,
      },
    ],
  },
};

export default config;
