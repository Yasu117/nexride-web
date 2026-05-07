'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    RefreshCw,
    ArrowRight,
    CheckCircle,
    X,
    Zap,
    Database,
    Users,
    Layout,
    ChevronDown,
    ChevronUp,
    Mail,
    Menu,
    ArrowLeft,
    TrendingUp,
    Filter,
    Layers,
    Smartphone,
    Calendar,
    BarChart3,
    Activity,
    FileText,
    PenTool,
    ClipboardList,
    Route,
    Bot
} from 'lucide-react';

export default function RealDXPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-teal-100 selection:text-teal-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 h-20 flex items-center transition-all">
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                            <RefreshCw size={20} className="text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] md:text-xs font-bold text-slate-500 leading-none mb-0.5 whitespace-nowrap">デジタル業務再設計支援</span>
                            <span className="text-xl font-bold tracking-tight text-slate-800 leading-none">Nexus Consulting</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#problems" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">課題</a>
                        <a href="#concept" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">コンセプト</a>
                        <a href="#steps" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">フロー</a>
                        <a href="#cases" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">事例</a>
                        <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">よくある質問</a>
                        <a href="#contact" className="px-5 py-2.5 bg-slate-800 text-white text-sm font-bold rounded-full hover:bg-slate-700 transition-colors shadow-lg shadow-slate-200">
                            無料診断を申し込む
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-slate-600" onClick={toggleMenu}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-4 md:hidden animate-fade-in-down">
                        <a href="#problems" onClick={toggleMenu} className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50">課題</a>
                        <a href="#concept" onClick={toggleMenu} className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50">コンセプト</a>
                        <a href="#steps" onClick={toggleMenu} className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50">フロー</a>
                        <a href="#cases" onClick={toggleMenu} className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50">事例</a>
                        <a href="#contact" onClick={toggleMenu} className="mt-2 w-full py-3 bg-teal-600 text-white font-bold rounded-lg text-center">無料診断を申し込む</a>
                    </div>
                )}
            </nav>

            {/* Hero Section: Clean & Approachable */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>

                {/* Soft ambient blobs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100/50 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="flex-1 text-left">


                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.3] mb-6 animate-fade-in-up delay-100 text-slate-900">
                                <span className="inline-block">業務の<span className="text-teal-600 bg-teal-50 px-2 py-1 rounded-lg mx-1">「再設計」</span>から、</span><br />
                                <span className="inline-block">会社の余白をつくる。</span>
                            </h1>

                            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200">
                                最新ツールを入れることがゴールではありません。<br />
                                複雑になった日々の仕事を、整理し、整え、<br />
                                誰もが迷わず動けるシンプルな形に作り直します。
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                                <a href="#contact" className="px-8 py-4 bg-teal-600 text-white font-bold hover:bg-teal-700 transition-all shadow-[4px_4px_0px_0px_rgba(20,184,166,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(20,184,166,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center gap-2 group border-2 border-transparent">
                                    無料相談を申し込む
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="#steps" className="px-8 py-4 bg-white text-slate-900 font-bold border-2 border-slate-200 hover:border-teal-600 hover:text-teal-600 transition-all flex items-center justify-center">
                                    具体的な流れを見る
                                </a>
                            </div>
                        </div>

                        {/* Visual Content: Structured "Organizing" Illustration */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none animate-fade-in delay-200">
                            <div className="relative p-6 bg-white border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(20,184,166,0.3)]">
                                {/* Header */}
                                <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4 mb-6">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 border border-slate-900 bg-white" />
                                        <div className="w-3 h-3 border border-slate-900 bg-white" />
                                    </div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Before & After</div>
                                </div>

                                <div className="grid grid-cols-2 gap-8">
                                    {/* Left: Messy */}
                                    <div className="space-y-3 relative">
                                        <div className="text-center text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">これまでの業務</div>
                                        <div className="p-3 bg-white border border-slate-300 transform rotate-1 shadow-sm">
                                            <div className="text-xs text-slate-500 mb-1 font-bold">手書きメモ</div>
                                            <div className="h-1 bg-slate-200 w-full mb-1"></div>
                                            <div className="h-1 bg-slate-200 w-2/3"></div>
                                        </div>
                                        <div className="p-3 bg-white border border-slate-300 transform -rotate-2 translate-x-1 shadow-sm">
                                            <div className="text-xs text-slate-500 mb-1 font-bold">Excel転記</div>
                                            <div className="h-1 bg-slate-200 w-full"></div>
                                        </div>
                                        <div className="p-3 bg-white border border-slate-300 transform rotate-2 -translate-x-1 shadow-sm">
                                            <div className="text-xs text-slate-500 mb-1 font-bold">メール確認</div>
                                            <div className="h-1 bg-slate-200 w-3/4"></div>
                                        </div>

                                        {/* Chaos Line - stylized */}
                                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-slate-400 pointer-events-none opacity-50" viewBox="0 0 100 100">
                                            <path d="M10,50 Q30,10 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <path d="M20,20 Q50,80 80,20" fill="none" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>

                                    {/* Arrow */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-2 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(20,184,166,1)]">
                                        <ArrowRight className="text-slate-900" size={20} />
                                    </div>

                                    {/* Right: Clean - Streamlined Flow */}
                                    <div className="space-y-4">
                                        <div className="text-center text-xs font-bold text-teal-600 mb-2 uppercase tracking-wide">再設計後の業務</div>
                                        <div className="relative p-4 bg-teal-50 border-2 border-teal-600 shadow-[4px_4px_0px_0px_rgba(20,184,166,0.3)] min-h-[160px] flex flex-col justify-center gap-3">
                                            {/* Visual Step 1: Organized Blocks (Standardization) */}
                                            <div className="flex gap-2 justify-center">
                                                <div className="w-8 h-8 bg-white border-2 border-teal-600 shadow-sm"></div>
                                                <div className="w-8 h-8 bg-white border-2 border-teal-600 shadow-sm"></div>
                                                <div className="w-8 h-8 bg-white border-2 border-teal-600 shadow-sm"></div>
                                            </div>

                                            {/* Connecting Arrow */}
                                            <div className="text-teal-500 flex justify-center py-2">
                                                <ArrowRight size={24} className="rotate-90" strokeWidth={2.5} />
                                            </div>

                                            {/* Visual Step 2: Unified Bar (Integration/Automation) */}
                                            <div className="w-full max-w-[140px] h-10 bg-teal-500 border-2 border-teal-700 shadow-sm flex items-center justify-center mx-auto relative z-10">
                                                <div className="w-2/3 h-1 bg-teal-300/50 rounded-full"></div>
                                            </div>

                                            {/* Decorative lines to show flow entering the bar */}
                                            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-full max-w-[100px] flex justify-between px-3 opacity-30 pointer-events-none">
                                                <div className="w-0.5 h-2 bg-teal-600"></div>
                                                <div className="w-0.5 h-2 bg-teal-600"></div>
                                                <div className="w-0.5 h-2 bg-teal-600"></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points: Friendly & Relatable */}
            <section id="problems" className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-teal-600 font-bold tracking-wider text-base uppercase mb-3 block">課題</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                            現場は「ツール」ではなく<br />
                            「手間」に困っていませんか？
                        </h2>
                        <p className="text-slate-600">
                            便利なはずのITツールが、かえって仕事を複雑にしているケースが増えています。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <ProblemCard
                            icon={<FileText size={32} />}
                            title="入力作業が2倍に"
                            desc="新しいシステムを入れたのに、結局Excelにも入力している。二重管理でミスも増えた。"
                        />
                        <ProblemCard
                            icon={<Users size={32} />}
                            title="あの人しか知らない"
                            desc="ベテラン社員が休むと、仕事の進め方がわからない。「人に依存した業務」が解消されない。"
                        />
                        <ProblemCard
                            icon={<Layout size={32} />}
                            title="バラバラなデータ"
                            desc="部署ごとに違うソフトを使っていて、データの統合に毎月何時間もコピー＆ペーストしている。"
                        />
                    </div>
                </div>
            </section>

            {/* Concept: The "decluttering" metaphor */}
            <section id="concept" className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-6">
                            <div className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold rounded-full">
                                アプローチ
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
                                システムを入れる前に、<br />
                                まず<span className="text-orange-500 decoration-4 underline-offset-4 decoration-orange-200 underline">「お片付け」</span>から。
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                散らかった部屋に新しい家具を入れても、快適にはなりません。<br />
                                業務も同じです。複雑に入り組んだフローに最新ツールを入れても、混乱が加速するだけです。
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                私たちが提供するのは、システムの導入代行ではありません。<br />
                                <strong>「そもそも、その作業は必要か？」</strong>という問い直しから始め、筋肉質な業務フローへと作り変えるお手伝いです。
                            </p>
                        </div>

                        <div className="flex-1 w-full relative p-8 bg-slate-50 border-2 border-slate-200 text-center">
                            <h3 className="text-lg font-bold text-slate-900 mb-8 tracking-wider bg-white inline-block px-4 py-1 border border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">Nexus Consultingのステップ</h3>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                <div className="flex-1 p-6 bg-white border-2 border-slate-200 flex flex-col items-center">
                                    <div className="w-12 h-12 bg-slate-50 border-2 border-slate-200 flex items-center justify-center mx-auto mb-3 text-slate-400">
                                        <ClipboardList size={24} strokeWidth={1.5} />
                                    </div>
                                    <div className="font-bold text-slate-700 mb-1">1. 棚卸し</div>
                                    <div className="text-xs text-slate-500">全ての業務を洗い出す</div>
                                </div>
                                <ArrowRight className="text-slate-300 transform rotate-90 md:rotate-0" size={24} />
                                <div className="flex-1 p-6 bg-white border-2 border-orange-400 shadow-[4px_4px_0px_0px_rgba(251,146,60,0.3)] transform scale-105 z-10 flex flex-col items-center">
                                    <div className="w-12 h-12 bg-orange-50 border-2 border-orange-400 flex items-center justify-center mx-auto mb-3 text-orange-500">
                                        <Route size={24} strokeWidth={1.5} />
                                    </div>
                                    <div className="font-bold text-slate-800 mb-1">2. 再設計</div>
                                    <div className="text-xs text-orange-500 font-bold">無駄を捨て、整える</div>
                                </div>
                                <ArrowRight className="text-slate-300 transform rotate-90 md:rotate-0" size={24} />
                                <div className="flex-1 p-6 bg-white border-2 border-slate-200 flex flex-col items-center">
                                    <div className="w-12 h-12 bg-slate-50 border-2 border-slate-200 flex items-center justify-center mx-auto mb-3 text-blue-400">
                                        <Bot size={24} strokeWidth={1.5} />
                                    </div>
                                    <div className="font-bold text-slate-700 mb-1">3. デジタル化</div>
                                    <div className="text-xs text-slate-500">ツールで自動化する</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Origin of the Name section - Centered below */}
                    <div className="max-w-3xl mx-auto mt-16 pt-12 border-t border-slate-100 text-center animate-fade-in-up">
                        <p className="text-slate-900 font-bold leading-relaxed text-base md:text-lg">
                            <span className="text-teal-600 mb-2 block font-extrabold tracking-wider underline decoration-teal-50 underline-offset-8">名称の由来：</span>
                            点在する課題をなめらかに繋ぎ（<span className="text-teal-600">Nexus</span>）、<br />
                            ビジネスに新たな価値の連鎖を生み出すパートナーでありたいと考えています。
                        </p>
                    </div>
                </div>
            </section>

            {/* Flow to Introduction */}
            <section id="steps" className="py-24 bg-white relative">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                        導入までの流れ
                    </h2>
                    <p className="text-slate-600">
                        まずは丁寧なヒアリングから始めます。<br />
                        いきなりシステムを入れることはありません。
                    </p>
                </div>

                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {/* Step 1 */}
                            <div className="relative z-10 bg-white p-6 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#e2e8f0] flex flex-col items-center text-center h-full">
                                <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold mb-4 shadow-[4px_4px_0px_0px_#0f172a] -translate-y-8 border-2 border-white">
                                    1
                                </div>
                                <h3 className="font-bold text-slate-800 mb-2 -mt-4">無料相談</h3>
                                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                    現状のお悩みや課題感をお聞かせください。
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative z-10 bg-white p-6 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#e2e8f0] flex flex-col items-center text-center h-full">
                                <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold mb-4 shadow-[4px_4px_0px_0px_#0f172a] -translate-y-8 border-2 border-white">
                                    2
                                </div>
                                <h3 className="font-bold text-slate-800 mb-2 -mt-4">業務診断</h3>
                                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                    実際の現場を見せていただき、業務フローを可視化します。
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative z-10 bg-white p-6 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#e2e8f0] flex flex-col items-center text-center h-full">
                                <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold mb-4 shadow-[4px_4px_0px_0px_#0f172a] -translate-y-8 border-2 border-white">
                                    3
                                </div>
                                <h3 className="font-bold text-slate-800 mb-2 -mt-4">再設計プラン</h3>
                                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                    「やめる業務」と「自動化する業務」を仕分けたプランをご提案。
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="relative z-10 bg-white p-6 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#e2e8f0] flex flex-col items-center text-center h-full">
                                <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold mb-4 shadow-[4px_4px_0px_0px_#0f172a] -translate-y-8 border-2 border-white">
                                    4
                                </div>
                                <h3 className="font-bold text-slate-800 mb-2 -mt-4">構築・実装</h3>
                                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                    選定したツール（Kintone/RPA等）の設定とマニュアル作成を実施。
                                </p>
                            </div>

                            {/* Step 5 */}
                            <div className="relative z-10 bg-teal-50 p-6 border-2 border-slate-900 shadow-[6px_6px_0px_0px_#14b8a6] flex flex-col items-center text-center h-full transform md:-translate-y-2">
                                <div className="w-10 h-10 bg-teal-600 text-white flex items-center justify-center font-bold mb-4 shadow-[4px_4px_0px_0px_#0f172a] -translate-y-8 border-2 border-slate-900">
                                    5
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2 -mt-4">運用・伴走</h3>
                                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                    現場に定着するまでサポート。「使い方がわからない」を無くします。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cases: Concrete results */}
            <section id="cases" className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                            改善のビフォーアフター
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        <CaseStudySimple
                            title="営業事務の手入力ゼロ化"
                            problem="営業担当が毎日帰社してから、日報をExcelに入力。事務員がそれを集計し直しており、残業が常態化していた。"
                            solution="スマホから音声入力で日報が完了するように変更。データは自動的に集計され、事務作業自体を撤廃。"
                            result="月間120時間の残業削減"
                        />
                        <CaseStudySimple
                            title="採用日程調整の自動化"
                            problem="応募者とのメール往復、面接官の空き予定の確認で、採用担当者が1日中メールに追われていた。"
                            solution="カレンダー連携ツールと自動返信を組み合わせ、応募者が自分で空き枠を選べる仕組みに変更。"
                            result="日程調整にかかる時間 95%減"
                        />
                        <CaseStudySimple
                            title="受発注・在庫管理の完全自動化"
                            problem="FAXや電話で来る注文を手書きで台帳に記入。在庫数は目視確認のため、欠品や過剰在庫が頻発していた。"
                            solution="受発注システム「Nexus OMS」を導入。注文のデジタル化と在庫のリアルタイム連動により、業務を完全自動化。"
                            result="在庫確認作業ゼロ & 欠品率改善"
                            linkUrl={process.env.NODE_ENV === 'development' ? "http://localhost:3000/nexus-oms" : "/nexus-oms"}
                            linkText="Nexus OMSの詳細を見る"
                        />
                        <CaseStudySimple
                            title="紙の経費精算の廃止"
                            problem="月末になると全社員が領収書を糊付けし、経理担当が1枚ずつExcelに入力・確認しており、締め作業に3日かかっていた。"
                            solution="スマホカメラで領収書を撮るだけで申請完了。仕訳データも自動作成され、会計ソフトへ連携。"
                            result="月初の経理作業時間を1/5に短縮"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                            よくある質問
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <FaqItem
                            question="難しい専門用語がわからないのですが..."
                            answer="ご安心ください。私たちは専門用語を使わず、お客様の現場の言葉で会話・提案をさせていただきます。"
                            isOpen={openFaqIndex === 0}
                            onClick={() => toggleFaq(0)}
                        />
                        <FaqItem
                            question="どんなツールを使うのですか？"
                            answer="お客様の予算や規模に合わせて選びます。高額なシステム開発よりも、KintoneやLINE、Google機能など、身近で安価なツールの活用を優先してご提案します。"
                            isOpen={openFaqIndex === 1}
                            onClick={() => toggleFaq(1)}
                        />
                        <FaqItem
                            question="数人の小さな部署でも依頼できますか？"
                            answer="もちろんです。「経理部だけ」「3人の営業チームだけ」といった特定の部署単位でのご依頼も多くいただいています。"
                            isOpen={openFaqIndex === 2}
                            onClick={() => toggleFaq(2)}
                        />
                        <FaqItem
                            question="業務フローの整理（可視化）だけでもお願いできますか？"
                            answer="はい。「何が問題かわからないから整理してほしい」というご相談も大歓迎です。現状を可視化するだけでも、多くの気づきが得られます。"
                            isOpen={openFaqIndex === 3}
                            onClick={() => toggleFaq(3)}
                        />
                        <FaqItem
                            question="セキュリティについてはどうなっていますか？"
                            answer="一般的なセキュリティ対策（SSL通信、アクセス権限管理、データのバックアップ等）を標準で行います。特に機密性の高いデータを扱う場合は、別途ご相談の上、適切な構成をご提案します。"
                            isOpen={openFaqIndex === 4}
                            onClick={() => toggleFaq(4)}
                        />
                        <FaqItem
                            question="費用はどのくらいかかりますか？"
                            answer="月額20万円〜の伴走プランや、プロジェクト単位のお見積もりなど、柔軟に対応可能です。初回相談無料ですので、まずはお気軽にお問い合わせください。"
                            isOpen={openFaqIndex === 5}
                            onClick={() => toggleFaq(5)}
                        />
                        <FaqItem
                            question="期間はどのくらいかかりますか？"
                            answer="まずは2〜3ヶ月で「小さな成功体験」を作ることを目指します。大きな変更を一気に行うのではなく、少しずつ着実に改善を進めます。"
                            isOpen={openFaqIndex === 6}
                            onClick={() => toggleFaq(6)}
                        />
                        <FaqItem
                            question="エンジニアがいなくても運用できますか？"
                            answer="はい。単にツールを入れる（ノーコードDX）だけでなく、誰でも運用できるよう、具体的な業務手順や操作ルールにまで落とし込んで設計します。エンジニアのスキルに依存せず、「仕組み」で運用が回る状態を提供します。"
                            isOpen={openFaqIndex === 7}
                            onClick={() => toggleFaq(7)}
                        />
                        <FaqItem
                            question="まずは相談だけしたいのですが、費用はかかりますか？"
                            answer="初回のご相談（60分）は無料です。現状のお困りごとをお聞かせいただくだけでも、解決の糸口が見つかるかもしれません。"
                            isOpen={openFaqIndex === 8}
                            onClick={() => toggleFaq(8)}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-24 bg-slate-50 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                        まずは、あなたの会社の<br />
                        <span className="text-teal-600">「見えない無駄」</span>を見つけてみませんか？
                    </h2>
                    <p className="text-lg text-slate-600 mb-10">
                        「こんなこと相談してもいいのかな？」と思うようなことでも構いません。<br />
                        業務のモヤモヤを、私たちと一緒に整理しましょう。
                    </p>
                    <Link href="/#contact" className="inline-block w-full sm:w-auto px-12 py-5 bg-teal-600 text-white font-bold text-lg rounded-xl hover:bg-teal-700 transition-colors shadow-xl shadow-teal-100">
                        無料相談・お問い合わせ
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-white text-slate-500 border-t border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded bg-teal-600 flex items-center justify-center text-white">
                            <RefreshCw size={16} />
                        </div>
                        <span className="text-xl font-bold text-slate-700 tracking-tight">Nexus Consulting</span>
                    </div>
                    <p className="text-sm">© 2024 Nexus Consulting / NexRide Inc.</p>
                </div>
            </footer>
        </div>
    );
}

// Components

// Components

function ProblemCard({ icon, title, desc }: { icon: React.ReactElement, title: string, desc: string }) {
    return (
        <div className="bg-white p-8 border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(20,184,166,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(20,184,166,0.8)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 relative group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-slate-100 border-l-2 border-b-2 border-slate-900 -mr-0.5 -mt-0.5 flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
            </div>

            <div className="w-14 h-14 border-2 border-slate-900 bg-teal-50 flex items-center justify-center text-slate-900 mb-6 shadow-[4px_4px_0px_0px_#0f172a]">
                {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "text-slate-900 w-7 h-7 stroke-[1.5]" })}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
            <p className="text-slate-700 leading-relaxed text-sm font-medium">{desc}</p>
        </div>
    );
}

function CaseStudySimple({ title, problem, solution, result, linkUrl, linkText }: { title: string, problem: string, solution: string, result: string, linkUrl?: string, linkText?: string }) {
    return (
        <div className="bg-white p-6 border-2 border-slate-900 shadow-[6px_6px_0px_0px_#cbd5e1] hover:shadow-[8px_8px_0px_0px_#14b8a6] hover:border-teal-600 transition-all duration-200 flex flex-col h-full group">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3 border-b-2 border-slate-100 pb-4">
                <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">CASE</div>
                {title}
            </h3>
            <div className="flex-1 space-y-4 mb-6">
                <div className="relative p-4 bg-rose-50 border-2 border-rose-200">
                    <div className="text-[10px] font-bold text-rose-600 mb-1 uppercase tracking-wider">Before</div>
                    <p className="text-sm text-slate-700 leading-snug font-medium">{problem}</p>
                </div>
                <div className="flex justify-center -my-2 relative z-10">
                    <ArrowRight className="text-slate-300 rotate-90 w-5 h-5 bg-white rounded-full border border-slate-200" />
                </div>
                <div className="relative p-4 bg-teal-50 border-2 border-teal-200">
                    <div className="text-[10px] font-bold text-teal-600 mb-1 uppercase tracking-wider">After</div>
                    <p className="text-sm text-slate-900 leading-snug font-bold">{solution}</p>
                </div>
            </div>
            <div className="pt-4 border-t-2 border-slate-100 mt-auto bg-slate-50 -mx-6 -mb-6 p-6">
                <div className="flex items-center justify-between">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Result</div>
                    <div className="text-xl font-black text-teal-600 text-right">{result}</div>
                </div>
                {linkUrl && linkText && (
                    <div className="mt-5 pt-4 border-t border-slate-200 text-right">
                        <Link href={linkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-teal-600 transition-colors group/link">
                            {linkText}
                            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

function FaqItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all hover:border-teal-300">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 hover:text-teal-700 transition-colors"
                aria-expanded={isOpen}
            >
                {question}
                {isOpen ? <ChevronUp className="text-teal-500" /> : <ChevronDown className="text-slate-400" />}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 bg-slate-50/50 text-sm">
                    {answer}
                </div>
            </div>
        </div>
    );
}
