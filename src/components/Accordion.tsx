'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
    day: number;
    title: string;
    description: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-3">
            {items.map((item, i) => (
                <div
                    key={i}
                    className={`rounded-2xl overflow-hidden border transition-all ${openIndex === i ? 'border-primary/30 shadow-lg shadow-primary/5' : 'border-border'
                        }`}
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className={`w-full flex items-center gap-3 p-4 text-left transition-all ${openIndex === i ? 'bg-gradient-to-r from-primary/5 to-accent/5' : 'bg-card hover:bg-surface-dark'
                            }`}
                    >
                        <span className={`flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold flex-shrink-0 ${openIndex === i
                                ? 'bg-gradient-to-br from-primary to-coral text-white shadow-md'
                                : 'bg-surface-dark text-text-light'
                            }`}>
                            D{item.day}
                        </span>
                        <span className="font-heading font-semibold text-text flex-1">{item.title}</span>
                        <svg
                            className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 pl-[4.25rem] bg-card text-text-light text-sm leading-relaxed border-t border-border/50">
                                    {item.description}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
