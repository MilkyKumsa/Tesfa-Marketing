"use client";

import Image from 'next/image';
import { ReactTyped } from 'react-typed';
import { 
  Monitor, 
  Palette, 
  MessageSquare, 
  Globe, 
  Megaphone, 
  Video, 
  Star, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white scroll-smooth">
      
      {/* ===== HERO SECTION - Enhanced with Attractive Background ===== */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Attractive Background - First Option (Glowing Gold & Blue Waves) */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://t3.ftcdn.net/jpg/15/34/32/66/360_F_1534326628_rqfWModjO9N0kBHnJnfuClkGZp9N3zx6.jpg"
            alt="Premium futuristic gold and blue waves background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/60 to-gray-900/90" />
        </div>

        {/* Fixed Navigation */}
        <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg shadow-2xl z-50 border-b border-amber-400/20">
          <div className="container mx-auto px-6 py-5 flex justify-between items-center">
            <a href="#home" className="h-12 w-64 relative block">
              <Image
                src="https://i.etsystatic.com/54402262/r/il/93be58/7382092583/il_fullxfull.7382092583_pf8d.jpg"
                alt="Tesfa Marketing Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </a>
            <nav className="hidden md:flex space-x-10">
              <a href="#home" className="text-gray-300 font-medium hover:text-amber-400 transition">Home</a>
              <a href="#services" className="text-gray-300 font-medium hover:text-amber-400 transition">Services</a>
              <a href="#about" className="text-gray-300 font-medium hover:text-amber-400 transition">About</a>
              <a href="#testimonials" className="text-gray-300 font-medium hover:text-amber-400 transition">Testimonials</a>
              <a href="#contact" className="text-gray-300 font-medium hover:text-amber-400 transition">Contact</a>
            </nav>
            <button className="md:hidden text-3xl text-amber-400">☰</button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="container mx-auto px-6 text-center z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-fadeInUp">
            Elevate Your Brand with
          </h2>

          <div className="text-5xl md:text-7xl font-extrabold mb-12 animate-fadeInUp delay-300">
            <ReactTyped
              strings={['Creative Digital Excellence']}
              typeSpeed={70}
              backSpeed={50}
              backDelay={3000}
              loop={false}
              showCursor={true}
              cursorChar="|"
              className="text-amber-400"
            />
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed animate-fadeInUp delay-800">
            Full-service digital marketing agency delivering measurable results through strategy,<br className="hidden md:block" />
            creativity, and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fadeInUp delay-1200">
            <a href="/portfolio" className="bg-amber-400 text-gray-900 px-12 py-6 rounded-full font-bold text-lg hover:bg-amber-300 transition-all duration-300 shadow-2xl transform hover:scale-110 hover:shadow-amber-400/60">
              See Some of Our Works
            </a>
            <a href="#services" className="border-2 border-amber-400 text-amber-400 px-12 py-6 rounded-full font-bold text-lg hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
              Explore Services →
            </a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-24 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-amber-400 mb-20">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="bg-gray-900/80 p-10 rounded-2xl border border-gray-700 hover:border-amber-400/60 transition-all duration-300 group">
              <Monitor className="w-20 h-20 text-amber-400 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Social Media Management</h3>
              <p className="text-gray-300 leading-relaxed">Strategic content planning, posting, community engagement, and growth across all major platforms.</p>
            </div>
            <div className="bg-gray-900/80 p-10 rounded-2xl border border-gray-700 hover:border-amber-400/60 transition-all duration-300 group">
              <Palette className="w-20 h-20 text-amber-400 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Branding & Design</h3>
              <p className="text-gray-300 leading-relaxed">Your brand identity is the foundation of your success. We create distinctive logos, color palettes, and guidelines that connect emotionally with your audience.</p>
            </div>
            <div className="bg-gray-900/80 p-10 rounded-2xl border border-gray-700 hover:border-amber-400/60 transition-all duration-300 group">
              <MessageSquare className="w-20 h-20 text-amber-400 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Content Creation</h3>
              <p className="text-gray-300 leading-relaxed">Engaging blog posts, videos, infographics, and copy that tells your story and converts visitors.</p>
            </div>
            <div className="bg-gray-900/80 p-10 rounded-2xl border border-gray-700 hover:border-amber-400/60 transition-all duration-300 group">
              <Globe className="w-20 h-20 text-amber-400 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Website Design & Development</h3>
              <p className="text-gray-300 leading-relaxed">Beautiful, fast, responsive websites built for performance, SEO, and conversions.</p>
            </div>
            <div className="bg-gray-900/80 p-10 rounded-2xl border border-gray-700 hover:border-amber-400/60 transition-all duration-300 group">
              <Megaphone className="w-20 h-20 text-amber-400 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Digital Advertising</h3>
              <p className="text-gray-300 leading-relaxed">Targeted Google Ads, Meta Ads, and retargeting campaigns with maximum ROI.</p>
            </div>
            <div className="bg-gray-900/80 p-10 rounded-2xl border border-gray-700 hover:border-amber-400/60 transition-all duration-300 group">
              <Video className="w-20 h-20 text-amber-400 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Video Production</h3>
              <p className="text-gray-300 leading-relaxed">Professional commercials, explainer videos, social reels, and corporate films from concept to delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-amber-400 mb-20">About Tesfa Marketing</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <Image
                src="https://cdn.prod.website-files.com/64d5a3ffa7b505860e94b3bc/6877437c12c6dafc8ef968d3_64f85a32d5009b4823cc654f_outsoucing-digital-marketing-team-working-1024x574.jpeg"
                alt="Tesfa Marketing Team"
                width={1024}
                height={574}
                className="rounded-2xl shadow-2xl border-4 border-amber-400/30"
              />
            </div>
            <div className="space-y-6 text-lg text-gray-300">
              <p>Founded with a passion for digital excellence, <span className="text-amber-400 font-semibold">Tesfa Marketing</span> is a premium full-service agency based in Addis Ababa, Ethiopia.</p>
              <p>We combine creative vision with data-driven strategy to deliver exceptional results for brands across industries.</p>
              <p>Our team of strategists, designers, developers, and marketers are committed to transparency, innovation, and building long-term partnerships that drive real business growth.</p>
              <p className="text-amber-400 font-bold text-xl">Your success is our mission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section id="testimonials" className="py-24 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-amber-400 mb-20">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="bg-gray-900/90 p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/60 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center">
              <Image src="https://st3.depositphotos.com/1000816/17973/i/450/depositphotos_179733424-stock-photo-portrait-of-an-african-american.jpg" alt="Michael Abebe" width={400} height={400} className="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-amber-400/50" />
              <div className="flex justify-center mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />))}</div>
              <p className="text-gray-300 italic mb-6">"Tesfa Marketing completely transformed our brand identity and digital presence. Their creativity and strategic approach delivered exceptional results."</p>
              <p className="font-bold text-amber-400">Michael Abebe</p>
              <p className="text-sm text-gray-400">CEO, EthioMart</p>
            </div>
            <div className="bg-gray-900/90 p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/60 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center">
              <Image src="https://thumbs.dreamstime.com/b/portrait-business-woman-office-confidence-leader-space-public-relations-happy-empowerment-portrait-business-402757398.jpg" alt="Helen Getachew" width={400} height={400} className="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-amber-400/50" />
              <div className="flex justify-center mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />))}</div>
              <p className="text-gray-300 italic mb-6">"Top-notch digital campaigns and outstanding customer service. Our ROI has never been better thanks to their expertise."</p>
              <p className="font-bold text-amber-400">Helen Getachew</p>
              <p className="text-sm text-gray-400">Marketing Director, Selam Bank</p>
            </div>
            <div className="bg-gray-900/90 p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/60 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center">
              <Image src="https://st2.depositphotos.com/10313122/45222/i/450/depositphotos_452223652-stock-photo-portrait-successful-young-african-businessman.jpg" alt="Dawit Lemma" width={400} height={400} className="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-amber-400/50" />
              <div className="flex justify-center mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />))}</div>
              <p className="text-gray-300 italic mb-6">"Exceptional results and creative flair! They turned our vision into reality with stunning designs and powerful campaigns."</p>
              <p className="font-bold text-amber-400">Dawit Lemma</p>
              <p className="text-sm text-gray-400">Founder, TechFlow</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-amber-400 mb-20">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            <div className="order-2 lg:order-1">
              <Image src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-21978.jpg" alt="Let's Connect - Contact Illustration" width={800} height={600} className="rounded-2xl shadow-2xl border-4 border-amber-400/30" />
            </div>
            <div className="order-1 lg:order-2 bg-gray-900/70 backdrop-blur-md p-10 rounded-2xl border border-amber-400/30">
              <h3 className="text-3xl font-bold text-amber-400 mb-8 text-center">Let's Connect</h3>
              <form className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition" required />
                <input type="email" placeholder="Your Email" className="w-full px-6 py-4 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition" required />
                <textarea placeholder="Your Message" rows={6} className="w-full px-6 py-4 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition resize-none" required></textarea>
                <button type="submit" className="w-full bg-amber-400 text-gray-900 py-5 rounded-lg font-bold text-xl hover:bg-amber-300 transition shadow-xl transform hover:scale-105">
                  Send Message
                </button>
              </form>
              <div className="mt-10 space-y-4 text-center text-gray-300">
                <p className="flex items-center justify-center gap-3"><Mail className="w-6 h-6 text-amber-400" /> info@tesfamarketing.com</p>
                <p className="flex items-center justify-center gap-3"><Phone className="w-6 h-6 text-amber-400" /> +251 911 234 567</p>
                <p className="flex items-center justify-center gap-3"><MapPin className="w-6 h-6 text-amber-400" /> Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black py-10 border-t border-amber-400/20">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p className="text-lg">&copy; 2025 Tesfa Marketing. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}