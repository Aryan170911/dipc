"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Counter } from "@/components/ui/Counter";

// Honest launch numbers — update as the company grows.
const STATS = [
    { value: 6, suffix: "", labelKey: "services" },
    { value: 3, suffix: "+", labelKey: "projects" },
    { value: 2, suffix: "", labelKey: "industries" },
    { value: 24, suffix: "hr", labelKey: "response" },
] as const;

export function CompanyStats() {
    const t = useTranslations("companyStats");
    const labels: Record<string, string> = {
        services: t("items.services"),
        projects: t("items.projects"),
        industries: t("items.industries"),
        response: t("items.response"),
    };

    return (
        <section className="relative w-full border-y border-border/50 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-10"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
                        {t("eyebrow")}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                        {t("title")}
                    </h2>
                    <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                        {t("subtitle")}
                    </p>
                </motion.div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 border border-border/50 rounded-2xl overflow-hidden">
                    {STATS.map((s, i) => (
                        <div key={s.labelKey} className="bg-background px-6 py-10 text-center">
                            <div className="text-4xl md:text-5xl font-black tabular-nums tracking-tight">
                                <Counter value={s.value} duration={2} delay={i * 0.15} />
                                {s.suffix ? <span className="text-primary">{s.suffix}</span> : null}
                            </div>
                            <div className="mt-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                                {labels[s.labelKey]}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
