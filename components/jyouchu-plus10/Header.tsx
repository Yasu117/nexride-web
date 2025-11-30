'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/jyouchu-plus10" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 bg-gradient-to-br from-primary-500 to-teal-700 rounded-lg flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-primary-500/50 transition-all">
                        <span className="text-lg">+</span>
                    </div>
                    <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                        常駐<span className="text-primary-500">Plus10</span>エージェント
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { label: '特徴', id: 'features' },
                        { label: '案件例', id: 'jobs' },
                        { label: 'ご利用の流れ', id: 'flow' },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={`#${item.id}`}
                            className={`text-sm font-medium hover:text-primary-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button variant={isScrolled ? "default" : "gold"} size="sm" asChild>
                        <Link href="#contact">無料登録する</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
                    ) : (
                        <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 p-4 md:hidden flex flex-col gap-4"
                    >
                        {[
                            { label: '特徴', id: 'features' },
                            { label: '案件例', id: 'jobs' },
                            { label: 'ご利用の流れ', id: 'flow' },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={`#${item.id}`}
                                className="text-slate-600 font-medium py-2 border-b border-slate-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button className="w-full" variant="default" asChild>
                            <Link href="#contact">無料登録する</Link>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
