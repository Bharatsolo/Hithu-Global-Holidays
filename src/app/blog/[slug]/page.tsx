import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import blogPosts from '@/data/blog.json';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: `${post.title} | Hithu Global Holidays Blog`,
            description: post.excerpt,
            images: [post.image],
            type: 'article',
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

    // Simple markdown-like rendering: split by \n\n for paragraphs, handle ## headers
    const renderContent = (content: string) => {
        const blocks = content.split('\n\n');
        return blocks.map((block, i) => {
            if (block.startsWith('## ')) {
                return (
                    <h2 key={i} className="font-heading font-bold text-xl text-text mt-8 mb-3">
                        {block.replace('## ', '')}
                    </h2>
                );
            }
            if (block.startsWith('- ')) {
                const items = block.split('\n').filter(Boolean);
                return (
                    <ul key={i} className="list-disc list-inside space-y-1 text-text-light text-base leading-relaxed ml-4">
                        {items.map((item, j) => (
                            <li key={j}>{item.replace('- ', '')}</li>
                        ))}
                    </ul>
                );
            }
            return (
                <p key={i} className="text-text-light text-base leading-relaxed">
                    {block}
                </p>
            );
        });
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.title,
                        description: post.excerpt,
                        image: post.image,
                        datePublished: post.date,
                        author: {
                            '@type': 'Organization',
                            name: 'Hithu Global Holidays',
                        },
                    }),
                }}
            />

            <section className="relative h-72 md:h-96 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <div className="max-w-4xl mx-auto">
                        <AnimatedSection>
                            <Link href="/blog" className="text-white/70 text-sm hover:text-white mb-2 inline-block">← Back to Blog</Link>
                            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">{post.category}</span>
                            <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-2">{post.title}</h1>
                            <p className="text-white/70 text-sm">
                                {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                                {' · '} Hithu Global Holidays
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <article className="prose prose-lg max-w-none space-y-4">
                        {renderContent(post.content)}
                    </article>

                    {/* CTA */}
                    <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                        <h3 className="font-heading font-bold text-xl text-text mb-2">Need Help Planning Your Trip?</h3>
                        <p className="text-text-light text-sm mb-4">Our travel experts are ready to create the perfect itinerary for you.</p>
                        <a
                            href="https://wa.me/91XXXXXXXXXX?text=Hi%20Hithu%20Global%20Holidays%2C%20I%20read%20your%20blog%20and%20I%20need%20help%20planning%20my%20trip."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                        >
                            Chat with Travel Expert
                        </a>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 px-4 bg-surface-dark">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-heading font-bold text-2xl text-text mb-8 text-center">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {relatedPosts.map((rp) => (
                                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow block">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-5">
                                        <p className="text-text-lighter text-sm mb-1">{rp.category}</p>
                                        <h3 className="font-heading font-bold text-lg text-text group-hover:text-primary transition-colors">{rp.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
