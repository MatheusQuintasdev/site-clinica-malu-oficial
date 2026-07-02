'use client'

import { Sparkles, Zap, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const procedures = [
  {
    icon: Sparkles,
    title: 'Limpeza de Pele',
    description: 'Procedimento profundo que remove impurezas e deixa a pele radiante e renovada.'
  },
  {
    icon: Zap,
    title: 'Microagulhamento',
    description: 'Técnica que estimula a produção de colágeno para renovação da pele e resultados naturais.'
  },
  {
    icon: Heart,
    title: 'Revitalização Facial',
    description: 'Tratamento que revitaliza e rejuvenesce a pele, devolvendo luminosidade e vitalidade.'
  }
]

export default function ProceduresSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

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
            Tratamentos estéticos personalizados para cada tipo de pele e objetivo.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {procedures.map((procedure, index) => {
            const Icon = procedure.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ translateY: -6, boxShadow: '0 20px 40px rgba(82, 41, 41, 0.15)' }}
                className="group relative p-8 bg-white/60 backdrop-blur-md border border-secondary/20 hover:border-secondary/40 rounded-2xl transition-all duration-300"
              >
                <motion.div
                  className="p-4 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 10 }}
                >
                  <Icon size={28} className="text-primary" />
                </motion.div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {procedure.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {procedure.description}
                </p>

                <motion.div
                  className="flex items-center gap-2 text-sm font-semibold text-primary"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Explorar mais
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}