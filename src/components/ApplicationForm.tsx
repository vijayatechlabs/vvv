import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

function Toast({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-start gap-3 bg-[#122348] border border-[rgba(201,168,76,0.4)] rounded-lg px-5 py-4 shadow-2xl max-w-sm animate-[slideUp_0.3s_ease]">
      <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="font-sans text-sm font-semibold text-cream mb-0.5">Application sent</p>
        <p className="font-sans text-xs text-muted leading-relaxed">
          Thank you for applying. We will review your application and get back to you shortly.
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

interface ApplicationFormProps {
  roleTitle: string;
}

export default function ApplicationForm({ roleTitle }: ApplicationFormProps) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessKey) {
      console.error('Missing VITE_WEB3FORMS_ACCESS_KEY');
      return;
    }
    setIsLoading(true);

    const data = new FormData();
    data.append('access_key', accessKey);
    data.append('subject', `Job Application: ${roleTitle}`);
    data.append('name', form.name);
    data.append('email', form.email);
    data.append('phone', form.phone);
    data.append('linkedin', form.linkedin);
    data.append('message', form.message);
    data.append('role', roleTitle);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setForm({ name: '', email: '', phone: '', linkedin: '', message: '' });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      }
    } catch (error) {
      console.error('Application submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-[#122348] border border-[rgba(201,168,76,0.15)] rounded-lg p-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="app-name" className="font-sans text-xs text-muted uppercase tracking-wider mb-2 block">
              Full Name <span className="text-gold">*</span>
            </label>
            <input
              id="app-name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-[#0D1B3E] border border-[rgba(201,168,76,0.2)] rounded-lg px-4 py-3 font-sans text-sm text-cream placeholder-muted/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="app-email" className="font-sans text-xs text-muted uppercase tracking-wider mb-2 block">
              Email <span className="text-gold">*</span>
            </label>
            <input
              id="app-email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-[#0D1B3E] border border-[rgba(201,168,76,0.2)] rounded-lg px-4 py-3 font-sans text-sm text-cream placeholder-muted/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="app-phone" className="font-sans text-xs text-muted uppercase tracking-wider mb-2 block">
              Phone <span className="text-gold">*</span>
            </label>
            <input
              id="app-phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-[#0D1B3E] border border-[rgba(201,168,76,0.2)] rounded-lg px-4 py-3 font-sans text-sm text-cream placeholder-muted/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label htmlFor="app-linkedin" className="font-sans text-xs text-muted uppercase tracking-wider mb-2 block">
              LinkedIn / Portfolio
            </label>
            <input
              id="app-linkedin"
              name="linkedin"
              type="url"
              value={form.linkedin}
              onChange={handleChange}
              className="w-full bg-[#0D1B3E] border border-[rgba(201,168,76,0.2)] rounded-lg px-4 py-3 font-sans text-sm text-cream placeholder-muted/40 focus:outline-none focus:border-gold transition-colors"
              placeholder="https://linkedin.com/in/you"
            />
          </div>
        </div>

        <div>
          <label htmlFor="app-message" className="font-sans text-xs text-muted uppercase tracking-wider mb-2 block">
            Why this role? <span className="text-gold">*</span>
          </label>
          <textarea
            id="app-message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full bg-[#0D1B3E] border border-[rgba(201,168,76,0.2)] rounded-lg px-4 py-3 font-sans text-sm text-cream placeholder-muted/40 focus:outline-none focus:border-gold transition-colors resize-none"
            placeholder="Briefly tell us about your experience and why you want to join."
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-gold text-navy font-sans font-semibold text-sm rounded-lg hover:bg-gold-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Submitting...' : 'Submit Application'}
        </button>
        <p className="font-sans text-[11px] text-muted/80 leading-relaxed">
          Applying for <span className="text-cream">{roleTitle}</span>. We usually respond within 3–5 business days.
        </p>
      </form>

      {showToast && <Toast onClose={() => setShowToast(false)} />}
    </>
  );
}