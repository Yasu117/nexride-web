'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    if (pathname === '/ai-dev-works') return null;

    return (
        <header className="fixed top-4 left-0 right-0 mx-auto w-[95%] max-w-7xl z-50">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200/50 transition-all duration-300">
                <div className="px-4 md:px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center ml-6 hover:opacity-90 transition-opacity">
                        <Image src="/nexride-logo.png" alt="NexRide" width={120} height={36} className="h-9 w-auto object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 items-center">
                        <Link href="/#services" className="text-sm font-bold text-slate-600 hover:text-[#0F4C5C] transition-colors">事業内容</Link>
                        <Link href="/cases" className="text-sm font-bold text-slate-600 hover:text-[#0F4C5C] transition-colors">事例・実績</Link>
                        <Link href="/about" className="text-sm font-bold text-slate-600 hover:text-[#0F4C5C] transition-colors">About us</Link>
                        <Link href="/company" className="text-sm font-bold text-slate-600 hover:text-[#0F4C5C] transition-colors">会社概要</Link>
                        <Link href="/recruit" className="text-sm font-bold text-slate-600 hover:text-[#0F4C5C] transition-colors">採用情報</Link>
                        <Link href="/#contact" className="px-6 py-2 bg-[#0F4C5C] text-white text-sm font-bold rounded-lg hover:bg-[#0a3540] transition-colors shadow-md">
                            お問い合わせ
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-900 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 mt-2 w-full bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/50 py-4 px-4 flex flex-col gap-4 shadow-xl">
                    <Link href="/#services" className="text-slate-900 font-bold py-2 border-b border-slate-100" onClick={() => setIsMenuOpen(false)}>事業内容</Link>
                    <Link href="/cases" className="text-slate-900 font-bold py-2 border-b border-slate-100" onClick={() => setIsMenuOpen(false)}>事例・実績</Link>
                    <Link href="/about" className="text-slate-900 font-bold py-2 border-b border-slate-100" onClick={() => setIsMenuOpen(false)}>About us</Link>
                    <Link href="/company" className="text-slate-900 font-bold py-2 border-b border-slate-100" onClick={() => setIsMenuOpen(false)}>会社概要</Link>
                    <Link href="/recruit" className="text-slate-900 font-bold py-2 border-b border-slate-100" onClick={() => setIsMenuOpen(false)}>採用情報</Link>
                    <Link href="/#contact" className="bg-[#0F4C5C] text-white font-bold py-3 text-center rounded-lg shadow-md mt-2" onClick={() => setIsMenuOpen(false)}>
                        お問い合わせ
                    </Link>
                </div>
            )}
        </header>
    )
}
