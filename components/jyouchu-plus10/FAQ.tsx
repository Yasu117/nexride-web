'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "正社員からフリーランスになる場合も保証対象ですか？",
        answer: "はい。現在の給与（額面）を基準に、+10万円以上となるよう調整します。正社員からの独立も強力にバックアップいたします。"
    },
    {
        question: "保証は“必ず＋10万円以上”になるんですか？",
        answer: "はい。当社が提示した案件に週5常駐でアサインされた場合、前報酬との差額が10万円未満の場合は当社が負担し、実質＋10万円以上となるよう調整します。（※詳細は保証規定ページをご確認ください。）",
    },
    {
        question: "もし希望の案件がなかった場合は？",
        answer: "保証対象の案件がなければ、通常のフリーランス案件としてご案内します。強引なアサインは一切ありませんのでご安心ください。",
    },
    {
        question: "リモート希望なんですが、登録しても意味ないですか？",
        answer: "登録可能です。ただし、10万円アップ保証の対象外になります。リモート案件も保有していますが、単価は保証しておりません。"
    },
    {
        question: "週5常駐OKの場合、なぜ単価が上がりやすいの？",
        answer: "元請け・大手Sier・事業会社の案件には「常駐必須」が多く、商流を浅くしやすい＝単価を上げやすいためです。"
    },
    {
        question: "保証が適用されない場合はありますか？",
        answer: "はい。前案件の報酬エビデンスが提出できない場合、スキルシートに虚偽の記載がある場合、または週5常駐以外の案件へのアサインとなった場合は保証対象外となります。"
    },
    {
        question: "登録後、すぐに案件紹介してもらえますか？",
        answer: "スキルシートと報酬エビデンスをご提出いただいた方には、最短3日で案件をご紹介いたします。ただし、ご希望条件やスキルによっては、お時間をいただく場合がございます。"
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
                            <HelpCircle className="h-4 w-4" />
                            <span>よくある質問</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            FAQ
                        </h2>
                        <p className="text-lg text-slate-600">
                            よくいただくご質問をまとめました
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden transition-all hover:border-primary-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
                                >
                                    <span className="font-bold text-slate-900 pr-4">
                                        Q: {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-5 pt-2">
                                        <p className="text-slate-700 leading-relaxed bg-white rounded-lg p-4 border-l-4 border-primary-500">
                                            <span className="font-semibold text-primary-600">A: </span>
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
