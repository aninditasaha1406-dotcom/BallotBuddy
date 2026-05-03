
export const dynamic = "force-dynamic";

"use client"

import { useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TopicCard } from "@/components/topic-card"
import { TopicDetail } from "@/components/topic-detail"
import { ElectionTimeline } from "@/components/election-timeline"
import { ElectionHistory } from "@/components/election-history"
import { QuickFacts } from "@/components/quick-facts"
import { QuizChallenge } from "@/components/quiz-challenge"
import { Footer } from "@/components/footer"
import { electionTopics, type ElectionTopic } from "@/lib/election-data"

export default function HomePage() {
  const [selectedTopic, setSelectedTopic] = useState<ElectionTopic | null>(null)
  
  const heroRef = useRef<HTMLDivElement>(null)
  const topicsRef = useRef<HTMLDivElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const factsRef = useRef<HTMLDivElement>(null)
  const quizRef = useRef<HTMLDivElement>(null)
  const registerRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
      hero: heroRef,
      topics: topicsRef,
      history: historyRef,
      timeline: timelineRef,
      facts: factsRef,
      quiz: quizRef,
      register: registerRef,
    }
    
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation onNavigate={scrollToSection} />

      <div ref={heroRef}>
        <HeroSection onExplore={() => scrollToSection("topics")} />
      </div>

      {/* Topics Section */}
      <section ref={topicsRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium">EXPLORE & LEARN</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Understanding Elections
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Dive deep into every aspect of Indian elections. Each topic is packed with 
              detailed explanations, real-world examples, and quizzes to test your knowledge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electionTopics.map((topic, index) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                index={index}
                onClick={() => setSelectedTopic(topic)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* History Section with Audiobook */}
      <div ref={historyRef}>
        <ElectionHistory />
      </div>

      {/* Timeline Section */}
      <div ref={timelineRef}>
        <ElectionTimeline />
      </div>

      {/* Quick Facts Section */}
      <div ref={factsRef}>
        <QuickFacts />
      </div>

      {/* Quiz Section */}
      <div ref={quizRef}>
        <QuizChallenge />
      </div>

      {/* Registration CTA */}
      <section ref={registerRef} className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Make Your Voice Heard?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
              If you&apos;re 18 or older, register as a voter today! It&apos;s free, easy, 
              and takes just 10 minutes. Your vote shapes the future of India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.nvsp.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-semibold rounded-full hover:bg-background/90 transition-colors"
              >
                Register on NVSP Portal
              </a>
              <a
                href="https://electoralsearch.eci.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                Check Your Registration
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Topic Detail Modal */}
      <AnimatePresence>
        {selectedTopic && (
          <TopicDetail
            topic={selectedTopic}
            onClose={() => setSelectedTopic(null)}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
