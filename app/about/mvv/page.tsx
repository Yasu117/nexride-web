export default function MVVPage() {
    return (
        <div className="container mx-auto px-4 py-20 max-w-4xl">
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Mission / Vision / Value</h1>
                <p className="text-slate-600">私たちの目指すもの</p>
            </div>

            <div className="space-y-24">
                {/* Mission */}
                <section className="text-center">
                    <span className="text-cyan-600 font-bold tracking-widest mb-4 block">MISSION</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">For the better</h2>
                    <p className="text-lg text-slate-600 leading-loose max-w-2xl mx-auto">
                        社会をより良く。<br />
                        私たちは、テクノロジーの力で社会課題を解決し、<br />
                        すべてのステークホルダーに価値を提供します。
                    </p>
                </section>

                {/* Vision */}
                <section className="text-center">
                    <span className="text-cyan-600 font-bold tracking-widest mb-4 block">VISION</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">テクノロジーで未来を実装する</h2>
                    <p className="text-lg text-slate-600 leading-loose max-w-2xl mx-auto">
                        常に最先端の技術を探求し、<br />
                        誰もが恩恵を受けられる社会インフラを構築します。
                    </p>
                </section>

                {/* Value */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-cyan-600 font-bold tracking-widest mb-4 block">VALUE</span>
                        <h2 className="text-3xl md:text-4xl font-bold">大切にしている価値観</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'お客様と共に成長', desc: '単なるサービス提供ではなく、パートナーとして共に成長することを念頭に置いています。' },
                            { title: '革新的なソリューション', desc: '最新のテクノロジーと深い業界知識を組み合わせ、最適なソリューションを提供します。' },
                            { title: '成果にコミット', desc: 'プロジェクトの成功を最優先に、確実な成果を出すことにコミットします。' }
                        ].map((value, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <h3 className="text-xl font-bold mb-4 text-slate-900">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
