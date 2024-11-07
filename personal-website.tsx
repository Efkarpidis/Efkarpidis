"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const QuoteBackground = () => {
  const quotes = [
    "Success is not final; failure is not fatal.",
    "Innovation distinguishes between a leader and a follower.",
    "The only way to do great work is to love what you do.",
    "Stay hungry, stay foolish.",
    "Think different.",
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {quotes.map((quote, index) => (
        <div
          key={index}
          className="absolute text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 dark:text-gray-800 opacity-5 select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          {quote}
        </div>
      ))}
    </div>
  )
}

export default function PersonalWebsite() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("audiobooks")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const menuItems = [
    "Audiobooks",
    "Documentaries",
    "Movies",
    "Articles",
    "Videos",
    "Courses",
    "Programs",
    "Platforms",
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden">
      <QuoteBackground />
      <div className="relative z-10 flex">
        {/* Sidebar for larger screens */}
        <aside className="hidden md:flex flex-col w-64 h-screen bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm fixed left-0 top-0 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Resources</h2>
            <nav>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  variant={activeSection === item.toLowerCase() ? "secondary" : "ghost"}
                  className="w-full justify-start mb-2"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </Button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="fixed top-4 left-4 md:hidden z-50">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <div className="py-4">
              <h2 className="text-xl font-bold mb-4">Resources</h2>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Button
                    key={item}
                    variant={activeSection === item.toLowerCase() ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveSection(item.toLowerCase())}
                  >
                    {item}
                  </Button>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Main content */}
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <header className="mb-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-gray-700 shadow-md">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0798-veGeabXlzzGHuD01vJwkx5fdvBUqSx.jpeg"
                    alt="Portrait of Chris Efkarpidis"
                    fill
                    className="object-cover scale-110 object-[50%_25%] hover:scale-125 transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-center md:text-left">Chris Efkarpidis</h1>
                  <p className="text-lg md:text-xl mb-2 text-center md:text-left text-gray-700 dark:text-gray-300">Entrepreneur</p>
                  <p className="text-base md:text-lg mb-4 text-center md:text-left text-gray-600 dark:text-gray-400">
                    Founder of <a href="https://www.boostedearnings.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Boosted Earnings</a>
                  </p>
                  <p className="text-sm md:text-base text-center md:text-left text-gray-600 dark:text-gray-400">
                    Welcome to my personal website. Here, I share valuable resources that you can utilize to fill the knowledge gap for you, this is for aspiring or established entrepreneurs. My goal is to provide as many high-value resources as possible to individuals that can utilize to eliminate making erroneous decisions and progress further into the nature of success. These resources, insights, and tools should inspire and guide you on your own path to an entrepreneurial victory. Remember, there aren't any secrets to success, it's just stuff you haven't learn yet. Ultimately, fear is the gravitational force holding you down, so learn to see far beyond it, do what it takes, that is whats required in order to achieve the unthinkable.
                  </p>
                </div>
              </div>
            </motion.div>
          </header>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Resources for Growth and Success</h2>
            
            <Card className="mb-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
              <CardContent className="pt-6">
                <blockquote className="italic text-lg md:text-xl text-center text-gray-700 dark:text-gray-300">
                  "There is no friend as loyal as a book."
                  <footer className="text-sm md:text-base font-medium mt-2 text-gray-600 dark:text-gray-400">- Ernest Hemingway</footer>
                </blockquote>
              </CardContent>
            </Card>

            <ResourceSection
              title={activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              description={`Explore our curated list of ${activeSection}.`}
              resources={getResourcesForSection(activeSection)}
            />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">My Perspective on Entrepreneurship</h2>
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-gray-800 dark:text-gray-200">Key Factors for Success</CardTitle>
                <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  These are the crucial elements that I believe shape an entrepreneur's journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Stress tolerance",
                    "Impulsivity Control",
                    "Discouragement is a joke, when you're all in",
                    "Harnessing discipline",
                    "Your close family and friends"
                  ].map((factor, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <span className="mr-2 text-gray-400 dark:text-gray-500">•</span>
                      <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">{factor}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400">
                  Each of these factors plays a crucial role in the entrepreneurial journey. I'll be diving deeper into these topics in future content.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Inspiring Quotes</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  quote: "The only way to do great work is to love what you do.",
                  author: "Steve Jobs"
                },
                {
                  quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                  author: "Winston Churchill"
                },
                {
                  quote: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
                  author: "Mark Zuckerberg"
                },
                {
                  quote: "The secret of getting ahead is getting started.",
                  author: "Mark Twain"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-base md:text-lg italic text-gray-800 dark:text-gray-200">"{item.quote}"</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm md:text-base text-right font-medium text-gray-600 dark:text-gray-400">- {item.author}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <footer className="mt-12 text-center">
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Chris Efkarpidis. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  )
}

function ResourceSection({ title, description, resources }) {
  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl text-gray-800 dark:text-gray-200">{title}</CardTitle>
        <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <motion.li 
              key={index} 
              className="flex flex-col"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">{resource.title}</span>
              <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{resource.author}</span>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function getResourcesForSection(section) {
  const resourceMap = {
    audiobooks: [
      { title: "Running Lean", author: "Ash Maurya" },
      { title: "The Build Trap", author: "Melissa Perry" },
      { title: "The Road Less Stupid", author: "Keith J. Cunningham" },
      { title: "The 4 Disciplines of Execution (4DX)", author: "Chris McChesney, Sean Covey, and Jim Huling" },
      { title: "The Purpose-Driven Life", author: "Rick Warren" },
      { title: "Great One", author: "David Novak" },
      { title: "Only the Paranoid Survive", author: "Andrew S. Grove" },
      { title: "Inner Engineering", author: "Sadhguru" },
      { title: "Breath", author: "James Nestor" },
      { title: "Astrophysics for People in a Hurry", author: "Neil deGrasse Tyson" },
      { title: "The Selfish Gene", author: "Richard Dawkins" },
      { title: "American Icon", author: "Bryce G. Hoffman" },
      { title: "The Six Habits of Growth", author: "Brendan Burchard" },
      { title: "The Practicing Mind", author: "Thomas M. Sterner" },
      { title: "The Four Agreements", author: "Don Miguel Ruiz" },
      { title: "As a Man Thinketh", author: "James Allen" },
      { title: "$100,000,000 Offers", author: "Alex Hormozi" },
      { title: "Pitch Anything", author: "Oren Klaff" },
      { title: "Venture Deals", author: "Brad Feld and Jason Mendelson" },
      { title: "Unscripted", author: "M.J. DeMarco" },
      { title: "The Obstacle is the Way", author: "Ryan Holiday" },
      { title: "Ego is the Enemy", author: "Ryan Holiday" },
      { title: "So Good They Can't Ignore You", author: "Cal Newport" },
      { title: "Deep Work", author: "Cal Newport" },
      { title: "First Things First", author: "Stephen R. Covey" },
      { title: "Tiny Habits", author: "B.J. Fogg" },
      { title: "Buy Back Your Time", author: "Dan Martell" },
      { title: "The Idea in You", author: "Alex Pillow" },
      { title: "What to Say When You Talk to Yourself", author: "Shad Helmstetter" },
      { title: "The Science of Self-Discipline", author: "Peter Hollins" },
      { title: "The Toilet Paper Entrepreneur", author: "Mike Michalowicz" },
      { title: "The Innovator's Dilemma", author: "Clayton M. Christensen" },
      { title: "The Infinite Game", author: "Simon Sinek" },
      { title: "The Ideal Team Player", author: "Patrick Lencioni" },
      { title: "Winning", author: "Jack Welch" },
      { title: "Who", author: "Geoff Smart and Randy Street" },
      { title: "What Are Your Blind Spots?", author: "Jim Haudan and Rich Berens" },
      { title: "The Paradox of Choice", author: "Barry Schwartz" },
      { title: "The Entrepreneur Rollercoaster", author: "Darren Hardy" },
      { title: "The E-Myth", author: "Michael E. Gerber" },
      { title: "The Compound Effect", author: "Darren Hardy" },
      { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey" },
      { title: "The 21 Irrefutable Laws of Leadership", author: "John C. Maxwell" },
      { title: "Measure What Matters", author: "John Doerr" },
      { title: "Influence: The Psychology of Persuasion", author: "Robert B. Cialdini" },
      { title: "Influence Without Authority", author: "David L. Bradford" },
      { title: "Good Boss, Bad Boss", author: "Robert I. Sutton" },
      { title: "First, Break All the Rules", author: "Marcus Buckingham" },
      { title: "Failing Forward", author: "John C. Maxwell" },
      { title: "Delivering Happiness", author: "Tony Hsieh" },
      { title: "Think and Grow Rich", author: "Napoleon Hill" },
      { title: "The Motive", author: "Patrick Lencioni" },
      { title: "The Advantage", author: "Patrick Lencioni" },
      { title: "Give and Take", author: "Adam Grant" },
      { title: "Doing the Impossible", author: "Patrick Bet-David" },
      { title: "The Energy Bus", author: "Jon Gordon" },
      { title: "Measuring Success", author: "Gregg Brizendine" },
      { title: "The Laws of Human Nature", author: "Robert Greene" },
      { title: "Power Score", author: "Geoff Smart" },
      { title: "Trailblazer", author: "Marc Benioff" },
      { title: "Tribes", author: "Seth Godin" },
      { title: "From Incremental to Exponential", author: "Vivek Wadhwa" },
      { title: "The Effective Executive", author: "Peter F. Drucker" },
      { title: "The Unicorn Project", author: "Gene Kim" },
      { title: "Inspired", author: "Marty Cagan" },
      { title: "The Lean Startup", author: "Eric Ries" },
    ],
    documentaries: [
      { title: "Inside Bill's Brain: Decoding Bill Gates", author: "Netflix" },
      { title: "The Social Dilemma", author: "Jeff Orlowski" },
      { title: "Jiro Dreams of Sushi", author: "David Gelb" },
    ],
    movies: [
      { title: "The Social Network", author: "David Fincher" },
      { title: "The Pursuit of Happyness", author: "Gabriele Muccino" },
      { title: "Joy", author: "David O. Russell" },
    ],
    articles: [
      { title: "The Lean Startup Methodology", author: "Eric Ries" },
      { title: "10 Things I Wish I Knew Before I Started My Business", author: "Inc.com" },
      { title: "How to Build a Startup", author: "Y Combinator" },
    ],
    videos: [
      { title: "How great leaders inspire action", author: "Simon Sinek (TED)" },
      { title: "The single biggest reason why startups succeed", author: "Bill Gross (TED)" },
      { title: "The power of vulnerability", author: "Brené Brown (TED)" },
    ],
    courses: [
      { title: "CS50's Introduction to Computer Science", author: "Harvard University (edX)" },
      { title: "Entrepreneurship 101", author: "MIT OpenCourseWare" },
      { title: "Financial Markets", author: "Yale University (Coursera)" },
    ],
    programs: [
      { title: "Y Combinator Startup School", author: "Y Combinator" },
      { title: "Founder Institute", author: "Adeo Ressi & Jonathan Greechan" },
      { title: "Techstars", author: "Various locations worldwide" },
    ],
    platforms: [
      { title: "GitHub", author: "Version control and collaboration" },
      { title: "VS Code", author: "Code editing and development" },
      { title: "Docker", author: "Containerization and deployment" },
      { title: "AWS", author: "Cloud infrastructure and services" },
      { title: "React", author: "Frontend development" },
      { title: "Node.js", author: "Backend development" },
      { title: "PostgreSQL", author: "Database management" },
      { title: "Vercel", author: "Deployment and hosting" },
    ],
  }

  return resourceMap[section] || []
}
