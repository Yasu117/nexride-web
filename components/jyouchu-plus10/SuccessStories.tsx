"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, User } from "lucide-react";

const CASES = [
    {
        role: "Javaエンジニア",
        age: "26歳",
        exp: "経験3年",
        before: 45,
        after: 55,
        tags: ["週5常駐", "2次請け→直案件"],
    },
    {
        role: "Goエンジニア",
        age: "32歳",
        exp: "経験6年",
        before: 65,
        after: 75,
        tags: ["週5常駐", "単価交渉代行"],
    },
    {
        role: "PMO",
        age: "38歳",
        exp: "経験10年",
        before: 80,
        after: 90,
        tags: ["週5常駐", "大手SIer直"],
    },
    {
        role: "フロントエンド",
        age: "29歳",
        exp: "経験4年",
        before: 55,
        after: 65,
        tags: ["週5常駐", "React/Next.js"],
    },
    {
        role: "インフラエンジニア",
        age: "35歳",
        exp: "経験8年",
        before: 70,
        after: 80,
        tags: ["週5常駐", "AWS設計構築"],
    },
    {
        role: "PHPエンジニア",
        age: "27歳",
        exp: "経験4年",
        before: 50,
        after: 60,
        tags: ["週5常駐", "Laravel"],
    },
    {
        role: "Railsエンジニア",
        age: "31歳",
        exp: "経験5年",
        before: 62,
        after: 72,
        tags: ["週5常駐", "自社サービス"],
    },
    {
        role: "SAPコンサル",
        age: "42歳",
        exp: "経験15年",
        before: 110,
        after: 120,
        tags: ["週5常駐", "上流工程"],
    },
    {
        role: "インフラエンジニア",
        age: "52歳",
        exp: "経験25年",
        before: 70,
        after: 80,
        tags: ["週5常駐", "サーバー構築・運用"],
    },
];

// 無限スクロールのために配列を複製
const MARQUEE_CASES = [...CASES, ...CASES];

export default function SuccessStories() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    <span className="text-primary-600">続々と</span>年収アップを実現中
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    常駐エンジニアとしての価値を正当に評価。
                    <br className="hidden md:block" />
                    スキルや経験を変えずに、商流と契約を見直すだけで年収は上がります。
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full">
                {/* Gradient Masks for smooth fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-6 py-4"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 40,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {MARQUEE_CASES.map((item, index) => (
                            <Card
                                key={index}
                                className="flex-shrink-0 w-[320px] bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6"
                            >
                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <div className="bg-slate-100 p-2 rounded-full">
                                            <User className="h-4 w-4" />
                                        </div>
                                        <div className="text-sm">
                                            <span className="font-bold text-slate-900 block">
                                                {item.role}
                                            </span>
                                            <span className="text-xs">
                                                {item.age} / {item.exp}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-slate-500 text-sm">Before</div>
                                        <div className="font-medium text-slate-600">
                                            月収 {item.before}万円
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                        <ArrowRight className="h-5 w-5 text-slate-300 rotate-90 md:rotate-0" />
                                    </div>

                                    <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg border border-green-100">
                                        <div className="text-green-700 text-sm font-bold flex items-center gap-1">
                                            After
                                            <TrendingUp className="h-4 w-4" />
                                        </div>
                                        <div className="text-xl font-bold text-green-700">
                                            月収 {item.after}万円
                                        </div>
                                    </div>

                                    <div className="pt-2 flex flex-wrap gap-2">
                                        {item.tags.map((tag, i) => (
                                            <Badge
                                                key={i}
                                                variant="secondary"
                                                className="text-[10px] bg-slate-100 text-slate-600 font-normal"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
