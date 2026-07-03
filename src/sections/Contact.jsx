import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ignito@techfest.edu',
    href: 'mailto:ignito@techfest.edu',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
  },
  {
    icon: MapPin,
    label: 'Venue',
    value: 'Galaxy Convention Centre, Bengaluru, KA',
    href: '#',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          tag="Contact"
          title="Mission Control"
          subtitle="Have a question? Want to collaborate or sponsor IGNITO? Reach out to ground control — we're listening."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 glass-card border border-white/10 p-5 hover:border-white/25 hover:shadow-glass transition-all duration-300 group"
              >
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={18} className={color} />
                </div>
                <div>
                  <div className="text-xs text-white/40 font-medium uppercase tracking-widest mb-1">{label}</div>
                  <div className={`text-sm font-medium ${color}`}>{value}</div>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="glass-card border border-white/10 p-5 rounded-2xl overflow-hidden">
              <div className="relative h-36 bg-gradient-to-br from-violet-900/30 to-indigo-900/20 rounded-xl flex items-center justify-center">
                <div className="absolute inset-0 grid-dots opacity-30 rounded-xl" />
                <div className="relative text-center">
                  <MapPin size={28} className="text-cyan-400 mx-auto mb-2" />
                  <p className="text-xs text-white/50">Galaxy Convention Centre</p>
                  <p className="text-xs text-white/30">Bengaluru, Karnataka</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card border border-white/10 p-8">
              <h3 className="font-orbitron text-lg font-bold text-white mb-6">Send a Message</h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <CheckCircle size={48} className="text-cyan-400" />
                  <h4 className="font-orbitron text-lg text-white">Message Received!</h4>
                  <p className="text-white/50 text-sm max-w-xs">
                    Thanks for reaching out. Our mission control team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline mt-4 text-xs"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs text-white/50 mb-2 tracking-wide">Full Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-cyan-400/50 focus:bg-white/8 focus:outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs text-white/50 mb-2 tracking-wide">Email Address</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-cyan-400/50 focus:outline-none transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs text-white/50 mb-2 tracking-wide">Subject</label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-[#0a0718] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-400/50 focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" className="text-white/30">Select a subject</option>
                      <option value="registration">Event Registration</option>
                      <option value="sponsorship">Sponsorship</option>
                      <option value="media">Media & Press</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-xs text-white/50 mb-2 tracking-wide">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-cyan-400/50 focus:outline-none transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full justify-center font-orbitron text-xs tracking-widest disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader size={15} className="animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Launch Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
