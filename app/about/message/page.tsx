export default function MessagePage() {
    return (
        <div className="container mx-auto px-4 py-20 max-w-5xl">
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Top Message</h1>
                <p className="text-slate-600">代表挨拶</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold mb-8 text-slate-900 leading-tight">
                        テクノロジーの力で、<br />
                        社会の可能性を広げる。
                    </h2>
                    <div className="space-y-6 text-slate-600 leading-relaxed">
                        <p>
                            私たちは創業以来、「For the better」を掲げ、テクノロジーによる社会課題の解決に取り組んでまいりました。
                        </p>
                        <p>
                            急速に変化するデジタル社会において、企業には常に変革が求められています。私たちは、お客様の真のパートナーとして、システム開発からDX推進まで、ビジネスの成長を加速させるための最適なソリューションを提供します。
                        </p>
                        <p>
                            これからも、技術への探究心と社会への貢献心を忘れず、より良い未来の創造に挑戦し続けてまいります。
                        </p>
                    </div>
                    <div className="mt-10">
                        <p className="text-sm text-slate-500 mb-1">代表取締役 CEO</p>
                        <p className="text-xl font-bold text-slate-900">清水 泰孝</p>
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <div className="aspect-[3/4] bg-slate-200 rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                            Representative Image Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
