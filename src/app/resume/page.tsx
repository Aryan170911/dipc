'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import { usePerformance } from '@/hooks/usePerformance';

export default function ResumePage() {
    const { isLowPowerMode } = usePerformance();

    return (
        <div className="min-h-screen bg-background relative flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">

            <Link
                href="/"
                className="absolute top-24 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
            </Link>

            {/* Company Profile placeholder */}
            <motion.div
                initial={isLowPowerMode ? { opacity: 0 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl mx-auto"
            >
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <FileText className="h-10 w-10" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                    Company Profile
                </h1>
                <p className="text-lg text-muted-foreground mb-10">
                    Our detailed company profile document is being prepared.
                    Till then, explore our services and recent work below.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/projects"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-all active:scale-95"
                    >
                        <span>See Our Work</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-border font-semibold text-sm hover:bg-muted transition-all active:scale-95"
                    >
                        <span>Get a Quote</span>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
