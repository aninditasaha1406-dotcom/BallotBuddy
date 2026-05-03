"use client"

import { motion } from "framer-motion"
import { Vote, ExternalLink, Heart } from "lucide-react"

export function Footer() {
  const resources = [
    { label: "NVSP Portal", url: "https://www.nvsp.in/" },
    { label: "ECI Website", url: "https://www.eci.gov.in/" },
    { label: "Voter Helpline", url: "https://voterportal.eci.gov.in/" },
    { label: "Know Your Candidate", url: "https://affidavit.eci.gov.in/" },
  ]

  const helpfulLinks = [
    { label: "Check Voter Registration", url: "https://electoralsearch.eci.gov.in/" },
    { label: "Download Voter App", url: "https://play.google.com/store/apps/details?id=com.eci.voter" },
    { label: "cVIGIL App", url: "https://play.google.com/store/apps/details?id=com.eci.cvigil" },
    { label: "MyNeta.info", url: "https://myneta.info/" },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-lg p-1.5">
                <Vote className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">
                Vote<span className="text-primary">Shiksha</span>
              </span>
            </div>
            <p className="text-secondary-foreground/80 text-sm">
              Empowering the next generation of Indian voters with knowledge about 
              democracy and the electoral process.
            </p>
          </div>

          {/* Official Resources */}
          <div>
            <h4 className="font-semibold mb-4">Official Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary-foreground/80 hover:text-primary flex items-center gap-1 transition-colors"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="font-semibold mb-4">Helpful Links</h4>
            <ul className="space-y-2">
              {helpfulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary-foreground/80 hover:text-primary flex items-center gap-1 transition-colors"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Numbers */}
          <div>
            <h4 className="font-semibold mb-4">Important Numbers</h4>
            <div className="space-y-3">
              <div className="bg-card/50 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary">1950</div>
                <div className="text-xs text-secondary-foreground/80">Voter Helpline (Toll-free)</div>
              </div>
              <div className="bg-card/50 rounded-lg p-3">
                <div className="text-lg font-bold text-foreground">cVIGIL App</div>
                <div className="text-xs text-secondary-foreground/80">Report Election Violations</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border/30 text-center"
        >
          <p className="text-sm text-secondary-foreground/60 flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for Indian Democracy
          </p>
          <p className="text-xs text-secondary-foreground/40 mt-2">
            This is an educational resource. For official information, please visit eci.gov.in
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
