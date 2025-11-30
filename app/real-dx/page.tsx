import React from 'react';
import Link from 'next/link';
import { RefreshCw, ArrowLeft } from 'lucide-react';

export default function RealDXPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full text-center space-y-8">
                <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100">
                        <RefreshCw className="w-10 h-10 text-emerald-600 animate-spin-slow" style={{ animationDuration: '3s' }} />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-slate-900">
                        Real DX
                    </h1>
                    <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold tracking-wide">
                        COMING SOON
                    </div>
                    <p className="text-slate-600 text-lg">
                        現在、サービスページを準備中です。<br />
                        公開まで今しばらくお待ちください。
                    </p>
                </div>

                <div className="pt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        トップページに戻る
                    </Link>
                </div>
            </div>
        </div>
    );
}
