'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PackageCardProps {
    slug: string;
    title: string;
    duration: string;
    description: string;
    highlights: string[];
    image: string;
    type: 'domestic' | 'international';
}

export default function PackageCard({ slug, title, duration, description, highlights, image, type }: PackageCardProps) {
    const message = encodeURIComponent(
        `Hi Hithu Global Holidays, I'm interested in the ${title} package. Please share full details.`
    );
    const whatsappUrl = `https://wa.me/918639978917?text=${message}`;

    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-border group card-glow"
        >
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-sunset px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                    ⏱ {duration}
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                        View Details →
                    </span>
                </div>
            </div>
            <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-3 line-clamp-2">
                    {description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {highlights.slice(0, 3).map((h, i) => (
                        <span key={i} className="text-xs bg-gradient-to-r from-primary/5 to-accent/5 text-primary px-2.5 py-1 rounded-full border border-primary/10 font-medium">
                            {h}
                        </span>
                    ))}
                </div>
                <div className="flex gap-2">
                    <Link
                        href={`/${type}/${slug}`}
                        className="flex-1 text-center px-4 py-2.5 bg-secondary/5 text-secondary rounded-xl text-sm font-semibold hover:bg-secondary/10 transition-colors border border-secondary/10"
                    >
                        View Details
                    </Link>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2.5 bg-gradient-to-r from-primary to-coral text-white rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-primary/25 transition-all"
                    >
                        Request Quote
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
