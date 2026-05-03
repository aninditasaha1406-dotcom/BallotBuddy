"use client"

import { motion } from "framer-motion"
import { 
  Vote, Building2, Shield, Workflow, Users, 
  ClipboardList, CheckCircle, ArrowRight 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { ElectionTopic } from "@/lib/election-data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  vote: Vote,
  building: Building2,
  shield: Shield,
  workflow: Workflow,
  users: Users,
  clipboard: ClipboardList,
  "check-circle": CheckCircle,
}

interface TopicCardProps {
  topic: ElectionTopic
  index: number
  onClick: () => void
}

export function TopicCard({ topic, index, onClick }: TopicCardProps) {
  const Icon = iconMap[topic.icon] || Vote

  const colors = [
    "from-primary/20 to-primary/5 border-primary/30",
    "from-secondary/20 to-secondary/5 border-secondary/30",
    "from-accent/20 to-accent/5 border-accent/30",
    "from-chart-4/20 to-chart-4/5 border-chart-4/30",
    "from-chart-5/20 to-chart-5/5 border-chart-5/30",
    "from-chart-2/20 to-chart-2/5 border-chart-2/30",
    "from-chart-3/20 to-chart-3/5 border-chart-3/30",
  ]

  const iconColors = [
    "bg-primary text-primary-foreground",
    "bg-secondary text-secondary-foreground",
    "bg-accent text-accent-foreground",
    "bg-chart-4 text-foreground",
    "bg-chart-5 text-foreground",
    "bg-chart-2 text-foreground",
    "bg-chart-3 text-foreground",
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card 
        className={`group cursor-pointer overflow-hidden bg-gradient-to-br ${colors[index % colors.length]} border-2 hover:shadow-xl transition-all duration-300 h-full`}
        onClick={onClick}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl ${iconColors[index % iconColors.length]} shadow-lg`}>
              <Icon className="w-6 h-6" />
            </div>
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ArrowRight className="w-6 h-6 text-foreground/50" />
            </motion.div>
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {topic.shortTitle}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {topic.description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="bg-muted px-2 py-1 rounded-full">
              {topic.content.length} sections
            </span>
            {topic.quiz && (
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                Quiz included
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
