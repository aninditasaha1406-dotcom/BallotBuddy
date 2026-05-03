"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Trophy, ChevronRight, RotateCcw, Sparkles, 
  CheckCircle2, XCircle, Zap, Timer
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const quizQuestions = [
  {
    question: "What is the minimum age to vote in India?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    correctAnswer: 1,
    explanation: "The 61st Amendment Act of 1988 reduced the voting age from 21 to 18 years.",
  },
  {
    question: "How many constituencies are there for Lok Sabha elections?",
    options: ["435", "543", "545", "552"],
    correctAnswer: 1,
    explanation: "There are 543 elected constituencies in the Lok Sabha.",
  },
  {
    question: "When was the Election Commission of India established?",
    options: ["15 August 1947", "26 January 1950", "25 January 1950", "26 November 1949"],
    correctAnswer: 2,
    explanation: "ECI was established on 25 January 1950, now celebrated as National Voters Day.",
  },
  {
    question: "What is VVPAT?",
    options: [
      "Verified Voter Paper Trail",
      "Voter Verified Paper Audit Trail",
      "Vote Verification Paper System",
      "Voter Validation Process"
    ],
    correctAnswer: 1,
    explanation: "VVPAT prints a paper slip showing your vote, allowing verification before it's sealed.",
  },
  {
    question: "How much time before polling must campaigning stop?",
    options: ["24 hours", "36 hours", "48 hours", "72 hours"],
    correctAnswer: 2,
    explanation: "The 'silence period' of 48 hours gives voters time to decide without last-minute influence.",
  },
]

export function QuizChallenge() {
  const [gameState, setGameState] = useState<"idle" | "playing" | "finished">("idle")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const startQuiz = () => {
    setGameState("playing")
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return
    
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setGameState("finished")
    }
  }

  const currentQ = quizQuestions[currentQuestion]
  const percentage = (score / quizQuestions.length) * 100

  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary font-medium mb-2">
            <Zap className="w-4 h-4" />
            QUICK QUIZ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Test Your Knowledge
          </h2>
          <p className="text-muted-foreground">
            5 quick questions to see how much you know about Indian elections!
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {gameState === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <Card className="bg-card border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Challenge Yourself?</h3>
                  <p className="text-muted-foreground mb-6">
                    Answer 5 questions and see if you&apos;re election-ready!
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Timer className="w-4 h-4" />
                      No time limit
                    </span>
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      5 Questions
                    </span>
                  </div>
                  <Button onClick={startQuiz} size="lg" className="bg-primary hover:bg-primary/90">
                    Start Quiz
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {gameState === "playing" && (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <span className="text-sm font-medium text-primary">
                      Score: {score}
                    </span>
                  </div>
                  <Progress 
                    value={((currentQuestion + 1) / quizQuestions.length) * 100} 
                    className="mb-6 h-2" 
                  />

                  <h3 className="text-xl font-bold text-foreground mb-6">{currentQ.question}</h3>

                  <div className="space-y-3">
                    {currentQ.options.map((option, i) => {
                      const isSelected = selectedAnswer === i
                      const isCorrect = i === currentQ.correctAnswer
                      const showState = selectedAnswer !== null

                      return (
                        <button
                          key={i}
                          onClick={() => handleAnswer(i)}
                          disabled={selectedAnswer !== null}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                            showState
                              ? isCorrect
                                ? "border-accent bg-accent/10"
                                : isSelected
                                ? "border-destructive bg-destructive/10"
                                : "border-border opacity-50"
                              : "border-border hover:border-primary hover:bg-primary/5"
                          }`}
                        >
                          <span className="flex items-center gap-4">
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                              showState
                                ? isCorrect
                                  ? "bg-accent text-accent-foreground"
                                  : isSelected
                                  ? "bg-destructive text-destructive-foreground"
                                  : "bg-muted text-muted-foreground"
                                : "bg-muted"
                            }`}>
                              {showState ? (
                                isCorrect ? <CheckCircle2 className="w-4 h-4" /> : 
                                isSelected ? <XCircle className="w-4 h-4" /> :
                                String.fromCharCode(65 + i)
                              ) : String.fromCharCode(65 + i)}
                            </span>
                            <span className="text-foreground">{option}</span>
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-muted rounded-lg"
                    >
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Explanation:</span>{" "}
                        {currentQ.explanation}
                      </p>
                    </motion.div>
                  )}

                  {selectedAnswer !== null && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-6 flex justify-end"
                    >
                      <Button onClick={nextQuestion} className="bg-primary hover:bg-primary/90">
                        {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {gameState === "finished" && (
            <motion.div
              key="finished"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <Card className="bg-card">
                <CardContent className="p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      percentage >= 80 ? "bg-accent" : 
                      percentage >= 60 ? "bg-chart-4" : 
                      percentage >= 40 ? "bg-primary" : 
                      "bg-destructive"
                    }`}
                  >
                    <Trophy className="w-12 h-12 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {percentage >= 80 ? "Excellent!" : 
                     percentage >= 60 ? "Great Job!" : 
                     percentage >= 40 ? "Good Try!" : 
                     "Keep Learning!"}
                  </h3>
                  
                  <p className="text-4xl font-bold text-primary mb-2">
                    {score} / {quizQuestions.length}
                  </p>
                  
                  <p className="text-muted-foreground mb-6">
                    {percentage >= 80 ? "You're an election expert! Ready to vote!" : 
                     percentage >= 60 ? "You know your stuff! Keep learning to become an expert." : 
                     percentage >= 40 ? "You're getting there! Read more about elections." : 
                     "Don't worry! Explore our topics to learn more."}
                  </p>

                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" onClick={startQuiz}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Try Again
                    </Button>
                    <Button onClick={() => setGameState("idle")} className="bg-primary hover:bg-primary/90">
                      Back to Start
                    </Button>
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
