'use client';

import { CheckCircle2, AlertCircle, FileText, UserCheck, Building2 } from 'lucide-react';

const conditions = [
    {
        icon: FileText,
        title: "前報酬エビデンスの提出",
        description: "給与明細・請求書・契約書などをご提出いただきます。正社員から独立する方も対象。"
    },
    {
        icon: UserCheck,
        title: "正確なスキルシート",
        description: "虚偽なくご記入いただきます。"
    },
    {
        icon: Building2,
        title: "週5常駐のアサイン",
        description: "フルリモート案件は対象外です。"
    }
];

export default function GuaranteeConditions() {
    return (
        <section id="conditions" className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 border-y-4 border-amber-400 scroll-mt-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border-2 border-amber-400 text-amber-900 font-bold mb-4">
                            <AlertCircle className="h-5 w-5" />
                            登録前に必ずご確認ください
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            10万円アップ保証の条件
                        </h2>
                        <p className="text-lg text-slate-700 font-semibold">
                            以下3点をすべて満たした場合、<br className="md:hidden" />
                            月収＋10万円アップを保証します。
                        </p>
                    </div>

                    {/* Conditions */}
                    <div className="space-y-4 mb-10">
                        {conditions.map((condition, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md border-2 border-amber-200 hover:border-amber-400 transition-all"
                            >
                                <div className="flex gap-4 items-center">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                                        <condition.icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                                            <span className="text-amber-500 mr-2">●</span>
                                            {condition.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed pl-5">
                                            {condition.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Reason Box */}
                    <div className="mb-8 p-5 bg-yellow-50/80 rounded-xl border border-yellow-200 text-sm text-slate-700 shadow-sm">
                        <p className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                            <span className="bg-yellow-100 p-1 rounded text-lg">💡</span>
                            なぜ＋10万円が保証できるのか？
                        </p>
                        <p className="leading-relaxed pl-9">
                            ※週5常駐の案件は元請け・大手企業への配属が多く、商流を浅くしやすいため単価アップの再現性が高いことが理由です。
                        </p>
                    </div>

                    {/* Notes */}
                    <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-slate-400">
                        <p className="text-sm text-slate-700 font-semibold mb-2">📌 注意事項</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>保証額は「前案件の単価」と「今回の契約単価」の差分です。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>審査の結果、ご希望に添えない場合があります。</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
