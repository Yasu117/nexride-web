'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { Rocket, Code, Zap, CheckCircle, ArrowRight, Mail, Menu, X, Cpu, Database, Layout, Clock, ShieldCheck, ChevronDown, ChevronUp, Users, MapPin } from 'lucide-react';
import './styles.css';

export default function AIDevWorksPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [activePlanIndex, setActivePlanIndex] = useState(1); // Default to Standard plan
    const [isComparisonOpen, setIsComparisonOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const plans = [
        {
            id: 'mvp',
            title: "MVP / Prototype",
            subtitle: "プロトタイプ・実証実験",
            price: "50万円〜",
            period: "納期: 2週間〜",
            features: [
                '主要機能の実装 (MVP)',
                'テンプレートUIデザイン',
                'スマホ対応 (レスポンシブ)',
                '基本認証機能',
                'デプロイ・公開設定'
            ],
            isPopular: false
        },
        {
            id: 'standard',
            title: "Business Dev",
            subtitle: "新規事業・業務システム",
            price: "100万円〜",
            period: "納期: 1ヶ月〜",
            features: [
                '要件定義・詳細設計',
                'フルスクラッチ開発',
                'UI/UXデザイン',
                '管理画面 (Admin) 構築',
                'データベース設計・構築',
                '外部API連携'
            ],
            isPopular: true
        },
        {
            id: 'enterprise',
            title: "Enterprise",
            subtitle: "大規模開発・ラボ型",
            price: "ASK",
            period: "期間: 相談",
            features: [
                '専任チーム体制',
                '高度なAI機能実装',
                '高負荷対策・スケーリング',
                'セキュリティ監査',
                'レガシーシステム移行',
                '週次定例ミーティング'
            ],
            isPopular: false
        }
    ];

    return (
        <div className="ai-dev-works-wrapper">
            {/* Navigation */}
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: 'rgba(10, 10, 15, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
                            }}>
                                <Code size={24} color="white" />
                            </div>
                            <div>
                                <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: '#94a3b8', display: 'block', lineHeight: 1, marginBottom: '2px' }}>システム開発/Web開発</span>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white', letterSpacing: '-0.5px', display: 'block', lineHeight: 1 }}>AI-Dev<span style={{ color: '#2563eb' }}>.Works</span></span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="desktop-menu">
                        <Link href="/" style={{ fontSize: '0.9rem', fontWeight: '500', color: 'white', textDecoration: 'none' }}>ホーム</Link>
                        <a href="#features" style={{ fontSize: '0.9rem', fontWeight: '500' }}>特徴</a>
                        <a href="#cases" style={{ fontSize: '0.9rem', fontWeight: '500' }}>実績</a>
                        <a href="#plans" style={{ fontSize: '0.9rem', fontWeight: '500' }}>料金</a>
                        <a href="#process" style={{ fontSize: '0.9rem', fontWeight: '500' }}>流れ</a>
                        <a href="/#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>お問い合わせ</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="mobile-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </div>
                </div>
                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div style={{
                        position: 'absolute',
                        top: '80px',
                        left: 0,
                        right: 0,
                        background: 'rgba(10, 10, 15, 0.95)',
                        backdropFilter: 'blur(10px)',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        borderBottom: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <Link href="/" onClick={toggleMenu} style={{ fontSize: '1.1rem', fontWeight: '500', color: 'white', textDecoration: 'none' }}>ホーム</Link>
                        <a href="#features" onClick={toggleMenu} style={{ fontSize: '1.1rem', fontWeight: '500' }}>特徴</a>
                        <a href="#cases" onClick={toggleMenu} style={{ fontSize: '1.1rem', fontWeight: '500' }}>実績</a>
                        <a href="#plans" onClick={toggleMenu} style={{ fontSize: '1.1rem', fontWeight: '500' }}>料金</a>
                        <a href="#process" onClick={toggleMenu} style={{ fontSize: '1.1rem', fontWeight: '500' }}>流れ</a>
                        <a href="/#contact" onClick={toggleMenu} className="btn btn-primary" style={{ textAlign: 'center' }}>お問い合わせ</a>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <header style={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                paddingTop: '80px'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url(/hero_bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(10,10,15,0.7), var(--bg-primary))',
                    zIndex: -1
                }}></div>

                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>

                    <h1 style={{ marginBottom: '1.5rem', minHeight: '8rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ fontSize: 'inherit' }}>
                            <TypewriterText text="「作りたい」を、" startDelay={500} />
                        </div>
                        <div style={{ fontSize: 'inherit', color: '#2563eb' }}>
                            <TypewriterText text="最速で現実に。" startDelay={2000} showCursor={true} />
                        </div>
                    </h1>
                    <p className="animate-fade-in" style={{ animationDelay: '3.5s', marginBottom: '2.5rem', fontSize: '1.2rem' }}>
                        アイデアを即座にプロダクトへ。<br />
                        圧倒的なスピードと妥協のない品質で、あなたのビジネスを加速させます。
                    </p>
                    <div className="animate-fade-in" style={{ animationDelay: '0.6s', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/#contact" className="btn btn-primary">
                            無料相談を申し込む <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </a>
                        <a href="#plans" className="btn" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            料金プランを見る
                        </a>
                    </div>
                </div>


                {/* Scroll Indicator */}
                <div className="scroll-indicator animate-fade-in" style={{ animationDelay: '4.5s' }}>
                    <span style={{ fontSize: '0.75rem', letterSpacing: '2px', marginBottom: '0.5rem' }}>SCROLL</span>
                    <div className="scroll-line"></div>
                </div>
            </header >

            {/* Problem & Solution Section */}
            < section className="section" style={{ background: 'var(--bg-secondary)' }
            }>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ marginBottom: '1.5rem' }}>こんなお悩みありませんか？</h2>
                            <ul style={{ marginBottom: '2rem' }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                                    <div style={{ background: 'rgba(20, 184, 166, 0.2)', padding: '0.5rem', borderRadius: '50%' }}><X size={20} color="#2563eb" /></div>
                                    システム開発の見積もりが高すぎる
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                                    <div style={{ background: 'rgba(20, 184, 166, 0.2)', padding: '0.5rem', borderRadius: '50%' }}><X size={20} color="#2563eb" /></div>
                                    納期が3ヶ月以上かかり、チャンスを逃す
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                                    <div style={{ background: 'rgba(20, 184, 166, 0.2)', padding: '0.5rem', borderRadius: '50%' }}><X size={20} color="#2563eb" /></div>
                                    エンジニア採用が難しく、開発が進まない
                                </li>
                            </ul>
                        </div>
                        <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(10, 10, 15, 0.8))', border: '1px solid var(--accent-primary)' }}>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>AI-Dev.Worksの解決策</h3>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                最新テクノロジーと熟練エンジニアの融合。<br />
                                圧倒的な開発スピードで、市場投入までの時間を劇的に短縮します。
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', flex: 1 }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>High</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>クオリティ</div>
                                </div>
                                <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }}></div>
                                <div style={{ textAlign: 'center', flex: 1 }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>2x</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>スピード</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Features Section */}
            < section id="features" className="section" >
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem' }}>3つの強み</h2>
                        <p>AIテクノロジーで実現する、新しい開発の常識</p>
                    </div>

                    <div className="features-grid">
                        <FeatureCard
                            icon={<Zap size={32} color="#2563eb" />}
                            title="Speed: 圧倒的なスピード"
                            desc="最新技術と効率化されたプロセスにより、開発期間を大幅に短縮。ビジネスチャンスを逃さず、最速で市場へ投入します。"
                        />
                        <FeatureCard
                            icon={<Users size={32} color="#2563eb" />}
                            title="Direct: エンジニア直結"
                            desc="営業担当を挟まず、リードエンジニアが直接担当。ビジネス背景を深く理解し、単なる実装だけでなく事業成長に最適な技術提案を即座に行います。"
                        />
                        <FeatureCard
                            icon={<ShieldCheck size={32} color="#2563eb" />}
                            title="Quality: 妥協なき高品質"
                            desc="モダンな技術選定と厳格なコード規約に基づき、拡張性と保守性の高いシステムを構築。将来的な内製化や引き継ぎもスムーズです。"
                        />
                    </div>
                </div>
            </section >

            {/* Tech Stack Section */}
            <section className="section" style={{ background: 'var(--bg-secondary)', padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Technology Stack</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>パフォーマンスと保守性に優れた、モダンな技術を採用しています</p>
                    </div>

                    <div className="marquee-container" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                        <div className="marquee-content">
                            {/* Duplicate items for seamless loop */}
                            {[...['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'Supabase', 'AWS', 'Vercel', 'TailwindCSS', 'PostgreSQL', 'Docker', 'Git', 'GCP', 'Firebase', 'GraphQL', 'Prisma', 'Stripe', 'OpenAI API'], ...['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'Supabase', 'AWS', 'Vercel', 'TailwindCSS', 'PostgreSQL', 'Docker', 'Git', 'GCP', 'Firebase', 'GraphQL', 'Prisma', 'Stripe', 'OpenAI API']].map((tech, index) => (
                                <div key={`${tech}-${index}`} className="glass-card" style={{
                                    padding: '0.8rem 1.5rem',
                                    margin: 0,
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    whiteSpace: 'nowrap'
                                }}>
                                    <Code size={16} color="#2563eb" />
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section id="cases" className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2>開発実績・ユースケース</h2>
                        <p>様々な業界・規模のプロジェクトで成果を出しています</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <UseCaseCard
                            title="新規事業マッチングアプリ"
                            category="Startup / MVP"
                            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            stats={[
                                { label: '開発期間', value: '1.5ヶ月' },
                                { label: '費用', value: '120万円' }
                            ]}
                            desc="位置情報を活用したリアルタイムマッチング機能を持つMVPアプリを開発。バックエンド構築を効率化し、短期間でのローンチを実現。"
                        />
                        <UseCaseCard
                            title="社内業務管理ダッシュボード"
                            category="DX / Internal Tool"
                            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            stats={[
                                { label: '開発期間', value: '3週間' },
                                { label: '費用', value: '60万円' }
                            ]}
                            desc="スプレッドシートで管理していた営業データを一元管理するWebシステム。データ移行から実装までをワンストップで迅速に遂行。"
                        />
                    </div>
                </div>
            </section >

            {/* Plans Section */}
            < section id="plans" className="section" >
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2>料金プラン</h2>
                        <p style={{ marginBottom: '1rem' }}>プロジェクトの規模・フェーズに合わせた最適な開発プラン</p>
                        <p style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>人月計算で開発費を見積もりません。</p>
                    </div>

                    {/* Mobile Tabs */}
                    <div className="mobile-plan-tabs">
                        {plans.map((plan, index) => (
                            <button
                                key={plan.id}
                                className={`plan-tab-btn ${activePlanIndex === index ? 'active' : ''}`}
                                onClick={() => setActivePlanIndex(index)}
                            >
                                {plan.title}
                            </button>
                        ))}
                    </div>

                    {/* Plans Grid (Desktop) / Active Plan (Mobile) */}
                    <div className="plans-grid">
                        {plans.map((plan, index) => (
                            <div key={plan.id} className={`plan-wrapper ${activePlanIndex === index ? 'mobile-active' : ''}`}>
                                <PlanCard
                                    title={plan.title}
                                    subtitle={plan.subtitle}
                                    price={plan.price}
                                    period={plan.period}
                                    features={plan.features}
                                    isPopular={plan.isPopular}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Other Services */}
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.25rem' }}>その他のサービス</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

                            {/* Web Production */}
                            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                                <div style={{ background: 'rgba(20, 184, 166, 0.2)', padding: '0.8rem', borderRadius: '50%', flexShrink: 0 }}>
                                    <Layout size={24} color="#2563eb" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Web制作 / LP</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>コーポレートサイト、LP、CMS構築</p>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>30万円〜</div>
                                </div>
                                <a href="/#contact" className="btn" style={{ background: 'rgba(255,255,255,0.1)', fontSize: '0.8rem', padding: '0.4rem 1rem', whiteSpace: 'nowrap' }}>相談</a>
                            </div>

                            {/* Maintenance */}
                            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                                <div style={{ background: 'rgba(20, 184, 166, 0.2)', padding: '0.8rem', borderRadius: '50%', flexShrink: 0 }}>
                                    <ShieldCheck size={24} color="#2563eb" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>保守・運用サポート</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>サーバー監視、バグ修正、小規模改修</p>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>月額 5万円〜</div>
                                </div>
                                <a href="/#contact" className="btn" style={{ background: 'rgba(255,255,255,0.1)', fontSize: '0.8rem', padding: '0.4rem 1rem', whiteSpace: 'nowrap' }}>相談</a>
                            </div>

                        </div>
                    </div>

                    <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        ※ 開発プランは、ご契約時に着手金として費用の50%を申し受けます。残金は納品時のお支払いとなります。
                    </p>
                </div>
            </section >

            {/* Comparison Section */}
            < section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <h2 style={{ textAlign: 'center', margin: 0, fontSize: '1.5rem' }}>従来開発との比較</h2>
                        </div>

                        <div className="comparison-content open" style={{ display: 'grid' }}>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                            <th style={{ padding: '1rem', textAlign: 'left' }}>項目</th>
                                            <th style={{ padding: '1rem', textAlign: 'left', color: '#a0a0b0' }}>一般的な開発会社</th>
                                            <th style={{ padding: '1rem', textAlign: 'left', color: '#2563eb', fontSize: '1.2rem' }}>弊社</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '1.5rem 1rem', fontWeight: 'bold' }}>担当者</td>
                                            <td style={{ padding: '1.5rem 1rem' }}>営業・PM経由 (伝言ゲーム)</td>
                                            <td style={{ padding: '1.5rem 1rem', color: '#2563eb', fontWeight: 'bold' }}>エンジニア直結 (即断即決)</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '1.5rem 1rem', fontWeight: 'bold' }}>コストパフォーマンス</td>
                                            <td style={{ padding: '1.5rem 1rem' }}>人月計算で高額になりがち</td>
                                            <td style={{ padding: '1.5rem 1rem', color: '#2563eb', fontWeight: 'bold' }}>成果にコミットした適正価格</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '1.5rem 1rem', fontWeight: 'bold' }}>開発スピード</td>
                                            <td style={{ padding: '1.5rem 1rem' }}>数ヶ月〜半年</td>
                                            <td style={{ padding: '1.5rem 1rem', color: '#2563eb', fontWeight: 'bold' }}>数週間〜最短納品</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '1.5rem 1rem', fontWeight: 'bold' }}>品質・保守性</td>
                                            <td style={{ padding: '1.5rem 1rem' }}>属人的なばらつき</td>
                                            <td style={{ padding: '1.5rem 1rem', color: '#2563eb', fontWeight: 'bold' }}>標準化された高品質コード</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Process Section */}
            < section id="process" className="section" >
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2>開発フロー</h2>
                        <p>ご相談から納品まで、スピーディかつ透明性のあるプロセス</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <TimelineItem
                            step="01"
                            title="ヒアリング・要件定義"
                            desc="お客様のアイデアや課題を深くヒアリング。類似事例のノウハウを活用し、最適な要件定義をスピーディに行います。"
                        />
                        <TimelineItem
                            step="02"
                            title="ご契約・着手金のお支払い"
                            desc="提案内容にご納得いただけましたら契約締結となります。リソース確保のため、着手金（50%）のご入金をお願いしております。"
                        />
                        <TimelineItem
                            step="03"
                            title="プロトタイプ作成・開発"
                            desc="開発効率化ツールを駆使し、動くプロトタイプを早期に提示。認識のズレを防ぎながら、本開発を一気に進めます。"
                        />
                        <TimelineItem
                            step="04"
                            title="テスト・修正"
                            desc="自動化されたテストと熟練エンジニアによるコードレビューを実施。バグの早期発見・修正を行い、品質を磨き上げます。"
                        />
                        <TimelineItem
                            step="05"
                            title="納品・残金のお支払い"
                            desc="最終確認後、本番環境へデプロイ・納品となります。完了後、残金（50%）をお支払いいただきます。"
                        />
                    </div>
                </div>
            </section >

            {/* FAQ Section */}
            < section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2>よくある質問</h2>
                        <p>AI開発に関する疑問にお答えします</p>
                    </div>

                    <div className="faq-list">
                        <FaqItem
                            question="コードの権利や、将来的な内製化について教えてください。"
                            answer="納品されたコードの著作権は完全にお客様に帰属します。また、特定のベンダーに依存しない標準的な技術（Next.js等）で構築するため、将来的な内製化や他社への引き継ぎもスムーズに行えます。"
                            isOpen={openFaqIndex === 0}
                            onClick={() => toggleFaq(0)}
                        />
                        <FaqItem
                            question="セキュリティや情報漏洩の心配はありませんか？"
                            answer="はい、万全の対策を行っております。開発環境や使用ツールにおいて厳格なセキュリティ基準を設けており、お客様の機密情報は厳重に管理されます。"
                            isOpen={openFaqIndex === 1}
                            onClick={() => toggleFaq(1)}
                        />
                        <FaqItem
                            question="着手金は必ず必要ですか？"
                            answer="はい、短納期での開発を実現するためにリソースを優先的に確保する必要があるため、原則として着手金（50%）のご入金をお願いしております。"
                            isOpen={openFaqIndex === 2}
                            onClick={() => toggleFaq(2)}
                        />
                        <FaqItem
                            question="開発後の保守・運用もお願いできますか？"
                            answer="もちろんです。Growth Plan（月額5万円〜）にて、サーバー監視やバグ修正、小規模な改修などを継続的にサポートいたします。"
                            isOpen={openFaqIndex === 3}
                            onClick={() => toggleFaq(3)}
                        />
                    </div>
                </div>
            </section >





            {/* Footer */}
            < footer style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--text-secondary)' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <Cpu size={20} color="#2563eb" />
                        <span style={{ fontWeight: 'bold', color: 'white' }}>AI-Dev.Works</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Operated by NexRide Inc.</p>
                    <p style={{ fontSize: '0.9rem' }}>© 2024 AI-Dev.Works. All rights reserved.</p>
                </div>
            </footer >
        </div >
    );
}

// Components
interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
    <div className="glass-card" style={{ textAlign: 'left' }}>
        <div style={{ marginBottom: '1rem', background: 'rgba(255,255,255,0.05)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ fontSize: '0.95rem' }}>{desc}</p>
    </div>
);

interface UseCaseCardProps {
    title: string;
    category: string;
    image: string;
    stats: { label: string; value: string }[];
    desc: string;
}

const UseCaseCard = ({ title, category, image, stats, desc }: UseCaseCardProps) => (
    <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ height: '200px', overflow: 'hidden' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
        </div>
        <div style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>{category}</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{title}</h3>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                {stats.map((stat, i) => (
                    <div key={i}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{stat.label}</div>
                        <div style={{ fontWeight: 'bold' }}>{stat.value}</div>
                    </div>
                ))}
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{desc}</p>
        </div>
    </div>
);

interface PlanCardProps {
    title: string;
    subtitle: string;
    price: string;
    period: string;
    features: string[];
    isPopular: boolean;
}

const PlanCard = ({ title, subtitle, price, period, features, isPopular }: PlanCardProps) => (
    <div className="glass-card" style={{ position: 'relative', height: '100%', border: isPopular ? '1px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.05)' }}>
        {isPopular && <div className="popular-badge">RECOMMENDED</div>}
        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{subtitle}</p>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>{price}</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{period}</div>
        </div>
        <ul style={{ marginBottom: '2rem' }}>
            {features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                    <CheckCircle size={16} color={isPopular ? "#2563eb" : "#a0a0b0"} /> {f}
                </li>
            ))}
        </ul>
        <a href="/#contact" className={`btn ${isPopular ? 'btn-primary' : ''}`} style={{ width: '100%', textAlign: 'center', background: isPopular ? '' : 'rgba(255,255,255,0.1)' }}>
            相談する
        </a>
    </div>
);

interface TimelineItemProps {
    step: string;
    title: string;
    desc: string;
}

const TimelineItem = ({ step, title, desc }: TimelineItemProps) => (
    <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 'bold', marginBottom: '0.2rem' }}>STEP {step}</div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ fontSize: '0.95rem' }}>{desc}</p>
    </div>
);

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
        <div className="faq-question" onClick={onClick}>
            {question}
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        <div className="faq-answer">{answer}</div>
    </div>
);

interface TypewriterTextProps {
    text: string;
    startDelay?: number;
    showCursor?: boolean;
}

const TypewriterText = ({ text, startDelay = 0, showCursor = false }: TypewriterTextProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasStarted(true);
        }, startDelay);
        return () => clearTimeout(timer);
    }, [startDelay]);

    useEffect(() => {
        if (!hasStarted) return;

        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.substring(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, 100);

        return () => clearInterval(interval);
    }, [hasStarted, text]);

    const [blink, setBlink] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setBlink(b => !b);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const isTyping = hasStarted && displayedText.length < text.length;
    const isFinished = hasStarted && displayedText.length === text.length;

    return (
        <span>
            {displayedText}
            <span style={{
                opacity: (isTyping || (isFinished && showCursor && blink)) ? 1 : 0,
                transition: 'opacity 0.1s',
                marginLeft: '2px',
                color: '#2563eb'
            }}>|</span>
        </span>
    );
};
