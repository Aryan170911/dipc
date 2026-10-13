import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Github, ArrowDownRight } from 'lucide-react';
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import gsap from "gsap";
import { ProfileCard } from "@/components/ui/profile-card";

export function HeroVisual({ isExiting = false }: { isExiting?: boolean }) {
  const { personal } = portfolioData;
  const [showProfile, setShowProfile] = useState(false);

  const githubRef = useRef(null);

  useEffect(() => {
    if (!isExiting) return;

    const ctx = gsap.context(() => {
      // Reveal + Loop for GitHub
      gsap.fromTo(githubRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          onComplete: () => {
            gsap.to(githubRef.current, {
              y: -10,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              force3D: true
            });
          }
        }
      );

      // Zap + Bot loops removed with their icons — hero stays static and calm.
    });

    return () => ctx.revert();
  }, [isExiting]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen w-full flex flex-col bg-background text-foreground overflow-hidden selection:bg-primary/20"
    >
      {/* Background Pattern */}
      <div className="w-full absolute h-full z-0 bg-[radial-gradient(circle,_#888_0.5px,_transparent_0.5px)] dark:bg-[radial-gradient(circle,_#444_0.5px,_transparent_0.5px)] opacity-20 [background-size:24px_24px]" />

      <main className="relative flex-1 flex flex-col justify-center pt-40 pb-20 z-10 max-w-[105rem] w-full mx-auto">
        <div className="flex relative gap-4 px-6 md:items-center w-full flex-col justify-center">

          {/* Line 1: AI & DATA */}
          <div className="md:flex gap-8 items-center relative">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[10px] md:text-xs text-muted-foreground text-start md:text-right leading-relaxed max-w-[200px] md:max-w-[220px] font-medium uppercase tracking-[0.2em]"
            >
              Hi, we are {personal.name}. We build websites, chatbots and automation.
            </motion.p>
            <div className="relative">
              <div ref={githubRef} className="absolute -top-4 right-0 md:right-2 text-primary/60 hover:text-primary z-20 opacity-0">
                <a
                  href={personal.socialLinks.find(s => s.platform === 'GitHub')?.url}
                  target="_blank"
                  className="block"
                >
                  <Github size={32} />
                </a>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,11vw,13rem)] font-black leading-[0.85] tracking-tighter text-foreground px-4"
              >
                AI & DATA
              </motion.h1>
            </div>
          </div>

          {/* Line 2: SOFT [ICON] WARE */}
          <div className="md:flex gap-8 items-center relative">
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,11vw,13rem)] md:flex items-center font-black leading-[0.85] tracking-tighter text-foreground px-4"
              >
                <span className="">SOFT</span>
                <span className="">WARE</span>
              </motion.h1>
            </div>
          </div>

          {/* Line 3: STU [ICON] DIO */}
          <div className="md:flex gap-8 items-center relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,11vw,13rem)] md:flex items-center font-black leading-[0.85] tracking-tighter text-foreground px-4"
            >
              <span className="">STU</span>
              <span className="">U</span>
              <span className="">DIO</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[10px] md:text-xs text-muted-foreground pt-4 md:pt-8 leading-relaxed max-w-[250px] md:max-w-[200px] font-medium uppercase tracking-widest"
            >
              Open for projects across India, in English and Hindi.
            </motion.p>
          </div>
        </div>

        {/* Separator Section */}
        <div className="mx-auto max-w-[105rem] w-full px-8 md:px-20 mt-12 md:mt-24">
          <div className="flex items-center gap-6">
            <Separator className="flex-1 h-[1px] bg-foreground/10 hidden md:block" />
            <div className="text-[10px] md:text-xs whitespace-nowrap font-bold tracking-[0.3em] text-muted-foreground uppercase">
              INDIA — 2026
            </div>
            <Link
              href="/projects"
              className="group flex items-center"
            >
              <motion.div
                  className="relative flex items-center bg-zinc-100 dark:bg-white h-12 w-12 max-sm:w-auto group-hover:w-44 rounded-full transition-all duration-500 ease-[0.23,1,0.32,1] overflow-hidden shadow-xl"
              >
                  <span className="whitespace-nowrap opacity-0 max-sm:opacity-100 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-150 text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-black pl-6 pr-12">
                  See Our Work
                </span>
                <div className="absolute right-0 flex items-center justify-center size-12 text-zinc-900 dark:text-black group-hover:rotate-45 transition-transform duration-500">
                  <ArrowDownRight className="w-5 h-5" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </main>

      {/* Award/Badge Vertical - MOVED TO LEFT */}
      <div
        className="absolute left-0 top-1/2 z-50 hidden md:flex items-center transform -translate-y-1/2 group/container"
        onMouseEnter={() => setShowProfile(true)}
        onMouseLeave={() => setShowProfile(false)}
      >
        {/* The Badge Trigger */}
        <div className="relative z-50">
          <motion.div
            whileHover={{ x: 10 }}
            className="bg-white text-black py-10 px-4 text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl rounded-r-3xl border-r border-y border-zinc-200 cursor-pointer"
          >
            <span className="rotate-0 [writing-mode:vertical-rl]">
              OPEN FOR PROJECTS
            </span>
          </motion.div>
        </div>

        {/* Profile Card Sidebar/Drawer Effect - Connected to avoid gap */}
        <AnimatePresence>
          {showProfile && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="pl-4 pointer-events-auto"
              style={{ width: 'max-content' }}
            >
              <ProfileCard
                name={personal.name}
                title="AI Solutions Company"
                description={`${personal.name} builds websites, AI chatbots and business automation for Indian enterprises and institutions. Fixed quotes, human support and systems that pay for themselves.`}
                imageUrl={personal.avatar}
                githubUrl={personal.socialLinks.find(s => s.platform === 'GitHub')?.url}
                linkedinUrl={personal.socialLinks.find(s => s.platform === 'LinkedIn')?.url}
                instagramUrl={personal.socialLinks.find(s => s.platform === 'Instagram')?.url}
                className="!max-w-4xl scale-[0.8] origin-left"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
