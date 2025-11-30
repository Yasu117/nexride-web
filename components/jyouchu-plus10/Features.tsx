import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Wallet, ShieldCheck, FileText, ArrowRight } from 'lucide-react';

const features = [
    {
        icon: Wallet,
        title: "月収10万円アップ保証（条件あり）",
        description: "10万円アップの実績多数。週5常駐の案件を中心に扱い、高単価を狙いやすい構造です。"
    },
    {
        icon: ShieldCheck,
        title: "優良企業の直案件のみ",
        description: "商流を明確にし、直請け・元請け比率の高い案件をご紹介します。"
    },
    {
        icon: FileText,
        title: "独立・開業もフルサポート",
        description: "開業届や税務サポート、スキルシート作成代行など、独立時の手続きもバックアップします。"
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        なぜ、「常駐Plus10エージェント」なのか
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        ※あなたが週5常駐案件にアサインされた場合、
                        <br className="hidden md:block" />
                        前報酬と比較して<span className="font-bold text-primary-600">＋10万円以上の単価アップ</span>を保証します。
                        <br className="hidden md:block" />
                        エンジニアファーストを追求した、3つの約束。
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                        >
                            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="h-7 w-7 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-16 text-center">
                    <Button asChild size="lg" variant="gold" className="text-lg px-8 font-bold w-full sm:w-auto shadow-xl">
                        <Link href="#contact" className="flex items-center justify-center gap-2">
                            10万円アップを狙って無料登録する
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </Button>
                    <p className="mt-4 text-xs text-slate-500">
                        ※ご登録後、ヒアリングシートのご案内をお送りします。<br className="hidden sm:block" />
                        いきなり面談が設定されることはありませんのでご安心ください。
                    </p>
                </div>
            </div>
        </section>
    );
}
