import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Hithu Global Holidays. Contact us via WhatsApp, phone, email, or fill out our enquiry form for a personalized travel quote.',
    openGraph: {
        title: 'Contact Us | Hithu Global Holidays',
        description: 'Get in touch for a personalized travel quote.',
    },
};

export default function ContactPage() {
    return (
        <>
            <section className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero/contact-hero.jpg"
                        alt="Contact Us"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <AnimatedSection>
                        <p className="text-primary-light font-medium text-sm uppercase tracking-widest mb-3">Get In Touch</p>
                        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-3">Contact Us</h1>
                        <p className="text-white/80 text-lg max-w-xl mx-auto">
                            We&apos;d love to hear from you. Let&apos;s plan your perfect trip together.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <AnimatedSection>
                                <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                                    <h3 className="font-heading font-bold text-lg text-text mb-4">Contact Information</h3>
                                    <div className="space-y-4">
                                        <a
                                            href="https://wa.me/918639978917?text=Hi%20Hithu%20Global%20Holidays%2C%20I%20need%20help%20planning%20my%20trip."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors group"
                                        >
                                            <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-text text-sm">WhatsApp</p>
                                                <p className="text-text-light text-sm">+91 863 997 8917</p>
                                            </div>
                                        </a>
                                        <div className="flex items-center gap-3 p-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-text text-sm">Phone</p>
                                                <p className="text-text-light text-sm">+91 863 997 8917</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-text text-sm">Email</p>
                                                <p className="text-text-light text-sm">info@hithuglobal.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-text text-sm">Address</p>
                                                <p className="text-text-light text-sm">Bangalore, Karnataka, India</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.1}>
                                <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                                    <h3 className="font-heading font-bold text-lg text-text mb-3">Business Hours</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between"><span className="text-text-lighter">Monday - Saturday</span><span className="text-text font-medium">9:00 AM - 8:00 PM</span></div>
                                        <div className="flex justify-between"><span className="text-text-lighter">Sunday</span><span className="text-text font-medium">10:00 AM - 5:00 PM</span></div>
                                        <div className="flex justify-between"><span className="text-text-lighter">WhatsApp Support</span><span className="text-primary font-medium">24/7</span></div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Enquiry Form */}
                        <div className="lg:col-span-2">
                            <AnimatedSection>
                                <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                                    <h2 className="font-heading font-bold text-2xl text-text mb-2">Send Us an Enquiry</h2>
                                    <p className="text-text-light text-sm mb-6">Fill out the form below and our travel expert will get back to you within 24 hours.</p>
                                    <EnquiryForm />
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps */}
            <section className="px-4 pb-16">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection>
                        <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-80">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.7495370989!2d77.30126063383677!3d12.954517009353048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709388471032!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Hithu Global Holidays Location"
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
