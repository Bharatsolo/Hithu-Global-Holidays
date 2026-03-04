'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    name: string;
    location: string;
    rating: number;
    text: string;
    avatar: string;
}

interface TestimonialSliderProps {
    testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    const testimonial = testimonials[current];

    return (
        <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/10"
                >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 justify-center">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                            <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>

                    {/* Quote */}
                    <p className="text-white/90 text-center text-base md:text-lg leading-relaxed mb-6 italic">
                        &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-coral flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {testimonial.avatar}
                        </div>
                        <div className="text-left">
                            <p className="font-heading font-bold text-white text-sm">{testimonial.name}</p>
                            <p className="text-white/60 text-xs">{testimonial.location}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-accent w-8' : 'bg-white/30 hover:bg-white/50'
                            }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
