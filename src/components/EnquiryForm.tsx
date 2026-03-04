'use client';

import { useState } from 'react';

const PHONE = '918639978917';

export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        phone: '',
        email: '',
        destination: '',
        duration: '',
        travelers: '',
        travelDate: '',
        tripType: '',
        joinTiming: '',
        source: '',
        honeypot: '',
    });

    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.honeypot) return; // Spam check

        const msg = `🌟 *New Registration — Hithu Global Holidays*

* Name: ${formData.name || 'Not specified'}
* Age: ${formData.age || 'Not specified'}
* Gender: ${formData.gender || 'Not specified'}
* Phone: ${formData.phone || 'Not specified'}
* Email: ${formData.email || 'Not specified'}

--- Trip Details ---
* No. of Travelers: ${formData.travelers || 'Not specified'}
* Destination / Package: ${formData.destination || 'Not specified'}
* Mode: ${formData.tripType || 'Not specified'}
* Travel Month: ${formData.travelDate || 'Not specified'}
* How early can you join: ${formData.joinTiming || 'Not specified'}
* Source: ${formData.source || 'Website'}`;

        const encodedMsg = encodeURIComponent(msg);
        const whatsappUrl = `https://wa.me/${PHONE}?text=${encodedMsg}`;
        window.open(whatsappUrl, '_blank');

        setStatus('success');
        setFormData({
            name: '', age: '', gender: '', phone: '', email: '',
            destination: '', duration: '', travelers: '', travelDate: '', tripType: '', joinTiming: '', source: '', honeypot: ''
        });
    };

    if (status === 'success') {
        return (
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-8 text-center glass-effect">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-coral rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/20">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="font-heading font-black text-2xl text-text mb-3">Enquiry Sent! ✨</h3>
                <p className="text-text-light mb-6">
                    Your travel details are on the way to our experts via WhatsApp. We will connect with you shortly!
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-gradient-to-r from-primary to-coral text-white rounded-xl font-bold shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
                >
                    Plan Another Trip
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Person Details row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-bold text-text mb-2 tracking-wide uppercase text-xs">👤 Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border-2 border-border/50 bg-white/50 backdrop-blur-sm text-text text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm" placeholder="e.g. Kiran" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-text mb-2 tracking-wide uppercase text-xs">📞 Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border-2 border-border/50 bg-white/50 backdrop-blur-sm text-text text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm" placeholder="+91 9876543210" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                    <label className="block text-sm font-bold text-text mb-2 tracking-wide uppercase text-xs">📅 Age</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border-2 border-border/50 bg-white/50 backdrop-blur-sm text-text text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm" placeholder="e.g. 22" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-text mb-2 tracking-wide uppercase text-xs">👫 Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border-2 border-border/50 bg-white/50 backdrop-blur-sm text-text text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm">
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-text mb-2 tracking-wide uppercase text-xs">✉️ Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border-2 border-border/50 bg-white/50 backdrop-blur-sm text-text text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm" placeholder="your@email.com" />
                </div>
            </div>

            {/* Visual Divider */}
            <div className="py-2">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                <p className="text-center text-xs font-bold text-primary mt-2 uppercase tracking-widest">Trip Preferences</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-bold text-text mb-2 tracking-wide uppercase text-xs">🗺️ Destination / Package</label>
                    <input type="text" name="destination" value={formData.destination} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border-2 border-border/50 bg-white/50 backdrop-blur-sm text-text text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm" placeholder="e.g. Bali, Kerala, Dubai..." />
                </div>
                <div>
                    <label className="block text-sm font-bold text-text mb-2 tracking-wide uppercase text-xs">🏝️ Mode (Trip Type)</label>
                    <select name="tripType" value={formData.tripType} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border-2 border-border/50 bg-white/50 backdrop-blur-sm text-text text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm">
                        <option value="">Select Mode</option>
                        <option value="Family Holiday">Family Holiday</option>
                        <option value="Honeymoon">Honeymoon</option>
                        <option value="Solo/Adventure">Solo/Adventure</option>
                        <option value="Friends Group">Friends Group</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                    <label className="block text-sm font-bold text-text mb-2 tracking-wide uppercase text-xs">👥 No. of Travelers</label>
                    <input type="number" name="travelers" value={formData.travelers} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border-2 border-border/50 bg-white/50 backdrop-blur-sm text-text text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm" placeholder="e.g. 2" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-text mb-2 tracking-wide uppercase text-xs">🗓️ How early can you join?</label>
                    <select name="joinTiming" value={formData.joinTiming} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border-2 border-border/50 bg-white/50 backdrop-blur-sm text-text text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm">
                        <option value="">Select Timing</option>
                        <option value="In a Week">In a Week</option>
                        <option value="In a Month">In a Month</option>
                        <option value="Just Exploring">Just Exploring</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-text mb-2 tracking-wide uppercase text-xs">📌 Source</label>
                    <select name="source" value={formData.source} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl border-2 border-border/50 bg-white/50 backdrop-blur-sm text-text text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm">
                        <option value="">How did you find us?</option>
                        <option value="Approached by someone from our team">Approached by someone from our team</option>
                        <option value="Instagram/Social Media">Instagram/Social Media</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Friend Referral">Friend Referral</option>
                    </select>
                </div>
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary via-coral to-sunset text-white rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-1 mt-4">
                Send Details via WhatsApp 🚀
            </button>
        </form>
    );
}
