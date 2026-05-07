"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  LayoutDashboard, 
  RefreshCcw, 
  ShieldCheck, 
  Building2, 
  ShoppingCart, 
  Factory,
  ChevronRight
} from "lucide-react";

export default function NexusOMSLandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
              <Database className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">Nexus OMS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">機能</a>
            <a href="#scenario" className="hover:text-blue-600 transition-colors">対象企業</a>
            <a href="#case-study" className="hover:text-blue-600 transition-colors">導入事例</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">価格</a>
          </div>
          <div>
            <a href="https://www.nexride.jp/#contact" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              無料相談
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              製造小売・D2C向け 受注管理OS
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              製造・小売・D2Cを一元化。<br className="hidden md:block" />
              現場の『動き』を<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">加速させる</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              中小メーカー・製造小売業のための、AI連携型受注管理システム「Nexus OMS」。
              バラバラな受注と製造の分断を無くし、本来の「つくる」業務に集中できる環境を実現します。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://www.nexride.jp/#contact" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30">
                無料相談
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Dashboard Preview Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 mx-auto max-w-5xl"
          >
            <div className="rounded-2xl border border-slate-200/60 bg-white/50 backdrop-blur-xl shadow-2xl p-2">
              <div className="rounded-xl border border-slate-100 bg-white overflow-hidden shadow-sm">
                {/* Mockup Header */}
                <div className="h-12 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 h-6 w-64 bg-white rounded border border-slate-200"></div>
                </div>
                <img src="/images/hero_section.png" alt="Nexus OMS Dashboard" className="w-full h-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">その転記作業、現場のブレーキになっていませんか？</h2>
            <p className="text-slate-400">成長する製造小売・D2C企業が抱える、「見えないコスト」の正体。</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "受注経路の分散による入力ミス",
                desc: "ECサイト、FAX、直販などバラバラなチャネルからの注文を、手作業でエクセルに転記。入力ミスや抜け漏れが頻発します。",
                icon: <ShoppingCart className="w-8 h-8 text-rose-400" />
              },
              {
                title: "製造現場と営業の情報の断絶",
                desc: "「あの注文、今どうなってる？」いちいち現場に確認しに行く手間。情報が属人化し、チーム間で共有されていません。",
                icon: <Factory className="w-8 h-8 text-amber-400" />
              },
              {
                title: "在庫と受注が紐付かない",
                desc: "完成在庫と仕掛品、受注残がリアルタイムに連動していないため、お客様への納期回答に時間がかかってしまいます。",
                icon: <Database className="w-8 h-8 text-blue-400" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-700/50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-20">
            <div className="text-blue-600 font-bold tracking-wide mb-2">FEATURES</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Nexus OMS が実現する<span className="text-blue-600">3つの自動化</span></h2>
          </motion.div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-6"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">1</div>
                <h3 className="text-2xl font-bold">全チャネル自動集約</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Wix、Shopifyなどの主要ECプラットフォームから、FAX、メールでの注文まで、あらゆる受注データを1つの画面に自動で統合します。転記作業はもう必要ありません。
                </p>
                <ul className="space-y-3 pt-4">
                  {['ECカート連携（Shopify / Wix / Amazon / BASE / 楽天 / Yahoo! / MakeShop / カラーミー / ZOZO / STORES / 自社EC 等）', 'メールからのAI自動抽出', '手書きFAXのOCR取り込み'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative shadow-lg flex items-center justify-center">
                  <img src="/images/feature_1.png" alt="全チャネル自動集約" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none"></div>
                </div>
              </motion.div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-6"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">2</div>
                <h3 className="text-2xl font-bold">一元管理ダッシュボード</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  受注状況だけでなく、製造の進捗も連動してリアルタイムに表示。営業事務と製造現場が同じデータを見て動けるため、確認の手間が大幅に削減されます。
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative shadow-lg flex items-center justify-center">
                  <img src="/images/feature_2_v2.png" alt="一元管理ダッシュボード" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none"></div>
                </div>
              </motion.div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-6"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">3</div>
                <h3 className="text-2xl font-bold">ミスゼロのステータス管理</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  貴社の業務フローに合わせて、ステータス（受注→在庫確認→仕入準備→仕入完了→発送準備→完了など）を柔軟に設定。次のアクションが明確になり、対応漏れを防ぎます。
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative shadow-lg flex items-center justify-center">
                  <img src="/images/feature_3_v2.png" alt="ミスゼロのステータス管理" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent pointer-events-none"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenario */}
      <section id="scenario" className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Building2 className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">製造業・メーカー・小売を兼ねる<br />企業様に最適</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            自社製品を製造し、ECや直営店で多角的に販売するモデルの複雑なオペレーションを、標準機能だけでシンプルに解決します。
          </p>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">導入事例</h2>
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100"
          >
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-slate-600 text-sm font-bold mb-6">
                  <Factory className="w-4 h-4" />
                  製造・小売一貫体制メーカー企業様
                </div>
                <h3 className="text-2xl font-bold mb-8 text-slate-900">「事務工数ゼロ化を実現し、本来の『つくる』業務に集中」</h3>
                
                <div className="space-y-6">
                  <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                    <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-rose-200 flex items-center justify-center text-sm">前</div>
                      導入前の課題
                    </h4>
                    <p className="text-rose-900/80">各チャネルからの注文の転記と、製造現場への確認作業により、週に10時間以上の事務工数が発生。入力ミスによる確認漏れも起きていた。</p>
                  </div>
                  
                  <div className="flex justify-center text-slate-400">
                    <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                  </div>

                  <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                    <h4 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center text-sm">後</div>
                      導入後の成果
                    </h4>
                    <p className="text-emerald-900/80">受注情報が1画面に自動集約され、ステータス管理で製造と営業の連携がスムーズに。転記作業がなくなり、クリエイティブな業務に時間を割けるように。</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">料金プラン</h2>
            <p className="text-slate-600">企業の規模や注文件数に合わせた、3つの柔軟なプラン。</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition-shadow bg-white relative overflow-hidden flex flex-col"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Standard Edition</h3>
              <p className="text-slate-500 mb-6 text-sm">月間処理5,000件未満の企業様向け</p>
              <div className="mb-8">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-slate-500 text-sm">初期費用</span>
                  <span className="text-2xl font-bold text-slate-900">60,000</span>
                  <span className="text-slate-500 text-sm">円</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-slate-500 text-sm">月額利用料</span>
                  <span className="text-4xl font-bold text-slate-900">20,000</span>
                  <span className="text-slate-500 text-sm">円/月</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['全チャネル自動集約', '一元管理ダッシュボード', '標準ステータス管理', 'メールサポート'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Plus Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border-2 border-blue-600 p-8 shadow-xl bg-white relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                おすすめ
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Plus Edition</h3>
              <p className="text-slate-500 mb-6 text-sm">月間処理5,000件以上・優先処理が必要な企業様向け</p>
              <div className="mb-8">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-slate-500 text-sm">初期費用</span>
                  <span className="text-2xl font-bold text-slate-900">100,000</span>
                  <span className="text-slate-500 text-sm">円</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-slate-500 text-sm">月額利用料</span>
                  <span className="text-4xl font-bold text-slate-900">50,000</span>
                  <span className="text-slate-500 text-sm">円/月</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Standard Editionの全機能', '月間処理5,000件以上', '優先処理機能', '専用チャットサポート', 'カスタムステータス設定'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl border border-slate-900 bg-slate-900 p-8 shadow-xl text-white relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 bg-slate-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                フルカスタマイズ
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise Edition</h3>
              <p className="text-slate-400 mb-6 text-sm">既存システムとの連携や、独自の業務フローが必要な企業様向け</p>
              <div className="mb-8 flex-1">
                <div className="text-3xl font-bold tracking-wide mt-2 mb-2 text-white">
                  個別お見積り
                </div>
                <p className="text-slate-400 text-xs mb-8">要件定義から導入サポートまでフルコミット</p>
                <ul className="space-y-4 text-slate-300">
                  {['Plus Editionの全機能', '既存基幹システム連携', '専任担当者による導入支援', 'SLA（品質保証）対応'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="mt-4 flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-bold hover:bg-slate-100 transition-all">
                問い合わせる
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust / Security */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-900 mb-6">万全のセキュリティ体制</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            ネクスライド株式会社では、お客様の重要な業務データをお預かりするにあたり、厳格なセキュリティ基準を設けてシステムを運用・管理しています。
          </p>
          <div>
            <a href="https://www.nexride.jp/security" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center gap-1">
              セキュリティ基本方針について <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            受注管理の課題を、<br />今すぐ解決しませんか？
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            現状の課題ヒアリングから、補助金を活用した最適なプランのご提案まで、無料で行っております。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://www.nexride.jp/#contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-blue-600/20">
              無料で相談する
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-slate-500" />
            <span className="font-bold text-slate-300">Nexus OMS</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} ネクスライド株式会社. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
