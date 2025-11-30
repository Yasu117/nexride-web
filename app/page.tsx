import Image from "next/image";
import Link from "next/link";
import HeroNode from '@/components/features/HeroNode';
import WorksDock from '@/components/features/WorksDock';
import BusinessSection from '@/components/features/BusinessSection';
import { ArrowRight, TrendingUp, Zap, Target } from 'lucide-react';

import ContactForm from '@/components/features/ContactForm';

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[75vh] md:h-screen overflow-hidden">
        <HeroNode />
        <div className="relative z-10 flex flex-col items-start justify-end w-full h-full pointer-events-none select-none px-6 pb-32 md:px-20 md:pb-48 text-left">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">
              For the better
            </h1>
            <div className="text-sm md:text-lg font-medium tracking-widest text-gray-300 space-y-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <p>社会をより良く。</p>
              <p>お客様と共に成長を生み出す会社。</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* Desktop: Center, Visual only */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 opacity-70 text-white pointer-events-none">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20 overflow-hidden">
            <div className="w-full h-full bg-white animate-scroll-line"></div>
          </div>
        </div>

        {/* Mobile/Tablet: Bottom Right, Clickable Link */}
        <Link
          href="#about"
          className="md:hidden absolute bottom-20 right-6 flex flex-col items-center gap-2 opacity-80 text-white z-20"
        >
          <span className="text-[10px] uppercase tracking-widest font-light">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
            <div className="w-full h-full bg-white animate-scroll-line"></div>
          </div>
        </Link>
      </section>

      {/* About / Mission Section (Link to /about) */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-[#0F4C5C]/5 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0F4C5C] to-[#57C7D4]">
            For the better, <br />from one connection.
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">ひとつのつながりから、未来は良くなる。</p>
          <p className="text-lg md:text-xl text-slate-600 leading-loose mb-12">
            社会をより良くするために、この会社は生まれました。<br />
            課題の解決から価値創造まで、<br />
            すべてのステークホルダーに持続的な成長を届けます。
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 text-[#0F4C5C] font-bold hover:gap-4 transition-all">
            About Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <BusinessSection />

      {/* Works Section */}
      <section className="bg-slate-50">
        <WorksDock />
        <div className="text-center pb-16">
          <Link href="/cases" className="inline-flex items-center gap-2 text-[#0F4C5C] font-bold hover:gap-4 transition-all">
            事例・実績 <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Recruit Section (Link to /recruit) */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center p-16 rounded-3xl bg-gradient-to-r from-[#0F4C5C]/10 to-[#57C7D4]/10 border border-[#57C7D4]/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            採用情報
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            私たちと一緒に、社会をより良くする未来を創りませんか？<br />
            エンジニア、デザイナー、ディレクター募集中。
          </p>
          <Link href="/recruit" className="inline-block px-8 py-4 rounded-full bg-[#0F4C5C] text-white font-bold text-lg transition-transform hover:-translate-y-1 hover:shadow-lg">
            採用情報
          </Link>
        </div>
      </section>

      {/* Contact Section (Anchor) */}
      <section id="contact" className="py-8 px-4 bg-gradient-to-b from-white to-slate-100 scroll-mt-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
            お問い合わせ
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

