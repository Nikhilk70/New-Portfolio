import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';
import { item } from '@/components/ui/Reveal';
import { getIcon } from '@/components/ui/icons';
import { usePortfolio } from '@/hooks/usePortfolio.jsx';

export default function Services() {
  const { services } = usePortfolio();
  return (
    <section id="services" className="section">
      <div className="pointer-events-none absolute left-0 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-[140px]" />
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="What I do"
          title="Engineering +"
          highlight="AI integration."
          description="Beyond building web apps, I connect them to AI: retrieval systems, agent tooling, tested APIs and smarter CRM workflows."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => {
            const Icon = getIcon(s.icon);
            return (
              <motion.div
                key={s.id}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="h-full"
              >
                <TiltCard className={`accent-${s.accent} group relative flex h-full flex-col p-7`}>
                  <span className="absolute right-6 top-6 font-mono text-xs text-slate-600">0{i + 1}</span>
                  <span className="accent-bg accent-text grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.description}</p>
                  <ul className="mt-6 space-y-2 border-t border-white/5 pt-5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check size={14} className="accent-text mt-1 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
