
import { ServicePackage, AdditionalService, UseCase } from './types';

export const CONTACT_EMAIL = "dashboardonline2025@gmail.com";
export const CONTACT_WHATSAPP = "+51993513935";
export const WHATSAPP_URL = `https://wa.me/51993513935?text=Hola,%20estoy%20interesado%20en%20tus%20servicios%20de%20dashboards.`;

export const PACKAGES: ServicePackage[] = [
  {
    id: 'starter',
    name: { es: "STARTER", en: "STARTER" },
    price: 40,
    color: "green",
    features: {
      es: [
        "1 Dashboard / Página",
        "1 fuente de datos",
        "Diseño esencial limpio",
        "Gráficos interactivos",
        "Hosting incluido 1 mes",
        "1 revisión"
      ],
      en: [
        "1 Dashboard / Page",
        "1 data source",
        "Clean essential design",
        "Interactive charts",
        "1 month hosting included",
        "1 revision"
      ]
    },
    delivery: { es: "3-5 DÍAS", en: "3-5 DAYS" },
    designTime: { es: "Diseño: ~2-3 días", en: "Design: ~2-3 days" }
  },
  {
    id: 'basico',
    name: { es: "BÁSICO", en: "BASIC" },
    price: 90,
    color: "blue",
    features: {
      es: [
        "Hasta 3 páginas (1 Dashboard)",
        "1-2 fuentes de datos",
        "Diseño responsive",
        "KPIs personalizados",
        "Hosting incluido 3 meses",
        "2 revisiones"
      ],
      en: [
        "Up to 3 pages (1 Dashboard)",
        "1-2 data sources",
        "Responsive design",
        "Custom KPIs",
        "3 months hosting included",
        "2 revisions"
      ]
    },
    delivery: { es: "5-7 DÍAS", en: "5-7 DAYS" },
    designTime: { es: "Diseño: ~3-4 días", en: "Design: ~3-4 days" }
  },
  {
    id: 'estandar',
    name: { es: "ESTÁNDAR", en: "STANDARD" },
    price: 140,
    color: "blue",
    features: {
      es: [
        "Hasta 5 páginas (1 Dashboard)",
        "3 fuentes de datos",
        "Filtros avanzados",
        "Exportación de datos",
        "Hosting incluido 3 meses",
        "3 revisiones"
      ],
      en: [
        "Up to 5 pages (1 Dashboard)",
        "3 data sources",
        "Advanced filters",
        "Data export",
        "3 months hosting included",
        "3 revisions"
      ]
    },
    delivery: { es: "8-10 DÍAS", en: "8-10 DAYS" },
    designTime: { es: "Diseño: ~4-5 días", en: "Design: ~4-5 days" }
  },
  {
    id: 'profesional',
    name: { es: "PROFESIONAL", en: "PROFESSIONAL" },
    price: 250,
    highlight: true,
    color: "blue",
    features: {
      es: [
        "Hasta 7 páginas (1 Dashboard)",
        "5 fuentes de datos",
        "Diseño corporativo premium",
        "Actualización automática",
        "Reportes programados",
        "Video tutorial de uso"
      ],
      en: [
        "Up to 7 pages (1 Dashboard)",
        "5 data sources",
        "Premium corporate design",
        "Automatic updates",
        "Scheduled reports",
        "Video tutorial included"
      ]
    },
    delivery: { es: "12-14 DÍAS", en: "12-14 DAYS" },
    designTime: { es: "Diseño: ~6-7 días", en: "Design: ~6-7 days" }
  },
  {
    id: 'premium',
    name: { es: "PREMIUM", en: "PREMIUM" },
    price: 550,
    color: "green",
    features: {
      es: [
        "Páginas ilimitadas (1 Dashboard)",
        "Fuentes ilimitadas",
        "Análisis con Inteligencia Artificial",
        "Modelos Predictivos ML",
        "Capacitación en vivo (1hr)",
        "Soporte VIP 60 días"
      ],
      en: [
        "Unlimited pages (1 Dashboard)",
        "Unlimited sources",
        "AI-Powered Analysis",
        "ML Predictive Models",
        "Live training (1hr)",
        "60 days VIP support"
      ]
    },
    delivery: { es: "18-21 DÍAS", en: "18-21 DAYS" },
    designTime: { es: "Diseño: ~8-10 días", en: "Design: ~8-10 days" }
  }
];

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  { name: { es: "📱 Versión móvil nativa", en: "📱 Native mobile version" }, price: "+$80" },
  { name: { es: "🔔 Notificaciones automáticas", en: "🔔 Automatic notifications" }, price: "+$60" },
  { name: { es: "🚀 Entrega express (50% más rápido)", en: "🚀 Express delivery (50% faster)" }, price: "+50% del costo" },
  { name: { es: "📊 Migración desde Power BI", en: "📊 Migration from Power BI" }, price: "+$100" },
  { name: { es: "🔧 Mantenimiento mensual", en: "🔧 Monthly maintenance" }, price: "$40 (incluye 1 soporte por meet y cambios simples)" }
];

export const USE_CASES: UseCase[] = [
  { 
    title: { es: "🏦 Banca y Finanzas", en: "🏦 Banking & Finance" }, 
    description: { es: "Pipeline de ventas, carteras de crédito, forecasting financiero.", en: "Sales pipeline, credit portfolios, financial forecasting." }, 
    icon: "BuildingLibraryIcon", 
    color: "blue" 
  },
  { 
    title: { es: "🛡️ Sector Seguros", en: "🛡️ Insurance Sector" }, 
    description: { es: "Siniestralidad, análisis de pólizas, NPS y satisfacción.", en: "Claims ratio, policy analysis, NPS and satisfaction." }, 
    icon: "ShieldCheckIcon", 
    color: "indigo" 
  },
  { 
    title: { es: "📞 Contact Centers", en: "📞 Contact Centers" }, 
    description: { es: "AHT, niveles de servicio, performance de agentes en tiempo real.", en: "AHT, service levels, real-time agent performance." }, 
    icon: "PhoneIcon", 
    color: "purple" 
  },
  { 
    title: { es: "📦 Logística", en: "📦 Logistics" }, 
    description: { es: "Control de stock, tiempos de entrega, optimización de rutas.", en: "Stock control, delivery times, route optimization." }, 
    icon: "TruckIcon", 
    color: "green" 
  },
  { 
    title: { es: "👥 RRHH", en: "👥 HR" }, 
    description: { es: "Performance, turnover, reclutamiento y capacitación.", en: "Performance, turnover, recruitment and training." }, 
    icon: "UserGroupIcon", 
    color: "pink" 
  },
  { 
    title: { es: "⚡ Calidad", en: "⚡ Quality" }, 
    description: { es: "Métricas de compliance, auditoría y reporting operativo.", en: "Compliance metrics, auditing, and operational reporting." }, 
    icon: "BoltIcon", 
    color: "yellow" 
  }
];
