import React from 'react';
import Link from 'next/link';
import { Code2, Users, RefreshCw, ArrowRight, LucideIcon, Briefcase, ExternalLink } from 'lucide-react';

interface SubService {
    name: string;
    description: string;
    link: string;
    isExternal?: boolean;
}

interface Business {
    id: number;
    title: string;
    description: string;
    icon: React.ReactElement<{ className?: string }>;
    gradient: string;
    // For single service card
    serviceName?: string;
    link?: string;
    // For multi-service card
    subServices?: SubService[];
}

const businesses: Business[] = [
    {
        id: 3,
        title: "デジタル業務再設計支援",
        serviceName: "Nexus Consulting",
        description: "業務プロセスの抜本的な見直しとデジタル化により、真のDXを実現します。",
        icon: <RefreshCw />,
        gradient: "from-emerald-600 to-teal-500",
        link: "/real-dx"
    },
    {
        id: 2,
        title: "SES事業 / 人材紹介エージェント",
        description: "エンジニアと企業の最適なマッチングを実現し、プロジェクトの成功とキャリアアップを支援します。",
        icon: <Users />,
        gradient: "from-purple-600 to-pink-500",
        subServices: [
            {
                name: "FreelanceBox",
                description: "エンジニアの市場価値を最大化する案件紹介プラットフォーム",
                link: "https://www.freelancebox.jp/",
                isExternal: true
            },
            {
                name: "常駐Plus10エージェント",
                description: "常駐エンジニアの価値を正当に評価。月額単価10万円UPを保証するエージェント。",
                link: "/jyouchu-plus10"
            }
        ]
    },
    {
        id: 1,
        title: "システム開発 / Web開発",
        serviceName: "AI-Dev.Works",
        description: "最先端のAI技術を活用した効率的かつ高品質なシステム・Web開発を提供します。",
        icon: <Code2 />,
        gradient: "from-blue-600 to-cyan-500",
        link: "/ai-dev-works"
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
                    {businesses.map((business) => {
                        const isMultiService = !!business.subServices;

                        return (
                            <div key={business.id} className="group relative bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                                    {/* Text Content - Left Side */}
                                    <div className="flex-1 w-full md:w-3/5 space-y-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`w-8 h-1 bg-gradient-to-r ${business.gradient} rounded-full`} />
                                            <span className="text-black font-bold tracking-wide text-xs">
                                                {business.title}
                                            </span>
                                        </div>

                                        {isMultiService ? (
                                            <div className="space-y-4">
                                                {business.subServices?.map((service, idx) => (
                                                    <div key={idx} className="group/item">
                                                        <Link
                                                            href={service.link}
                                                            target={service.isExternal ? "_blank" : undefined}
                                                            rel={service.isExternal ? "noopener noreferrer" : undefined}
                                                            className="block p-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors"
                                                        >
                                                            <div className="flex items-end gap-3 mb-1">
                                                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover/item:text-blue-600 transition-colors">
                                                                    {service.name}
                                                                </h3>
                                                                <div className="inline-flex items-center text-xs font-semibold text-slate-400 group-hover/item:text-blue-600 transition-colors pb-0.5">
                                                                    <span>詳しくみる</span>
                                                                    <ArrowRight className="w-3 h-3 ml-1 translate-x-0 group-hover/item:translate-x-1 transition-transform" />
                                                                </div>

                                                            </div>
                                                            <p className="text-slate-500 text-sm leading-snug">
                                                                {service.description}
                                                            </p>
                                                        </Link>
                                                        {idx !== (business.subServices?.length || 0) - 1 && (
                                                            <div className="h-px bg-slate-100 my-2 mx-2" />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <Link href={business.link!} className="block group/single">
                                                <div className="flex items-end gap-4 mb-2">
                                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover/single:text-blue-600 transition-colors">
                                                        {business.serviceName}
                                                    </h3>
                                                    <div className="hidden md:inline-flex items-center text-xs font-semibold text-slate-400 group-hover/single:text-blue-600 transition-colors pb-1">
                                                        <span>詳しくみる</span>
                                                        <ArrowRight className="w-3 h-3 ml-1 translate-x-0 group-hover/single:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                                    {business.description}
                                                </p>
                                            </Link>
                                        )}
                                    </div>

                                    {/* Visual Content - Right Side */}
                                    <div className="w-full md:w-2/5 h-32 relative rounded-lg overflow-hidden bg-slate-50 transition-colors border border-slate-100 group-hover:border-slate-200 shrink-0">
                                        <div className={`absolute inset-0 opacity-10 bg-gradient-to-r ${business.gradient}`} />

                                        {/* Specific UI Mockups based on ID */}
                                        {business.id === 1 && (
                                            // AI-Dev.Works: Code Editor Style
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

                                                    {/* Floating AI Badge */}
                                                    <div className="absolute bottom-3 right-3 bg-white shadow-md border border-blue-100 rounded-lg px-2 py-1 flex items-center gap-2 z-10">
                                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                                                        <span className="text-[8px] font-bold text-blue-600">AI Generating...</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {business.id === 2 && (
                                            // SES: Combined visual
                                            <div className="absolute inset-0 overflow-hidden">
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-white border border-purple-100 p-3 rounded-xl shadow-md flex gap-3 items-center">
                                                    <div className="space-y-2 flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <Briefcase className="w-4 h-4 text-indigo-500" />
                                                            <div className="w-16 h-2 bg-slate-800 rounded-full" />
                                                        </div>
                                                        <div className="w-full h-px bg-slate-100" />
                                                        <div className="flex items-center gap-2">
                                                            <Users className="w-4 h-4 text-purple-500" />
                                                            <div className="w-20 h-2 bg-slate-800 rounded-full" />
                                                        </div>
                                                    </div>
                                                    {/* Badge */}
                                                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-[8px] font-bold">
                                                        +
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {business.id === 3 && (
                                            // Real DX: Dashboard Style
                                            <div className="absolute inset-0 flex items-center justify-between px-6 gap-4 bg-emerald-50/30">
                                                <div className="flex-1 h-full flex flex-col justify-center pt-4">
                                                    <div className="flex items-end gap-1 h-12 w-full">
                                                        <div className="flex-1 bg-emerald-300 rounded-t-sm h-[40%]" />
                                                        <div className="flex-1 bg-emerald-400 rounded-t-sm h-[60%]" />
                                                        <div className="flex-1 bg-emerald-500 rounded-t-sm h-[85%]" />
                                                        <div className="flex-1 bg-emerald-600 rounded-t-sm h-[60%]" />
                                                    </div>
                                                </div>
                                                <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-sm border border-emerald-100">
                                                    <div className="absolute flex flex-col items-center">
                                                        <span className="text-[8px] font-bold text-slate-400 leading-none">KPI</span>
                                                        <span className="text-[10px] font-black text-emerald-600 leading-none">UP</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
