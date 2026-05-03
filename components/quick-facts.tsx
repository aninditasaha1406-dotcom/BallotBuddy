"use client"

import { motion } from "framer-motion"
import { 
  Calendar, Users, Landmark, Globe, 
  Vote, FileCheck, Scale, Fingerprint 
} from "lucide-react"

const facts = [
  {
    icon: Calendar,
    title: "Voting Age",
    value: "18 Years",
    description: "Reduced from 21 by 61st Amendment, 1988",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Lok Sabha Seats",
    value: "543",
    description: "Elected directly by the people",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Landmark,
    title: "Rajya Sabha Seats",
    value: "245",
    description: "233 elected + 12 nominated",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Globe,
    title: "National Parties",
    value: "6",
    description: "BJP, INC, BSP, CPI(M), AAP, NPP",
    color: "bg-chart-4/10 text-chart-4",
  },
  {
    icon: Vote,
    title: "First Election",
    value: "1951-52",
    description: "First general election of free India",
    color: "bg-chart-5/10 text-chart-5",
  },
  {
    icon: FileCheck,
    title: "NOTA Introduced",
    value: "2013",
    description: "None of the Above option",
    color: "bg-chart-2/10 text-chart-2",
  },
  {
    icon: Scale,
    title: "ECI Established",
    value: "25 Jan 1950",
    description: "Now celebrated as National Voters Day",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Fingerprint,
    title: "EVM First Used",
    value: "1982",
    description: "In Paravur, Kerala (pilot)",
    color: "bg-secondary/10 text-secondary",
  },
]

export function QuickFacts() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium">QUICK REFERENCE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Key Facts at a Glance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Essential numbers and dates every informed citizen should know about Indian elections.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-background rounded-xl p-5 border border-border hover:shadow-lg transition-all"
            >
              <div className={`w-10 h-10 rounded-lg ${fact.color} flex items-center justify-center mb-3`}>
                <fact.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm text-muted-foreground mb-1">{fact.title}</h3>
              <p className="text-2xl font-bold text-foreground mb-1">{fact.value}</p>
              <p className="text-xs text-muted-foreground">{fact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
