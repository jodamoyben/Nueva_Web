import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

// ==================== ANIMATED HERO ====================
export const AnimatedHero: React.FC<{
  badge: string;
  title: string;
  subtitle: string;
  primaryCTA: { label: string; onClick: () => void };
  secondaryCTA: { label: string; href: string };
  backgroundEffect?: React.ReactNode;
}> = ({ badge, title, subtitle, primaryCTA, secondaryCTA, backgroundEffect }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl -ml-40 -mb-40"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 md:px-12 z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-black uppercase tracking-widest backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            {badge}
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] max-w-4xl"
        >
          {title.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            onClick={primaryCTA.onClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-black text-base hover:bg-blue-700 transition-colors shadow-2xl shadow-blue-500/30 flex items-center gap-2 justify-center"
          >
            {primaryCTA.label}
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          <motion.a
            href={secondaryCTA.href}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 text-white rounded-full font-black text-base border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm flex items-center gap-2 justify-center"
          >
            {secondaryCTA.label}
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

// ==================== FLOATING NAVBAR ====================
export const FloatingNavbar: React.FC<{
  scrolled: boolean;
  navItems: { label: string; href: string }[];
  onLanguageChange: (lang: string) => void;
  currentLang: string;
  contactCTA: { label: string; href: string };
}> = ({ scrolled, navItems, onLanguageChange, currentLang, contactCTA }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/80 backdrop-blur-xl shadow-2xl py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <div className={`p-2 rounded-xl shadow-lg transition-all ${
            scrolled ? 'bg-blue-600 text-white' : 'bg-white/10 text-white backdrop-blur'
          }`}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l9 5v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V7l9-5z" />
            </svg>
          </div>
          <span className={`font-black text-xl tracking-tighter transition-colors ${
            scrolled ? 'text-white' : 'text-white'
          }`}>
            DataPro
          </span>
        </motion.div>

        {/* Nav items - desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ color: '#3b82f6' }}
              className={`text-sm font-black tracking-tight transition-colors ${
                scrolled ? 'text-gray-300 hover:text-blue-400' : 'text-white/80 hover:text-blue-300'
              }`}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Language + CTA */}
        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <div className={`flex gap-1 p-1 rounded-full transition-all ${
            scrolled ? 'bg-gray-800 border border-gray-700' : 'bg-white/10 border border-white/20 backdrop-blur'
          }`}>
            {['ES', 'EN'].map((lang) => (
              <motion.button
                key={lang}
                onClick={() => onLanguageChange(lang.toLowerCase())}
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-1.5 rounded-full text-xs font-black uppercase transition-all ${
                  currentLang === lang.toLowerCase()
                    ? scrolled
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-blue-600 shadow-xl'
                    : scrolled
                    ? 'text-gray-400 hover:text-gray-200'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {lang}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href={contactCTA.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex px-6 py-2.5 rounded-full text-sm font-black transition-all items-center gap-2 shadow-xl"
            style={{
              backgroundColor: scrolled ? '#2563eb' : 'rgba(255,255,255,0.1)',
              color: 'white',
              border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.2)',
              backdropFilter: scrolled ? 'none' : 'blur(10px)',
            }}
          >
            {contactCTA.label}
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

// ==================== SCROLL REVEAL SECTION ====================
export const ScrollRevealSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = '', id }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      id={id}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// ==================== FEATURE CARD GLASSMORPHISM ====================
export const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}> = ({ icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      className="p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-2xl group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-colors"
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-black text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// ==================== CINEMATIC BACKGROUND ====================
export const CinematicBackground: React.FC<{
  children: React.ReactNode;
  gradient?: string;
  overlay?: boolean;
}> = ({ children, gradient = 'from-gray-950 via-blue-950 to-gray-950', overlay = true }) => {
  return (
    <div className={`relative w-full bg-gradient-to-b ${gradient}`}>
      {overlay && (
        <>
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/2 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
          />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// ==================== CTA SECTION ====================
export const CTASection: React.FC<{
  title: string;
  subtitle: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
}> = ({ title, subtitle, primaryCTA, secondaryCTA }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-20 md:py-32 px-6 md:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-blue-600/20" />

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl"
      />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href={primaryCTA.href}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-black text-base hover:bg-blue-700 transition-colors shadow-2xl shadow-blue-500/50 flex items-center gap-2 justify-center"
          >
            {primaryCTA.label}
            <ChevronRight className="w-5 h-5" />
          </motion.a>

          <motion.a
            href={secondaryCTA.href}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 text-white rounded-full font-black text-base border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm flex items-center gap-2 justify-center"
          >
            {secondaryCTA.label}
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};
