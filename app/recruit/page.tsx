"use client";

import { useState } from 'react';
import Link from 'next/link';
import { X, CheckCircle2 } from 'lucide-react';

interface Job {
    title: string;
    type: string;
    location: string;
    details: {
        employment: string;
        location_style: string[];
        description: string[];
        required_skills: string[];
        welcome_skills: string[];
        person: string[];
        contract_example: string[];
    };
}

const jobs: Job[] = [
    {
        title: 'インフラエンジニア（AWS）',
        type: '正社員 / 業務委託',
        location: '一都三県（主に東京）',
        details: {
            employment: '正社員 / 個人事業主（業務委託・準委任）',
            location_style: ['一都三県（主に東京）クライアント先', '週2〜3日出社 または 常駐', '※フルリモート不可'],
            description: [
                'AWSを中心としたインフラ設計・構築・運用',
                'VPC / EC2 / RDS 等の基盤構築',
                '監視、運用改善、自動化',
                'セキュリティ設計・ログ分析',
                'クラウド移行（オンプレ → AWS）'
            ],
            required_skills: [
                'AWSインフラの設計または構築経験（2年以上）',
                'Linuxの基本操作',
                'ネットワーク基礎知識（TCP/IP、FW、LBなど）'
            ],
            welcome_skills: [
                'IaC（Terraform / CloudFormation）',
                'CI/CDの構築経験',
                'SRE・DevOpsの知見',
                'クラウド移行プロジェクト経験'
            ],
            person: [
                '自走して課題解決できる方',
                '円滑にコミュニケーションを取れる方',
                '新しい技術を積極的に取り入れられる方'
            ],
            contract_example: [
                '65〜105万円 / 月（スキル見合い）',
                '週5日稼働'
            ]
        }
    },
    {
        title: 'バックエンドエンジニア（Java/Python）',
        type: '正社員 / 業務委託',
        location: '一都三県（主に東京）',
        details: {
            employment: '正社員 / 個人事業主（業務委託・準委任）',
            location_style: ['一都三県（主に東京）クライアント先', '週2〜3日出社 または 常駐', '※フルリモート不可'],
            description: [
                'Webアプリケーションの設計・開発',
                'API開発（REST / GraphQL）',
                'DB設計・パフォーマンス調整',
                '新機能追加、改修、運用改善',
                'チーム内コードレビューや連携'
            ],
            required_skills: [
                'Java（Spring Boot）または Python（FastAPI/Django）での開発経験（2年以上）',
                'MySQL / PostgreSQLなどRDBの実務経験',
                'Gitを用いたチーム開発経験'
            ],
            welcome_skills: [
                'クラウド（AWS / Azure）での開発運用経験',
                'CI/CDパイプライン構築',
                'Docker等コンテナツールの使用経験'
            ],
            person: [
                'サーバサイド開発の専門性を伸ばしたい方',
                '課題発見から提案まで行える方',
                'チーム開発に積極的な方'
            ],
            contract_example: [
                '55〜95万円 / 月',
                '週5日稼働'
            ]
        }
    },
    {
        title: 'フロントエンドエンジニア（React / Next.js）',
        type: '正社員 / 業務委託',
        location: '一都三県（主に東京）',
        details: {
            employment: '正社員 / 個人事業主（業務委託・準委任）',
            location_style: ['一都三県（主に東京）クライアント先', '週2〜3日出社 または 常駐', '※フルリモート不可'],
            description: [
                'React / Next.js を用いたWebアプリ開発',
                'UI改善、アクセシビリティ対応',
                'Figmaとの連携・デザイナーとの協業',
                'API連携および状態管理',
                'パフォーマンス改善'
            ],
            required_skills: [
                'React または Next.js の実務経験（2年以上）',
                'TypeScriptの利用経験',
                'Gitを用いた開発経験'
            ],
            welcome_skills: [
                'Node.js のバックエンド経験',
                'デザインシステムの構築経験',
                'SSR/SSGへの理解'
            ],
            person: [
                'UI/UXの改善に興味がある方',
                '自ら課題を見つけ提案・改善できる方'
            ],
            contract_example: [
                '55〜95万円 / 月',
                '週5日稼働'
            ]
        }
    },
    {
        title: 'PM / プロジェクトマネージャー',
        type: '正社員 / 業務委託',
        location: '一都三県（主に東京）',
        details: {
            employment: '正社員 / 個人事業主（業務委託・準委任）',
            location_style: ['一都三県（主に東京）クライアント先', '週2〜3日出社 または 常駐', '※フルリモート不可'],
            description: [
                'プロジェクト管理（要件定義〜リリース）',
                '進捗管理、WBS作成',
                '課題管理・リスク管理',
                '会議体運営、顧客折衝',
                '開発チーム・ビジネス側との連携'
            ],
            required_skills: [
                'ITプロジェクトにおけるPM経験（2年以上）',
                '顧客折衝経験',
                'プロジェクト管理ツールの使用経験（Jiraなど）'
            ],
            welcome_skills: [
                '開発経験（Java/Python/TypeScriptなど）',
                '大規模案件でのPM/PMO経験',
                'クラウド案件の推進経験'
            ],
            person: [
                '主体性を持ってプロジェクトをリードできる方',
                '課題発見・改善が得意な方'
            ],
            contract_example: [
                '75〜125万円 / 月',
                '週5日稼働'
            ]
        }
    },
    {
        title: 'SRE / DevOpsエンジニア',
        type: '正社員 / 業務委託',
        location: '一都三県（主に東京）',
        details: {
            employment: '正社員 / 個人事業主（業務委託・準委任）',
            location_style: ['一都三県（主に東京）クライアント先', '週2〜3日出社 または 常駐', '※フルリモート不可'],
            description: [
                'CI/CDパイプライン構築',
                'Docker / Kubernetes の運用',
                'パフォーマンス改善',
                'モニタリング基盤構築',
                'IaCによる環境構築'
            ],
            required_skills: [
                'Linux操作',
                'CI/CD運用経験（GitHub Actions 等）',
                'Docker使用経験'
            ],
            welcome_skills: [
                'Kubernetes（EKS/GKE/AKS）',
                'TerraformなどIaCツール',
                'SRE経験'
            ],
            person: [
                '新しい技術・自動化が好きな方',
                '技術課題に対して主体的に動ける方'
            ],
            contract_example: [
                '65〜115万円 / 月',
                '週5日稼働'
            ]
        }
    },
    {
        title: 'データエンジニア',
        type: '正社員 / 業務委託',
        location: '一都三県（主に東京）',
        details: {
            employment: '正社員 / 個人事業主（業務委託・準委任）',
            location_style: ['一都三県（主に東京）クライアント先', '週2〜3日出社 または 常駐', '※フルリモート不可'],
            description: [
                'ETL/ELTパイプライン構築',
                'データ基盤の設計・運用（BigQuery/Redshift等）',
                'バッチ・API処理開発',
                '可視化基盤整備',
                '分析・AIチームとの連携'
            ],
            required_skills: [
                'SQL上級レベル',
                'Python または Java の実務経験',
                'データパイプライン構築経験'
            ],
            welcome_skills: [
                'クラウド（GCP/AWS）経験',
                'Airflow / Glue などの基盤構築',
                'DBチューニングの知見'
            ],
            person: [
                'データ活用に興味がある方',
                '論理的に物事を考え、改善できる方'
            ],
            contract_example: [
                '75〜125万円 / 月',
                '週5日稼働'
            ]
        }
    }
];

export default function RecruitPage() {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    return (
        <div className="container mx-auto px-4 pt-32 pb-20">
            <div className="text-center mb-20">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0F4C5C] to-[#57C7D4]">採用情報</h1>
            </div>

            <div className="max-w-4xl mx-auto">
                <section className="mb-20 text-center">
                    <h2 className="text-2xl font-bold mb-6">私たちと一緒に働きませんか？</h2>
                    <p className="text-slate-600 leading-loose mb-8">
                        ネクスライドでは、エンジニア、デザイナー、ディレクターなど、<br />
                        様々な職種の仲間を募集しています。<br />
                        新しい技術に挑戦したい方、社会課題の解決に取り組みたい方をお待ちしています。
                    </p>
                    <Link href="/#contact" className="px-8 py-4 bg-cyan-600 text-white font-bold rounded-full hover:bg-cyan-700 transition-colors shadow-lg inline-block">
                        今すぐ応募する
                    </Link>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-8 text-center">募集職種</h2>
                    <div className="space-y-6">
                        {jobs.map((job, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-cyan-500 transition-all shadow-sm hover:shadow-md flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="text-center md:text-left">
                                    <h3 className="font-bold text-lg text-slate-900">{job.title}</h3>
                                    <div className="flex gap-4 text-sm text-slate-500 justify-center md:justify-start mt-2">
                                        <span>{job.type}</span>
                                        <span>📍 {job.location}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedJob(job)}
                                    className="px-6 py-2 border border-cyan-600 text-cyan-600 font-bold rounded-lg hover:bg-cyan-50 transition-colors text-sm whitespace-nowrap"
                                >
                                    詳細を見る
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Job Detail Modal */}
            {selectedJob && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedJob(null)}
                    />
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-in fade-in zoom-in duration-200">
                        <div className="sticky top-0 bg-white/95 backdrop-blur-sm p-6 border-b border-gray-100 flex justify-between items-center z-20">
                            <h3 className="text-xl font-bold text-slate-900 pr-8">{selectedJob.title}</h3>
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-slate-500" />
                            </button>
                        </div>

                        <div className="p-6 space-y-8">
                            <DetailSection title="雇用形態" content={selectedJob.details.employment} />

                            <DetailSection title="勤務地・働き方">
                                <ul className="list-disc list-inside space-y-1 text-slate-600">
                                    {selectedJob.details.location_style.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </DetailSection>

                            <DetailSection title="業務内容">
                                <ul className="space-y-2">
                                    {selectedJob.details.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-600">
                                            <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </DetailSection>

                            <DetailSection title="必須スキル">
                                <ul className="list-disc list-inside space-y-1 text-slate-600">
                                    {selectedJob.details.required_skills.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </DetailSection>

                            <DetailSection title="歓迎スキル">
                                <ul className="list-disc list-inside space-y-1 text-slate-600">
                                    {selectedJob.details.welcome_skills.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </DetailSection>

                            <DetailSection title="求める人物像">
                                <ul className="list-disc list-inside space-y-1 text-slate-600">
                                    {selectedJob.details.person.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </DetailSection>

                            <DetailSection title="契約条件例（業務委託）">
                                <ul className="list-disc list-inside space-y-1 text-slate-600">
                                    {selectedJob.details.contract_example.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </DetailSection>
                        </div>

                        <div className="sticky bottom-0 p-6 bg-white border-t border-gray-100 flex justify-center gap-4">
                            <Link
                                href="/#contact"
                                className="px-8 py-3 bg-cyan-600 text-white font-bold rounded-full hover:bg-cyan-700 transition-colors shadow-lg w-full text-center"
                                onClick={() => setSelectedJob(null)}
                            >
                                この職種に応募する
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

function DetailSection({ title, content, children }: { title: string, content?: string, children?: React.ReactNode }) {
    return (
        <div>
            <h4 className="font-bold text-slate-900 mb-3 border-l-4 border-cyan-500 pl-3">{title}</h4>
            {content && <p className="text-slate-600">{content}</p>}
            {children}
        </div>
    )
}
