"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { motion } from "framer-motion";
import { Code, Users, Globe, Bot, Cloud, PenTool, Handshake, Laptop } from "lucide-react";

const icons = [
    {
        title: "採用代行 / Web制作",
        description: ["H運送会社向けオリジナル採用Webページの制作"],
        Icon: Globe,
        tags: ["Web制作", "運送業界", "採用支援"],
        stats: "Web制作",
        year: "2023"
    },
    {
        title: "人材紹介 / 採用代行",
        description: ["運送業界・建設業界・飲食業界への人材紹介および採用支援"],
        Icon: Users,
        tags: ["人材紹介", "3業界対応", "採用代行"],
        stats: "3業界",
        year: "2023"
    },
    {
        title: "採用代行 / Web制作",
        description: ["E運送会社向けオリジナル採用Webページの制作"],
        Icon: Laptop,
        tags: ["Web制作", "運送業界", "採用支援"],
        stats: "Web制作",
        year: "2023"
    },
    {
        title: "採用支援",
        description: ["外国人技能実習生の紹介・採用支援"],
        Icon: Handshake,
        tags: ["技能実習生", "グローバル", "採用支援"],
        stats: "外国人材",
        year: "2024"
    },
    {
        title: "デジタル業務再設計",
        description: ["企業向けAI研修（社内セミナー）を講師として、月1〜2回の頻度で実施"],
        Icon: Bot,
        tags: ["AI研修", "業務効率化", "生成AI"],
        stats: "月1-2回",
        year: "2024"
    },
    {
        title: "SES事業 / 受託開発",
        description: ["大手ライフスタイル企業のアプリ開発にインフラエンジニアとして従事"],
        Icon: Code,
        tags: ["インフラ", "アプリ開発", "大規模開発"],
        stats: "SES",
        year: "2024"
    },
    {
        title: "SES事業 / 受託開発",
        description: ["大手SIerの大規模開発プロジェクトにインフラエンジニアとして参画"],
        Icon: Code,
        tags: ["インフラ", "SIer", "大規模開発"],
        stats: "SES",
        year: "2024"
    },
    {
        title: "社内DX支援",
        description: ["不動産企業向けインフラ最適化支援"],
        Icon: Cloud,
        tags: ["AWS/GCP", "インフラ最適化"],
        stats: "DX支援",
        year: "2025"
    },
    {
        title: "社内DX支援",
        description: ["クラウド利用コスト削減（Cloud Cost Optimization）支援"],
        Icon: Cloud,
        tags: ["コスト削減", "FinOps"],
        stats: "DX支援",
        year: "2025"
    },
    {
        title: "SES事業 / 受託開発",
        description: ["大手ゲーム企業の開発プロジェクトへデザイナーが参画"],
        Icon: PenTool,
        tags: ["ゲーム開発", "デザイン"],
        stats: "SES",
        year: "2025"
    },
    {
        title: "SES事業 / 受託開発",
        description: ["大手SIerの大規模開発プロジェクトにインフラエンジニアが参画"],
        Icon: PenTool,
        tags: ["インフラ", "SIer"],
        stats: "SES",
        year: "2025"
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
        <div className="w-full py-12 relative overflow-hidden">
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
                                className="bg-transparent border-none shadow-none gap-8 md:gap-12 h-72 items-center px-0"
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
                                                    duration: 5,
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
