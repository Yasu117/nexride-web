import React from 'react';

export default function CompanyPage() {
    return (
        <div className="min-h-screen bg-white pt-28 pb-10">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0F4C5C] to-[#57C7D4]">会社概要</h1>
                </div>

                {/* Company Info Table */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <dl className="divide-y divide-slate-100">
                        <div className="flex flex-col md:flex-row p-4 hover:bg-slate-50/50 transition-colors items-center">
                            <dt className="w-full md:w-1/4 font-bold text-slate-900 mb-2 md:mb-0">会社名</dt>
                            <dd className="w-full md:w-3/4 text-slate-600">ネクスライド株式会社</dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-4 hover:bg-slate-50/50 transition-colors items-center">
                            <dt className="w-full md:w-1/4 font-bold text-slate-900 mb-2 md:mb-0">設立日</dt>
                            <dd className="w-full md:w-3/4 text-slate-600">2022年12月27日</dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-4 hover:bg-slate-50/50 transition-colors items-center">
                            <dt className="w-full md:w-1/4 font-bold text-slate-900 mb-2 md:mb-0">代表者</dt>
                            <dd className="w-full md:w-3/4 text-slate-600">代表取締役 清水 泰孝</dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-4 hover:bg-slate-50/50 transition-colors items-center">
                            <dt className="w-full md:w-1/4 font-bold text-slate-900 mb-2 md:mb-0">共同創業者</dt>
                            <dd className="w-full md:w-3/4 text-slate-600">柴田 泰成</dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-4 hover:bg-slate-50/50 transition-colors items-center">
                            <dt className="w-full md:w-1/4 font-bold text-slate-900 mb-2 md:mb-0">資本金</dt>
                            <dd className="w-full md:w-3/4 text-slate-600">5,100万円</dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-4 hover:bg-slate-50/50 transition-colors items-center">
                            <dt className="w-full md:w-1/4 font-bold text-slate-900 mb-2 md:mb-0">所在地</dt>
                            <dd className="w-full md:w-3/4 text-slate-600">
                                東京都港区新橋2丁目20-15-601 新橋駅前ビル1号館 6階 BISTATION
                            </dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-4 hover:bg-slate-50/50 transition-colors items-center">
                            <dt className="w-full md:w-1/4 font-bold text-slate-900 mb-2 md:mb-0">Mail</dt>
                            <dd className="w-full md:w-3/4 text-slate-600">info@nexride.co.jp</dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-4 hover:bg-slate-50/50 transition-colors items-center">
                            <dt className="w-full md:w-1/4 font-bold text-slate-900 mb-2 md:mb-0">事業内容</dt>
                            <dd className="w-full md:w-3/4 text-slate-600 leading-relaxed">
                                システム開発事業 / SES・人材エージェント事業 / デジタル業務再設計（Real DX）事業
                            </dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-4 hover:bg-slate-50/50 transition-colors items-center">
                            <dt className="w-full md:w-1/4 font-bold text-slate-900 mb-2 md:mb-0">許可番号</dt>
                            <dd className="w-full md:w-3/4 text-slate-600">有料職業紹介事業許可番号：13-ユ-315603</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
