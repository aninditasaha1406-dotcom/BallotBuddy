"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Vote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  onNavigate: (section: string) => void
}

export function Navigation({ onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Topics", section: "topics" },
    { label: "History", section: "history" },
    { label: "Timeline", section: "timeline" },
    { label: "Quiz", section: "quiz" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => onNavigate("hero")}
              className="flex items-center gap-2 group"
            >
              <div className="bg-primary rounded-lg p-1.5 group-hover:scale-110 transition-transform">
                <Vote className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground text-lg">
                Vote<span className="text-primary">Shiksha</span>
              </span>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => onNavigate(item.section)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => onNavigate("register")}
                className="bg-primary hover:bg-primary/90"
              >
                Register to Vote
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-lg p-1.5">
                    <Vote className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-foreground text-lg">
                    Vote<span className="text-primary">Shiksha</span>
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.section}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      onNavigate(item.section)
                      setIsMobileMenuOpen(false)
                    }}
                    className="block w-full text-left text-2xl font-bold text-foreground py-3 border-b border-border"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button 
                    onClick={() => {
                      onNavigate("register")
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full mt-4 bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    Register to Vote
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
