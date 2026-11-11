export const translations = {
  es: {
    nav: { services: 'Servicios', cases: 'Casos', process: 'Cómo trabajo', about: 'Sobre mí', contact: 'Contacto', cta: 'Escribime' },
    skip: 'Saltar al contenido',

    hero: {
      title: 'Automatizo procesos manuales y construyo software a medida para tu empresa.',
      proof: 'Desarrollador full stack y consultor de integración. Automatizo procesos y creo productos digitales a medida: sitios web, aplicaciones y backends, con experiencia trabajando con equipos de negocio en clientes reales.',
      primary: 'Escribime por WhatsApp',
      secondary: 'Ver casos reales',
      beforeTitle: 'Hoy',
      afterTitle: 'Con un sistema',
      rows: [
        { before: 'Pasar datos de una planilla a otra a mano', after: 'Los datos se mueven solos entre tus sistemas' },
        { before: 'Reportes armados el último día del mes', after: 'Reportes listos, siempre actualizados' },
        { before: 'Pedidos y consultas por mensajes sueltos', after: 'Un solo lugar con estado y responsable' },
        { before: 'Un ERP que no habla con el resto', after: 'Integraciones entre ERP, CRM y planillas' },
      ],
    },

    services: {
      title: 'Qué hago por tu empresa',
      intro: 'Cuatro formas de trabajo, según dónde duela más.',
      items: [
        {
          name: 'Automatización de procesos',
          text: 'Tomo una tarea repetitiva que hoy hace una persona y la convierto en un flujo que corre solo. Con IA cuando aporta, sin IA cuando no hace falta.',
          example: 'Carga de datos, conciliaciones, reportes, avisos a clientes.',
        },
        {
          name: 'Integraciones',
          text: 'Conecto las herramientas que ya usás para que dejen de depender de copiar y pegar: ERP, CRM, planillas y APIs de terceros.',
          example: 'Sincronizar pedidos, stock o clientes entre sistemas.',
        },
        {
          name: 'Productos digitales a medida',
          text: 'Sitios web, aplicaciones, frontend y backend pensados para tu forma de trabajar, de punta a punta y listos para producción. Incluye backends específicos para resolver un problema puntual de tu negocio.',
          example: 'Sitios y landings, portales de clientes, paneles internos, APIs.',
        },
        {
          name: 'Mantenimiento y evolución',
          text: 'Lo que construyo queda funcionando, desplegado y documentado. Después lo cuido y lo hago crecer a medida que tu negocio cambia.',
          example: 'Despliegue, monitoreo, correcciones y nuevas funciones.',
        },
      ],
    },

    cases: {
      title: 'Trabajo en producción',
      intro: 'Proyectos reales en producción. Los nombres de las empresas se mantienen en reserva.',
      problemLabel: 'El problema',
      builtLabel: 'Lo que construí',
      resultLabel: 'Resultado',
      items: [
        {
          tag: 'Desarrollo a medida',
          title: 'Plataforma de gestión para una empresa de alquiler de autos',
          flow: ['Alta del vehículo', 'Reserva', 'Entrega y devolución', 'Mantenimiento'],
          problem: 'Controlar el ciclo completo de cada vehículo, de la reserva a la devolución, en un solo lugar.',
          built: 'Aplicación web y backend que cubren todo el ciclo de vida del vehículo.',
          result: 'Una plataforma única, en uso en producción.',
          stack: ['React', 'Next.js', 'Spring Boot'],
        },
        {
          tag: 'Backend con lógica de negocio',
          title: 'Sistema de envíos para una empresa de delivery local',
          flow: ['Ingreso', 'Depósito', 'Estimación de entrega', 'Aviso al remitente'],
          problem: 'Seguir cada paquete desde que ingresa al depósito hasta que se entrega, y avisarle a quien lo envía.',
          built: 'Backend que registra el ingreso, sigue el paquete en depósito, estima el tiempo de entrega, calcula el costo del envío y notifica al remitente.',
          result: 'Seguimiento y notificaciones automáticas en lugar de consultas manuales.',
          stack: ['Spring Boot', 'Node.js', 'SQL'],
        },
        {
          tag: 'Integración de datos',
          title: 'Datos de planificación SAP IBP en 5 clientes',
          flow: ['Origen', 'Integración', 'Validación', 'Monitoreo'],
          problem: 'Que los datos de planificación lleguen completos y correctos, y que los usuarios de negocio puedan confiar en ellos.',
          built: 'Integración, validación y monitoreo de cargas de datos, con diagnóstico de fallas y acompañamiento al equipo de negocio.',
          result: 'Cargas monitoreadas y problemas resueltos antes de que lleguen al usuario.',
          stack: ['SAP IBP', 'SAP BTP', 'SQL'],
        },
        {
          tag: 'Automatización',
          title: 'Limpieza y análisis de datos entre equipos',
          flow: ['Datos sueltos', 'Limpieza', 'Datos listos', 'Análisis compartido'],
          problem: 'Datos desordenados que cada equipo corregía y analizaba por su cuenta.',
          built: 'Flujos en Python que limpian los datos y los dejan listos para el análisis compartido, desplegados con Docker.',
          result: 'Una misma fuente limpia para varios equipos.',
          stack: ['Python', 'Docker', 'PostgreSQL'],
        },
      ],
      moreTitle: 'Sitios y apps propias',
      more: [
        { title: 'Forjapp', text: 'App web e iOS para registrar entrenamientos y peso, con gráficas de evolución por ejercicio.', href: 'https://forjapp-two.vercel.app/' },
        { title: 'SelfCare', text: 'Landing para un negocio local de bienestar.', href: 'https://selfcareuy.vercel.app/' },
        { title: 'Demicheri Fitness', text: 'Sitio y tienda online para venta de planes de entrenamiento.', href: 'https://demicherifitness.com/' },
      ],
      visit: 'Visitar',
    },

    process: {
      title: 'Cómo trabajamos',
      steps: [
        { t: 'Charla de 20 minutos', d: 'Me contás cómo se hace hoy el proceso. Sin costo y sin compromiso.' },
        { t: 'Propuesta cerrada', d: 'Te digo qué voy a hacer, en qué plazo y cuánto cuesta, antes de empezar.' },
        { t: 'Entregas cortas', d: 'Vas viendo avances funcionando cada pocos días, no una sorpresa al final.' },
        { t: 'Puesta en marcha', d: 'Lo dejo andando, documentado y con soporte para que tu equipo lo use con tranquilidad.' },
      ],
    },

    about: {
      title: 'Quién va a trabajar en tu proyecto',
      photoAlt: 'Mateo Álvarez',
      paragraphs: [
        'Soy Mateo, desarrollador full stack de Uruguay. Construyo backends, APIs y aplicaciones web que hoy sostienen operaciones de empresas reales.',
        'En paralelo trabajo como consultor de integración y SAP IBP, en contacto directo con equipos de negocio de distintos clientes. Por eso no me quedo en lo técnico: entiendo qué necesita cada área y asumo la responsabilidad del resultado, desde la definición hasta la puesta en marcha.',
        'Hablás directo conmigo, desde la primera charla hasta la entrega.',
      ],
      stackTitle: 'Con qué trabajo',
      stack: [
        { g: 'Backend', v: 'Spring Boot, Node.js, APIs REST, PostgreSQL' },
        { g: 'Frontend', v: 'React, Next.js, TypeScript' },
        { g: 'Automatización', v: 'Python, SQL, Docker' },
        { g: 'Nube y datos', v: 'AWS, Azure, Kubernetes, Grafana, ElasticSearch' },
        { g: 'SAP', v: 'SAP IBP, CI-DS, S/4HANA, BTP' },
      ],
      trackTitle: 'Roles',
      track: [
        'Desarrollador full stack',
        'Consultor de integración y SAP IBP',
      ],
      langs: 'Español nativo · Inglés C1',
    },

    contact: {
      title: 'Contame qué proceso te está haciendo perder tiempo',
      text: 'Escribime unas líneas y te respondo con una idea concreta de cómo resolverlo. Sin costo para la primera charla.',
      whatsapp: 'Escribime por WhatsApp',
      email: 'O por email',
      cv: 'Descargar CV',
      hours: 'Respondo en el día, de lunes a viernes.',
      location: 'Montevideo, Uruguay · trabajo en forma remota con toda la región',
    },

    footer: 'Mateo Álvarez',
    notFound: { title: 'Esta página no existe', text: 'Puede que el enlace esté roto o que la página se haya movido.', back: 'Volver al inicio' },
  },

  en: {
    nav: { services: 'Services', cases: 'Work', process: 'How I work', about: 'About', contact: 'Contact', cta: 'Message me' },
    skip: 'Skip to content',

    hero: {
      title: 'I automate manual processes and build custom software for your company.',
      proof: 'Full-stack developer and integration consultant. I automate processes and build custom digital products: websites, apps and backends, with experience working with business teams at real clients.',
      primary: 'Message me on WhatsApp',
      secondary: 'See real work',
      beforeTitle: 'Today',
      afterTitle: 'With a system',
      rows: [
        { before: 'Copying data from one spreadsheet to another by hand', after: 'Data moves between your systems on its own' },
        { before: 'Reports assembled on the last day of the month', after: 'Reports ready and always up to date' },
        { before: 'Orders and requests scattered across messages', after: 'One place with status and owner' },
        { before: 'An ERP that does not talk to anything else', after: 'Integrations across ERP, CRM and spreadsheets' },
      ],
    },

    services: {
      title: 'What I do for your company',
      intro: 'Four ways to work together, depending on where it hurts most.',
      items: [
        {
          name: 'Process automation',
          text: 'I take a repetitive task that a person does today and turn it into a flow that runs on its own. With AI when it helps, without it when it does not.',
          example: 'Data entry, reconciliations, reports, customer notifications.',
        },
        {
          name: 'Integrations',
          text: 'I connect the tools you already use so they stop relying on copy and paste: ERP, CRM, spreadsheets and third-party APIs.',
          example: 'Sync orders, stock or customers between systems.',
        },
        {
          name: 'Custom digital products',
          text: 'Websites, apps, frontend and backend built around how you work, end to end and production ready. Includes purpose-built backends to solve a specific problem in your business.',
          example: 'Sites and landing pages, customer portals, internal dashboards, APIs.',
        },
        {
          name: 'Maintenance and evolution',
          text: 'What I build stays running, deployed and documented. Afterwards I look after it and grow it as your business changes.',
          example: 'Deployment, monitoring, fixes and new features.',
        },
      ],
    },

    cases: {
      title: 'Work in production',
      intro: 'Real projects in production. Company names are kept private.',
      problemLabel: 'The problem',
      builtLabel: 'What I built',
      resultLabel: 'Outcome',
      items: [
        {
          tag: 'Custom development',
          title: 'Management platform for a car rental company',
          flow: ['Vehicle intake', 'Booking', 'Handover and return', 'Maintenance'],
          problem: 'Control the full cycle of every vehicle, from booking to return, in one place.',
          built: 'A web app and backend covering the entire vehicle lifecycle.',
          result: 'A single platform, in production use.',
          stack: ['React', 'Next.js', 'Spring Boot'],
        },
        {
          tag: 'Backend with business logic',
          title: 'Shipping system for a local delivery company',
          flow: ['Intake', 'Warehouse', 'Delivery estimate', 'Sender notice'],
          problem: 'Track every package from warehouse intake to delivery, and keep the sender informed.',
          built: 'A backend that registers intake, tracks the package in the warehouse, estimates delivery time, calculates shipping cost and notifies the sender.',
          result: 'Automatic tracking and notifications instead of manual inquiries.',
          stack: ['Spring Boot', 'Node.js', 'SQL'],
        },
        {
          tag: 'Data integration',
          title: 'SAP IBP planning data across 5 clients',
          flow: ['Source', 'Integration', 'Validation', 'Monitoring'],
          problem: 'Planning data had to arrive complete and correct so business users could trust it.',
          built: 'Integration, validation and monitoring of data loads, with troubleshooting and support for the business team.',
          result: 'Monitored loads and issues solved before they reach the user.',
          stack: ['SAP IBP', 'SAP BTP', 'SQL'],
        },
        {
          tag: 'Automation',
          title: 'Data cleaning and analysis across teams',
          flow: ['Scattered data', 'Cleaning', 'Ready data', 'Shared analysis'],
          problem: 'Messy data that each team fixed and analyzed on its own.',
          built: 'Python workflows that clean the data and leave it ready for shared analysis, deployed with Docker.',
          result: 'One clean source for several teams.',
          stack: ['Python', 'Docker', 'PostgreSQL'],
        },
      ],
      moreTitle: 'Own sites and apps',
      more: [
        { title: 'Forjapp', text: 'Web and iOS app to log workouts and body weight, with progress charts per exercise.', href: 'https://forjapp-two.vercel.app/' },
        { title: 'SelfCare', text: 'Landing page for a local wellness business.', href: 'https://selfcareuy.vercel.app/' },
        { title: 'Demicheri Fitness', text: 'Website and online store selling training plans.', href: 'https://demicherifitness.com/' },
      ],
      visit: 'Visit',
    },

    process: {
      title: 'How we work',
      steps: [
        { t: '20-minute call', d: 'You tell me how the process works today. Free, no commitment.' },
        { t: 'Fixed proposal', d: 'I tell you what I will do, how long it takes and what it costs, before starting.' },
        { t: 'Short deliveries', d: 'You see working progress every few days, not a surprise at the end.' },
        { t: 'Go live', d: 'I leave it running, documented and supported so your team can use it with confidence.' },
      ],
    },

    about: {
      title: 'Who will work on your project',
      photoAlt: 'Mateo Álvarez',
      paragraphs: [
        'I am Mateo, a full-stack developer from Uruguay. I build backends, APIs and web apps that now run real company operations.',
        'In parallel I work as an integration and SAP IBP consultant, in direct contact with the business teams of different clients. That is why I do not stop at the technical side: I understand what each area needs and take ownership of the result, from definition to go-live.',
        'You talk directly to me, from the first call to delivery.',
      ],
      stackTitle: 'What I work with',
      stack: [
        { g: 'Backend', v: 'Spring Boot, Node.js, REST APIs, PostgreSQL' },
        { g: 'Frontend', v: 'React, Next.js, TypeScript' },
        { g: 'Automation', v: 'Python, SQL, Docker' },
        { g: 'Cloud and data', v: 'AWS, Azure, Kubernetes, Grafana, ElasticSearch' },
        { g: 'SAP', v: 'SAP IBP, CI-DS, S/4HANA, BTP' },
      ],
      trackTitle: 'Roles',
      track: [
        'Full-stack developer',
        'Integration and SAP IBP consultant',
      ],
      langs: 'Spanish native · English C1',
    },

    contact: {
      title: 'Tell me which process is wasting your time',
      text: 'Send a few lines and I will reply with a concrete idea of how to solve it. The first call is free.',
      whatsapp: 'Message me on WhatsApp',
      email: 'Or by email',
      cv: 'Download CV',
      hours: 'I reply the same day, Monday to Friday.',
      location: 'Montevideo, Uruguay · working remotely across the region',
    },

    footer: 'Mateo Álvarez',
    notFound: { title: 'This page does not exist', text: 'The link may be broken or the page may have moved.', back: 'Back to home' },
  },
}

export function useTranslations() {
  return translations
}
