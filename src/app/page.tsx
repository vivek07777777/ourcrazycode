"use client";

import axios from "axios";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CodeXml,
  ChevronRight,
  Bot,
  Lightbulb,
  CheckCircle2,
  Rocket,
  Trophy,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Clock,
  Target,
  Divide,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function LandingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen overflow-x-hidden bg-[#F9F9FB] selection:bg-[#6366f1]/20 selection:text-[#6366f1]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ y: backgroundY }}
        className="fixed inset-0 pointer-events-none z-0"
      />

      <Navbar />
      <Hero />
      <TrustedBy />
      <WhyChooseUs />
      <CoursesSection />
      <StartupLaunchpad />
      <ImpactScore />
      <UnifiedJourneySection />
      <CTASection />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="bg-[#1F1B32]/95 backdrop-blur-md rounded-full py-3 px-6 flex items-center justify-between border border-white/10 shadow-2xl"
      >
        <Link href="/">
          <div className="flex items-center gap-2 text-white font-medium">
            <div className="bg-[#6366f1] p-1.5 rounded-lg">
              <CodeXml className="w-5 h-5" />
            </div>
            <span className="font-heading text-lg">Our Crazy Code</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-white/70 text-sm font-medium">
          {["Features", "Courses", "About", "Impact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors relative group"
            >
              {item}
              <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6366f1] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href={"/sign-in"}>
            <button className="text-white/70 text-sm font-medium hover:text-white transition-colors">
              Sign In
            </button>
          </Link>
          <Link href={"#startuplaunchpad"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6366f1] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#4f46e5] transition-all shadow-lg hover:shadow-indigo-500/25"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-48 pb-24 px-4 flex flex-col items-center text-center z-10 grid-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Pink background glow */}
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="w-[80%] h-[60%] bg-gradient-to-b from-pink-300 via-transparent to-purple-300 blur-[140px] rounded-full" />
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-[#1F1B32] mb-8 leading-[1.05] font-heading text-center">
            Become{" "}
            <span className="relative inline-block whitespace-nowrap">
              {/* Top 1% badge */}
              <span className="relative z-10 px-3 rounded-xl border border-2 border-purple-200 bg-purple-100 text-[#6366f1] shadow-sm">
                Top 1%
              </span>

              {/* underline highlight */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
                className="absolute bottom-1 left-0 h-4 bg-pink-300/30 rounded-md -z-0"
              />

              {/* sparkle */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-6 -right-10 text-purple-400"
              >
                <SparkleIcon />
              </motion.div>
            </span>
            <br />
            in the AI Era
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mx-auto text-xl text-[#313149]/70 mb-12 font-medium leading-relaxed text-center"
          >
            Built by a 15-year-old prodigy. Trusted by 5,000+ students. Master
            coding, AI, and innovation with our project-based curriculum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#6366f1] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#4f46e5] transition-all shadow-xl hover:shadow-indigo-500/40"
            >
              Explore Programs
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.02)" }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 bg-white border border-[#1F1B32]/10 px-10 py-4 rounded-full text-lg font-semibold text-[#1F1B32] transition-all shadow-sm"
            >
              Learn More
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TrustedBy() {
  const logos = [
    "Global Schools Network",
    "Youth Innovation Labs",
    "STEM Education Hub",
    "Tech For Good NGO",
    "Future Coders Academy",
    "Digital Ethics Institute",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 z-10 relative bg-white/50 backdrop-blur-sm border-y border-[#1F1B32]/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute -top-6 -right-10 text-purple-400"
        >
          <SparkleIcon />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-semibold text-black py-2 px-4 tracking-[0.2em] border-2 border-gray-300 bg-gray-100 rounded-full"
        >
          Trusted by students, parents, schools & global communities
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex overflow-hidden"
      >
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap px-8 items-center"
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="text-2xl font-bold text-[#1F1B32]/20 font-heading"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function WhyChooseUs() {
  return (
    <motion.section
      id="features"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-32 px-4 z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto text-center mb-20"
      >
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1F1B32] mb-6 font-heading relative">
            See Why Students Choose <br /> Our Crazy Code
          </h2>
        </div>

        <p className="text-xl text-[#313149]/60 max-w-2xl mx-auto">
          Traditional education is stuck in the past. We're building the future
          of learning.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 mb-10 bg-white text-purple-700 px-8 py-3 rounded-full font-semibold shadow-[0_10px_25px_-5px_rgba(209,213,219,0.9)]"
        >
          Get Started
        </motion.button>

        <h1 className="text-black mt-6 text-3xl md:text-5xl font-semibold">
          Organize and empower{" "}
          <p className="text-purple-600 font-semibold">young innovators</p>
        </h1>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Coding for Young Minds",
            description:
              "From Scratch to Python, we make coding fun, practical, and age-appropriate.",
            content: <CodeSnippet />,
          },
          {
            title: "AI & Future Skills",
            description:
              "Students learn how AI works, how to use it responsibly, and how to build with it.",
            content: (
              <div className="flex items-center justify-center h-full">
                <Bot className="w-20 h-20 text-[#6366f1]" />
              </div>
            ),
          },
          {
            title: "Project-Based Learning",
            description:
              "Every student builds real apps, websites, and solutions — not just certificates.",
            content: <FloatingIcons />,
          },
          {
            title: "Purpose-Driven Innovation",
            description:
              "Technology used for mental wellness, sustainability, education, and social good.",
            content: (
              <div>
                <div className="text-center mb-4">
                  <span className="text-sm text-primary font-medium">
                    Developed by young innovators
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                  Built by students who've tackled real learning challenges.
                  <br />
                  <span className="text-muted-foreground">
                    Every feature solves real problems.
                  </span>
                </h2>
              </div>
            ),
          },
          {
            title: "Cyber Safety & Ethics",
            description:
              "Learn to navigate the digital world safely and responsibly.",
            content: <ProtectedList />,
          },
          {
            title: "Creative Problem Solving",
            description:
              "Develop critical thinking skills through hands-on challenges and innovation.",
            content: (
              <div className="flex items-center justify-center h-full">
                <Lightbulb className="w-20 h-20 text-yellow-400" />
              </div>
            ),
          },
        ].map((card, index) => (
          <AnimatedCard
            key={index}
            index={index}
            title={card.title}
            description={card.description}
            content={card.content}
          />
        ))}
      </div>
    </motion.section>
  );
}

function AnimatedCard({ title, description, content, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9, rotateY: 10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.15)",
      }}
      className="bg-white p-8 rounded-[2.5rem] border border-[#1F1B32]/5 shadow-sm overflow-hidden flex flex-col h-full origin-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2 }}
        className="h-48 mb-8 bg-gray-50 rounded-2xl border border-dashed border-[#1F1B32]/10 overflow-hidden"
      >
        {content}
      </motion.div>
      <h3 className="text-2xl font-bold text-[#1F1B32] mb-4 font-heading">
        {title}
      </h3>
      <p className="text-[#313149]/60 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function CodeSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="p-6 font-mono text-sm"
    >
      <div className="text-[#6366f1]">def hello_world():</div>
      <div className="pl-4 text-[#313149]">print("Hello, Future!")</div>
      <div className="text-[#6366f1]">hello_world()</div>
    </motion.div>
  );
}

function FloatingIcons() {
  return (
    <div className="flex flex-wrap gap-4 p-8 justify-center">
      {["🎮", "🌐", "📱", "🤖", "🎨", "💡"].map((emoji, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="bg-white p-3 rounded-xl shadow-lg text-2xl"
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
}

function ImpactScore() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="text-sm text-primary font-medium">
            Developed by young innovators
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          Built by students who've tackled real learning challenges.
          <br />
          <span className="text-muted-foreground">
            Every feature solves real problems.
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <button>See Why</button>
        </motion.div>

        {/* Impact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {impactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 text-xl"
              >
                {card.icon === Target && "🎯"}
                {card.icon === Rocket && "🚀"}
                {card.icon === Trophy && "🏆"}
              </motion.div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Real Time Collaboration */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-card"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Real Time Collaboration
            </h3>
            <p className="text-muted-foreground mb-6">
              Work together in real time with your peers through team projects,
              mentorship, and seamless communication tools that keep everyone
              aligned.
            </p>
            <div className="bg-[#1F1B32] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-[#6366f1] rounded-lg flex items-center justify-center text-xs font-bold text-white">
                  OCC
                </div>
                <span className="text-sm font-medium text-white">
                  Project Hub
                  <span className="animate-pulse text-gray-200/80 ml-2">
                    ● Student editing...
                  </span>{" "}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-2">
                <p className="text-xs bg-gray-700/80 text-white px-3 py-3 rounded-lg mt-4"></p>
                <p className="text-xs bg-gray-700/80 text-white px-3 py-3 rounded-lg mt-4"></p>
              </div>
              <div className="flex -space-x-2">
                {["S", "M", "A", "J"].map((letter, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-8 h-8 rounded-full bg-[#2B2750] border-2 border-[#1F1B32] flex items-center justify-center text-xs font-medium text-[#A5B4FC]"
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-card"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Use what's working and optimize it
            </h3>
            <p className="text-muted-foreground mb-6">
              Build on proven curriculum and templates that match successful
              learning outcomes, or leverage our pre-built learning paths.
            </p>
            <div className="bg-[#1F1B32] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#6366f1] rounded-lg flex items-center justify-center text-xs font-bold text-white">
                  OCC
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  "Scratch Basics",
                  "Web Dev 101",
                  "Python Start",
                  "AI Intro",
                  "App Dev",
                  "Hackathon",
                ].map((course, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-xs bg-gray-700/80 text-white px-3 py-1.5 rounded-lg"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
              <p className="text-xs bg-gray-700/80 text-white px-3 py-1.5 rounded-lg mt-4">
                Active
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
const impactCards = [
  {
    icon: Target,
    title: "Engage more students",
    description:
      "Interactive lessons that keep young minds focused and excited about learning.",
  },
  {
    icon: Rocket,
    title: "Follow up with real projects",
    description:
      "Every concept leads to a hands-on project students can be proud of.",
  },
  {
    icon: Trophy,
    title: "Build future-ready skills",
    description: "Prepare students for careers that don't even exist yet.",
  },
];
function ProtectedList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="p-6 space-y-3"
    >
      {["Password Security", "Online Privacy", "Digital Citizenship"].map(
        (item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="flex items-center gap-3 bg-white p-3 rounded-xl border border-green-100 shadow-sm"
          >
            <div className="text-green-500 font-bold">✓</div>
            <span className="text-sm font-bold text-[#1F1B32]">{item}</span>
          </motion.div>
        )
      )}
    </motion.div>
  );
}

function CoursesSection() {
  const courses = [
    {
      title: "Scratch Programming",
      emoji: "🎮",
      age: "8-12",
      level: "Beginner",
      desc: "Build interactive games and animations with visual coding blocks.",
    },
    {
      title: "Web Development",
      emoji: "🌐",
      age: "12-16",
      level: "Intermediate",
      desc: "Create stunning websites with HTML, CSS, and JavaScript.",
    },
    {
      title: "Python Programming",
      emoji: "🐍",
      age: "12-18",
      level: "Intermediate",
      desc: "Master the most versatile programming language in the world.",
    },
    {
      title: "Artificial Intelligence & ML",
      emoji: "🤖",
      age: "14-18",
      level: "Advanced",
      desc: "Understand and build AI-powered applications ethically.",
    },
    {
      title: "App Development",
      emoji: "📱",
      age: "14-18",
      level: "Intermediate",
      desc: "Design and develop mobile apps that solve real problems.",
    },
    {
      title: "Cyber Safety & Digital Ethics",
      emoji: "🔐",
      age: "8-18",
      level: "All Levels",
      desc: "Learn to navigate the digital world safely and responsibly.",
    },
  ];

  return (
    <motion.section
      id="courses"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-32 px-4 z-10 relative bg-[#F9F9FB]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-[#1F1B32] mb-6 font-heading">
          Courses at Our Crazy Code
        </h2>
        <p className="text-xl text-[#313149]/60">
          Our structured learning programs are launching soon — designed to be
          practical, fun, and future-ready.
        </p>
      </motion.div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            whileHover={{ y: -15, scale: 1.03 }}
            className="group p-10 rounded-[1rem] bg-white border border-2 border-[#1F1B32]/10 relative overflow-hidden"
          >
            <motion.div
              initial={{ rotate: -90, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
              className="flex gap-2 absolute top-6 right-6 text-pink-400 px-4 py-1 rounded-full text-xs font-bold border border-1 border-pink-300 bg-pink-200"
            >
              <Clock className="w-4 h-4" />
              Coming Soon
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
              className="text-4xl mb-6 inline rounded-xl  bg-purple-200"
            >
              {course.emoji}
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 font-heading">
              {course.title}
            </h3>
            <p className="text-[#313149]/60 mb-8 leading-relaxed">
              {course.desc}
            </p>
            <hr />
            <div className="flex gap-4 mt-2">
              <span className="bg-white px-4 py-1 rounded-full text-xs font-bold border border-[#1F1B32]/10">
                {course.level}
              </span>
              <span className="bg-white px-4 py-1 rounded-full text-xs font-bold border border-[#1F1B32]/10">
                Ages {course.age}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

import { useForm } from "react-hook-form";

export type StartupFormData = {
  id: string;
  founderName: string;
  age: number;
  email: string;
  phone?: string;
  startupName: string;
  stage: string;
  description: string;
};

function StartupLaunchpad() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<StartupFormData>();
  const [isRegistered, setIsRegistered] = useState(false);

  const onSubmit = async (data: StartupFormData) => {
    try {
      const res = await axios.post("/api/startupLaunchpad", data);
      if (res.data.success) {
        setIsRegistered(true);
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.section
      id="startuplaunchpad"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-32 px-4  bg-[#F9F9FB] text-white z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:w-1/2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-purple-200 text-purple-500 w-fit px-4 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-widest"
          >
            For Young Entrepreneurs
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-heading text-black">
            Startup Launchpad
          </h2>
          <p className="text-xl text-gray-500 mb-12 leading-relaxed">
            Got a brilliant idea? We help young innovators turn their dreams
            into reality. Register your startup and let us guide you on your
            entrepreneurial journey.
          </p>
          <div className="space-y-12 mb-12">
            <div>
              <h3 className="text-3xl text-black font-bold mb-6 font-heading">
                Why Join Our Launchpad?
              </h3>
              <p className="text-gray-500 mb-8">
                Our Crazy Code isn't just about learning to code — it's about
                building the future. We provide everything young founders need
                to launch and grow their startups.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                {
                  title: "Idea Validation",
                  desc: "Get expert feedback on your startup idea and refine your concept",
                },
                {
                  title: "Mentorship",
                  desc: "Connect with experienced entrepreneurs and industry professionals",
                },
                {
                  title: "Growth Support",
                  desc: "Access resources, tools, and guidance to scale your startup",
                },
                {
                  title: "Launch Assistance",
                  desc: "We help you take your idea from concept to reality",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <LaunchpadFeature title={feature.title} desc={feature.desc} />
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-purple-100 p-8 rounded-[2rem] border border-purple-300"
          >
            <h4 className="font-bold text-black text-xl mb-4">
              What You'll Get:
            </h4>
            <ul className="space-y-3 text-gray-500">
              {[
                "One-on-one mentorship sessions",
                "Access to our startup toolkit and resources",
                "Networking with fellow young entrepreneurs",
                "Pitch practice and investor connections",
                "Technical support for building your MVP",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring" }}
          className="lg:w-1/2 bg-white rounded-[3rem] p-12 text-[#1F1B32] shadow-2xl self-start border border-gray-300"
        >
          <h3 className="text-3xl font-bold mb-8 font-heading">
            Register Your Startup
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Founder Name + Age */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Input
                  label="Founder Name *"
                  placeholder="Your Full Name"
                  {...register("founderName", { required: "Name is required" })}
                />
                {errors.founderName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.founderName.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  label="Age *"
                  placeholder="Age"
                  type="number"
                  {...register("age", {
                    required: "Age is required",
                    min: { value: 10, message: "Minimum age is 10" },
                  })}
                />
                {errors.age && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.age.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Input
                  label="Email *"
                  type="email"
                  placeholder="you@gmail.com"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <Input
                label="Phone Number"
                type="tel"
                placeholder="+91 xxxxx xxxxx"
                {...register("phone")}
              />
            </div>

            {/* Startup Name */}
            <div>
              <Input
                label="Startup Name *"
                placeholder="Your Company Name"
                {...register("startupName", {
                  required: "Startup name is required",
                })}
              />
              {errors.startupName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.startupName.message}
                </p>
              )}
            </div>

            {/* Stage */}
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-[#1F1B32]/80">
                Current Stage *
              </label>
              <select
                {...register("stage", { required: "Stage is required" })}
                className="w-full bg-[#F9F9FB] rounded-2xl p-4 border border-[#1F1B32]/5 outline-none focus:border-[#6366f1]"
              >
                <option value="">Select your startup stage</option>
                <option>Just an Idea</option>
                <option>Planning & Research</option>
                <option>Building Prototype</option>
                <option>Have an MVP</option>
                <option>Already Launched</option>
              </select>
              {errors.stage && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.stage.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-[#1F1B32]/80">
                Describe Your Startup *
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                  minLength: { value: 20, message: "Minimum 20 characters" },
                })}
                className="w-full bg-[#F9F9FB] rounded-2xl p-4 border border-[#1F1B32]/5 h-32 outline-none focus:border-[#6366f1]"
                placeholder="Tell us about your startup idea..."
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#6366f1] text-white py-3 rounded-lg font-bold text-md shadow-xl shadow-indigo-500/30 hover:bg-[#4f46e5] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <Rocket className="w-5 h-5" />
              {isSubmitting ? "Submitting..." : "Register My Startup"}
            </motion.button>

            <p className="text-center text-xs text-[#313149]/80 font-medium px-8 leading-relaxed">
              By registering, you agree to our terms and conditions. We'll
              review your application and contact you within 48 hours.
            </p>
          </form>
          {isRegistered && (
            <div className="w-full bg-green-50 border border-green-200 text-green-600 text-sm font-medium px-4 py-2 rounded-lg">
              Your StartUp is Registered
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function LaunchpadFeature({ title, desc }: any) {
  return (
    <div className="space-y-2 p-4 rounded-xl border border-2 border-gray-400">
      <h4 className="font-bold text-black text-xl font-heading">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", className = "", ...props }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-[#1F1B32]/90">
          {label}
        </label>

        <input
          ref={ref}
          type={type}
          {...props}
          className={`w-full bg-[#F9F9FB] placeholder-gray-400 rounded-xl p-3
          border border-[#1F1B32]/5 outline-none
          focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20
          transition-all font-medium text-[#1F1B32]
          ${className}`}
        />
      </motion.div>
    );
  }
);

Input.displayName = "Input";



function UnifiedJourneySection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-32 px-4 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto space-y-24"
      >
        {/* 1️⃣ Centered Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1
            className="text-5xl md:text-7xl font-bold font-heading text-[#1F1B32] mb-6"
            id="impact"
          >
            From confused beginner <br />
            to <span className="text-[#6366f1]">confident coder</span>
          </h1>
          <p className="text-xl text-[#313149]/60">
            No student will ever feel lost in their coding journey again.
          </p>
        </motion.div>

        {/* 2️⃣ White Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-white border border-[#1F1B32]/10 rounded-[2.5rem] p-12 shadow-sm"
        >
          {/* 3️⃣ Split Layout */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT → Stats */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#1F1B32] mb-6 text-center">
                One platform for your whole journey
              </h2>
              <p className="text-lg text-[#313149]/60 leading-relaxed text-center max-w-4xl mx-auto mb-14">
                Stop juggling multiple resources and second-guessing your
                progress. Students, parents, teachers, and mentors will all find
                their home at Our Crazy Code.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "5,000+", label: "Students Worldwide" },
                  { number: "30+", label: "Countries Reached" },
                  { number: "15+", label: "Awards Won" },
                  { number: "100%", label: "Youth-Led" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Stat number={stat.number} label={stat.label} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT → Student Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="bg-[#1F1B32] rounded-[3rem] p-10 text-white shadow-[0_30px_80px_-20px_rgba(99,102,241,0.35)]"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="font-heading text-2xl font-bold">
                  Student Dashboard
                </div>
                <div className="text-sm text-white/60 font-bold">
                  Welcome back, Innovator!
                </div>
              </div>

              {/* Sub cards */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gray-800 p-6 rounded-2xl"
                >
                  <div className="text-xs uppercase tracking-widest text-white/50 mb-2">
                    Current Course
                  </div>
                  <div className="font-bold text-lg">🎯 Python Basics</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-800 p-6 rounded-2xl"
                >
                  <div className="text-xs uppercase tracking-widest text-white/50 mb-2">
                    Projects Done
                  </div>
                  <div className="font-bold text-lg text-[#A5B4FC]">
                    ⚡ 12 Projects
                  </div>
                </motion.div>
              </div>

              {/* Graph */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gray-800 rounded-2xl p-8 mb-10"
              >
                <div className="flex items-end justify-between h-36 mb-4">
                  {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 + 0.6 }}
                      className="w-8 bg-[#6366f1] rounded-t-xl"
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] font-bold text-white/40">
                  <span>MON</span>
                  <span>SUN</span>
                </div>
              </motion.div>

              {/* Avatars */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex -space-x-4"
              >
                {["A", "B", "C", "D", "E", "F"].map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + 0.7 }}
                    className="w-12 h-12 rounded-full bg-gray-800 border-4 border-[#1F1B32] flex items-center justify-center font-bold"
                  >
                    {c}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="w-12 h-12 rounded-full bg-[#6366f1] border-4 border-[#1F1B32] flex items-center justify-center font-bold"
                >
                  +1k
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

/* Stat Component */
function Stat({ number, label }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 rounded-[1.5rem] bg-gray-100 border border-[#1F1B32]/5 text-center"
    >
      <div className="text-3xl font-bold text-[#6366f1] mb-1 font-heading">
        {number}
      </div>
      <div className="text-[#1F1B32]/70 font-bold text-[10px] uppercase tracking-[0.2em]">
        {label}
      </div>
    </motion.div>
  );
}

function CTASection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-32 px-4 z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-[#1F1B32] rounded-[4rem] p-20 md:p-32 text-center text-white relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#6366f1]/30 to-transparent pointer-events-none" />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-bold mb-12 font-heading relative z-10 leading-tight"
        >
          Start Building the <br /> Future — Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 text-xl max-w-2xl mx-auto mb-16 relative z-10 font-medium leading-relaxed"
        >
          Whether you're a student, parent, school, or institution — Our Crazy
          Code is where young innovation begins.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center gap-12 mb-20 relative z-10"
        >
          {["Free to explore", "Youth-led community", "Global impact"].map(
            (text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <CTACheck text={text} />
              </motion.div>
            )
          )}
        </motion.div>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#6366f1] text-white px-16 py-6 rounded-full font-bold text-2xl shadow-[0_20px_50px_rgba(99,102,241,0.4)] relative z-10 transition-all hover:bg-[#4f46e5]"
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

function CTACheck({ text }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-[#6366f1] p-1 rounded-full">
        <CheckCircle2 className="w-5 h-5 text-white" />
      </div>
      <span className="text-xl font-bold text-white/90">{text}</span>
    </div>
  );
}

function Footer() {
  const footerLinks = [
    {
      title: "Products",
      links: ["Features", "Courses", "Pricing"],
    },
    {
      title: "Company",
      links: ["About", "Impact", "Contact"],
    },
    {
      title: "Resources",
      links: ["Blog", "Community", "Support"],
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="pt-32 pb-16 px-6 border-t border-[#1F1B32]/5 bg-[#1F1B32] z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="flex items-center gap-3 font-medium mb-8">
            <div className="bg-[#1F1B32] p-2 rounded-xl text-white">
              <CodeXml className="w-6 h-6" />
            </div>
            <span className="font-heading text-2xl font-bold text-white">
              Our Crazy Code
            </span>
          </div>
          <p className="text-gray-100/60 text-lg max-w-sm mb-10 font-medium leading-relaxed">
            The future of learning coding, AI, and digital innovation for the
            next generation of founders.
          </p>
          <div className="flex gap-4">
            {[Twitter, Instagram, Github, Linkedin].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href="#"
                  className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1] transition-all"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {footerLinks.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h4 className="font-bold text-white mb-8 font-heading text-lg tracking-widest">
              {group.title}
            </h4>
            <ul className="space-y-4">
              {group.links.map((link, linkIndex) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + linkIndex * 0.05 }}
                >
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-100/50 hover:text-[#6366f1] font-bold transition-colors"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-7xl mx-auto pt-10 border-t border-[#1F1B32]/5 flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div className="text-gray-100/60 text-sm font-bold  tracking-widest">
          © 2025 Our Crazy Code. Developed by young innovators.
        </div>
        <div className="flex gap-10 text-gray-100/80 font-bold text-sm  tracking-widest">
          <Link href="#" className="hover:text-[#6366f1] transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-[#6366f1] transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-[#6366f1] transition-colors">
            Cookies
          </Link>
        </div>
      </motion.div>
    </motion.footer>
  );
}

const SparkleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
    <motion.path
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      d="M12,0 L14.5,9.5 L24,12 L14.5,14.5 L12,24 L9.5,14.5 L0,12 L9.5,9.5 L12,0 Z"
    />
  </svg>
);
