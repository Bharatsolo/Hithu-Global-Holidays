import type { Metadata } from 'next';
import Image from 'next/image';
import PackageCard from '@/components/PackageCard';
import AnimatedSection from '@/components/AnimatedSection';
import internationalPackages from '@/data/international.json';

export const metadata: Metadata = {
    title: 'International Tour Packages — Explore the World',
    description: 'Discover handcrafted international travel packages — Bali, Dubai, Thailand, Maldives, Singapore, Europe & more. Request a free quote today!',
    openGraph: {
        title: 'International Tour Packages — Explore the World | Hithu Global Holidays',
        description: 'Discover handcrafted international travel packages. Request a free quote today!',
    },
};

export default function InternationalPage() {
    return (
        <>
            <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero/international-hero.jpg"
                        alt="Explore the World"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <AnimatedSection>
                        <p className="text-primary-light font-medium text-sm uppercase tracking-widest mb-3">Beyond Borders</p>
                        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-3">
                            International Tour Packages
                        </h1>
                        <p className="text-white/80 text-lg max-w-xl mx-auto">
                            From tropical Bali to majestic Europe — explore the world with confidence and comfort.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {internationalPackages.map((pkg, i) => (
                            <AnimatedSection key={pkg.slug} delay={i * 0.1}>
                                <PackageCard
                                    slug={pkg.slug}
                                    title={pkg.title}
                                    duration={pkg.duration}
                                    description={pkg.description}
                                    highlights={pkg.highlights}
                                    image={pkg.image}
                                    type="international"
                                />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-surface-dark">
                <div className="max-w-3xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-4">
                            Dreaming of a Destination Not Listed?
                        </h2>
                        <p className="text-text-light mb-6">
                            We cover 50+ international destinations. Tell us where you want to go and we&apos;ll make it happen.
                        </p>
                        <a
                            href="https://wa.me/918639978917?text=Hi%20Hithu%20Global%20Holidays%2C%20I%20want%20a%20custom%20international%20travel%20package.%20Please%20help!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Request Custom International Package
                        </a>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
