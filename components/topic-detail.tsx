"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  X, BookOpen, Lightbulb, Scale, ChevronRight, 
  ChevronLeft, CheckCircle2, XCircle, Trophy,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { ElectionTopic, QuizQuestion } from "@/lib/election-data"

interface TopicDetailProps {
  topic: ElectionTopic
  onClose: () => void
}

export function TopicDetail({ topic, onClose }: TopicDetailProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizState, setQuizState] = useState<{
    currentQuestion: number
    answers: (number | null)[]
    showResult: boolean
  }>({
    currentQuestion: 0,
    answers: [],
    showResult: false,
  })

  const progress = ((currentSection + 1) / topic.content.length) * 100

  const handleNextSection = () => {
    if (currentSection < topic.content.length - 1) {
      setCurrentSection(currentSection + 1)
    } else if (topic.quiz) {
      setShowQuiz(true)
    }
  }

  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...quizState.answers]
    newAnswers[quizState.currentQuestion] = answerIndex
    
    if (quizState.currentQuestion < (topic.quiz?.length || 0) - 1) {
      setQuizState({
        ...quizState,
        answers: newAnswers,
        currentQuestion: quizState.currentQuestion + 1,
      })
    } else {
      setQuizState({
        ...quizState,
        answers: newAnswers,
        showResult: true,
      })
    }
  }

  const calculateScore = () => {
    if (!topic.quiz) return 0
    return quizState.answers.reduce((score, answer, index) => {
      return score + (answer === topic.quiz![index].correctAnswer ? 1 : 0)
    }, 0)
  }

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      answers: [],
      showResult: false,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">{topic.shortTitle}</h1>
              {!showQuiz && (
                <p className="text-sm text-muted-foreground">
                  Section {currentSection + 1} of {topic.content.length}
                </p>
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="w-5 h-5" />
            </Button>
          </div>
          {!showQuiz && <Progress value={progress} className="mt-3 h-2" />}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {!showQuiz ? (
            <motion.div
              key={`section-${currentSection}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Constitutional Reference */}
              {topic.constitutionalArticle && currentSection === 0 && (
                <Card className="mb-6 bg-secondary/50 border-secondary">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Scale className="w-5 h-5 text-secondary-foreground shrink-0" />
                    <span className="text-sm text-secondary-foreground">
                      <strong>Constitutional Basis:</strong> {topic.constitutionalArticle}
                    </span>
                  </CardContent>
                </Card>
              )}

              {/* Main Content */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {topic.content[currentSection].heading}
                </h2>

                {topic.content[currentSection].highlight && (
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg"
                  >
                    <p className="text-primary font-semibold text-lg">
                      {topic.content[currentSection].highlight}
                    </p>
                  </motion.div>
                )}

                <p className="text-foreground/90 text-lg leading-relaxed">
                  {topic.content[currentSection].body}
                </p>

                {topic.content[currentSection].example && (
                  <Card className="bg-accent/10 border-accent/30">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="bg-accent rounded-full p-2 shrink-0">
                          <Lightbulb className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Real-World Example</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {topic.content[currentSection].example}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Fun Fact - show on first section */}
                {currentSection === 0 && topic.funFact && (
                  <Card className="bg-chart-4/10 border-chart-4/30">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="bg-chart-4 rounded-full p-2 shrink-0">
                          <Sparkles className="w-4 h-4 text-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Fun Fact!</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {topic.funFact}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handlePrevSection}
                  disabled={currentSection === 0}
                  className="gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>

                <Button onClick={handleNextSection} className="gap-2 bg-primary hover:bg-primary/90">
                  {currentSection === topic.content.length - 1 && topic.quiz
                    ? "Take Quiz"
                    : "Next Section"}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <QuizSection
              quiz={topic.quiz!}
              quizState={quizState}
              onAnswer={handleQuizAnswer}
              onReset={resetQuiz}
              onBack={() => {
                setShowQuiz(false)
                setCurrentSection(0)
              }}
              calculateScore={calculateScore}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

interface QuizSectionProps {
  quiz: QuizQuestion[]
  quizState: {
    currentQuestion: number
    answers: (number | null)[]
    showResult: boolean
  }
  onAnswer: (index: number) => void
  onReset: () => void
  onBack: () => void
  calculateScore: () => number
}

function QuizSection({ quiz, quizState, onAnswer, onReset, onBack, calculateScore }: QuizSectionProps) {
  const currentQ = quiz[quizState.currentQuestion]
  const score = calculateScore()
  const total = quiz.length
  const percentage = (score / total) * 100

  if (quizState.showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="inline-block mb-6"
        >
          <div className={`w-32 h-32 rounded-full flex items-center justify-center ${
            percentage >= 70 ? "bg-accent" : percentage >= 40 ? "bg-chart-4" : "bg-destructive"
          }`}>
            <Trophy className={`w-16 h-16 ${
              percentage >= 70 ? "text-accent-foreground" : "text-foreground"
            }`} />
          </div>
        </motion.div>

        <h2 className="text-3xl font-bold text-foreground mb-2">
          {percentage >= 70 ? "Excellent!" : percentage >= 40 ? "Good Try!" : "Keep Learning!"}
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          You scored <span className="text-primary font-bold">{score}</span> out of <span className="font-bold">{total}</span>
        </p>

        {/* Show answers */}
        <div className="space-y-4 text-left mb-8">
          {quiz.map((q, i) => (
            <Card key={i} className={`${
              quizState.answers[i] === q.correctAnswer 
                ? "border-accent bg-accent/5" 
                : "border-destructive bg-destructive/5"
            }`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  {quizState.answers[i] === q.correctAnswer ? (
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium text-foreground mb-1">{q.question}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="text-accent">Correct:</span> {q.options[q.correctAnswer]}
                    </p>
                    <p className="text-sm text-muted-foreground italic">{q.explanation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={onBack}>
            <BookOpen className="w-4 h-4 mr-2" />
            Read Again
          </Button>
          <Button onClick={onReset} className="bg-primary hover:bg-primary/90">
            Try Again
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      key={quizState.currentQuestion}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="mb-6">
        <span className="text-sm text-muted-foreground">
          Question {quizState.currentQuestion + 1} of {quiz.length}
        </span>
        <Progress 
          value={((quizState.currentQuestion + 1) / quiz.length) * 100} 
          className="mt-2 h-2" 
        />
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-8">{currentQ.question}</h2>

      <div className="space-y-3">
        {currentQ.options.map((option, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onAnswer(i)}
            className="w-full text-left p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
          >
            <span className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-foreground">{option}</span>
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
