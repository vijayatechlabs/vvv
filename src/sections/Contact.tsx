import { useState } from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Youtube, CheckCircle, X } from 'lucide-react';

function Toast({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-start gap-3 bg-[#122348] border border-[rgba(201,168,76,0.4)] rounded-lg px-5 py-4 shadow-2xl max-w-sm animate-[slideUp_0.3s_ease]">
      <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="font-sans text-sm font-semibold text-cream mb-0.5">Message sent</p>
        <p className="font-sans text-xs text-muted leading-relaxed">
          Your message has been sent. We'll get back to you shortly.
        </p>
      </div>
      <button
        onClick={onClose}
        className="text-muted hover:text-cream transition-colors flex-shrink-0 ml-1"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData();
    data.append('access_key', 'eab2622d-2c75-4c88-8dd0-15c197e6aaa2');
    data.append('name', form.name);
    data.append('email', form.email);
    data.append('company', form.company);
    data.append('message', form.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setForm({ name: '', email: '', company: '', message: '' });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0A1530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-sans text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-5 block">
              Contact
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-cream mb-10 leading-tight">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center">
                  <MapPin size={14} className="text-gold" />
                </div>
                <div>
                  <p className="font-sans text-xs text-muted uppercase tracking-wider mb-1">Address</p>
                  <p className="font-sans text-sm text-cream leading-relaxed">
                    #28, MIES Villas, NH-44, beside Exotikka & Ulavacharu,<br />
                    Ananthapuramu – 515002, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center">
                  <Phone size={14} className="text-gold" />
                </div>
                <div>
                  <p className="font-sans text-xs text-muted uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+919515581989" className="font-sans text-sm text-cream hover:text-gold transition-colors">
                    +91 95155 81989
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center">
                  <Mail size={14} className="text-gold" />
                </div>
                <div>
                  <p className="font-sans text-xs text-muted uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:viswanatha@viswavardhan.in" className="font-sans text-sm text-cream hover:text-gold transition-colors">
                    viswanatha@viswavardhan.in
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[rgba(201,168,76,0.15)]">
              <p className="font-sans text-xs text-muted uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/company/viswavardhanvyapara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#122348] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-muted hover:text-gold hover:border-[rgba(201,168,76,0.5)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-[#122348] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-muted hover:text-gold hover:border-[rgba(201,168,76,0.5)] transition-colors" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-[#122348] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-muted hover:text-gold hover:border-[rgba(201,168,76,0.5)] transition-colors" aria-label="YouTube">
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-[#122348] border border-[rgba(201,168,76,0.15)] rounded-lg p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="font-sans text-xs text-muted uppercase tracking-wider mb-2 block">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    className="w-full bg-[#0D1B3E] border border-[rgba(201,168,76,0.2)] rounded-lg px-4 py-3 font-sans text-sm text-cream placeholder-muted/40 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-sans text-xs text-muted uppercase tracking-wider mb-2 block">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    className="w-full bg-[#0D1B3E] border border-[rgba(201,168,76,0.2)] rounded-lg px-4 py-3 font-sans text-sm text-cream placeholder-muted/40 focus:outline-none focus:border-gold transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="font-sans text-xs text-muted uppercase tracking-wider mb-2 block">
                  Company <span className="text-muted/50 normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="company" name="company" type="text"
                  value={form.company} onChange={handleChange}
                  className="w-full bg-[#0D1B3E] border border-[rgba(201,168,76,0.2)] rounded-lg px-4 py-3 font-sans text-sm text-cream placeholder-muted/40 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-sans text-xs text-muted uppercase tracking-wider mb-2 block">
                  Message <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={form.message} onChange={handleChange}
                  className="w-full bg-[#0D1B3E] border border-[rgba(201,168,76,0.2)] rounded-lg px-4 py-3 font-sans text-sm text-cream placeholder-muted/40 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-gold text-navy font-sans font-semibold text-sm rounded-lg hover:bg-gold-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {showToast && <Toast onClose={() => setShowToast(false)} />}
    </section>
  );
}
