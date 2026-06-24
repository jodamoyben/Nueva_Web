import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  FileText,
  Layout,
  Users,
  DollarSign,
  Activity,
  Award,
  Briefcase,
  Check,
  TrendingDown,
  Star,
} from 'lucide-react';
import {
  AnimatedHero,
  FloatingNavbar,
  ScrollRevealSection,
  FeatureCard,
  CinematicBackground,
  CTASection,
  WhatsAppIcon,
} from './components';
import {
  CONTACT_EMAIL,
  CONTACT_WHATSAPP,
  WHATSAPP_URL,
  PACKAGES,
  ADDITIONAL_SERVICES,
  USE_CASES,
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
  Line,
} from 'recharts';

// ==================== CONFIG ====================
const PROFILE_IMAGE_URL = 'https://lh3.googleusercontent.com/d/1UHPnzDczfPmnt-SSBYhKR1ds-VlfeWWP';

const UI_TEXT = {
  es: {
    navStart: 'Inicio',
    navWhy: 'Por qué yo',
    navPricing: 'Paquetes',
    navUseCases: 'Casos de Uso',
    navDemo: 'Demo en Vivo',
    contactBtn: 'Contacto Directo',
    heroBadge: 'IA & Analytics Avanzado',
    heroTitle: 'Dashboards Profesionales Sin Costos de Licencia',
    heroDesc: 'Transformo tus datos crudos en decisiones inteligentes. Ahorra dinero en licencias con soluciones web personalizadas para Banca, Seguros y Contact Centers.',
    viewFlyer: 'Ver Flyer',
    liveDemo: 'Demo en Vivo',
    whyTitle: 'Experiencia en diversos sectores',
    whyDesc: 'Soluciones probadas en Banca, Seguros, Contact Centers y más.',
    pricingTitle: 'Planes de Inversión',
    pricingSubtitle: 'Desde MVPs hasta soluciones empresariales escalables con Inteligencia Artificial.',
    mostPopular: 'MÁS POPULAR',
    additionalServices: 'Servicios Adicionales',
    customizationDesc: 'Personaliza tu dashboard con funcionalidades extra',
    includesTitle: 'Todos los proyectos incluyen:',
    quote: 'Mi objetivo es entregarte una herramienta que use la tecnología a tu favor para crecer.',
    specialist: 'David - Especialista de Datos',
    expBanca: 'Banca, Seguros & Analytics',
    useCasesTitle: 'Casos de Uso Perfectos',
    useCasesSubtitle: '¿Dónde brillan estas soluciones?',
    ctaLimited: 'CUPOS LIMITADOS DE LANZAMIENTO',
    ctaTitle: 'Asegura un 10% OFF en tu proyecto inicial',
    ctaSubtitle: 'Válido desde el plan Básico en adelante. Usa el código: "DATAPRO2026"',
    ctaEmail: 'Contactar por Email',
    ctaWhatsapp: 'Chat WhatsApp',
    footerDesc: 'Soluciones de analítica de alta gama para empresas que buscan escalar sin costos prohibitivos.',
    location: 'Atención remota para todo el mundo. Basado en Lima, Perú.',
    expFooter: 'Experiencia avanzada implementando soluciones para el sector Bancario y Asegurador.',
    aboutTitle: 'Sobre el Especialista',
    aboutIntro: 'Me presento: soy David, desarrollador especializado en crear dashboards gerenciales y aplicaciones web que transforman datos en decisiones.',
    aboutBody: 'He trabajado con empresas del Rubro de Seguros, Banca, Contact Center, y otros, desarrollando sistemas de ventas, análisis de NPS, auditoría de calidad y retención de clientes. Ahora estoy ofreciendo mis servicios de forma independiente con precios mucho más accesibles.',
    aboutClosing: '¿Tienes datos que necesitas visualizar mejor? Me encantaría conocer tu proyecto y prepararte una propuesta sin compromiso.',
    aboutDiff: 'Lo que me diferencia:',
    diff1: 'Sin costos de licencias mensuales (Power BI/Tableau)',
    diff2: 'Dashboards web que se actualizan automáticamente',
    diff3: 'Diseño personalizado con tu branding',
    diff4: 'Experiencia comprobada con clientes corporativos',
    demoTitle: 'Panel de Control Gerencial',
    demoBack: 'Análisis Real-Time',
    demoCTA: '¿Necesitas algo similar para tu empresa?',
    demoCTAUnder: 'Podemos conectar tus bases de datos de SQL, Excel, o APIs en días.',
    demoRequest: 'Agendar Consulta Gratis',
    salesTrend: 'Tendencia de Ingresos',
    trafficChannels: 'Canales de Tráfico',
    monthlyPerformance: 'Métricas de Rendimiento Mensual',
    salesKpi: 'Ingresos Totales',
    convKpi: 'Tasa Conversión',
    usersKpi: 'Usuarios Activos',
    npsKpi: 'NPS Semanal',
    roiKpi: 'ROI Inversión',
    churnKpi: 'Churn Rate',
    growthKpi: 'Crecimiento'
  },
  en: {
    navStart: 'Home',
    navWhy: 'Why me',
    navPricing: 'Packages',
    navUseCases: 'Use Cases',
    navDemo: 'Live Demo',
    contactBtn: 'Direct Contact',
    heroBadge: 'AI & Advanced Analytics',
    heroTitle: 'Professional Dashboards Without License Costs',
    heroDesc: 'I transform your raw data into smart decisions. Save money on licenses with custom web solutions for Banking, Insurance and Contact Centers.',
    viewFlyer: 'View Flyer',
    liveDemo: 'Live Demo',
    whyTitle: 'Sector Expertise',
    whyDesc: 'Proven solutions in Banking, Insurance, Contact Centers and more.',
    pricingTitle: 'Investment Plans',
    pricingSubtitle: 'From MVPs to scalable enterprise solutions with Artificial Intelligence.',
    mostPopular: 'MOST POPULAR',
    additionalServices: 'Additional Services',
    customizationDesc: 'Customize your dashboard with extra features',
    includesTitle: 'All projects include:',
    quote: 'My goal is to provide a tool that uses technology in your favor to grow.',
    specialist: 'David - Data Specialist',
    expBanca: 'Banking, Insurance & Analytics',
    useCasesTitle: 'Perfect Use Cases',
    useCasesSubtitle: 'Where do these solutions shine?',
    ctaLimited: 'LIMITED LAUNCH SLOTS',
    ctaTitle: 'Secure 10% OFF on your initial project',
    ctaSubtitle: 'Valid from the Basic plan upwards. Use code: "DATAPRO2026"',
    ctaEmail: 'Contact via Email',
    ctaWhatsapp: 'Chat WhatsApp',
    footerDesc: 'High-end analytics solutions for companies looking to scale without prohibitive costs.',
    location: 'Remote support worldwide. Based in Lima, Peru.',
    expFooter: 'Advanced experience implementing solutions for the Banking and Insurance sectors.',
    aboutTitle: 'About the Specialist',
    aboutIntro: "Hi there, I'm David, a developer specialized in creating managerial dashboards and web applications that transform data into decisions.",
    aboutBody: 'I have worked with companies in the Insurance, Banking, Contact Center sectors, and others, developing sales systems, NPS analysis, quality auditing, and customer retention. Now I am offering my services independently with much more affordable prices.',
    aboutClosing: 'Do you have data that you need to visualize better? I would love to know about your project and prepare a proposal without obligation.',
    aboutDiff: 'What sets me apart:',
    diff1: 'No monthly license costs (Power BI/Tableau)',
    diff2: 'Web dashboards that update automatically',
    diff3: 'Custom design with your branding',
    diff4: 'Proven experience with corporate clients',
    demoTitle: 'Executive Management Dashboard',
    demoBack: 'Real-Time Analysis',
    demoCTA: 'Do you need something similar for your business?',
    demoCTAUnder: 'We can connect your SQL, Excel, or API databases in days.',
    demoRequest: 'Book Free Consultation',
    salesTrend: 'Income Trend',
    trafficChannels: 'Traffic Channels',
    monthlyPerformance: 'Monthly Performance Metrics',
    salesKpi: 'Total Revenue',
    convKpi: 'Conversion Rate',
    usersKpi: 'Active Users',
    npsKpi: 'Weekly NPS',
    roiKpi: 'Investment ROI',
    churnKpi: 'Churn Rate',
    growthKpi: 'Growth'
  }
};

// ==================== PACKAGE CARD ====================
const PackageCard: React.FC<{ pkg: ServicePackage; lang: Language }> = ({
  pkg,
  lang,
}) => {
  const isHighlight = pkg.highlight;
  const isGreen = pkg.color === 'green';
  const circleColor = isGreen ? 'text-emerald-500' : 'text-blue-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.3)' }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      viewport={{ once: true }}
      className={`relative flex flex-col p-8 md:p-10 rounded-3xl transition-all border-2 group ${
        isHighlight
          ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-400 shadow-2xl shadow-blue-500/40 scale-105 z-10 mt-6'
          : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
      }`}
    >
      {/* Animated background for highlight (contained) */}
      {isHighlight && (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <motion.div
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          />
        </div>
      )}

      {isHighlight && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-amber-400 to-yellow-300 text-amber-900 px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-xl flex items-center gap-1.5 border-2 border-white whitespace-nowrap"
        >
          <Star className="w-3 h-3 fill-current" />
          {lang === 'es' ? 'MÁS RECOMENDADO' : 'MOST RECOMMENDED'}
        </motion.div>
      )}

      <div className="relative z-10 text-center mb-8">
        <h3 className={`text-xl font-black mb-4 ${isHighlight ? 'text-white' : 'text-gray-900'}`}>
          {pkg.name[lang]}
        </h3>
        <div className="flex items-center justify-center gap-1">
          <span className={`text-5xl font-black ${isHighlight ? 'text-white' : 'text-gray-900'}`}>
            ${pkg.price}
          </span>
          <span className={`text-xs font-bold uppercase tracking-widest self-end pb-2 ${isHighlight ? 'text-blue-100' : 'text-gray-400'}`}>
            USD
          </span>
        </div>
      </div>

      <div className="relative z-10 flex-grow space-y-3.5 mb-10">
        {pkg.features[lang].map((feature: string, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            viewport={{ once: true }}
            className={`flex items-start gap-3 text-sm leading-tight ${
              isHighlight ? 'text-blue-50' : 'text-gray-600'
            }`}
          >
            <div className={`mt-1 flex-shrink-0 ${
              isHighlight
                ? 'w-4 h-4 rounded-full bg-blue-300/30 flex items-center justify-center'
                : 'w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center'
            }`}>
              <Check className={`w-3 h-3 ${isHighlight ? 'text-blue-100' : 'text-emerald-600'}`} />
            </div>
            <span className="font-bold">{feature}</span>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative z-10 w-full py-3.5 rounded-2xl font-black text-base transition-all flex items-center justify-center gap-2 ${
          isHighlight
            ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {lang === 'es' ? 'Contratar' : 'Get Started'}
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      <div className="relative z-10 mt-6 pt-6 border-t border-opacity-20 border-current text-center">
        <div className={`flex items-center justify-center gap-2 text-xs font-bold ${isHighlight ? 'text-blue-100' : 'text-gray-400'}`}>
          <Clock className="w-3.5 h-3.5" />
          <span>{pkg.delivery[lang]}</span>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== DASHBOARD DEMO ====================
const DashboardDemo = ({ onClose, lang }: { onClose: () => void; lang: Language }) => {
  const t = UI_TEXT[lang];
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedSegment, setSelectedSegment] = useState('all');

  // Live tick to simulate real-time movement
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((tk) => tk + 1), 2000);
    return () => clearInterval(id);
  }, []);

  // Segment multiplier (Todos / Premium / Enterprise)
  const segMul = selectedSegment === 'premium' ? 1.6 : selectedSegment === 'enterprise' ? 2.5 : 1;

  // X-axis labels per period
  const labels = useMemo(() => {
    if (selectedPeriod === 'week') return lang === 'es'
      ? ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
      : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    if (selectedPeriod === 'year') return ['Q1', 'Q2', 'Q3', 'Q4'];
    return lang === 'es'
      ? ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4']
      : ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4'];
  }, [selectedPeriod, lang]);

  // Base shape per period
  const baseShape = useMemo(() => {
    if (selectedPeriod === 'week') return [24, 32, 28, 42, 38, 52, 63];
    if (selectedPeriod === 'year') return [120, 185, 240, 310];
    return [42, 55, 48, 72];
  }, [selectedPeriod]);

  // Animated income trend — jitter changes each tick
  const incomeTrendData = useMemo(() => {
    return labels.map((name, i) => {
      const base = (baseShape[i] ?? 30) * 1000 * segMul;
      const jitter = (Math.sin(tick + i) * 0.06 + (Math.random() - 0.5) * 0.05) * base;
      const value = Math.max(0, Math.round(base + jitter));
      return { name, value, target: Math.round(base * 0.8) };
    });
  }, [labels, baseShape, segMul, tick]);

  // Animated performance (bar chart)
  const performanceData = useMemo(() => {
    return labels.map((name, i) => {
      const base = (baseShape[i] ?? 30) * 1000 * segMul * 0.9;
      const jitter = (Math.cos(tick * 0.8 + i) * 0.08) * base;
      return { name, sales: Math.max(0, Math.round(base + jitter)) };
    });
  }, [labels, baseShape, segMul, tick]);

  // Traffic distribution (donut) — small live shifts
  const trafficData = useMemo(() => {
    const j = Math.round(Math.sin(tick) * 3);
    return [
      { name: lang === 'es' ? 'Directo' : 'Direct', value: 42 + j, color: '#3b82f6' },
      { name: 'Social Media', value: 28 - j, color: '#10b981' },
      { name: 'Email', value: 18, color: '#8b5cf6' },
      { name: 'Referral', value: 12, color: '#f59e0b' },
    ];
  }, [lang, tick]);

  // KPIs react to segment + live tick
  const kpiData = useMemo(() => {
    const sales = (1.2 * segMul + Math.sin(tick) * 0.03).toFixed(2);
    const conv = (4.8 + Math.sin(tick * 0.5) * 0.2).toFixed(1);
    const users = (45.2 * segMul + Math.cos(tick) * 0.4).toFixed(1);
    const nps = Math.round(72 + Math.sin(tick) * 2);
    return [
      { label: t.salesKpi, value: `$${sales}M`, change: '+23%', icon: DollarSign, color: 'emerald' },
      { label: t.convKpi, value: `${conv}%`, change: '+1.2%', icon: TrendingUp, color: 'blue' },
      { label: t.usersKpi, value: `${users}K`, change: '+18%', icon: Users, color: 'purple' },
      { label: t.npsKpi, value: `${nps}`, change: '+8', icon: Award, color: 'orange' },
    ];
  }, [t, segMul, tick]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-gray-950/90 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#f8fafc] w-full max-w-7xl h-full max-h-[90vh] rounded-[32px] shadow-3xl overflow-hidden flex flex-col border border-white/10"
      >
        {/* Header */}
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
              <h3 className="font-black text-gray-900 text-lg">{t.demoTitle}</h3>
              <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{t.demoBack}</p>
            </div>
            {/* LIVE indicator */}
            <div className="ml-4 hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-200">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-500"
              />
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                {lang === 'es' ? 'En Vivo' : 'Live'}
              </span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full"
          >
            <X className="w-6 h-6 text-gray-400" />
          </motion.button>
        </motion.div>

        {/* Segmentadores */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="px-8 py-4 bg-white border-b border-gray-100 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center"
        >
          <div className="flex-1">
            <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">
              {lang === 'es' ? '⏱️ Período' : '⏱️ Period'}
            </p>
            <div className="flex gap-2">
              {[
                { id: 'week', label: lang === 'es' ? 'Última semana' : 'Last week' },
                { id: 'month', label: lang === 'es' ? 'Este mes' : 'This month' },
                { id: 'year', label: lang === 'es' ? 'Este año' : 'This year' },
              ].map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => setSelectedPeriod(option.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${
                    selectedPeriod === option.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">
              {lang === 'es' ? '📊 Segmento' : '📊 Segment'}
            </p>
            <div className="flex gap-2">
              {[
                { id: 'all', label: lang === 'es' ? 'Todos' : 'All' },
                { id: 'premium', label: 'Premium' },
                { id: 'enterprise', label: 'Enterprise' },
              ].map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => setSelectedSegment(option.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${
                    selectedSegment === option.id
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-grow p-6 md:p-8 overflow-y-auto space-y-6 bg-gradient-to-b from-[#f1f5f9]/50 to-white">
          {/* KPIs */}
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
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all"
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

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Area Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all"
            >
              <h4 className="font-black text-gray-900 mb-2">{t.salesTrend}</h4>
              <p className="text-xs font-bold text-gray-400 mb-6">
                {selectedPeriod === 'week'
                  ? (lang === 'es' ? 'Últimos 7 días' : 'Last 7 days')
                  : selectedPeriod === 'year'
                  ? (lang === 'es' ? 'Por trimestre' : 'By quarter')
                  : (lang === 'es' ? 'Por semana' : 'By week')}
                {selectedSegment !== 'all' && ` · ${selectedSegment === 'premium' ? 'Premium' : 'Enterprise'}`}
              </p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={incomeTrendData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Pie Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all"
            >
              <h4 className="font-black text-gray-900 mb-2">{t.trafficChannels}</h4>
              <p className="text-xs font-bold text-gray-400 mb-6">Distribución</p>
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={trafficData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={6} dataKey="value" stroke="none">
                      {trafficData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <motion.div className="mt-6 space-y-3">
                {trafficData.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className="flex justify-between items-center text-xs font-bold text-gray-500"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                      {item.name}
                    </div>
                    <span className="text-gray-900 font-black">{item.value}%</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all"
          >
            <h4 className="font-black text-gray-900 mb-2">{t.monthlyPerformance}</h4>
            <p className="text-xs font-bold text-gray-400 mb-6">Análisis comparativo</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity={0.6} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px' }} />
                  <Bar dataKey="sales" fill="url(#colorSales)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-8 mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 border border-blue-200 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg"
            >
              <TrendingUp className="w-6 h-6" />
            </motion.div>
            <div>
              <p className="text-sm font-black text-blue-900">{t.demoCTA}</p>
              <p className="text-xs font-bold text-blue-600/80">{t.demoCTAUnder}</p>
            </div>
          </div>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-blue-700 transition-all shadow-xl"
          >
            {t.demoRequest}
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// ==================== MAIN APP ====================
export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [showDemo, setShowDemo] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = UI_TEXT[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Navbar */}
      <FloatingNavbar
        scrolled={scrolled}
        navItems={[
          { label: t.navStart, href: '#start' },
          { label: t.navWhy, href: '#why' },
          { label: t.navPricing, href: '#pricing' },
          { label: t.navUseCases, href: '#usecases' },
          { label: t.navDemo, onClick: () => setShowDemo(true) },
        ]}
        onLanguageChange={(lang) => setLang(lang as Language)}
        currentLang={lang}
        contactCTA={{ label: t.contactBtn, href: WHATSAPP_URL }}
      />

      {/* Hero - Cinemático */}
      <section id="start">
        <AnimatedHero
          badge={t.heroBadge}
          title={t.heroTitle}
          subtitle={t.heroDesc}
          primaryCTA={{
            label: t.viewFlyer,
            onClick: () => {
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            },
          }}
          secondaryCTA={{
            label: t.liveDemo,
            onClick: () => setShowDemo(true),
          }}
        />
      </section>

      {/* About Section - PERFIL ESPECIALISTA */}
      <ScrollRevealSection className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Foto + Quote */}
            <div className="space-y-10 flex flex-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1.5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[50px] blur opacity-10 group-hover:opacity-30 transition-all duration-500"></div>
                <div className="relative bg-gray-50 rounded-[50px] overflow-hidden aspect-[4/5] shadow-2xl flex items-center justify-center">
                  <img
                    src={PROFILE_IMAGE_URL}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt="David Specialist"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 p-12 pt-24 text-white">
                    <p className="text-4xl font-black tracking-tighter mb-2">{t.specialist}</p>
                    <p className="text-sm font-black text-blue-400 uppercase tracking-[0.3em]">{t.expBanca}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-950 p-8 rounded-[40px] shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute -top-6 -left-6 bg-blue-600 p-6 rounded-[28px] shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <blockquote className="text-2xl font-black italic text-white/90 mb-10 leading-tight tracking-tight mt-6">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-[24px] bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-xl overflow-hidden">
                    <img
                      src={PROFILE_IMAGE_URL}
                      className="w-full h-full object-cover rounded-[22px]"
                      alt="Profile Mini"
                    />
                  </div>
                  <div>
                    <p className="font-black text-lg text-white tracking-tighter leading-tight">{t.specialist}</p>
                    <p className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em]">{t.expBanca}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Texto + Diferencias */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-4 lg:pt-10"
            >
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
                <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">
                  {t.aboutDiff}
                </h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[t.diff1, t.diff2, t.diff3, t.diff4].map((diff, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="bg-emerald-50 p-2 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-black text-gray-700 tracking-tight">{diff}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#f8fafc] p-10 rounded-[40px] shadow-sm relative border border-gray-100 flex flex-col items-center text-center"
              >
                <p className="text-xl font-black text-gray-800 leading-snug mb-8 italic">
                  "{t.aboutClosing}"
                </p>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 group"
                >
                  <MessageSquare className="w-6 h-6" /> {t.demoRequest}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* Trust Sectors */}
      <ScrollRevealSection id="why" className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">{t.whyTitle}</h2>
            <p className="text-gray-500 font-bold text-lg max-w-2xl mx-auto">{t.whyDesc}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: lang === 'es' ? 'Banca y Finanzas' : 'Banking & Finance', icon: Shield, color: 'blue', bgLight: '#eff6ff', text: '#2563eb' },
              { label: lang === 'es' ? 'Sector Seguros' : 'Insurance Sector', icon: Zap, color: 'emerald', bgLight: '#f0fdf4', text: '#10b981' },
              { label: 'Contact Centers', icon: Globe, color: 'purple', bgLight: '#faf5ff', text: '#a855f7' },
              { label: 'Retail & E-comm', icon: Brain, color: 'indigo', bgLight: '#eef2ff', text: '#6366f1' }
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
                >
                  <sector.icon className="w-10 h-10" />
                </motion.div>
                <h3 className="font-black text-gray-900 text-base md:text-lg uppercase tracking-tighter">{sector.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollRevealSection>

      {/* Pricing */}
      <ScrollRevealSection id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">{t.pricingTitle}</h2>
            <p className="text-lg md:text-xl text-gray-500 font-bold">{t.pricingSubtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch mb-20"
          >
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} lang={lang} />
            ))}
          </motion.div>

          {/* Additional Services */}
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
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex justify-between items-center p-6 bg-white rounded-2xl hover:shadow-lg hover:border-blue-100 transition-all border border-transparent group"
                >
                  <span className="font-bold text-sm text-gray-800 group-hover:text-blue-700">{service.name[lang]}</span>
                  <span className="font-black text-sm text-blue-600 bg-gray-100 px-4 py-2 rounded-xl border border-gray-200 whitespace-nowrap ml-2">{service.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </ScrollRevealSection>

      {/* Use Cases */}
      <ScrollRevealSection id="usecases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">{t.useCasesTitle}</h2>
            <p className="text-lg md:text-xl text-gray-500 font-bold">{t.useCasesSubtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
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
                <div className={`w-20 h-20 rounded-[28px] mb-8 flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6 shadow-2xl`}
                  style={{
                    backgroundColor: useCase.color === 'blue' ? '#dbeafe' :
                      useCase.color === 'indigo' ? '#e0e7ff' :
                      useCase.color === 'purple' ? '#f3e8ff' :
                      useCase.color === 'pink' ? '#fce7f3' :
                      useCase.color === 'green' ? '#dcfce7' : '#fef3c7',
                    color: useCase.color === 'blue' ? '#2563eb' :
                      useCase.color === 'indigo' ? '#4f46e5' :
                      useCase.color === 'purple' ? '#9333ea' :
                      useCase.color === 'pink' ? '#ec4899' :
                      useCase.color === 'green' ? '#22c55e' : '#eab308'
                  }}
                >
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{useCase.title[lang]}</h3>
                <p className="text-gray-500 font-bold text-base leading-relaxed">{useCase.description[lang]}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ScrollRevealSection>

      {/* CTA Final */}
      <CTASection
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primaryCTA={{ label: t.ctaEmail, href: `mailto:${CONTACT_EMAIL}` }}
        secondaryCTA={{ label: t.ctaWhatsapp, href: WHATSAPP_URL }}
      />

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-16 mb-16 border-b border-white/5 pb-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-600 p-2.5 rounded-2xl shadow-xl">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="font-black text-3xl text-white tracking-tighter">DataPro</span>
              </div>
              <p className="text-lg font-bold leading-relaxed mb-10 text-gray-400">{t.footerDesc}</p>
            </div>

            <div>
              <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-widest">Contacto Directo</h4>
              <ul className="space-y-6 text-base font-black">
                <li className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                    <Mail className="w-5 h-5 text-blue-500 group-hover:text-white" />
                  </div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-600 transition-all">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-500 group-hover:text-white" />
                  </div>
                  <a href={WHATSAPP_URL} target="_blank" className="hover:text-white transition-colors">WhatsApp</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-widest">Cobertura</h4>
              <p className="text-lg font-black text-gray-400 leading-relaxed mb-8">{t.location}</p>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-sm font-black text-gray-200 leading-relaxed">{t.expFooter}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[12px] font-black uppercase">
            <p>© 2026 Dashboard Online. Professional Data Intelligence.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">{lang === 'es' ? 'Términos' : 'Terms'}</a>
              <a href="#" className="hover:text-white transition-colors">{lang === 'es' ? 'Privacidad' : 'Privacy'}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <AnimatePresence>
        {showDemo && <DashboardDemo onClose={() => setShowDemo(false)} lang={lang} />}
      </AnimatePresence>
    </motion.div>
  );
}
