import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg shadow-2xl z-50 border-b border-amber-400/20">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <a href="/" className="h-12 w-64 relative block">
            <Image
              src="https://i.etsystatic.com/54402262/r/il/93be58/7382092583/il_fullxfull.7382092583_pf8d.jpg"
              alt="Tesfa Marketing Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </a>
          <nav className="hidden md:flex space-x-10">
            <a href="/" className="text-gray-300 font-medium hover:text-amber-400 transition">Home</a>
            <a href="/#services" className="text-gray-300 font-medium hover:text-amber-400 transition">Services</a>
            <a href="/#about" className="text-gray-300 font-medium hover:text-amber-400 transition">About</a>
            <a href="/#testimonials" className="text-gray-300 font-medium hover:text-amber-400 transition">Testimonials</a>
            <a href="/#contact" className="text-gray-300 font-medium hover:text-amber-400 transition">Contact</a>
          </nav>
          <a href="/" className="md:hidden text-amber-400 flex items-center gap-2">
            <ArrowLeft className="w-8 h-8" /> Back
          </a>
        </div>
      </header>

      {/* Portfolio Title */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-amber-400 mb-8">Our Portfolio</h1>
          <p className="text-xl text-gray-300">Selected works showcasing creativity, strategy, and results.</p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-6 max-w-5xl space-y-32">

          {/* Project 1: Social Media Design for Z Beer & Anbesa Beer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Image
                src="https://mir-s3-cdn-cf.behance.net/projects/404/048c6c232942913.Y3JvcCwxODM4LDE0MzgsNjIzLDE1NA.jpg"
                alt="Z Beer & Anbesa Beer Social Posts"
                width={1838}
                height={1438}
                className="rounded-xl shadow-2xl"
              />
              <Image
                src="https://mir-s3-cdn-cf.behance.net/projects/404/87160b233146835.Y3JvcCwzNTEzLDI3NDgsMCww.jpg"
                alt="Anbesa Beer Campaign"
                width={3513}
                height={2748}
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-amber-400 mb-6">Social Media Design</h2>
              <p className="text-gray-400 mb-4">Client: Gudina Studio<br />Date: 23 - 12 - 2023</p>
              <h3 className="text-2xl font-semibold text-amber-300 mb-4">Social Media Design for Z Beer & Anbesa Beer - Ethiopia</h3>
              <p className="text-gray-300 leading-relaxed">
                In this project, we collaborated with Gudina Studio to manage social media design for two iconic beer brands in Ethiopia. The focus was on creating engaging, visually appealing content that reflected each brand's identity and resonated with their target audience.<br /><br />
                The focus was on creating engaging, visually appealing content that reflected each brand's identity and resonated with their target audience. Designs emphasized cultural relevance, festive themes, and vibrant campaigns to drive engagement and awareness. By coordinating closely with Red Communication, we ensured that all outputs aligned with the overarching brand strategy while maintaining consistency and creativity.<br /><br />
                The collaboration resulted in high-quality social media visuals that strengthened brand visibility, improved audience interaction, and contributed to a powerful visual storytelling strategy.
              </p>
            </div>
          </div>

          <div className="text-center text-6xl text-amber-400/30">+</div>

          {/* Project 2: TikTok Spotlight for TECNO Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-amber-400 mb-6">Notable Projects and Companies</h2>
              <p className="text-gray-400 mb-4">Client: TECNO MOBILE<br />Date: 23 - 06 - 2023</p>
              <h3 className="text-2xl font-semibold text-amber-300 mb-4">TikTok Spotlight</h3>
              <p className="text-gray-300 leading-relaxed">
                Tecno set out to grow its TikTok following and increase engagement with a consistent content calendar and a spotlight campaign. The campaign featured consistent content, trending challenges, collaborations with influencers, and timely responses to audience interactions.<br /><br />
                As a result, Tecno's TikTok following grew from 58.9K to 150.8K during the campaign, with engagement rates increasing significantly due to the more consistent and relevant content. The campaign demonstrated that alignment with trends, focus on engagement, and agile adjustments based on performance metrics are key drivers of TikTok growth. This strategy helped Tecno successfully accelerate its TikTok presence, building a stronger, more interactive community.
              </p>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <Image
                src="https://www.tiktok.com/api/img/?itemId=7374092951305178373&location=0&aid=1988"
                alt="TECNO Mobile TikTok Campaign"
                width={1920}
                height={1080}
                className="rounded-xl shadow-2xl"
              />
              <Image
                src="https://www.tiktok.com/api/img/?itemId=7358529569004981509&location=0&aid=1988"
                alt="TECNO Spotlight Results"
                width={1920}
                height={1080}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

          <div className="text-center text-6xl text-amber-400/30">+</div>

          {/* Project 3: Branding for Ezer Consultancy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Image
                src="https://tint.creativemarket.com/x6t9We2IM6hFJLC-v2K6L3F3HF7CkdU6VorYY9Kfk_E/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzU0MC81NDA0LzU0MDQ0NjMvMi1vLmpwZw?1542714006"
                alt="Ezer Consultancy Logo Mockups"
                width={1200}
                height={800}
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-amber-400 mb-6">Branding Design</h2>
              <p className="text-gray-400 mb-4">Client: Ezer Consultancy<br />Date: 23 - 08 - 2024</p>
              <p className="text-gray-300 leading-relaxed">
                Ezer Consultancy is a professional services company dedicated to simplifying the process of educational and tourist visa applications. With a strong emphasis on guidance, reliability, and personalized support, the company empowers clients to achieve their study and travel aspirations.<br /><br />
                For this project, I developed a cohesive visual identity that communicates trust, professionalism, and a modern global perspective. The branding reflects Ezer Consultancy's role as a dependable partner in navigating international opportunities, while presenting the company with clarity and confidence across all platforms.
              </p>
            </div>
          </div>

          <div className="text-center text-6xl text-amber-400/30">+</div>

          {/* Project 4: Branding for LOZA Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-amber-400 mb-6">Branding Design</h2>
              <p className="text-gray-400 mb-4">Client: LOZA Design<br />Date: 23 - 08 - 2024</p>
              <h3 className="text-2xl font-semibold text-amber-300 mb-4">Brand Identity Development for LOZA Design</h3>
              <p className="text-gray-300 leading-relaxed">
                LOZA Design is a fashion brand devoted to preserving and celebrating the beauty of traditional Ethiopian culture through its finely crafted dress collections. Each piece embodies the richness of Ethiopian heritage while embracing timeless elegance, blending tradition with contemporary sophistication and empowering the modern Ethiopian woman.
              </p>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <Image
                src="https://worldbranddesign.com/wp-content/uploads/2021/05/4870BE58-3CB5-42CD-9775-A7E43A3C77EA.jpeg"
                alt="LOZA Design Mockups"
                width={1280}
                height={853}
                className="rounded-xl shadow-2xl"
              />
              <Image
                src="https://mir-s3-cdn-cf.behance.net/projects/404/ac86c4239618279.Y3JvcCwyMTMwLDE2NjYsMjYzLDEyNg.jpg"
                alt="LOZA Packaging & Identity"
                width={2130}
                height={1666}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 border-t border-amber-400/20 mt-20">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p className="text-lg">&copy; 2025 Tesfa Marketing. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}