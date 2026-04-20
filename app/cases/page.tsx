import { Code, Users, Globe, Bot, Cloud, PenTool, Handshake, Laptop, Rocket, Sparkles, RefreshCw, Search, Store, Briefcase, Activity, Database, Truck } from "lucide-react";
import Image from "next/image";

export default function CasesPage() {
    const cases = [
        // 2026 Cases
        {
            title: "受注管理システム「NexusOMS」の開発・提供",
            description: [
                "受発注業務を効率化する自社プロダクト「NexusOMS」を開発。",
                "直感的なUIと必要十分な機能で、現場の業務負担を大幅に削減。"
            ],
            Icon: Store,
            tags: ["自社プロダクト", "受注管理", "Webシステム"],
            year: "2026",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "採用・応募登録プラットフォーム構築",
            description: [
                "求職者の応募から登録情報の管理までを一元化するプラットフォームを開発。",
                "採用担当者のオペレーションコスト低減と応募者の利便性向上を実現。"
            ],
            Icon: Users,
            tags: ["採用プラットフォーム", "Web開発", "業務効率化"],
            year: "2026",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "Google Workspace連携AIツールの開発",
            description: [
                "Google Workspace（Gmailやドキュメント等）と連携し、AIが日々の業務を自動アシストする社内環境を構築。",
                "反復作業の自動化により、コア業務へ集中できる体制を整備。"
            ],
            Icon: Bot,
            tags: ["生成AI", "Google API", "業務自動化"],
            year: "2026",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "ITSM整理・社内アセット化コンサルティング",
            description: [
                "ITサービスマネジメント（ITSM）のプロセス整理および社内アセット化の推進を支援。",
                "属人化していた運用ノウハウの標準化・ドキュメント化を実施。"
            ],
            Icon: Briefcase,
            tags: ["ITコンサル", "ITSM", "業務設計"],
            year: "2026",
            image: "/images/cases/ui_consulting.png"
        },
        {
            title: "旅行業向け基幹システム更改支援",
            description: [
                "既存の老朽化した旅行システムの刷新プロジェクトにおいて、設計からテストフェーズまでの更改作業を技術支援。",
                "業務影響を最小限に抑えつつ、モダンなシステム基盤への移行を実現。"
            ],
            Icon: Globe,
            tags: ["基幹システム", "旅行業界", "SES"],
            year: "2026",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "印刷会社向け基幹システム改修",
            description: [
                "印刷会社の独自の業務要件に合わせた基幹システムの機能改修および保守開発を担当。",
                "生産管理から納品までのデータ連携をスムーズにし、業務効率化に貢献。"
            ],
            Icon: Code,
            tags: ["基幹システム", "システム改修", "SES"],
            year: "2026",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "ヘルスケア領域Webアプリケーション新規開発",
            description: [
                "医療・ヘルスケア分野における新規Webアプリケーションの開発プロジェクトに参画。",
                "セキュアなデータ管理とユーザーフレンドリーなUI設計を考慮した実装を支援。"
            ],
            Icon: Activity,
            tags: ["ヘルスケア", "Webアプリ", "新規開発"],
            year: "2026",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "デジタル素材管理システム構築支援",
            description: [
                "デジタル素材・コンテンツを一元管理し、効率的に検索・利用できるシステムの構築プロジェクトに参画。",
                "要件定義フェーズから開発フェーズまで一貫した技術支援を提供。"
            ],
            Icon: Database,
            tags: ["データ管理", "システム構築", "SES"],
            year: "2026",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "運輸業向け次世代システム業務支援",
            description: [
                "運輸・物流業界における次世代システム構築プロジェクトにおいて、業務要件の抽出および整理を支援。",
                "現場の課題をシステム要件に落とし込み、スムーズな開発進行に貢献。"
            ],
            Icon: Truck,
            tags: ["運輸業", "次世代システム", "業務支援"],
            year: "2026",
            image: "/images/cases/ui_consulting.png"
        },
        {
            title: "社内業務の可視化・再設計によるDX推進支援",
            description: [
                "社内業務の棚卸しおよび業務フローの可視化を行い、属人化していた業務や重複業務を整理。",
                "業務プロセスの再設計と簡易システム化を通じて、現場主導で改善を継続できる社内DX体制を構築。"
            ],
            Icon: Search,
            tags: ["社内DX", "業務可視化", "業務設計", "業務改善"],
            year: "2026",
            image: "/images/cases/ui_consulting.png"
        },
        {
            title: "業務起点のデジタル業務再設計支援",
            description: [
                "現場業務の棚卸しから着手し、業務フローの整理、不要工程の削減、システム化範囲の切り分けまでを含めた業務再設計を実施。",
                "ツール導入ありきではなく、業務構造そのものを見直す形でのDX支援を行った。"
            ],
            Icon: PenTool,
            tags: ["業務改革", "DX支援", "業務設計", "業務改善"],
            year: "2026",
            image: "/images/cases/ui_consulting.png"
        },
        {
            title: "生成AI活用の社内導入・定着支援",
            description: [
                "生成AIの社内活用に向け、利用ルール整備、業務別ユースケース整理、活用方法レクチャーまでを含めた導入支援を実施。",
                "現場が自走できる運用体制の構築を目的とした支援を行った。"
            ],
            Icon: Bot,
            tags: ["生成AI", "社内導入", "内製化", "研修"],
            year: "2026",
            image: "/images/cases/ui_consulting.png"
        },
        {
            title: "小規模事業者向け業務管理システム開発",
            description: [
                "小規模事業者の実業務に即した形で、顧客管理、案件管理、請求管理等を統合した業務管理Webシステムを開発。",
                "過剰な機能を排除し、日常業務で使い続けられる設計を重視。"
            ],
            Icon: Store,
            tags: ["業務管理", "Webシステム", "小規模事業者", "システム開発"],
            year: "2026",
            image: "/images/cases/ui_dev.png"
        },
        // 2025 Cases
        {
            title: "新規事業向けMVP／PoC開発支援",
            description: [
                "新規事業立ち上げを検討する企業・個人事業主向けに、企画整理から要件定義、最小構成でのWebシステム開発までを一貫して支援。",
                "短期間で検証可能なプロトタイプを構築し、事業検証に集中できる開発体制を提供。"
            ],
            Icon: Rocket,
            tags: ["新規事業", "MVP開発", "PoC", "Webシステム"],
            year: "2025",
            image: "/images/cases/ui_dev.png"
        },
        {
            title: "業務効率化を目的としたAI活用システム構築",
            description: [
                "既存業務の整理を行った上で、生成AIを活用した業務支援システムを設計・構築。",
                "データ整理、文章作成、情報抽出などの業務を自動化し、日常業務の工数削減と属人化解消を実現。"
            ],
            Icon: Sparkles,
            tags: ["生成AI", "業務自動化", "業務効率化", "システム開発"],
            year: "2025",
            image: "/images/cases/ui_consulting.png"
        },
        {
            title: "営業・業務プロセスのデジタル化支援",
            description: [
                "属人化していた営業・管理業務を対象に、業務フローの可視化および整理を実施。",
                "業務プロセスの再設計とシステム化により、再現性のある業務運用体制を構築。"
            ],
            Icon: RefreshCw,
            tags: ["業務改善", "業務設計", "デジタル化", "内製化支援"],
            year: "2025",
            image: "/images/cases/ui_consulting.png"
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
            description: ["大手SIerの大規模開発プロジェクトにインフラエンジニアが参画"],
            Icon: PenTool,
            tags: ["インフラ", "SIer"],
            year: "2025",
            image: "/images/cases/ui_dev.png"
        },
        // 2024 Cases
        {
            title: "採用支援",
            description: ["外国人技能実習生の紹介・採用支援"],
            Icon: Handshake,
            tags: ["技能実習生", "グローバル", "採用支援"],
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
        // 2023 Cases
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

            <div className="text-center mt-16 text-slate-500 text-sm md:text-base leading-relaxed">
                <p>※ 機密保持契約等により、上記は実績の一部を抜粋して掲載しています。</p>
                <p className="mt-2 text-slate-400">その他の開発事例や詳細については、お気軽にお問い合わせください。</p>
            </div>
        </div>
    )
}
