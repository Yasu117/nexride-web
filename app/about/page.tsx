import Image from 'next/image'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C5C]/5 to-[#57C7D4]/5" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0F4C5C] to-[#57C7D4]">
                        About us
                    </h1>
                </div>
            </section>

            {/* Mission / Vision / Value Section */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[#0F4C5C] font-bold tracking-wider uppercase mb-1 block text-sm">Mission / Vision / Value</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">私たちが目指すもの</h2>
                    </div>

                    <div className="grid gap-6">
                        {/* Mission */}
                        <div className="bg-slate-50 rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#0F4C5C]/10 to-transparent rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                                    <div className="md:w-1/4">
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F4C5C] mb-1">Mission</h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">使命</p>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 leading-tight">
                                            つながりを生み、<br />価値が広がる“起点”になる。
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                            私たちは、テクノロジーと人の力をかけ合わせ、
                                            お客様の課題解決と成長の連鎖を生み出す存在であり続けます。
                                            ひとつの点（Node）から始まった変化が、次の価値を呼び、
                                            社会全体へと広がっていく。
                                            その震源地となることが、私たちの使命です。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="bg-slate-50 rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#57C7D4]/10 to-transparent rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                                    <div className="md:w-1/4">
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-[#57C7D4] mb-1">Vision</h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">目指す未来</p>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 leading-tight">
                                            より良い未来が、<br />連鎖的に創発される社会へ。
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                            AI・クラウド・デジタル技術が、企業規模に関わらず誰もが使いこなせる“当たり前の力”になる世界。
                                            そこでは、ひとつの改善が次の価値をつくり、
                                            点と点がつながり、新しい可能性が広がり続けます。
                                            私たちは、その循環を支える最良のパートナーでありたいと考えています。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Value */}
                        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C5C]/30 to-transparent" />
                            <div className="relative z-10">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl md:text-3xl font-extrabold mb-1">Value</h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">大切にする姿勢</p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="space-y-2">
                                        <div className="w-8 h-1 bg-[#57C7D4] mb-3" />
                                        <h4 className="text-base font-bold">1. 誠実な伴走<br /><span className="text-[#57C7D4] text-xs font-normal">True Partnership</span></h4>
                                        <p className="text-slate-300 leading-relaxed text-sm">
                                            課題の深掘りから成果の定着まで、短期で終わらない“本当の支援”を提供します。
                                            お客様と同じ方向を向き、関係性を強くしながら価値を生み出します。
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-8 h-1 bg-[#57C7D4] mb-3" />
                                        <h4 className="text-base font-bold">2. スピードと柔軟性<br /><span className="text-[#57C7D4] text-xs font-normal">Fast & Flexible</span></h4>
                                        <p className="text-slate-300 leading-relaxed text-sm">
                                            小さなチームだからこそ、意思決定・提案・改善を迅速に行い、変化に即応します。
                                            ひとつのアクションが次の成果につながるよう、スピードの連鎖を大切にします。
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-8 h-1 bg-[#57C7D4] mb-3" />
                                        <h4 className="text-base font-bold">3. テクノロジーの探求心<br /><span className="text-[#57C7D4] text-xs font-normal">Tech Curiosity</span></h4>
                                        <p className="text-slate-300 leading-relaxed text-sm">
                                            AI・クラウド・自動化などの最新技術を積極的に取り入れ、
                                            お客様に最適なソリューションを創発し続けます。
                                            技術への探求が、未来を広げる新しいつながりを生むと信じています。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slogan Section */}
            <section className="py-12 bg-gradient-to-r from-[#0F4C5C] to-[#57C7D4] text-white text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
                        For the better, <br />from one connection.
                    </h2>
                    <p className="text-base md:text-lg font-medium opacity-90">
                        ひとつのつながりから、未来は良くなる。
                    </p>
                </div>
            </section>

            {/* Representative Message Section */}
            <section className="py-12 px-4 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">Top Message</h2>
                        <p className="text-sm text-slate-600">代表挨拶</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-0 items-stretch bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                        <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                                テクノロジーの力で、<br />
                                社会とビジネスの可能性を広げる。
                            </h3>
                            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                                <p>
                                    ネクスライドという社名には、<br />
                                    <strong className="text-[#0F4C5C]">Next（次へ）× Ride（乗る）</strong>という想いが込められています。<br />
                                    私たちと関わるすべての人が、
                                    次の時代のチャンスに乗り、より良い未来へ進んでいけるように。
                                    その“きっかけ”や“起点”になりたい——
                                    そんな願いをこの名前に託しました。
                                </p>
                                <p>
                                    デジタル化が加速する今、ひとつの技術革新は
                                    次の価値を生み、連鎖的に広がっていきます。
                                    私たちはその“起点”として、AI・クラウド・自動化などの力を活かし、
                                    お客様と共に成長をつくるパートナーであり続けます。
                                </p>
                                <p>
                                    Mission / Vision / Valueでは、
                                    誠実な伴走、スピードと柔軟性、テクノロジーの探求心を掲げ、
                                    これらを“次の時代に乗るための指針”として大切にしてきました。
                                </p>
                                <p>
                                    これからも、技術の探求と価値創出を通じて、
                                    より良い未来へ共に進む存在であり続けます。
                                </p>
                            </div>
                            <div className="mt-6">
                                <p className="text-xs text-slate-500 mb-0.5">代表取締役 CEO</p>
                                <p className="text-lg font-bold text-slate-900">清水 泰孝</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 relative min-h-[300px] md:min-h-auto">
                            <Image
                                src="/images/ceo.jpg"
                                alt="代表取締役 CEO 清水 泰孝"
                                fill
                                className="object-cover object-[25%_center]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
