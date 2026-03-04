import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import PackageCard from '@/components/PackageCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import domesticPackages from '@/data/domestic.json';
import internationalPackages from '@/data/international.json';
import testimonials from '@/data/testimonials.json';

const heroSlides = [
  { src: '/images/hero/hero-slide1.jpg', alt: 'Tropical Paradise Beach' },
  { src: '/images/hero/hero-slide2.jpg', alt: 'Taj Mahal at Sunset' },
  { src: '/images/hero/hero-slide3.jpg', alt: 'Himalayan Mountains' },
];

const destinations = [
  { name: 'Kerala', image: '/images/destinations/kerala.jpg', slug: 'kerala-backwaters', type: 'domestic' as const, tagline: 'God\'s Own Country' },
  { name: 'Rajasthan', image: '/images/destinations/rajasthan.jpg', slug: 'rajasthan-royal-heritage', type: 'domestic' as const, tagline: 'Land of Kings' },
  { name: 'Bali', image: '/images/destinations/bali.jpg', slug: 'bali-tropical-bliss', type: 'international' as const, tagline: 'Island of Gods' },
  { name: 'Dubai', image: '/images/destinations/dubai.jpg', slug: 'dubai-luxury-experience', type: 'international' as const, tagline: 'City of Gold' },
  { name: 'Kashmir', image: '/images/destinations/kashmir.jpg', slug: 'kashmir-valley-dream', type: 'domestic' as const, tagline: 'Paradise on Earth' },
  { name: 'Maldives', image: '/images/destinations/maldives.jpg', slug: 'maldives-overwater-paradise', type: 'international' as const, tagline: 'Ocean Paradise' },
];

const whyChooseUs = [
  {
    emoji: '✨',
    title: 'Personalized Itineraries',
    description: 'Every trip is uniquely crafted to match your preferences, pace, and interests.',
    color: 'from-primary/10 to-coral/10',
    border: 'border-primary/20',
  },
  {
    emoji: '💬',
    title: '24/7 WhatsApp Support',
    description: 'Our travel experts are just a message away — anytime, anywhere, any question.',
    color: 'from-emerald/10 to-tropical/10',
    border: 'border-emerald/20',
  },
  {
    emoji: '🤝',
    title: 'Trusted Partnerships',
    description: 'Verified hotels, certified transport, and experienced local guides.',
    color: 'from-secondary/10 to-secondary-light/10',
    border: 'border-secondary/20',
  },
  {
    emoji: '🔍',
    title: 'Transparent Planning',
    description: 'No hidden charges, no surprises. What we promise is what you get.',
    color: 'from-accent/10 to-sunset/10',
    border: 'border-accent/20',
  },
];

export default function HomePage() {
  const domesticSlugs = new Set(domesticPackages.map((p) => p.slug));
  const featuredPackages = [
    ...domesticPackages.slice(0, 3),
    ...internationalPackages.slice(0, 3),
  ];

  return (
    <>
      {/* ============ HERO CAROUSEL ============ */}
      <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
        {/* Crossfade Image Carousel */}
        {heroSlides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 hero-slide-${i + 1}`}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
              🌍 Your Journey Starts Here
            </div>
            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6">
              Discover the World,{' '}
              <span className="gradient-text">
                One Journey at a Time
              </span>
            </h1>
            <p className="text-white/85 text-lg md:text-2xl max-w-3xl mx-auto mb-10 font-light">
              Curated travel experiences designed just for you. From the backwaters of Kerala to the beaches of Bali — your dream vacation awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/domestic"
                className="px-10 py-4 bg-gradient-to-r from-primary to-coral text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1 inline-flex items-center gap-2"
              >
                🇮🇳 Explore India
              </Link>
              <Link
                href="/international"
                className="px-10 py-4 bg-white/15 backdrop-blur-md border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/25 transition-all hover:-translate-y-1 inline-flex items-center gap-2"
              >
                🌏 Go International
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-7 h-12 rounded-full border-2 border-white/40 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ============ SEARCH BAR ============ */}
      <section className="relative z-30 -mt-14 px-4">
        <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-2xl border border-border p-6 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5">🎯 Destination</label>
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5">⏱ Duration</label>
              <select className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none">
                <option>Any Duration</option>
                <option>3-5 Days</option>
                <option>5-7 Days</option>
                <option>7-10 Days</option>
                <option>10+ Days</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5">👥 Travel Type</label>
              <select className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none">
                <option>All Types</option>
                <option>Family</option>
                <option>Honeymoon</option>
                <option>Adventure</option>
              </select>
            </div>
            <div className="flex items-end">
              <a
                href="https://wa.me/918639978917?text=Hi%20Hithu%20Global%20Holidays%2C%20I%20want%20to%20explore%20travel%20options.%20Please%20suggest%20the%20best%20packages!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 btn-shimmer text-white rounded-xl font-bold text-sm transition-all text-center hover:shadow-lg"
              >
                🔍 Find Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED PACKAGES ============ */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-primary text-sm font-bold uppercase tracking-wider mb-3">
                🔥 Handpicked For You
              </span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-text">
                Featured <span className="gradient-text">Packages</span>
              </h2>
              <p className="text-text-light mt-3 text-lg max-w-2xl mx-auto">
                Our most loved travel experiences — curated for unforgettable memories.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, i) => (
              <AnimatedSection key={pkg.slug} delay={i * 0.1}>
                <PackageCard
                  slug={pkg.slug}
                  title={pkg.title}
                  duration={pkg.duration}
                  description={pkg.description}
                  highlights={pkg.highlights}
                  image={pkg.image}
                  type={domesticSlugs.has(pkg.slug) ? 'domestic' : 'international'}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COLORFUL DIVIDER ============ */}
      <div className="section-divider mx-auto w-1/2" />

      {/* ============ WHY CHOOSE US ============ */}
      <section className="py-20 px-4 bg-gradient-to-br from-surface-dark via-surface to-surface-dark">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-emerald/10 to-tropical/10 rounded-full text-emerald text-sm font-bold uppercase tracking-wider mb-3">
                💪 Why Travelers Love Us
              </span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-text">
                Why Choose <span className="gradient-text">Hithu Global</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 border ${item.border} hover:shadow-xl transition-all hover:-translate-y-1 text-center h-full`}>
                  <span className="text-4xl mb-4 block">{item.emoji}</span>
                  <h3 className="font-heading font-bold text-lg text-text mb-2">{item.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TOP DESTINATIONS ============ */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-secondary/10 to-tropical/10 rounded-full text-secondary text-sm font-bold uppercase tracking-wider mb-3">
                🗺️ Dream Destinations
              </span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-text">
                Top <span className="gradient-text">Destinations</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {destinations.map((dest, i) => (
              <AnimatedSection key={dest.name} delay={i * 0.08}>
                <Link
                  href={`/${dest.type}/${dest.slug}`}
                  className="group relative block h-52 md:h-72 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-primary/80 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading font-bold text-2xl text-white mb-1">{dest.name}</h3>
                    <p className="text-white/80 text-sm">{dest.tagline}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-primary">Explore →</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary-dark to-secondary overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-tropical/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-accent text-sm font-bold uppercase tracking-wider mb-3">
                ⭐ Happy Travelers
              </span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-white">
                What Our <span className="text-accent">Clients</span> Say
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <TestimonialSlider testimonials={testimonials} />
          </AnimatedSection>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/cta-bg.jpg"
            alt="Travel destination"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-coral/85 to-sunset/90" />
        </div>
        {/* Decorative */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-4">
              Plan Your Dream<br />Vacation Today ✈️
            </h2>
            <p className="text-white/85 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Let our travel experts create a personalized itinerary just for you. Your perfect getaway is one message away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918639978917?text=Hi%20Hithu%20Global%20Holidays%2C%20I%20want%20to%20plan%20my%20dream%20vacation.%20Please%20help!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-white text-primary rounded-2xl font-black text-lg hover:bg-accent hover:text-text transition-all hover:-translate-y-1 hover:shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Now
              </a>
              <Link
                href="/contact"
                className="px-10 py-4 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-primary transition-all hover:-translate-y-1"
              >
                ✉️ Request Custom Itinerary
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
