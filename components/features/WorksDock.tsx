"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { motion } from "framer-motion";
import { Code, Users, Globe, Bot, Cloud, PenTool, Handshake, Laptop, Rocket, Sparkles, RefreshCw, Search, Store, Briefcase, Activity, Database, Truck } from "lucide-react";

const icons = [
    {
        title: "自社プロダクト開発",
        description: ["受注管理システム「NexusOMS」の開発・提供"],
        Icon: Store,
        tags: ["受発注管理", "Webシステム"],
        stats: "自社ツール",
        year: "2026"
    },
    {
        title: "応募プラットフォーム構築",
        description: ["求職者の応募・登録情報を一元管理するシステム"],
        Icon: Users,
        tags: ["採用", "Web開発"],
        stats: "採用支援",
        year: "2026"
    },
    {
        title: "AIエージェントツール作成",
        description: ["Google Workspace連携の業務自動アシストツール開発"],
        Icon: Bot,
        tags: ["生成AI", "自動化"],
        stats: "AIツール",
        year: "2026"
    },
    {
        title: "ITSM整理・アセット化",
        description: ["運用ノウハウの標準化と社内アセット化コンサルティング"],
        Icon: Briefcase,
        tags: ["ITSM", "ITコンサル"],
        stats: "業務設計",
        year: "2026"
    },
    {
        title: "旅行業システム更改支援",
        description: ["老朽化した旅行向け基幹システムの刷新と基盤移行"],
        Icon: Globe,
        tags: ["旅行業界", "基幹更改"],
        stats: "システム更改",
        year: "2026"
    },
    {
        title: "印刷業基幹システム改修",
        description: ["業務要件に合わせた印刷会社向けシステム機能改修"],
        Icon: Code,
        tags: ["印刷業", "保守開発"],
        stats: "機能改修",
        year: "2026"
    },
    {
        title: "ヘルスケアアプリ開発",
        description: ["医療・ヘルスケア分野の新規Webアプリケーション構築"],
        Icon: Activity,
        tags: ["ヘルスケア", "新規開発"],
        stats: "Webアプリ",
        year: "2026"
    },
    {
        title: "素材管理システム構築",
        description: ["デジタルコンテンツを一元管理・検索するシステム"],
        Icon: Database,
        tags: ["データ管理", "構築支援"],
        stats: "システム構築",
        year: "2026"
    },
    {
        title: "運輸業システム業務支援",
        description: ["次世代システム構築に向けた業務要件の抽出・整理"],
        Icon: Truck,
        tags: ["運輸業", "要件定義"],
        stats: "システム支援",
        year: "2026"
    },
    {
        title: "新規事業向けMVP開発",
        description: ["新規事業立ち上げ、PoC、プロトタイプ開発支援"],
        Icon: Rocket,
        tags: ["新規事業", "MVP", "PoC"],
        stats: "MVP",
        year: "2025"
    },
    {
        title: "AI活用システム構築",
        description: ["業務効率化を目的とした生成AI活用システムの設計・開発"],
        Icon: Sparkles,
        tags: ["生成AI", "自動化", "業務効率"],
        stats: "AI活用",
        year: "2025"
    },
    {
        title: "業務プロセスデジタル化",
        description: ["属人化業務のフロー可視化・再設計・システム化"],
        Icon: RefreshCw,
        tags: ["業務改善", "デジタル化", "内製化"],
        stats: "デジタル化",
        year: "2025"
    },
    {
        title: "社内業務DX支援",
        description: ["社内業務の棚卸しと可視化によるDX推進体制構築"],
        Icon: Search,
        tags: ["社内DX", "可視化", "業務設計"],
        stats: "社内DX",
        year: "2026"
    },
    {
        title: "業務設計・再構築",
        description: ["業務起点のデジタル業務再設計とシステム化範囲の最適化"],
        Icon: PenTool,
        tags: ["業務改革", "DX支援", "設計"],
        stats: "業務設計",
        year: "2026"
    },
    {
        title: "生成AI社内導入",
        description: ["生成AIの利用ルール策定・ユースケース整理・研修"],
        Icon: Bot,
        tags: ["生成AI", "導入支援", "研修"],
        stats: "AI導入",
        year: "2026"
    },
    {
        title: "小規模業務システム",
        description: ["小規模事業者向け業務管理Webシステムの開発"],
        Icon: Store,
        tags: ["Webシステム", "業務管理"],
        stats: "Web開発",
        year: "2026"
    },
];

// Shuffle function
const shuffleArray = (array: typeof icons) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

export default function WorksDock() {
    // Use state to handle hydration properly
    const [shuffledIcons, setShuffledIcons] = React.useState(icons);

    // Shuffle only on the client side after mount
    React.useEffect(() => {
        setShuffledIcons(shuffleArray(icons));
    }, []);

    return (
        <div className="w-full py-8 md:py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 mb-8 relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight max-w-4xl">
                    Our track record speaks for itself, delivering excellence in every project.
                </h2>
                <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">
                    創業以来、私たちは数多くのクライアントと共に成長し、革新的なソリューションを提供し続けてきました。
                </p>
            </div>

            <div className="flex items-center justify-center w-full overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

                <motion.div
                    className="flex animate-marquee hover-pause"
                >
                    {/* Render Dock twice for seamless loop */}
                    {[...icons, ...icons, ...icons].map((_, groupIndex) => (
                        <div key={groupIndex} className="flex-shrink-0 px-4">
                            <Dock
                                magnification={120}
                                distance={200}
                                baseWidth={80}
                                className="bg-transparent border-none shadow-none gap-8 md:gap-12 h-60 md:h-72 items-center px-0"
                            >
                                {shuffledIcons.map((item, index) => {
                                    const uniqueIndex = groupIndex * shuffledIcons.length + index;
                                    const amplitude = 50;
                                    const frequency = 0.15;
                                    const phase = 0;
                                    const yOffset = amplitude * Math.sin(frequency * uniqueIndex + phase);

                                    return (
                                        <DockIcon
                                            key={uniqueIndex}
                                            title={item.title}
                                            description={item.description}
                                            tags={item.tags}
                                            stats={item.stats}
                                            year={item.year}
                                            animate={{
                                                y: [yOffset - 25, yOffset + 25],
                                            }}
                                            transition={{
                                                y: {
                                                    duration: 5.75,
                                                    repeat: Infinity,
                                                    repeatType: "reverse",
                                                    ease: "easeInOut",
                                                    delay: index * 0.2, // Stagger effect
                                                }
                                            }}
                                            className="bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-[#57C7D4]/50 text-slate-600"
                                        >
                                            <item.Icon strokeWidth={1.5} className="w-1/2 h-1/2 text-[#0F4C5C]" />
                                        </DockIcon>
                                    );
                                })}
                            </Dock>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
