import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from 'clsx';
import { Check, Star, ChevronRight } from 'lucide-react';

// ==================== LAMP COMPONENT ====================
export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0', className)}>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

        <motion.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '16rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>

        <motion.div
          initial={{ width: '15rem' }}
          whileInView={{ width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Dashboards Profesionales <br /> Sin Límites
      </motion.h1>
    </LampContainer>
  );
}

// ==================== PRICING CARD PREMIUM ====================
export function PricingCardPremium({
  name,
  price,
  features,
  isPopular,
  buttonText,
  delay = 0,
}: {
  name: string;
  price: string;
  features: string[];
  isPopular: boolean;
  buttonText: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={cn(
        'relative p-8 rounded-3xl border-2 transition-all',
        isPopular
          ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-400 shadow-2xl shadow-blue-500/40 scale-105'
          : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
      )}
    >
      {isPopular && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.2 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-xs font-black"
        >
          <Star className="w-4 h-4 fill-current" />
          MÁS POPULAR
        </motion.div>
      )}

      <div className="mb-6">
        <h3 className={cn('text-2xl font-black mb-4', isPopular ? 'text-white' : 'text-gray-900')}>
          {name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className={cn('text-5xl font-black', isPopular ? 'text-white' : 'text-gray-900')}>
            ${price}
          </span>
          <span className={cn('text-sm font-bold', isPopular ? 'text-blue-100' : 'text-gray-500')}>
            /mes
          </span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.05 * idx }}
            className="flex items-start gap-3"
          >
            <Check className={cn('w-5 h-5 mt-0.5 flex-shrink-0', isPopular ? 'text-blue-200' : 'text-blue-600')} />
            <span className={cn('text-sm font-bold', isPopular ? 'text-blue-50' : 'text-gray-600')}>
              {feature}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'w-full py-3.5 rounded-full font-black flex items-center justify-center gap-2 transition-all',
          isPopular
            ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        )}
      >
        {buttonText}
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
}
