import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Target, 
  ShieldCheck, 
  Heart, 
  TrendingUp, 
  History, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Globe,
  Briefcase,
  Lightbulb,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Quote
} from 'lucide-react';

// --- Components ---

const JoinModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-primary-dark/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative"
          onClick={e => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-primary-dark transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-2">Join the Movement</h2>
            <p className="text-gray-600 mb-8">Be part of a community that builds legacy and shapes influence.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for joining! We will contact you soon.'); onClose(); }}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/20 outline-none transition-all" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/20 outline-none transition-all" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/20 outline-none transition-all bg-white">
                  <option>Become a Member</option>
                  <option>Join as a Mentor</option>
                  <option>Sponsor an Initiative</option>
                  <option>Volunteer with Us</option>
                </select>
              </div>
              <button className="w-full bg-primary-dark text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-mid transition-all shadow-lg mt-4">
                Submit Application
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const EventModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-primary-dark/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative"
          onClick={e => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-primary-dark transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="p-8 md:p-12">
            <div className="inline-block px-3 py-1 bg-primary-light/20 text-primary-dark rounded-full text-xs font-bold mb-4">
              IWD 2026 Registration
            </div>
            <h2 className="text-3xl font-bold text-primary-dark mb-2">Give To Gain</h2>
            <p className="text-gray-600 mb-8">Secure your spot at the official MATRIARK launch event.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Registration successful! Check your email for details.'); onClose(); }}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/20 outline-none transition-all" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/20 outline-none transition-all" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Organization (Optional)</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/20 outline-none transition-all" placeholder="Company Name" />
              </div>
              <button className="w-full bg-primary-dark text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-mid transition-all shadow-lg mt-4">
                Register Now
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Navbar = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Who We Are', href: '#who-we-are' },
    { name: 'The Problem', href: '#problem' },
    { name: 'Our Solution', href: '#solution' },
    { name: 'Programs', href: '#programs' },
    { name: 'Values', href: '#values' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="MATRIARK Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold tracking-tighter text-primary-dark">MATRIARK</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-600 hover:text-primary-dark transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onJoinClick}
              className="bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary-mid transition-all shadow-md hover:shadow-lg"
            >
              Join the Movement
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-dark p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-primary-dark hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => { setIsOpen(false); onJoinClick(); }}
                className="block w-full text-center bg-primary-dark text-white px-6 py-3 rounded-full text-base font-semibold mt-4"
              >
                Join the Movement
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-primary-dark'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`max-w-2xl mx-auto text-lg ${light ? 'text-white/90' : 'text-gray-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      className={`h-1 mx-auto mt-6 rounded-full ${light ? 'bg-primary-light' : 'bg-primary-mid'}`}
    />
  </div>
);

const ValueCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-center"
  >
    <div className="w-16 h-16 bg-primary-light/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-dark">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-primary-dark">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const ProgramCard = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary-mid transition-all cursor-pointer"
  >
    <div className="text-primary-mid">
      <Icon size={24} />
    </div>
    <span className="font-semibold text-gray-800">{title}</span>
  </motion.div>
);

const TestimonialCard = ({ quote, author, role, image }: { quote: string, author: string, role: string, image: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
  >
    <div className="absolute -top-4 left-8 w-8 h-8 bg-primary-mid text-white rounded-full flex items-center justify-center">
      <Quote size={16} />
    </div>
    <p className="text-gray-600 italic mb-8 leading-relaxed">"{quote}"</p>
    <div className="flex items-center gap-4">
      <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
      <div>
        <h4 className="font-bold text-primary-dark text-sm">{author}</h4>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onJoinClick={() => setIsJoinModalOpen(true)} />
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
      <EventModal isOpen={isEventModalOpen} onClose={() => setIsEventModalOpen(false)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/5 to-primary-mid/10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-dark/5 rounded-l-full blur-3xl transform translate-x-1/4" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light/20 text-primary-dark font-semibold text-sm mb-6">
                <Globe size={16} />
                <span>Building Women. Bridging Cultures.</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary-dark leading-tight mb-6">
                Shaping <span className="text-primary-mid">Influence</span>, Building Legacy.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                A women's institute committed to building inter-influential relationships across ethnicities and tribes. We connect, develop, and position women for global impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsJoinModalOpen(true)}
                  className="bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-mid transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Join the Movement <ArrowRight size={20} />
                </button>
                <a 
                  href="#programs" 
                  className="bg-white text-primary-dark border-2 border-primary-dark/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  Our Programs
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Empowered Nigerian Woman" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-light rounded-full z-0 blur-2xl opacity-50" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary-mid rounded-full z-0 blur-3xl opacity-30" />
              
              <div className="absolute bottom-8 -right-4 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://images.unsplash.com/photo-${[
                          "1531123897727-8f129e1688ce",
                          "1567532939604-b6b5b0db2604",
                          "1614644147798-f8c0fc9da7f6",
                          "1589156280159-27698a70f29e"
                        ][i-1]}?auto=format&fit=crop&q=80&w=100`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary-dark">500+ Members</p>
                    <p className="text-xs text-gray-500">Growing community</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-mid font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
              <h2 className="text-4xl font-bold text-primary-dark mb-6">A Transformed World Starts with Empowered Women</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                MATRIARK is a women's institute committed to building inter-influential relationships across ethnicities and tribes. We exist to promote leadership, social growth, and personal development among women from a nurturing, structured, and transformative perspective.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-dark/5 rounded-xl flex items-center justify-center text-primary-dark shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark mb-1">Our Vision</h4>
                    <p className="text-gray-600">A transformed world where women build strong networks, find meaningful support, and mentorship is accessible to every woman.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-dark/5 rounded-xl flex items-center justify-center text-primary-dark shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark mb-1">Our Mission</h4>
                    <p className="text-gray-600">To inspire growth in every woman we encounter, so transformation becomes inevitable.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="rounded-2xl overflow-hidden h-64">
                  <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=500" alt="Collaboration" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-primary-dark p-6 rounded-2xl text-white">
                  <p className="text-3xl font-bold mb-1">100%</p>
                  <p className="text-sm opacity-80 uppercase tracking-wider">Commitment to Growth</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 pt-8"
              >
                <div className="bg-primary-light p-6 rounded-2xl text-primary-dark">
                  <p className="text-3xl font-bold mb-1">6+</p>
                  <p className="text-sm opacity-80 uppercase tracking-wider">Core Programs</p>
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80&w=500" alt="Mentorship" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="We identify the barriers that hold women back and provide the structure to overcome them.">
            The Problem We Address
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Value Expression", desc: "Untapped talent, unvoiced ideas, and hidden influence that never reaches its potential." },
              { title: "Visible Standards", desc: "Few relatable role models to emulate and limited access to principled female leadership." },
              { title: "Financial Independence", desc: "Economic dependency that restricts choice, confidence, and long-term growth." },
              { title: "Legacy Aspiration", desc: "A survival mindset over long-term impact. Little encouragement to build beyond the present." },
              { title: "Personal Development", desc: "Growth happens by chance, not by structure. No clear path for leadership refinement." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border-l-4 border-primary-mid shadow-sm"
              >
                <h3 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section id="solution" className="py-24 bg-primary-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-mid/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading light subtitle="MATRIARK does not leave development to chance. We nurture women through structured pathways.">
            Our Solution
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Restoring Value", 
                desc: "Platforms where women can showcase talent, develop ideas, and exercise influence.",
                icon: Lightbulb
              },
              { 
                title: "Visible Standards", 
                desc: "Access to principled female mentors and ethical leadership development.",
                icon: ShieldCheck
              },
              { 
                title: "Financial Independence", 
                desc: "Financial literacy, investment planning, and cross-cultural business development.",
                icon: TrendingUp
              },
              { 
                title: "Legacy Aspiration", 
                desc: "Moving from survival to intentional intelligence and strategic leadership.",
                icon: History
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-primary-light text-primary-dark rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-white/5 p-12 rounded-3xl border border-white/10 text-center">
            <h3 className="text-2xl font-bold mb-8">What will you build? What will you leave?</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="px-6 py-3 bg-primary-light/10 rounded-full border border-primary-light/20 text-primary-light font-semibold">Intentional Intelligence</div>
              <div className="px-6 py-3 bg-primary-light/10 rounded-full border border-primary-light/20 text-primary-light font-semibold">Strategic Thinking</div>
              <div className="px-6 py-3 bg-primary-light/10 rounded-full border border-primary-light/20 text-primary-light font-semibold">Leadership Development</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section id="programs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <span className="text-primary-mid font-bold tracking-widest uppercase text-sm mb-4 block">Our Programs</span>
              <h2 className="text-4xl font-bold text-primary-dark mb-6">Structured Pathways for Growth</h2>
              <p className="text-gray-600 mb-8">
                We offer a variety of initiatives designed to connect, develop, and position women across all sectors of society.
              </p>
              <a href="#join" className="inline-flex items-center gap-2 text-primary-dark font-bold hover:gap-4 transition-all">
                Learn more about programs <ChevronRight size={20} />
              </a>
            </div>
            
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
              <ProgramCard title="Leadership Accelerator" icon={TrendingUp} />
              <ProgramCard title="Mentorship Circles" icon={Users} />
              <ProgramCard title="Inter-Tribal Summits" icon={Globe} />
              <ProgramCard title="Development Retreats" icon={Heart} />
              <ProgramCard title="Professional Partnerships" icon={Briefcase} />
              <ProgramCard title="Community Initiatives" icon={Target} />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="The foundational principles that guide every interaction and initiative at MATRIARK.">
            Our Core Values
          </SectionHeading>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard icon={Target} title="Purpose" description="Every action is driven by a clear understanding of our calling and impact." />
            <ValueCard icon={ShieldCheck} title="Integrity" description="We uphold the highest moral standards in leadership and collaboration." />
            <ValueCard icon={Users} title="Collaboration" description="Building bridges across cultures to multiply our collective influence." />
            <ValueCard icon={Heart} title="Nurture" description="Providing a supportive environment where every woman can flourish." />
            <ValueCard icon={TrendingUp} title="Influence" description="Empowering women to lead boldly and shape the future of society." />
            <ValueCard icon={History} title="Legacy" description="Thinking beyond the present to build what will remain for generations." />
          </div>
        </div>
      </section>

      {/* Why MATRIARK */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-dark rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-bold mb-10">Why MATRIARK?</h2>
              <ul className="space-y-6">
                {[
                  "Because unity multiplies influence.",
                  "Because women thrive in structured communities.",
                  "Because leadership must be cultivated intentionally.",
                  "Because cross-cultural collaboration strengthens society."
                ].map((text, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-lg"
                  >
                    <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center text-primary-dark shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    {text}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000" 
                alt="Women Unity" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary-dark/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Event Section (IWD 2026) */}
      <section className="py-24 bg-primary-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-primary-light/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-primary-mid/20">
              <Calendar size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-1 bg-primary-dark text-white rounded-full text-sm font-bold mb-6">
                Upcoming Event
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">IWD 2026: Give To Gain</h2>
              <p className="text-xl text-primary-mid font-semibold mb-8">Theme: Introducing MATRIARK</p>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Celebrating women who give to gain. Built on Purpose, Celebrating Impact. Join us as we officially introduce the MATRIARK institute and our vision for the future.
                  </p>
                  <button 
                    onClick={() => setIsEventModalOpen(true)}
                    className="bg-primary-dark text-white px-8 py-4 rounded-full font-bold hover:bg-primary-mid transition-all shadow-lg"
                  >
                    Register for Event
                  </button>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center text-primary-dark">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-bold text-primary-dark">March 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center text-primary-dark">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-bold text-primary-dark">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Hear from the women who are already part of the MATRIARK community and experiencing transformation.">
            Voices of Impact
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="MATRIARK has provided me with a structured path for leadership that I couldn't find anywhere else. The community is incredibly supportive."
              author="Amina Bello"
              role="Tech Entrepreneur"
              image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200"
            />
            <TestimonialCard 
              quote="The inter-tribal summits opened my eyes to the power of collaboration across cultures. We are stronger when we build together."
              author="Chioma Okoro"
              role="Social Advocate"
              image="https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?auto=format&fit=crop&q=80&w=200"
            />
            <TestimonialCard 
              quote="Mentorship at MATRIARK is not just advice; it's a partnership for growth. I've seen my influence grow exponentially in just a year."
              author="Fatima Yusuf"
              role="Corporate Executive"
              image="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200"
            />
          </div>
        </div>
      </section>

      {/* Join the Movement */}
      <section id="join" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading subtitle="Whether as a member, mentor, sponsor, volunteer or partner, MATRIARK invites you to build a future where women lead boldly.">
            Join the Movement
          </SectionHeading>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { label: "Become a Member", action: () => setIsJoinModalOpen(true) },
              { label: "Join as a Mentor", action: () => setIsJoinModalOpen(true) },
              { label: "Sponsor an Initiative", action: () => setIsJoinModalOpen(true) },
              { label: "Volunteer with Us", action: () => setIsJoinModalOpen(true) }
            ].map((cta, i) => (
              <motion.button 
                key={i}
                onClick={cta.action}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 bg-white border-2 border-primary-dark/10 rounded-2xl font-bold text-primary-dark hover:border-primary-mid hover:text-primary-mid transition-all shadow-sm"
              >
                {cta.label}
              </motion.button>
            ))}
          </div>
          
          <div className="mt-16">
            <p className="text-2xl font-bold text-primary-dark italic">"Together, we shape influence. Together, we build legacy."</p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-primary-dark mb-8">Let's make it happen</h2>
              <p className="text-gray-600 mb-12 text-lg">
                Have questions or want to partner with us? Reach out and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary-mid shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark">Email Us</h4>
                    <p className="text-gray-600">Matriark.info@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary-mid shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark">Call Us</h4>
                    <p className="text-gray-600">+234 802 312 7234</p>
                    <p className="text-gray-600">+234 901 429 8530</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary-mid shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark">Visit Us</h4>
                    <p className="text-gray-600">5b Wole Ariyo Street, Admiralty Way, Lekki Phase 1, Lagos.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will get back to you soon.'); (e.target as HTMLFormElement).reset(); }}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/20 outline-none transition-all" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/20 outline-none transition-all" placeholder="jane@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/20 outline-none transition-all bg-white">
                    <option>General Inquiry</option>
                    <option>Membership</option>
                    <option>Mentorship</option>
                    <option>Sponsorship</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full bg-primary-dark text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-mid transition-all shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.svg" alt="MATRIARK Logo" className="w-8 h-8 brightness-0 invert" />
                <span className="text-2xl font-bold tracking-tighter">MATRIARK</span>
              </div>
              <p className="text-white/70 max-w-sm mb-6">
                Building Women. Bridging Cultures. Shaping Influence. We inspire growth in every woman we encounter, so transformation becomes inevitable.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light hover:text-primary-dark transition-all cursor-pointer">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light hover:text-primary-dark transition-all cursor-pointer">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light hover:text-primary-dark transition-all cursor-pointer">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light hover:text-primary-dark transition-all cursor-pointer">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#who-we-are" className="hover:text-primary-light transition-colors">Who We Are</a></li>
                <li><a href="#programs" className="hover:text-primary-light transition-colors">Our Programs</a></li>
                <li><a href="#values" className="hover:text-primary-light transition-colors">Core Values</a></li>
                <li><a href="#join" className="hover:text-primary-light transition-colors">Join the Movement</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3"><Mail size={16} /> Matriark.info@gmail.com</li>
                <li className="flex items-center gap-3"><Phone size={16} /> +234 802 312 7234</li>
                <li className="flex items-center gap-3"><MapPin size={16} /> Lekki Phase 1, Lagos</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} MATRIARK Women's Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
