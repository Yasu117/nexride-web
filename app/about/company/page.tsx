export default function CompanyPage() {
    return (
        <div className="container mx-auto px-4 py-20 max-w-3xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Company Profile</h1>
                <p className="text-slate-600">会社概要</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <dl className="divide-y divide-gray-100">
                    {[
                        { label: '会社名', value: 'ネクスライド株式会社' },
                        { label: '設立日', value: '2022年12月27日' },
                        { label: '代表者', value: '代表取締役 清水 泰孝' },
                        { label: '共同創業者', value: '柴田 泰成' },
                        { label: '資本金', value: '5,100万円' },
                        { label: '所在地', value: '東京都港区新橋2丁目20-15-601 新橋駅前ビル1号館 6階 BISTATION' },
                        { label: 'Mail', value: 'info@nexride.co.jp' },
                        { label: '事業内容', value: 'システム開発事業 / SES・人材エージェント事業 / デジタル業務再設計（Nexus Consulting）事業' },
                        { label: '許可番号', value: '有料職業紹介事業許可番号：13-ユ-315603' },
                    ].map((item, i) => (
                        <div key={i} className="grid md:grid-cols-3 gap-4 p-6 hover:bg-slate-50 transition-colors">
                            <dt className="font-bold text-slate-700">{item.label}</dt>
                            <dd className="md:col-span-2 text-slate-600">{item.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
