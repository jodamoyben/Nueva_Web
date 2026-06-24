import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Mail } from 'lucide-react';

// Proper WhatsApp brand icon
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// ==================== ANIMATED HERO ====================
export const AnimatedHero: React.FC<{
  badge: string;
  title: string;
  subtitle: string;
  primaryCTA: { label: string; onClick: () => void };
  secondaryCTA: { label: string; href?: string; onClick?: () => void };
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

          {secondaryCTA.onClick ? (
            <motion.button
              onClick={secondaryCTA.onClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 text-white rounded-full font-black text-base border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm flex items-center gap-2 justify-center"
            >
              {secondaryCTA.label}
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.a
              href={secondaryCTA.href}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 text-white rounded-full font-black text-base border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm flex items-center gap-2 justify-center"
            >
              {secondaryCTA.label}
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          )}
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
  navItems: { label: string; href?: string; onClick?: () => void }[];
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
          {navItems.map((item) =>
            item.onClick ? (
              <motion.button
                key={item.label}
                onClick={item.onClick}
                whileHover={{ color: '#3b82f6' }}
                className={`text-sm font-black tracking-tight transition-colors ${
                  scrolled ? 'text-gray-300 hover:text-blue-400' : 'text-white/80 hover:text-blue-300'
                }`}
              >
                {item.label}
              </motion.button>
            ) : (
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
            )
          )}
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
      className="relative py-20 md:py-28 px-6 md:px-8 overflow-hidden bg-white"
    >
      {/* Decorative card with dark gradient so text pops */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto z-10 rounded-[40px] p-12 md:p-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 shadow-2xl shadow-blue-500/30 overflow-hidden"
      >
        {/* Glow blobs inside */}
        <div className="absolute inset-0 overflow-hidden rounded-[40px] pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-32 -right-32 w-96 h-96 bg-white/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"
          />
        </div>

        {/* Discount badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10 inline-flex items-center gap-2 px-5 py-2 mb-8 bg-amber-400 text-amber-900 rounded-full text-xs font-black uppercase tracking-widest shadow-lg"
        >
          🎉 10% OFF
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-lg md:text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href={primaryCTA.href}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-blue-600 rounded-full font-black text-base hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-2 justify-center"
          >
            <Mail className="w-5 h-5" />
            {primaryCTA.label}
          </motion.a>

          <motion.a
            href={secondaryCTA.href}
            target="_blank"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-emerald-500 text-white rounded-full font-black text-base hover:bg-emerald-600 transition-all shadow-2xl flex items-center gap-2 justify-center"
          >
            <WhatsAppIcon className="w-5 h-5" />
            {secondaryCTA.label}
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
