import React from 'react';
import Link from 'next/link';
import { Code2, Users, RefreshCw, ArrowRight, LucideIcon } from 'lucide-react';

interface Business {
    id: number;
    title: string;
    serviceName: string;
    description: string;
    icon: React.ReactElement<{ className?: string }>;
    colorClass: string;
    bgClass: string;
    gradient: string;
    link?: string;
}

const businesses: Business[] = [
    {
        id: 1,
        title: "システム開発 / Web開発",
        serviceName: "AI-Dev.Works",
        description: "最先端のAI技術を活用した効率的かつ高品質なシステム・Web開発を提供します。",
        icon: <Code2 />,
        colorClass: "text-blue-600",
        bgClass: "bg-blue-50",
        gradient: "from-blue-600 to-cyan-500",
        link: "/ai-dev-works"
    },
    {
        id: 2,
        title: "SES事業 / 人材紹介エージェント",
        serviceName: "常駐Plus10エージェント",
        description: "優秀なエンジニアと企業を繋ぎ、プロジェクトの成功を強力にバックアップします。",
        icon: <Users />,
        colorClass: "text-purple-600",
        bgClass: "bg-purple-50",
        gradient: "from-purple-600 to-pink-500",
        link: "/jyouchu-plus10"
    },
    {
        id: 3,
        title: "デジタル業務再設計支援",
        serviceName: "Real DX",
        description: "業務プロセスの抜本的な見直しとデジタル化により、真のDXを実現します。",
        icon: <RefreshCw />,
        colorClass: "text-emerald-600",
        bgClass: "bg-emerald-50",
        gradient: "from-emerald-600 to-teal-500",
        link: "/real-dx"
    }
];

export default function BusinessSection() {
    return (
        <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden flex flex-col justify-center scroll-mt-32">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-50/50 to-purple-50/50 blur-3xl opacity-60" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-50/50 to-teal-50/50 blur-3xl opacity-60" />
            </div>

            <div className="container mx-auto px-4 relative z-10 h-full flex flex-col">
                <div className="text-center mb-8 flex-none">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-xs mb-2 block">Our Services</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                        事業内容
                    </h2>
                    <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                        テクノロジーと人の力を融合させ、ビジネスの成長を加速させる3つのコア事業。
                    </p>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-4">
                    {businesses.map((business, index) => {
                        const CardContent = (
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                {/* Text Content - Left Side */}
                                <div className="flex-1 w-full md:w-3/5 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-8 h-1 bg-gradient-to-r ${business.gradient} rounded-full`} />
                                        <span className="text-black font-bold tracking-wide text-xs">
                                            {business.title}
                                        </span>
                                    </div>

                                    <div className="flex items-end gap-4">
                                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                                            {business.serviceName}
                                        </h3>
                                        <div className="hidden md:inline-flex items-center text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors pb-1">
                                            <span>詳しくみる</span>
                                            <ArrowRight className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>

                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                        {business.description}
                                    </p>
                                </div>

                                {/* Visual Content - Right Side */}
                                <div className="w-full md:w-2/5 h-24 md:h-28 relative rounded-lg overflow-hidden bg-slate-50 group-hover:bg-white transition-colors border border-slate-100 group-hover:border-slate-200">
                                    <div className={`absolute inset-0 opacity-10 bg-gradient-to-r ${business.gradient}`} />

                                    {/* Specific UI Mockups based on ID */}
                                    {business.id === 1 && (
                                        // AI-Dev.Works: Code Editor Style - Full Fill
                                        <div className="absolute inset-0 flex flex-col bg-slate-900/5">
                                            {/* Window Header */}
                                            <div className="flex gap-1.5 p-3 border-b border-slate-200/50 bg-white/40 backdrop-blur-sm">
                                                <div className="w-2 h-2 rounded-full bg-red-400" />
                                                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                                <div className="w-2 h-2 rounded-full bg-green-400" />
                                            </div>
                                            {/* Code Area */}
                                            <div className="flex-1 p-4 space-y-2 opacity-90 overflow-hidden relative">
                                                <div className="flex gap-3">
                                                    <div className="w-8 h-1.5 bg-purple-400/80 rounded-full" />
                                                    <div className="w-20 h-1.5 bg-blue-400/80 rounded-full" />
                                                </div>
                                                <div className="w-32 h-1.5 bg-slate-400/60 rounded-full ml-6" />
                                                <div className="flex gap-3 ml-6">
                                                    <div className="w-12 h-1.5 bg-blue-400/80 rounded-full" />
                                                    <div className="w-16 h-1.5 bg-green-400/80 rounded-full" />
                                                </div>
                                                <div className="w-24 h-1.5 bg-slate-400/60 rounded-full ml-6" />
                                                <div className="w-28 h-1.5 bg-slate-400/60 rounded-full" />

                                                {/* Floating AI Badge - Larger & Corner */}
                                                <div className="absolute bottom-3 right-3 bg-white shadow-md border border-blue-100 rounded-lg px-3 py-1.5 flex items-center gap-2 z-10">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                                    <span className="text-[10px] font-bold text-blue-600">AI Generating...</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {business.id === 2 && (
                                        // SES: Profile Cards Style - Full Fill
                                        <div className="absolute inset-0 overflow-hidden">
                                            {/* Background Card */}
                                            <div className="absolute top-1/2 -translate-y-1/2 right-[-10%] scale-90 opacity-40 bg-white border border-slate-200 p-4 rounded-xl w-48 h-32 shadow-sm rotate-6" />

                                            {/* Main Card - Centered & Large */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-white border border-purple-100 p-4 rounded-xl shadow-md flex gap-4 items-center">
                                                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 border border-purple-100">
                                                    <Users className="w-6 h-6 text-purple-500" />
                                                </div>
                                                <div className="space-y-2 flex-1 min-w-0">
                                                    <div className="w-24 h-2.5 bg-slate-800 rounded-full" />
                                                    <div className="flex gap-2">
                                                        <div className="w-10 h-2 bg-purple-200 rounded-full" />
                                                        <div className="w-8 h-2 bg-pink-200 rounded-full" />
                                                        <div className="w-6 h-2 bg-slate-200 rounded-full" />
                                                    </div>
                                                </div>
                                                {/* Match Badge */}
                                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-white rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {business.id === 3 && (
                                        // Real DX: Dashboard Style - Full Fill
                                        <div className="absolute inset-0 flex items-center justify-between px-8 gap-6 bg-emerald-50/30">
                                            {/* Chart Widget - Expanded */}
                                            <div className="flex-1 h-full flex flex-col justify-center pt-2">
                                                <div className="flex items-end gap-2 h-16 w-full">
                                                    <div className="flex-1 bg-emerald-200 rounded-t-sm h-[40%]" />
                                                    <div className="flex-1 bg-emerald-300 rounded-t-sm h-[60%]" />
                                                    <div className="flex-1 bg-emerald-400 rounded-t-sm h-[50%]" />
                                                    <div className="flex-1 bg-emerald-500 rounded-t-sm h-[85%]" />
                                                    <div className="flex-1 bg-emerald-600 rounded-t-sm h-[70%]" />
                                                </div>
                                                <div className="w-full h-0.5 bg-slate-200 mt-1" />
                                            </div>

                                            {/* Stat Circle - Larger */}
                                            <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-sm border border-emerald-100">
                                                <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="75, 100" strokeLinecap="round" />
                                                </svg>
                                                <div className="absolute flex flex-col items-center">
                                                    <span className="text-[10px] font-bold text-slate-400 leading-none">KPI</span>
                                                    <span className="text-xs font-black text-emerald-600 leading-none">UP</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );

                        if (business.link) {
                            return (
                                <Link key={business.id} href={business.link} className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 block">
                                    {CardContent}
                                </Link>
                            );
                        }

                        return (
                            <div key={business.id} className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300">
                                {CardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
