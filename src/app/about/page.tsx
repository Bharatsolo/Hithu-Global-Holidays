import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Hithu Global Holidays — your trusted travel partner for personalized domestic and international travel experiences.',
    openGraph: {
        title: 'About Us | Hithu Global Holidays',
        description: 'Your trusted travel partner for personalized travel experiences.',
    },
};

const stats = [
    { number: '500+', label: 'Happy Travelers' },
    { number: '50+', label: 'Destinations' },
    { number: '100+', label: 'Curated Packages' },
    { number: '4.9★', label: 'Customer Rating' },
];

const values = [
    {
        icon: '🎯',
        title: 'Personalization First',
        description: 'Every traveler is unique. We design itineraries that match your preferences, budget, and travel style.',
    },
    {
        icon: '🤝',
        title: 'Trust & Transparency',
        description: 'No hidden charges, no surprises. What we promise is what you get — complete honesty always.',
    },
    {
        icon: '💬',
        title: '24/7 Support',
        description: 'Our travel experts are available round the clock on WhatsApp for any queries before, during, or after your trip.',
    },
    {
        icon: '🌟',
        title: 'Quality Partnerships',
        description: 'We partner with verified hotels, trusted transport providers, and experienced local guides for the best experiences.',
    },
    {
        icon: '📋',
        title: 'Hassle-Free Planning',
        description: 'From visa assistance to airport transfers, we handle every detail so you can focus on enjoying your trip.',
    },
    {
        icon: '💰',
        title: 'Best Value',
        description: 'Premium experiences at competitive rates. We negotiate the best deals so you get maximum value.',
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero/about-hero.jpg"
                        alt="About Hithu Global Holidays"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <AnimatedSection>
                        <p className="text-primary-light font-medium text-sm uppercase tracking-widest mb-3">Our Story</p>
                        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-3">
                            About Hithu Global Holidays
                        </h1>
                        <p className="text-white/80 text-lg max-w-xl mx-auto">
                            Crafting unforgettable journeys since day one.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Story */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="font-heading font-bold text-3xl text-text mb-6">Our Mission</h2>
                            <p className="text-text-light text-lg leading-relaxed">
                                At <strong className="text-primary">Hithu Global Holidays</strong>, we believe that travel is more than just visiting new places — it&apos;s about creating memories that last a lifetime.
                                We are a passionate team of travel enthusiasts dedicated to crafting personalized, hassle-free travel experiences for every type of traveler.
                            </p>
                            <p className="text-text-light text-lg leading-relaxed mt-4">
                                Whether it&apos;s a romantic honeymoon in the Maldives, a family adventure in Rajasthan, or a solo escape to Bali — we design every itinerary with care, ensuring you get
                                the best experiences, the best stays, and the best memories.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Stats */}
                    <AnimatedSection>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center bg-card rounded-2xl p-6 border border-border">
                                    <p className="font-heading font-extrabold text-3xl text-primary mb-1">{stat.number}</p>
                                    <p className="text-text-light text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 px-4 bg-surface-dark">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Stand For</p>
                            <h2 className="font-heading font-bold text-3xl text-text">Our Core Values</h2>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow h-full">
                                    <span className="text-3xl mb-4 block">{value.icon}</span>
                                    <h3 className="font-heading font-bold text-lg text-text mb-2">{value.title}</h3>
                                    <p className="text-text-light text-sm leading-relaxed">{value.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-4">
                            Let&apos;s Plan Your Next Adventure
                        </h2>
                        <p className="text-text-light mb-6">
                            Ready to explore? Our travel experts are just a message away. Tell us your dream destination and we&apos;ll make it happen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/918639978917?text=Hi%20Hithu%20Global%20Holidays%2C%20I%20want%20to%20plan%20my%20next%20trip.%20Please%20help!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
