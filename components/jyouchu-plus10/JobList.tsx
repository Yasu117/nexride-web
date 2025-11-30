'use client';

import { useState } from 'react';
import { MapPin, Clock, Banknote, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const jobs = [
    {
        title: "大規模ECサイトのリードエンジニア",
        price: "90",
        skills: ["Go", "AWS", "Microservices"],
        location: "港区",
        type: "バックエンド",
        workStyle: "週5常駐",
        isGuaranteed: true,
        supplyChain: "エンド直"
    },
    {
        title: "Webサービスの機能追加・テスト",
        price: "60",
        skills: ["PHP", "Laravel", "MySQL"],
        location: "新宿区",
        type: "バックエンド",
        workStyle: "週5常駐",
        isGuaranteed: true,
        supplyChain: "1次請け"
    },
    {
        title: "生成AI活用・データ分析基盤構築",
        price: "110",
        skills: ["Python", "GCP", "LLM"],
        location: "六本木 (フルリモート)",
        type: "データサイエンス",
        workStyle: "フルリモート",
        isGuaranteed: false,
        supplyChain: "エンド直"
    },
    {
        title: "社内システムの運用保守・改修",
        price: "50",
        skills: ["Java", "SQL", "Excel"],
        location: "品川区",
        type: "運用保守",
        workStyle: "週5常駐",
        isGuaranteed: true,
        supplyChain: "2次請け"
    },
    {
        title: "金融系基幹システム刷新のPM",
        price: "120",
        skills: ["PM経験", "要件定義", "大規模開発"],
        location: "丸の内",
        type: "プロジェクトマネージャー",
        workStyle: "週5常駐",
        isGuaranteed: true,
        supplyChain: "元請け"
    },
    {
        title: "SaaSプロダクトのフロントエンド開発",
        price: "80",
        skills: ["React", "TypeScript", "Next.js"],
        location: "渋谷区 (週3リモート)",
        type: "フロントエンド",
        workStyle: "週3リモート",
        isGuaranteed: false,
        supplyChain: "エンド直"
    },
    {
        title: "業務システム詳細設計・製造",
        price: "70",
        skills: ["Java", "Spring Boot", "PostgreSQL"],
        location: "千代田区",
        type: "サーバーサイド",
        workStyle: "週5常駐",
        isGuaranteed: true,
        supplyChain: "1次請け"
    },
    {
        title: "DX推進プロジェクトのPMO支援",
        price: "100",
        skills: ["PMBOK", "課題管理", "折衝"],
        location: "大手町",
        type: "PMO",
        workStyle: "週5常駐",
        isGuaranteed: true,
        supplyChain: "元請け"
    }
];

export default function JobList() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="jobs" className="pt-24 pb-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            高単価・直案件の一部をご紹介
                        </h2>
                        <p className="text-slate-600">
                            ※実際の案件は登録後に非公開案件含めご提案します
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className={`group bg-white border border-slate-200 rounded-xl p-6 hover:border-primary-400 hover:shadow-lg transition-all cursor-default ${index >= 4 && !isExpanded ? 'hidden md:block' : 'block'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                                    {job.type}
                                </span>
                                <span className="text-2xl font-bold text-primary-600">
                                    {job.price}<span className="text-sm text-slate-500 font-normal">万円/月〜</span>
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-primary-600 transition-colors">
                                {job.title}
                            </h3>

                            {/* 保証タグ */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className={`px-2 py-1 text-xs font-bold rounded-md border ${job.workStyle === '週5常駐'
                                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                                    : 'bg-slate-50 text-slate-600 border-slate-200'
                                    }`}>
                                    {job.workStyle}
                                </span>
                                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-md border border-purple-200">
                                    {job.supplyChain}
                                </span>
                                {job.isGuaranteed ? (
                                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-md border border-green-300">
                                        ✓ 高単価保証対象
                                    </span>
                                ) : (
                                    <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-md border border-orange-200">
                                        保証対象外
                                    </span>
                                )}
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <MapPin className="h-4 w-4" />
                                    {job.location}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Clock className="h-4 w-4" />
                                    即日〜
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill) => (
                                    <span key={skill} className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile: Show More Button */}
                {!isExpanded && (
                    <div className="mt-8 text-center md:hidden">
                        <Button
                            variant="outline"
                            onClick={() => setIsExpanded(true)}
                            className="w-full max-w-xs mx-auto border-primary-200 text-primary-700 hover:bg-primary-50 hover:text-primary-800"
                        >
                            もっと案件を見る
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                )}

                <div className="mt-12 text-center space-y-2">
                    <p className="text-sm text-slate-500 font-medium">
                        ※上記は公開案件の一部です。非公開案件も多数ございます。
                    </p>
                    <p className="text-xs text-slate-400">
                        ※時期や季節により案件数には変動がございます。あらかじめご了承ください。
                    </p>
                </div>
            </div>
        </section>
    );
}
