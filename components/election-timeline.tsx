"use client"

import { motion } from "framer-motion"
import { 
  Megaphone, Scroll, FileText, Search, UserMinus,
  TrendingUp, VolumeX, CheckSquare, Award, Landmark
} from "lucide-react"
import { electionTimeline } from "@/lib/election-data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  megaphone: Megaphone,
  scroll: Scroll,
  "file-text": FileText,
  search: Search,
  "user-minus": UserMinus,
  "trending-up": TrendingUp,
  "volume-x": VolumeX,
  "check-square": CheckSquare,
  award: Award,
  landmark: Landmark,
}

export function ElectionTimeline() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">STEP BY STEP</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            The Election Timeline
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From announcement to government formation — follow the journey of how millions of 
            votes shape our democracy.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {electionTimeline.map((event, index) => {
            const Icon = iconMap[event.icon] || CheckSquare
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className={`relative flex items-center mb-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 -translate-x-1/2 md:-translate-x-1/2 shadow-lg">
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full mb-2">
                      {event.day}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
