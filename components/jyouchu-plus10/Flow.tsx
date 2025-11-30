'use client';

import { UserPlus, FileText, Video, Handshake, ArrowDown } from 'lucide-react';

const steps = [
    {
        icon: UserPlus,
        title: "無料エージェント登録",
        desc: "フォームから30秒で完了。登録後、今後の流れについてご案内メールをお送りします。"
    },
    {
        icon: FileText,
        title: "ヒアリング・日程調整",
        desc: "ヒアリングシートにご記入いただき、ご都合の良い日時で30分のオンラインカウンセリングをご予約ください。"
    },
    {
        icon: Video,
        title: "オンラインカウンセリング",
        desc: "専任アドバイザーとざっくばらんにお話ししましょう。ご希望の条件やキャリアプランをお伺いします。"
    },
    {
        icon: Handshake,
        title: "案件ご提案・参画",
        desc: "条件を満たす+10万円アップ案件をご提案。企業面談を経て、最短3日で参画決定。"
    }
];

export default function Flow() {
    return (
        <section id="flow" className="py-12 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
                        参画までの流れ
                    </h2>
                    <p className="text-sm md:text-base text-slate-600">
                        面倒な手続きは一切なし。スピーディーに案件をご紹介します。
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white md:bg-transparent p-6 md:p-0 rounded-xl shadow-sm md:shadow-none border md:border-none border-slate-100 h-full">
                                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-white rounded-full border-4 border-primary-100 flex items-center justify-center mb-4 md:mb-6 shadow-sm relative z-10">
                                        <step.icon className="h-8 w-8 md:h-10 md:w-10 text-primary-600" />
                                    </div>
                                    <div className="text-center">
                                        <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded-full mb-3">
                                            STEP {index + 1}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{step.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                                {/* Mobile Arrow */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-slate-300 z-0">
                                        <ArrowDown className="h-6 w-6" />
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
