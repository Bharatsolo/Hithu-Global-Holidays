import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import blogPosts from '@/data/blog.json';

export const metadata: Metadata = {
    title: 'Travel Blog — Tips, Guides & Inspiration',
    description: 'Read expert travel tips, destination guides, visa information, and travel inspiration from Hithu Global Holidays.',
    openGraph: {
        title: 'Travel Blog | Hithu Global Holidays',
        description: 'Expert travel tips, destination guides, and visa information.',
    },
};

export default function BlogPage() {
    return (
        <>
            <section className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero/blog-hero.jpg"
                        alt="Travel Blog"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <AnimatedSection>
                        <p className="text-primary-light font-medium text-sm uppercase tracking-widest mb-3">Insights & Inspiration</p>
                        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-3">Travel Blog</h1>
                        <p className="text-white/80 text-lg max-w-xl mx-auto">
                            Expert tips, destination guides, and travel inspiration to fuel your wanderlust.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogPosts.map((post, i) => (
                            <AnimatedSection key={post.slug} delay={i * 0.1}>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow block"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-text-lighter text-sm mb-2">
                                            {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </p>
                                        <h2 className="font-heading font-bold text-xl text-text mb-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-text-light text-sm leading-relaxed line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <span className="inline-block mt-4 text-primary font-semibold text-sm">
                                            Read More →
                                        </span>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
