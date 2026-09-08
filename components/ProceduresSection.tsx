'use client'

import { Syringe, Sparkles, Droplets, Zap, Leaf, Wind, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

const procedures = [
  {
    icon: Sparkles,
    title: 'Botox | Terço Superior',
    description: 'Aplicação de toxina botulínica para suavizar linhas de expressão e proporcionar uma aparência mais descansada e harmônica, preservando a naturalidade.',
    tag: 'Inclui retorno após 15 dias',
    areas: null,
  },
  {
    icon: Droplets,
    title: 'Preenchimento Facial',
    description: 'Procedimento realizado com ácido hialurônico para proporcionar mais harmonia, definição e equilíbrio aos contornos faciais.',
    tag: null,
    areas: ['Lábios', 'Mento', 'Malar', 'Mandíbula', 'Rinomodelação'],
  },
  {
    icon: Leaf,
    title: 'Bioestimulador | Elleva',
    description: 'Tratamento que estimula a produção de colágeno, auxiliando na melhora da firmeza, sustentação e qualidade da pele, promovendo um rejuvenescimento gradual e natural.',
    tag: null,
    areas: null,
  },
  {
    icon: Wind,
    title: 'Fios de PDO',
    description: 'Procedimento com fios de polidioxanona que auxilia na melhora da sustentação e firmeza da pele, além de estimular a produção de colágeno na região tratada.',
    tag: null,
    areas: null,
  },
  {
    icon: Zap,
    title: 'Enzima Capilar',
    description: 'Protocolo injetável desenvolvido para auxiliar no controle da queda capilar, regular o ciclo dos fios e estimular o crescimento, contribuindo para cabelos mais fortes e saudáveis.',
    tag: null,
    areas: null,
  },
  {
    icon: Syringe,
    title: 'Enzima Corporal',
    description: 'Protocolos personalizados com aplicação de ativos conforme o objetivo de cada paciente, podendo ser direcionados para gordura localizada, protocolos intramusculares e suporte ao metabolismo.',
    tag: null,
    areas: null,
  },
  {
    icon: Eye,
    title: 'PEIM',
    description: 'Procedimento estético injetável indicado para o tratamento de microvasos aparentes, buscando melhorar o aspecto da região tratada.',
    tag: 'Requer avaliação prévia',
    areas: null,
  },
]

export default function ProceduresSection() {
  return (
    <section id="procedimentos" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
      <motion.div
        className="absolute -bottom-20 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center space-y-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Nossos Tratamentos</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
            Procedimentos <span className="text-primary">Premium</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tratamentos estéticos personalizados para realçar sua beleza natural com segurança e precisão.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procedures.map((procedure, index) => {
            const Icon = procedure.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-white/60 backdrop-blur-md border border-secondary/20 hover:border-secondary/40 rounded-2xl transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="p-4 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {procedure.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {procedure.description}
                </p>

                {procedure.areas && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Áreas disponíveis</p>
                    <div className="flex flex-wrap gap-1.5">
                      {procedure.areas.map((area) => (
                        <span key={area} className="text-xs px-2.5 py-1 bg-secondary/15 text-primary rounded-full font-medium">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {procedure.tag && (
                  <p className="text-xs text-accent font-medium mb-4">{procedure.tag}</p>
                )}

                <a
                  href="https://wa.me/5514998499727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm font-semibold text-primary flex items-center gap-1.5 hover:gap-3 transition-all duration-300"
                >
                  Agendar consulta
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            )
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm mb-4">Dúvidas sobre qual procedimento é ideal para você?</p>
          <a
            href="https://wa.me/5514998499727"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105"
          >
            Falar com a Malu
          </a>
        </motion.div>
      </div>
    </section>
  )
}
