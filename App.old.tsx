
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  BarChart3,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Smartphone,
  Globe,
  Brain,
  Mail,
  MessageSquare,
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  FileText,
  Monitor,
  Layout,
  PieChart as PieChartIcon,
  Filter,
  Calendar,
  Layers,
  Users,
  DollarSign,
  Activity,
  Award,
  Briefcase,
  Check,
  TrendingDown,
  PieChart as DonutIcon
} from 'lucide-react';
import {
  AnimatedHero,
  FloatingNavbar,
  ScrollRevealSection,
  FeatureCard,
  CinematicBackground,
  CTASection,
} from './components';
import {
  CONTACT_EMAIL,
  CONTACT_WHATSAPP,
  WHATSAPP_URL,
  PACKAGES, 
  ADDITIONAL_SERVICES, 
  USE_CASES 
} from './constants';
import { ServicePackage, Language } from './types';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell, 
  AreaChart, 
  Area, 
  PieChart, 
  Pie,
  CartesianGrid,
  LineChart,
  Line
} from 'recharts';

// New Direct link format for the updated Google Drive image
const PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/d/1UHPnzDczfPmnt-SSBYhKR1ds-VlfeWWP";

// Translations
const UI_TEXT = {
  es: {
    navStart: "Inicio",
    navWhy: "Por qué yo",
    navPricing: "Paquetes",
    navUseCases: "Casos de Uso",
    navDemo: "Demo en Vivo",
    contactBtn: "Contacto Directo",
    heroBadge: "IA & Analytics Avanzado",
    heroTitle: "Dashboards Profesionales Sin Costos de Licencia",
    heroDesc: "Transformo tus datos crudos en decisiones inteligentes. Ahorra dinero en licencias con soluciones web personalizadas para Banca, Seguros y Contact Centers.",
    viewFlyer: "Ver Flyer",
    liveDemo: "Demo en Vivo",
    whyTitle: "Experiencia en diversos sectores",
    whyDesc: "Soluciones probadas en Banca, Seguros, Contact Centers y más.",
    pricingTitle: "Planes de Inversión",
    pricingSubtitle: "Desde MVPs hasta soluciones empresariales escalables con Inteligencia Artificial.",
    mostPopular: "MÁS POPULAR",
    additionalServices: "Servicios Adicionales",
    customizationDesc: "Personaliza tu dashboard con funcionalidades extra",
    includesTitle: "Todos los proyectos incluyen:",
    quote: "Mi objetivo es entregarte una herramienta que use la tecnología a tu favor para crecer.",
    specialist: "David - Especialista de Datos",
    expBanca: "Banca, Seguros & Analytics",
    useCasesTitle: "Casos de Uso Perfectos",
    useCasesSubtitle: "¿Dónde brillan estas soluciones?",
    ctaLimited: "CUPOS LIMITADOS DE LANZAMIENTO",
    ctaTitle: "Asegura un 10% OFF en tu proyecto inicial",
    ctaSubtitle: "Válido desde el plan Básico en adelante. Usa el código: \"DATAPRO2026\"",
    ctaEmail: "Contactar por Email",
    ctaWhatsapp: "Chat WhatsApp",
    footerDesc: "Soluciones de analítica de alta gama para empresas que buscan escalar sin costos prohibitivos.",
    location: "Atención remota para todo el mundo. Basado en Lima, Perú.",
    expFooter: "Experiencia avanzada implementando soluciones para el sector Bancario y Asegurador.",
    aboutTitle: "Sobre el Especialista",
    aboutIntro: "Me presento: soy David, desarrollador especializado en crear dashboards gerenciales y aplicaciones web que transforman datos en decisiones.",
    aboutBody: "He trabajado con empresas del Rubro de Seguros, Banca, Contact Center, y otros, desarrollando sistemas de ventas, análisis de NPS, auditoría de calidad y retención de clientes. Ahora estoy ofreciendo mis servicios de forma independiente con precios mucho más accesibles.",
    aboutClosing: "¿Tienes datos que necesitas visualizar mejor? Me encantaría conocer tu proyecto y prepararte una propuesta sin compromiso.",
    aboutDiff: "Lo que me diferencia:",
    diff1: "Sin costos de licencias mensuales (Power BI/Tableau)",
    diff2: "Dashboards web que se actualizan automáticamente",
    diff3: "Diseño personalizado con tu branding",
    diff4: "Experiencia comprobada con clientes corporativos",
    demoTitle: "Panel de Control Gerencial",
    demoBack: "Análisis Real-Time",
    demoSlicers: "Segmentadores",
    demoPeriod: "Periodo",
    demoRegion: "Región",
    demoUnit: "Unidad de Negocio",
    demoAll: "Consolidado",
    demoCTA: "¿Necesitas algo similar para tu empresa?",
    demoCTAUnder: "Podemos conectar tus bases de datos de SQL, Excel, o APIs en días.",
    demoRequest: "Agendar Consulta Gratis",
    salesTrend: "Tendencia de Ingresos",
    trafficChannels: "Canales de Tráfico",
    monthlyPerformance: "Métricas de Rendimiento Mensual",
    salesKpi: "Ingresos Totales",
    convKpi: "Tasa Conversión",
    usersKpi: "Usuarios Activos",
    npsKpi: "NPS Semanal",
    roiKpi: "ROI Inversión",
    ahtKpi: "AHT Promedio",
    churnKpi: "Churn Rate",
    growthKpi: "Crecimiento"
  },
  en: {
    navStart: "Home",
    navWhy: "Why me",
    navPricing: "Packages",
    navUseCases: "Use Cases",
    navDemo: "Live Demo",
    contactBtn: "Direct Contact",
    heroBadge: "AI & Advanced Analytics",
    heroTitle: "Professional Dashboards Without License Costs",
    heroDesc: "I transform your raw data into smart decisions. Save money on licenses with custom web solutions for Banking, Insurance and Contact Centers.",
    viewFlyer: "View Flyer",
    liveDemo: "Live Demo",
    whyTitle: "Sector Expertise",
    whyDesc: "Proven solutions in Banking, Insurance, Contact Centers and more.",
    pricingTitle: "Investment Plans",
    pricingSubtitle: "From MVPs to scalable enterprise solutions with Artificial Intelligence.",
    mostPopular: "MOST POPULAR",
    additionalServices: "Additional Services",
    customizationDesc: "Customize your dashboard with extra features",
    includesTitle: "All projects include:",
    quote: "My goal is to provide a tool that uses technology in your favor to grow.",
    specialist: "David - Data Specialist",
    expBanca: "Banking, Insurance & Analytics",
    useCasesTitle: "Perfect Use Cases",
    useCasesSubtitle: "Where do these solutions shine?",
    ctaLimited: "LIMITED LAUNCH SLOTS",
    ctaTitle: "Secure 10% OFF on your initial project",
    ctaSubtitle: "Valid from the Basic plan upwards. Use code: \"DATAPRO2026\"",
    ctaEmail: "Contact via Email",
    ctaWhatsapp: "Chat WhatsApp",
    footerDesc: "High-end analytics solutions for companies looking to scale without prohibitive costs.",
    location: "Remote support worldwide. Based in Lima, Peru.",
    expFooter: "Advanced experience implementing solutions for the Banking and Insurance sectors.",
    aboutTitle: "About the Specialist",
    aboutIntro: "Hi there, I'm David, a developer specialized in creating managerial dashboards and web applications that transform data into decisions.",
    aboutBody: "I have worked with companies in the Insurance, Banking, Contact Center sectors, and others, developing sales systems, NPS analysis, quality auditing, and customer retention. Now I am offering my services independently with much more affordable prices.",
    aboutClosing: "Do you have data that you need to visualize better? I would love to know about your project and prepare a proposal without obligation.",
    aboutDiff: "What sets me apart:",
    diff1: "No monthly license costs (Power BI/Tableau)",
    diff2: "Web dashboards that update automatically",
    diff3: "Custom design with your branding",
    diff4: "Proven experience with corporate clients",
    demoTitle: "Executive Management Dashboard",
    demoBack: "Real-Time Analysis",
    demoSlicers: "Slicers & Filters",
    demoPeriod: "Period",
    demoRegion: "Region",
    demoUnit: "Business Unit",
    demoAll: "Consolidated",
    demoCTA: "Do you need something similar for your business?",
    demoCTAUnder: "We can connect your SQL, Excel, or API databases in days.",
    demoRequest: "Book Free Consultation",
    salesTrend: "Income Trend",
    trafficChannels: "Traffic Channels",
    monthlyPerformance: "Monthly Performance Metrics",
    salesKpi: "Total Revenue",
    convKpi: "Conversion Rate",
    usersKpi: "Active Users",
    npsKpi: "Weekly NPS",
    roiKpi: "Investment ROI",
    ahtKpi: "Average AHT",
    churnKpi: "Churn Rate",
    growthKpi: "Growth"
  }
};

const PackageCard: React.FC<{ pkg: ServicePackage, lang: Language }> = ({ pkg, lang }) => {
  const isHighlight = pkg.highlight;
  const isGreen = pkg.color === 'green';
  const borderColor = isHighlight ? 'border-blue-500 ring-4 ring-blue-500 ring-opacity-10' : 'border-gray-100';
  const circleColor = isGreen ? 'text-green-500' : 'text-blue-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      viewport={{ once: true }}
      className={`relative flex flex-col p-8 bg-white rounded-3xl transition-all duration-300 hover:shadow-2xl border-2 ${borderColor} ${isHighlight ? 'scale-105 z-10' : ''}`}
    >
      {isHighlight && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg"
        >
          {UI_TEXT[lang].mostPopular}
        </motion.div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-lg font-black text-gray-800 mb-4">{pkg.name[lang]}</h3>
        <div className="flex items-center justify-center gap-1">
          <span className="text-4xl font-black text-gray-900">${pkg.price}</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest self-end pb-1.5">USD</span>
        </div>
      </div>

      <div className="flex-grow space-y-4 mb-10">
        {pkg.features[lang].map((feature: string, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            viewport={{ once: true }}
            className="flex items-start gap-3 text-sm text-gray-600 leading-tight"
          >
            <div className={`mt-0.5 rounded-full p-0.5 border border-gray-100 ${circleColor}`}>
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
            <span>{feature}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto pt-8 border-t border-gray-50 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-400 mb-1">
          <Clock className="w-3.5 h-3.5" />
          <span>{pkg.delivery[lang]}</span>
        </div>
        <div className="text-[10px] text-gray-300 uppercase tracking-[0.2em] font-black">
          {pkg.designTime[lang]}
        </div>
      </div>
    </motion.div>
  );
};

const DashboardDemo = ({ onClose, lang }: { onClose: () => void, lang: Language }) => {
  const t = UI_TEXT[lang];
  const [activeTab, setActiveTab] = useState<'period' | 'region' | 'unit'>('period');

  const incomeTrendData = useMemo(() => [
    { name: 'Ene', value: 24100, target: 20000 },
    { name: 'Feb', value: 32200, target: 25000 },
    { name: 'Mar', value: 42100, target: 30000 },
    { name: 'Abr', value: 38800, target: 32000 },
    { name: 'May', value: 51900, target: 35000 },
    { name: 'Jun', value: 52600, target: 40000 },
    { name: 'Jul', value: 63500, target: 45000 },
    { name: 'Ago', value: 72300, target: 50000 },
  ], []);

  const trafficData = useMemo(() => [
    { name: lang === 'es' ? 'Directo' : 'Direct', value: 42, color: '#3b82f6' },
    { name: 'Social Media', value: 28, color: '#10b981' },
    { name: 'Email', value: 18, color: '#8b5cf6' },
    { name: 'Referral', value: 12, color: '#f59e0b' },
  ], [lang]);

  const performanceData = useMemo(() => [
    { name: 'Ene', sales: 25000, conversion: 3.2, roi: 245 },
    { name: 'Feb', sales: 32000, conversion: 3.8, roi: 312 },
    { name: 'Mar', sales: 42000, conversion: 4.1, roi: 389 },
    { name: 'Abr', sales: 38500, conversion: 3.9, roi: 356 },
    { name: 'May', sales: 51000, conversion: 4.5, roi: 478 },
    { name: 'Jun', sales: 52500, conversion: 4.7, roi: 498 },
    { name: 'Jul', sales: 63500, conversion: 5.2, roi: 589 },
  ], []);

  const kpiData = useMemo(() => [
    { label: t.salesKpi, value: '$1.2M', change: '+23%', icon: DollarSign, color: 'emerald' },
    { label: t.convKpi, value: '4.8%', change: '+1.2%', icon: TrendingUp, color: 'blue' },
    { label: t.usersKpi, value: '45.2K', change: '+18%', icon: Users, color: 'purple' },
    { label: t.npsKpi, value: '72', change: '+8', icon: Award, color: 'orange' },
  ], [t]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-gray-950/90 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-[#f8fafc] w-full max-w-7xl h-full max-h-[90vh] rounded-[32px] shadow-3xl overflow-hidden flex flex-col border border-white/10"
      >

        {/* Modal Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="px-8 py-6 border-b bg-gradient-to-r from-white to-blue-50 flex justify-between items-center"
        >
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-blue-600 p-3 rounded-xl text-white shadow-lg"
            >
              <BarChart3 className="w-6 h-6" />
            </motion.div>
            <div>
              <h3 className="font-black text-gray-900 leading-tight text-lg">{t.demoTitle}</h3>
              <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{t.demoBack}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </motion.button>
        </motion.div>

        {/* Dashboard Content */}
        <div className="flex-grow p-6 md:p-8 overflow-y-auto space-y-6 bg-gradient-to-b from-[#f1f5f9]/50 to-white">

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiData.map((kpi, idx) => {
              const colorMap: Record<string, { bg: string; text: string }> = {
                'emerald': { bg: '#f0fdf4', text: '#059669' },
                'blue': { bg: '#eff6ff', text: '#2563eb' },
                'purple': { bg: '#faf5ff', text: '#9333ea' },
                'orange': { bg: '#fffbeb', text: '#d97706' },
              };
              const colors = colorMap[kpi.color] || { bg: '#f3f4f6', text: '#6b7280' };

              return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: colors.bg, color: colors.text }}>
                    <kpi.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black px-2 py-1 rounded-full" style={{ backgroundColor: colors.bg, color: colors.text }}>
                    {kpi.change}
                  </span>
                </div>
                <p className="text-xs font-bold text-gray-500 mb-1">{kpi.label}</p>
                <p className="text-2xl font-black text-gray-900">{kpi.value}</p>
              </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Income Trend (Line Chart) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all"
            >
              <h4 className="font-black text-gray-900 mb-2">{t.salesTrend}</h4>
              <p className="text-xs font-bold text-gray-400 mb-6">Últimos 8 meses</p>
              <div className="flex-grow h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={incomeTrendData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} dx={-10} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Traffic Channels (Donut Chart) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all"
            >
              <h4 className="font-black text-gray-900 mb-2">{t.trafficChannels}</h4>
              <p className="text-xs font-bold text-gray-400 mb-6">Distribución de tráfico</p>
              <div className="flex-grow flex items-center justify-center">
                <div className="relative w-full h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={trafficData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={6} dataKey="value" stroke="none">
                        {trafficData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <motion.div className="mt-6 space-y-3">
                {trafficData.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className="flex justify-between items-center text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                      {item.name}
                    </div>
                    <span className="text-gray-900 font-black">{item.value}%</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Monthly Performance (Bar Chart) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all"
          >
            <h4 className="font-black text-gray-900 mb-2">{t.monthlyPerformance}</h4>
            <p className="text-xs font-bold text-gray-400 mb-6">Análisis comparativo mensual</p>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#6366f1" stopOpacity={0.6}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} dx={-10} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="sales" fill="url(#colorSales)" radius={[8, 8, 0, 0]} barSize={45} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>

        {/* CTA Bar with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-8 mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[24px] flex flex-col md:flex-row justify-between items-center gap-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30"
            >
              <TrendingUp className="w-6 h-6" />
            </motion.div>
            <div>
              <p className="text-sm font-black text-blue-900 leading-tight">{t.demoCTA}</p>
              <p className="text-xs font-bold text-blue-600/80">{t.demoCTAUnder}</p>
            </div>
          </div>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 text-center whitespace-nowrap"
          >
            {t.demoRequest}
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [showDemo, setShowDemo] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = UI_TEXT[lang];

  return (
    <motion.div className="min-h-screen bg-[#fcfcfc] selection:bg-blue-100 selection:text-blue-900">

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 w-full z-[80] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl py-5' : 'bg-transparent py-8'}`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-2xl shadow-2xl transition-all duration-500 ${scrolled ? 'bg-blue-600 text-white' : 'bg-white/10 text-white backdrop-blur-md'}`}>
              <BarChart3 className="w-7 h-7" />
            </div>
            <span className={`font-black tracking-tighter transition-colors text-xl ${scrolled ? 'text-gray-900' : 'text-white'}`}>DataPro 2026</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <div className={`flex gap-1 p-1 rounded-full border transition-all ${scrolled ? 'bg-gray-100 border-gray-200' : 'bg-white/10 border-white/20 backdrop-blur-md'}`}>
              <button 
                onClick={() => setLang('es')} 
                className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase transition-all ${lang === 'es' ? (scrolled ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-700 shadow-xl') : (scrolled ? 'text-gray-500 hover:text-gray-800' : 'text-white/60 hover:text-white')}`}
              >
                ES
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase transition-all ${lang === 'en' ? (scrolled ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-700 shadow-xl') : (scrolled ? 'text-gray-500 hover:text-gray-800' : 'text-white/60 hover:text-white')}`}
              >
                EN
              </button>
            </div>

            {['Start', 'Why', 'Pricing', 'UseCases'].map((key) => {
              const label = t[`nav${key}` as keyof typeof t];
              const href = `#${key.toLowerCase()}`;
              return (
                <a key={key} href={href} className={`text-sm font-black tracking-tight transition-all hover:text-blue-500 ${scrolled ? 'text-gray-700' : 'text-blue-100'}`}>
                  {label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-6">
            <a href={WHATSAPP_URL} target="_blank" className={`hidden sm:flex px-8 py-3.5 rounded-[20px] text-sm font-black transition-all items-center gap-3 shadow-2xl ${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20' : 'bg-white text-blue-700 hover:bg-blue-50'}`}>
              <MessageSquare className="w-4 h-4" /> {t.contactBtn}
            </a>
            
            <button className={`lg:hidden p-2 rounded-xl ${scrolled ? 'text-gray-900' : 'text-white'}`}>
               <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header id="start" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-600/30 rounded-full blur-[200px] -mr-96 -mt-96"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.25em] mb-12"
              >
                <Brain className="w-4 h-4" />
                <span>{t.heroBadge}</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8"
              >
                {t.heroTitle.split(' ').slice(0, -3).join(' ')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">{t.heroTitle.split(' ').slice(-3).join(' ')}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-bold tracking-tight"
              >
                {t.heroDesc}
              </motion.p>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#pricing"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-black text-base hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl group"
                >
                  <motion.div whileHover={{ scale: 1.2 }} className="w-5 h-5">
                    <FileText className="w-5 h-5" />
                  </motion.div>
                  {t.viewFlyer}
                </motion.a>
                <motion.button
                  onClick={() => setShowDemo(true)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white border border-white/10 px-8 py-3.5 rounded-full font-black text-base hover:bg-white/20 transition-all flex items-center gap-3 backdrop-blur-xl"
                >
                  <motion.div whileHover={{ scale: 1.2 }} className="w-5 h-5">
                    <Layout className="w-5 h-5" />
                  </motion.div>
                  {t.liveDemo}
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden lg:block relative group"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -inset-10 bg-blue-600/10 rounded-[60px] blur-3xl group-hover:bg-blue-600/20 transition-all duration-700"
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-gray-900/50 backdrop-blur-3xl border border-white/10 p-12 rounded-[60px] shadow-3xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-12">
                  <div className="flex gap-4">
                    <div className="w-4 h-4 rounded-full bg-red-500/70 shadow-lg"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500/70 shadow-lg"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500/70 shadow-lg"></div>
                  </div>
                  <div className="text-[10px] font-black text-blue-400/50 uppercase tracking-[0.4em] font-mono">datapro_premium_v4.ts</div>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 h-64 bg-white/5 rounded-[40px] border border-white/5 p-10 flex items-end">
                    <div className="w-full flex items-end gap-4 h-full">
                       {[20, 45, 30, 85, 55, 95, 40, 75, 60, 90].map((h, i) => (
                         <div key={i} className="flex-grow bg-gradient-to-t from-blue-700 to-blue-400 rounded-xl transition-all duration-500 hover:scale-110" style={{ height: `${h}%` }}></div>
                       ))}
                    </div>
                  </div>
                  <div className="bg-white/5 p-8 rounded-[40px] border border-white/5 flex flex-col items-center">
                    <TrendingUp className="w-6 h-6 text-emerald-400 mb-3" />
                    <p className="text-3xl font-black mb-1">+45%</p>
                    <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Growth</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-[40px] border border-white/5 flex flex-col items-center">
                    <Activity className="w-6 h-6 text-blue-400 mb-3" />
                    <p className="text-3xl font-black mb-1">2.1s</p>
                    <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Speed</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-[40px] border border-white/5 flex flex-col items-center">
                    <CheckCircle2 className="w-6 h-6 text-purple-400 mb-3" />
                    <p className="text-3xl font-black mb-1">100%</p>
                    <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Safe</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section - THE NEW PERSONAL INTRO SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="space-y-10 flex flex-col">
                 <div className="relative group">
                    <div className="absolute -inset-1.5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[50px] blur opacity-10 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-gray-50 rounded-[50px] overflow-hidden aspect-[4/5] shadow-2xl flex items-center justify-center">
                        <img src={PROFILE_IMAGE_URL} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="David Specialist" />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 p-12 pt-24 text-white">
                            <p className="text-4xl font-black tracking-tighter mb-2">{t.specialist}</p>
                            <p className="text-sm font-black text-blue-400 uppercase tracking-[0.3em]">{t.expBanca}</p>
                        </div>
                    </div>
                 </div>

                 {/* New relocate Quote Box under the image */}
                 <div className="bg-gray-950 p-8 rounded-[40px] shadow-2xl relative overflow-hidden group">
                    <div className="absolute -top-6 -left-6 bg-blue-600 p-6 rounded-[28px] shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <blockquote className="text-2xl font-black italic text-white/90 mb-10 leading-tight tracking-tight mt-6">
                        "{t.quote}"
                    </blockquote>
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-[24px] bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-xl overflow-hidden">
                            <img src={PROFILE_IMAGE_URL} className="w-full h-full object-cover rounded-[22px]" alt="Profile Mini" />
                        </div>
                        <div>
                            <p className="font-black text-lg text-white tracking-tighter leading-tight">{t.specialist}</p>
                            <p className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em]">{t.expBanca}</p>
                        </div>
                    </div>
                 </div>
              </div>

              <div className="pt-4 lg:pt-10">
                 <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-10 shadow-sm border border-blue-100">
                    <Briefcase className="w-4 h-4" /> {t.aboutTitle}
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tighter">
                    {t.aboutIntro}
                 </h2>
                 <p className="text-lg text-gray-600 font-bold mb-8 leading-relaxed tracking-tight">
                    {t.aboutBody}
                 </p>
                 
                 <div className="space-y-6 mb-12">
                    <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">{t.aboutDiff}</h4>
                    <div className="grid sm:grid-cols-2 gap-6">
                       {[t.diff1, t.diff2, t.diff3, t.diff4].map((diff, i) => (
                         <div key={i} className="flex items-center gap-4 group">
                            <div className="bg-emerald-50 p-2 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100">
                               <Check className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-black text-gray-700 tracking-tight">{diff}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-[#f8fafc] p-10 rounded-[40px] shadow-sm relative border border-gray-100 flex flex-col items-center text-center">
                    <p className="text-xl font-black text-gray-800 leading-snug mb-8 italic">
                       "{t.aboutClosing}"
                    </p>
                    <a href={WHATSAPP_URL} target="_blank" className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 group">
                       <MessageSquare className="w-6 h-6" /> {t.demoRequest} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Sectors */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="why"
        className="py-20 bg-gray-50 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{t.whyTitle}</h2>
            <p className="text-gray-500 font-bold text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">{t.whyDesc}</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: lang === 'es' ? 'Banca y Finanzas' : 'Banking & Finance', icon: Shield, color: 'blue', bgLight: '#eff6ff', bgDark: '#1e40af', text: '#2563eb' },
              { label: lang === 'es' ? 'Sector Seguros' : 'Insurance Sector', icon: Zap, color: 'emerald', bgLight: '#f0fdf4', bgDark: '#059669', text: '#10b981' },
              { label: 'Contact Centers', icon: Globe, color: 'purple', bgLight: '#faf5ff', bgDark: '#7c3aed', text: '#a855f7' },
              { label: 'Retail & E-comm', icon: Brain, color: 'indigo', bgLight: '#eef2ff', bgDark: '#4f46e5', text: '#6366f1' }
            ].map((sector, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.08, y: -8 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 8 }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-[30px] flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-500 group-hover:text-white"
                  style={{ backgroundColor: sector.bgLight, color: sector.text }}
                  onHoverStart={() => {}}
                >
                  <sector.icon className="w-10 h-10" />
                </motion.div>
                <h3 className="font-black text-gray-900 text-base md:text-lg uppercase tracking-tighter">{sector.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="pricing"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter">{t.pricingTitle}</h2>
            <p className="text-lg md:text-xl text-gray-500 font-bold tracking-tight">{t.pricingSubtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch mb-20"
          >
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} lang={lang} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-[40px] shadow-xl p-10 md:p-16 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 flex items-center gap-4">
                  <TrendingUp className="text-blue-600 w-8 h-8" /> {t.additionalServices}
                </h3>
                <p className="text-gray-500 text-base md:text-lg font-bold">{t.customizationDesc}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADDITIONAL_SERVICES.map((service, i) => (
                <div key={i} className="flex justify-between items-center p-6 bg-white rounded-[24px] hover:shadow-lg hover:border-blue-100 transition-all border border-transparent group">
                  <span className="font-bold text-sm text-gray-800 group-hover:text-blue-700">{service.name[lang]}</span>
                  <span className="font-black text-sm text-blue-600 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 shadow-sm whitespace-nowrap ml-2">{service.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Use Cases */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="usecases"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter">{t.useCasesTitle}</h2>
            <p className="text-lg md:text-xl text-gray-500 font-bold tracking-tight">{t.useCasesSubtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {USE_CASES.map((useCase, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8 }}
                className="p-10 rounded-[40px] border border-gray-100 hover:shadow-2xl transition-all group bg-gray-50/50 flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 rounded-[28px] mb-8 flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6
                  ${useCase.color === 'blue' ? 'bg-blue-100 text-blue-600 shadow-blue-100' : 
                    useCase.color === 'indigo' ? 'bg-indigo-100 text-indigo-600 shadow-indigo-100' :
                    useCase.color === 'purple' ? 'bg-purple-100 text-purple-600 shadow-purple-100' :
                    useCase.color === 'pink' ? 'bg-pink-100 text-pink-600 shadow-pink-100' :
                    useCase.color === 'green' ? 'bg-green-100 text-green-600 shadow-green-100' :
                    'bg-yellow-100 text-yellow-600 shadow-yellow-100'
                  } shadow-2xl`}
                >
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{useCase.title[lang]}</h3>
                <p className="text-gray-500 font-bold text-base leading-relaxed tracking-tight">{useCase.description[lang]}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto bg-emerald-600 rounded-[40px] p-12 md:p-20 text-center text-white shadow-2xl shadow-emerald-900/20 relative overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute inset-0 opacity-10 pointer-events-none"
          >
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -ml-48 -mt-48"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -mr-48 -mb-48"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block bg-white/20 backdrop-blur-xl border border-white/30 text-white px-10 py-3 rounded-full text-[12px] font-black uppercase tracking-[0.4em] mb-14 shadow-lg"
            >
              {t.ctaLimited}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-8 leading-[1] tracking-tighter"
            >
              {t.ctaTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-emerald-50 mb-12 font-bold max-w-4xl mx-auto leading-relaxed tracking-tight"
            >
              {t.ctaSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.a
                href={`mailto:${CONTACT_EMAIL}`}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-4 bg-white text-emerald-700 px-10 py-5 rounded-[28px] font-black text-xl hover:bg-emerald-50 transition-all shadow-2xl group"
              >
                <Mail className="w-6 h-6" /> {t.ctaEmail}
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <ChevronRight className="w-6 h-6" />
                </motion.div>
              </motion.a>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-4 bg-emerald-800/50 backdrop-blur-xl border border-white/10 text-white px-10 py-5 rounded-[28px] font-black text-xl hover:bg-emerald-800 transition-all shadow-2xl group"
              >
                <MessageSquare className="w-6 h-6" /> {t.ctaWhatsapp}
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <ChevronRight className="w-6 h-6" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-16 mb-16 border-b border-white/5 pb-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-600 p-2.5 rounded-2xl shadow-xl shadow-blue-500/30">
                   <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="font-black text-3xl text-white tracking-tighter">DataPro</span>
              </div>
              <p className="text-lg font-bold leading-relaxed mb-10 text-gray-400 tracking-tight">
                {t.footerDesc}
              </p>
              <div className="flex gap-8">
                <Globe className="w-8 h-8 hover:text-white transition-colors cursor-pointer" />
                <Smartphone className="w-8 h-8 hover:text-white transition-colors cursor-pointer" />
                <Shield className="w-8 h-8 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-[0.4em] text-[10px]">{lang === 'es' ? 'Contacto Directo' : 'Direct Contact'}</h4>
              <ul className="space-y-6 text-base font-black tracking-tight">
                <li className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-500">
                     <Mail className="w-5 h-5 text-blue-500 group-hover:text-white" />
                  </div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
                </li>
                <li className="flex items-center gap-4 group">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-600 group-hover:shadow-xl group-hover:shadow-emerald-500/30 transition-all duration-500">
                     <MessageSquare className="w-5 h-5 text-emerald-500 group-hover:text-white" />
                  </div>
                  <a href={WHATSAPP_URL} target="_blank" className="hover:text-white transition-colors">{CONTACT_WHATSAPP}</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-[0.4em] text-[10px]">{lang === 'es' ? 'Cobertura' : 'Coverage'}</h4>
              <p className="text-lg font-black text-gray-400 leading-relaxed tracking-tight">
                {t.location}
              </p>
              <div className="mt-8 p-8 bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
                <p className="text-sm font-black text-gray-200 tracking-tight leading-relaxed">
                  {t.expFooter}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[12px] font-black uppercase tracking-[0.3em]">
            <p>© 2026 Dashboard Online. Professional Data Intelligence Solutions.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">{lang === 'es' ? 'Términos' : 'Terms'}</a>
              <a href="#" className="hover:text-white transition-colors">{lang === 'es' ? 'Privacidad' : 'Privacy'}</a>
            </div>
          </div>
        </div>
      </footer>

      {showDemo && <DashboardDemo onClose={() => setShowDemo(false)} lang={lang} />}
    </motion.div>
  );
}
