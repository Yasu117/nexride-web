'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[linear-gradient(135deg,#114b56_0%,#14b8a6_100%)]">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-primary-100 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            エンジニアの価値を、正当に評価する
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-12">
                            フリーランスの<br />
                            単価を<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">＋10万円</span><br />
                            アップ保証
                            <Link href="#conditions" className="text-base md:text-xl text-slate-300 hover:text-white hover:underline transition-colors cursor-pointer ml-2">
                                （条件はこちら）
                            </Link>
                        </h1>



                        <Button asChild size="lg" variant="gold" className="text-lg px-8 font-bold w-full sm:w-auto">
                            <Link href="#contact" className="flex items-center justify-center gap-2">
                                10万円アップを狙って無料登録する
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>

                        <p className="mt-4 text-xs text-slate-300">
                            ※ご登録後、ヒアリングシートのご案内をお送りします。<br className="hidden sm:block" />
                            いきなり面談が設定されることはありませんのでご安心ください。
                        </p>

                        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2 text-sm text-slate-100">
                            {[
                                "平均年収120万円UP",
                                "案件継続率 94%",
                                "最短3日でスピード参画",
                                "長期安定案件が豊富",
                                "エンド直・元請け案件",
                                "面倒な交渉は全て代行"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary-300 flex-shrink-0 drop-shadow-[0_0_2px_rgba(0,0,0,0.2)]" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* 実績データ（想定値） */}
                        <div className="mt-8 pt-8 border-t border-slate-800/50 w-full">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                        平均 <span className="text-primary-400 text-3xl sm:text-4xl">+12.4</span>万円
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1">週5常駐案件の場合</div>
                                </div>
                                <div className="hidden sm:block w-px h-10 bg-slate-700"></div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                        <span className="text-primary-400 text-3xl sm:text-4xl">72</span>%
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1">が10万円以上UPを達成</div>
                                </div>
                            </div>
                            <p className="mt-3 text-[10px] text-slate-600 text-center">
                                ※運用データに基づく想定値です（2024年市場調査より）
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        {/* Main Card */}
                        <div className="relative z-10 bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform rotate-3 hover:rotate-0 transition-all duration-500">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-slate-300 text-sm">現在の月収</p>
                                    <p className="text-2xl font-bold text-white">¥650,000</p>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <ArrowRight className="text-white" />
                                </div>
                                <div className="text-right">
                                    <p className="text-primary-200 text-sm font-bold">常駐Plus10 適用後</p>
                                    <p className="text-3xl font-bold text-accent drop-shadow-[0_1px_0_rgba(255,255,255,0.3)]">¥750,000</p>
                                </div>
                            </div>
                            <div className="mb-6 flex items-center justify-center">
                                <div className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-lg">
                                    <p className="text-green-300 text-lg font-bold">＋100,000（保証適用）</p>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                ※週5常駐案件へのアサイン × 前報酬エビデンス提出 × スキルシート正確記入
                            </p>

                            <div className="space-y-4">
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        className="h-full bg-gradient-to-r from-primary-500 to-accent"
                                    ></motion.div>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-300">年収換算</span>
                                    <span className="text-white font-bold">+120万円 UP</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 rounded-lg">
                                    <TrendingUp className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">平均昇給額</p>
                                    <p className="text-lg font-bold text-slate-900">¥108,000</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div >
        </section >
    );
}
