"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Play, Pause, Volume2, VolumeX, SkipForward, SkipBack,
  History, ChevronRight, ChevronLeft, BookOpen, Scale
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { electionHistory, constitutionalMilestones, type HistoryMilestone } from "@/lib/election-history-data"

interface AudioPlayerProps {
  text: string
  isPlaying: boolean
  onPlayPause: () => void
  onEnd: () => void
}

function useTextToSpeech() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [rate, setRate] = useState(1)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  
  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return
    
    window.speechSynthesis.cancel()
    
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = rate
    utterance.pitch = 1
    utterance.volume = isMuted ? 0 : 1
    
    const voices = window.speechSynthesis.getVoices()
    const indianEnglishVoice = voices.find(
      voice => voice.lang.includes("en-IN") || voice.lang.includes("en-GB")
    )
    if (indianEnglishVoice) {
      utterance.voice = indianEnglishVoice
    }
    
    utterance.onstart = () => {
      setIsPlaying(true)
      setIsPaused(false)
      const words = text.split(" ").length
      const estimatedDuration = (words / (150 * rate)) * 60 * 1000
      
      const startTime = Date.now()
      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime
        const newProgress = Math.min((elapsed / estimatedDuration) * 100, 100)
        setProgress(newProgress)
      }, 100)
    }
    
    utterance.onend = () => {
      setIsPlaying(false)
      setIsPaused(false)
      setProgress(100)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      setTimeout(() => setProgress(0), 500)
      if (onEnd) onEnd()
    }
    
    utterance.onerror = () => {
      setIsPlaying(false)
      setIsPaused(false)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
    
    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [rate, isMuted])
  
  const pause = useCallback(() => {
    if (typeof window === "undefined") return
    window.speechSynthesis.pause()
    setIsPaused(true)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, [])
  
  const resume = useCallback(() => {
    if (typeof window === "undefined") return
    window.speechSynthesis.resume()
    setIsPaused(false)
  }, [])
  
  const stop = useCallback(() => {
    if (typeof window === "undefined") return
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setIsPaused(false)
    setProgress(0)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, [])
  
  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev)
  }, [])
  
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        window.speechSynthesis.cancel()
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])
  
  return { 
    speak, 
    pause, 
    resume, 
    stop, 
    isPlaying, 
    isPaused, 
    progress, 
    isMuted, 
    toggleMute,
    rate,
    setRate
  }
}

function AudioPlayer({ 
  milestone, 
  onNext, 
  onPrev, 
  hasNext, 
  hasPrev,
  isAutoPlay,
  onAutoPlayToggle
}: { 
  milestone: HistoryMilestone
  onNext: () => void
  onPrev: () => void
  hasNext: boolean
  hasPrev: boolean
  isAutoPlay: boolean
  onAutoPlayToggle: () => void
}) {
  const { speak, pause, resume, stop, isPlaying, isPaused, progress, isMuted, toggleMute, rate, setRate } = useTextToSpeech()
  
  const text = milestone.audioText || `${milestone.title}. ${milestone.description}. ${milestone.details}. ${milestone.impact}`
  
  const handlePlayPause = () => {
    if (isPlaying && !isPaused) {
      pause()
    } else if (isPaused) {
      resume()
    } else {
      speak(text, isAutoPlay ? onNext : undefined)
    }
  }
  
  const handleNext = () => {
    stop()
    onNext()
  }
  
  const handlePrev = () => {
    stop()
    onPrev()
  }
  
  useEffect(() => {
    stop()
  }, [milestone.year, stop])
  
  return (
    <Card className="bg-card/50 border-border">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Volume2 className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Audio Narration</span>
          <button
            onClick={onAutoPlayToggle}
            className={`ml-auto text-xs px-2 py-1 rounded-full transition-colors ${
              isAutoPlay 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Auto-play {isAutoPlay ? "ON" : "OFF"}
          </button>
        </div>
        
        <Progress value={progress} className="h-1.5 mb-3" />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={handlePrev}
              disabled={!hasPrev}
            >
              <SkipBack className="w-4 h-4" />
            </Button>
            
            <Button 
              variant="default" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90"
              onClick={handlePlayPause}
            >
              {isPlaying && !isPaused ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={handleNext}
              disabled={!hasNext}
            >
              <SkipForward className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Speed:</span>
              <select 
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="text-xs bg-muted rounded px-2 py-1 border-none outline-none"
              >
                <option value={0.75}>0.75x</option>
                <option value={1}>1x</option>
                <option value={1.25}>1.25x</option>
                <option value={1.5}>1.5x</option>
              </select>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={toggleMute}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function MilestoneCard({ 
  milestone, 
  isActive, 
  onClick 
}: { 
  milestone: HistoryMilestone
  isActive: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
        isActive 
          ? "border-primary bg-primary/10" 
          : "border-border hover:border-primary/50 bg-card"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-4">
        <div className={`shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm ${
          isActive ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
        }`}>
          {milestone.year.split("-")[0]}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-bold text-lg mb-1 ${isActive ? "text-primary" : "text-foreground"}`}>
            {milestone.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {milestone.description}
          </p>
        </div>
        {isActive && (
          <ChevronRight className="w-5 h-5 text-primary shrink-0" />
        )}
      </div>
    </motion.button>
  )
}

export function ElectionHistory() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [showConstitution, setShowConstitution] = useState(false)
  
  const activeMilestone = electionHistory[activeIndex]
  
  const handleNext = () => {
    if (activeIndex < electionHistory.length - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }
  
  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }
  
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary font-medium mb-2">
            <History className="w-4 h-4" />
            JOURNEY THROUGH TIME
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            How Elections Came to India
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            From British colonial rule to the world&apos;s largest democracy. Listen to the story 
            of how India fought for and won the right to vote.
          </p>
          
          <div className="flex justify-center gap-3 mt-6">
            <Button
              variant={!showConstitution ? "default" : "outline"}
              onClick={() => setShowConstitution(false)}
              className="gap-2"
            >
              <BookOpen className="w-4 h-4" />
              History Timeline
            </Button>
            <Button
              variant={showConstitution ? "default" : "outline"}
              onClick={() => setShowConstitution(true)}
              className="gap-2"
            >
              <Scale className="w-4 h-4" />
              Constitutional Basis
            </Button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showConstitution ? (
            <motion.div
              key="history"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-5 gap-8"
            >
              {/* Timeline Navigation */}
              <div className="lg:col-span-2 space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {electionHistory.map((milestone, index) => (
                  <MilestoneCard
                    key={milestone.year}
                    milestone={milestone}
                    isActive={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              
              {/* Active Milestone Detail */}
              <div className="lg:col-span-3">
                <motion.div
                  key={activeMilestone.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="sticky top-24"
                >
                  <Card className="border-primary/20">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                          {activeMilestone.year}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {activeIndex + 1} of {electionHistory.length}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {activeMilestone.title}
                      </h3>
                      
                      <p className="text-lg text-primary mb-6">
                        {activeMilestone.description}
                      </p>
                      
                      {/* Audio Player */}
                      <div className="mb-6">
                        <AudioPlayer
                          milestone={activeMilestone}
                          onNext={handleNext}
                          onPrev={handlePrev}
                          hasNext={activeIndex < electionHistory.length - 1}
                          hasPrev={activeIndex > 0}
                          isAutoPlay={isAutoPlay}
                          onAutoPlayToggle={() => setIsAutoPlay(!isAutoPlay)}
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-foreground/90 leading-relaxed">
                          {activeMilestone.details}
                        </p>
                        
                        <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                          <p className="text-sm font-semibold text-accent-foreground mb-1">
                            Historical Impact
                          </p>
                          <p className="text-muted-foreground">
                            {activeMilestone.impact}
                          </p>
                        </div>
                      </div>
                      
                      {/* Navigation */}
                      <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                        <Button
                          variant="outline"
                          onClick={handlePrev}
                          disabled={activeIndex === 0}
                          className="gap-2"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Previous Era
                        </Button>
                        
                        <Button
                          onClick={handleNext}
                          disabled={activeIndex === electionHistory.length - 1}
                          className="gap-2 bg-primary hover:bg-primary/90"
                        >
                          Next Era
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="constitution"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border-primary/20">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary rounded-full p-2">
                      <Scale className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Electoral Provisions in the Constitution
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-8">
                    Part XV of the Indian Constitution (Articles 324-329) deals with elections. 
                    These articles form the backbone of India&apos;s electoral democracy.
                  </p>
                  
                  <div className="space-y-4">
                    {constitutionalMilestones.map((item, index) => (
                      <motion.div
                        key={item.article}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="shrink-0 w-24 h-12 rounded bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{item.article}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
