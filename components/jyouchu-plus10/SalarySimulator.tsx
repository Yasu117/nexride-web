'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Calculator, Coins, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SalarySimulator() {
    const [currentSalary, setCurrentSalary] = useState(60); // Default 600,000 yen

    const projectedSalary = currentSalary + 10;
    const annualIncrease = 10 * 12; // 1.2 million yen

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
                        <Calculator className="h-4 w-4" />
                        <span>年収シミュレーション</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        条件を満たせば＋10万円保証される<br className="hidden md:block" />場合の年収イメージ
                    </h2>
                    <p className="text-lg text-slate-600">
                        現在の月収を入力して、保証が適用された場合の収入アップ額をシミュレーションしてみましょう。
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="border-slate-200 shadow-xl bg-white/80 backdrop-blur-sm">
                        <CardHeader className="border-b border-slate-100 pb-8">
                            <CardTitle className="text-xl text-slate-700 mb-2">現在の月収を入力</CardTitle>
                            <div className="flex items-end gap-4 mb-8">
                                <div className="text-5xl font-bold text-slate-900 tracking-tight">
                                    {currentSalary}<span className="text-2xl text-slate-500 font-normal ml-1">万円</span>
                                </div>
                                <div className="flex-1 pb-2">
                                    <Slider
                                        defaultValue={[60]}
                                        max={150}
                                        min={30}
                                        step={1}
                                        value={[currentSalary]}
                                        onValueChange={(value) => setCurrentSalary(value[0])}
                                        className="cursor-pointer"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400 mt-2">
                                        <span>30万円</span>
                                        <span>150万円</span>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                        <p className="text-sm text-slate-500 mb-1">新しい月収目安</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-bold text-primary-600">{projectedSalary}</span>
                                            <span className="text-lg text-slate-600">万円</span>
                                            <span className="ml-auto px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                                                <TrendingUp className="h-3 w-3" />
                                                +10万円UP
                                            </span>
                                        </div>
                                    </div>

                                    <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                                        <p className="text-sm text-amber-700 mb-1">年収換算でのアップ額</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-bold text-amber-600">+{annualIncrease}</span>
                                            <span className="text-lg text-amber-700">万円</span>
                                        </div>
                                        <p className="text-xs text-amber-600 mt-2">
                                            ※賞与等は考慮せず、単純な月収×12ヶ月で計算
                                        </p>
                                    </div>
                                </div>

                                <div className="relative h-64 bg-slate-900 rounded-xl p-6 flex flex-col justify-between overflow-hidden group">
                                    {/* Decorative background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-colors duration-500"></div>

                                    <div className="relative z-10">
                                        <h4 className="text-white font-bold text-lg mb-2">手取り額も大幅アップ</h4>
                                        <p className="text-slate-400 text-sm">
                                            生活水準を上げたり、将来への投資に回したり。<br />
                                            あなたの可能性が広がります。
                                        </p>
                                    </div>

                                    <div className="relative z-10 mt-auto">
                                        <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold group-hover:translate-x-1 transition-transform">
                                            この条件で案件を探す
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
