'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
    const pathname = usePathname();

    if (pathname === '/ai-dev-works') return null;

    return (
        <footer className="footer bg-slate-50 text-slate-900 py-12 border-t border-slate-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="footer-logo">
                        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
                            <Image src="/nexride-logo.png" alt="NexRide" width={120} height={36} className="h-9 w-auto object-contain" />
                        </Link>
                    </div>
                    <nav className="footer-nav flex gap-6 flex-wrap justify-center">
                        <Link href="/services" className="text-sm text-slate-600 hover:text-[#0F4C5C] transition-colors">事業内容</Link>
                        <Link href="/cases" className="text-sm text-slate-600 hover:text-[#0F4C5C] transition-colors">事例・実績</Link>
                        <Link href="/about" className="text-sm text-slate-600 hover:text-[#0F4C5C] transition-colors">About us</Link>
                        <Link href="/recruit" className="text-sm text-slate-600 hover:text-[#0F4C5C] transition-colors">採用情報</Link>
                        <Link href="/privacy" className="text-sm text-slate-600 hover:text-[#0F4C5C] transition-colors">プライバシーポリシー</Link>
                        <Link href="/#contact" className="text-sm text-slate-600 hover:text-[#0F4C5C] transition-colors">お問い合わせ</Link>
                    </nav>
                </div>
                <div className="text-center text-xs text-slate-500 mt-8">
                    &copy; {new Date().getFullYear()} NexRide Inc. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
