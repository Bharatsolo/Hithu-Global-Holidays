import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Accordion from '@/components/Accordion';
import PackageCard from '@/components/PackageCard';
import internationalPackages from '@/data/international.json';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export function generateStaticParams() {
    return internationalPackages.map((pkg) => ({
        slug: pkg.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const pkg = internationalPackages.find((p) => p.slug === slug);
    if (!pkg) return {};
    return {
        title: `${pkg.title} — ${pkg.duration}`,
        description: pkg.description,
        openGraph: {
            title: `${pkg.title} | Hithu Global Holidays`,
            description: pkg.description,
            images: [pkg.image],
        },
    };
}

export default async function InternationalPackageDetail({ params }: Props) {
    const { slug } = await params;
    const pkg = internationalPackages.find((p) => p.slug === slug);
    if (!pkg) notFound();

    const message = encodeURIComponent(
        `Hi Hithu Global Holidays, I'm interested in the ${pkg.title} package. Please share full details.`
    );
    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${message}`;

    const relatedPackages = internationalPackages
        .filter((p) => p.slug !== pkg.slug)
        .slice(0, 3);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'TouristTrip',
                        name: pkg.title,
                        description: pkg.description,
                        touristType: pkg.idealFor,
                        itinerary: pkg.itinerary.map((day) => ({
                            '@type': 'TouristAttraction',
                            name: day.title,
                        })),
                    }),
                }}
            />

            {/* Hero */}
            <section className="relative h-72 md:h-[28rem] overflow-hidden">
                <Image src={pkg.image} alt={pkg.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <div className="max-w-7xl mx-auto">
                        <AnimatedSection>
                            <Link href="/international" className="text-white/70 text-sm hover:text-white mb-2 inline-block">
                                ← Back to International Packages
                            </Link>
                            <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-white mb-3">{pkg.title}</h1>
                            <div className="flex flex-wrap gap-3 text-white/80 text-sm">
                                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">📅 {pkg.duration}</span>
                                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">👥 {pkg.idealFor}</span>
                                
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-10">
                            <AnimatedSection>
                                <h2 className="font-heading font-bold text-2xl text-text mb-4">About This Package</h2>
                                <p className="text-text-light leading-relaxed">{pkg.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {pkg.highlights.map((h, i) => (
                                        <span key={i} className="text-sm bg-primary/5 text-primary px-3 py-1.5 rounded-lg font-medium">{h}</span>
                                    ))}
                                </div>
                            </AnimatedSection>

                            <AnimatedSection>
                                <h2 className="font-heading font-bold text-2xl text-text mb-4">Day-wise Itinerary</h2>
                                <Accordion items={pkg.itinerary} />
                            </AnimatedSection>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <AnimatedSection>
                                    <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                                        <h3 className="font-heading font-bold text-lg text-green-800 mb-3">✅ Inclusions</h3>
                                        <ul className="space-y-2">
                                            {pkg.inclusions.map((item, i) => (
                                                <li key={i} className="text-green-700 text-sm flex items-start gap-2">
                                                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedSection>
                                <AnimatedSection delay={0.1}>
                                    <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                                        <h3 className="font-heading font-bold text-lg text-red-800 mb-3">❌ Exclusions</h3>
                                        <ul className="space-y-2">
                                            {pkg.exclusions.map((item, i) => (
                                                <li key={i} className="text-red-700 text-sm flex items-start gap-2">
                                                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedSection>
                            </div>

                            <AnimatedSection>
                                <h2 className="font-heading font-bold text-2xl text-text mb-4">Gallery</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {pkg.gallery.map((img, i) => (
                                        <div key={i} className="relative h-32 md:h-40 rounded-xl overflow-hidden">
                                            <Image src={img} alt={`${pkg.title} gallery ${i + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <AnimatedSection>
                                    <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                                        <h3 className="font-heading font-bold text-lg text-text mb-2">Interested in this package?</h3>
                                        <p className="text-text-light text-sm mb-4">Get a personalized quote and full details from our travel expert.</p>
                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#20BD5A] transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            Enquire on WhatsApp
                                        </a>
                                        <Link href="/contact" className="w-full block mt-3 text-center px-6 py-3 bg-primary/5 text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors">
                                            Send Enquiry Form
                                        </Link>
                                    </div>
                                </AnimatedSection>
                                <AnimatedSection delay={0.1}>
                                    <div className="bg-card rounded-2xl border border-border p-6 shadow-sm space-y-4">
                                        <h3 className="font-heading font-bold text-lg text-text">Quick Info</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-sm"><span className="text-text-lighter">Duration</span><span className="text-text font-medium">{pkg.duration}</span></div>
                                            <div className="flex justify-between text-sm"><span className="text-text-lighter">Ideal For</span><span className="text-text font-medium">{pkg.idealFor}</span></div>
                                            <div className="flex justify-between text-sm"><span className="text-text-lighter">Best Time</span></div>
                                            <div className="flex justify-between text-sm"><span className="text-text-lighter">Country</span><span className="text-text font-medium">{pkg.country}</span></div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-surface-dark">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection>
                        <h2 className="font-heading font-bold text-2xl text-text mb-8 text-center">Other Packages You May Like</h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedPackages.map((rp, i) => (
                            <AnimatedSection key={rp.slug} delay={i * 0.1}>
                                <PackageCard slug={rp.slug} title={rp.title} duration={rp.duration} description={rp.description} highlights={rp.highlights} image={rp.image} type="international" />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-4">Ready to Explore {pkg.country}?</h2>
                        <p className="text-text-light mb-6">Speak to our travel expert and get a customized international itinerary.</p>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors">
                            Speak to Travel Expert
                        </a>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
