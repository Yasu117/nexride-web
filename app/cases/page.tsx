import { Code, Users, Globe, Bot, Cloud, PenTool, Handshake, Laptop } from "lucide-react";
import Image from "next/image";

export default function CasesPage() {
    const cases = [
        {
            title: "採用代行 / Web制作",
            description: ["H運送会社向けオリジナル採用Webページの制作"],
            Icon: Globe,
            tags: ["Web制作", "運送業界", "採用支援"],
            year: "2023",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "人材紹介 / 採用代行",
            description: ["運送業界・建設業界・飲食業界への人材紹介および採用支援"],
            Icon: Users,
            tags: ["人材紹介", "3業界対応", "採用代行"],
            year: "2023",
            image: "/images/cases/ui_consulting.png"
        },
        {
            title: "採用代行 / Web制作",
            description: ["E運送会社向けオリジナル採用Webページの制作"],
            Icon: Laptop,
            tags: ["Web制作", "運送業界", "採用支援"],
            year: "2023",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "採用支援",
            description: ["外国人技能実習生の紹介・採用支援"],
            Icon: Handshake,
            tags: ["技能実習生", "グローバル", "採用支援"],
            year: "2024",
            image: "/images/cases/ui_consulting.png"
        },
        {
            title: "デジタル業務再設計",
            description: ["企業向けAI研修（社内セミナー）を講師として、月1〜2回の頻度で実施"],
            Icon: Bot,
            tags: ["AI研修", "業務効率化", "生成AI"],
            year: "2024",
            image: "/images/cases/ui_consulting.png"
        },
        {
            title: "SES事業 / 受託開発",
            description: ["大手ライフスタイル企業のアプリ開発にインフラエンジニアとして従事"],
            Icon: Code,
            tags: ["インフラ", "アプリ開発", "大規模開発"],
            year: "2024",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "SES事業 / 受託開発",
            description: ["大手SIerの大規模開発プロジェクトにインフラエンジニアとして参画"],
            Icon: Code,
            tags: ["インフラ", "SIer", "大規模開発"],
            year: "2024",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "社内DX支援",
            description: ["不動産企業向けインフラ最適化支援"],
            Icon: Cloud,
            tags: ["AWS/GCP", "インフラ最適化"],
            year: "2025",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "社内DX支援",
            description: ["クラウド利用コスト削減（Cloud Cost Optimization）支援"],
            Icon: Cloud,
            tags: ["コスト削減", "FinOps"],
            year: "2025",
            image: "/images/cases/ui_consulting.png"
        },
        {
            title: "SES事業 / 受託開発",
            description: ["大手ゲーム企業の開発プロジェクトへデザイナーが参画"],
            Icon: PenTool,
            tags: ["ゲーム開発", "デザイン"],
            year: "2025",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "SES事業 / 受託開発",
            description: ["大手SIerの大規模開発プロジェクトにインフラエンジニアが参画"],
            Icon: PenTool,
            tags: ["インフラ", "SIer"],
            year: "2025",
            image: "/images/cases/ui_dev.png"
        }
    ];

    return (
        <div className="container mx-auto px-4 pt-32 pb-20">
            <div className="text-center mb-20">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0F4C5C] to-[#57C7D4]">事例・実績</h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {cases.map((item, i) => (
                    <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col h-full">
                        <div className="h-48 relative overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] group-hover:bg-white/70 transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <item.Icon className="w-16 h-16 text-cyan-600/80 group-hover:text-cyan-600 transition-colors duration-300 transform group-hover:scale-110 drop-shadow-sm" strokeWidth={1.5} />
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded-md">
                                    {item.year}
                                </span>
                                {item.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="font-bold text-lg mb-3 text-slate-900">{item.title}</h3>
                            <div className="text-sm text-slate-600 leading-relaxed mt-auto">
                                {item.description.map((line, lineIndex) => (
                                    <p key={lineIndex} className="mb-1 last:mb-0">{line}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
