import React from 'react';

export default function DxSupportLP() {
  return (
    <div className="bg-gray-50 font-sans text-[#333333]">
      

    {/* 1. ファーストビュー（パターンA） */}
    <header id="hero" className="bg-white text-[#1A2B4C] py-24 px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-lg md:text-xl font-bold text-[#E67E22] mb-4 tracking-wider">経営者の構想を、現場で使える仕組みに変えるDXパートナー</h2>
        <h1 className="text-4xl md:text-6xl font-black mt-2 leading-tight">経営者向け<br className="md:hidden"/> DX・AI・開発支援</h1>
        <p className="mt-8 text-gray-700 max-w-2xl text-base md:text-lg leading-relaxed">
            AI活用・業務改善・新規事業開発を、構想整理から実装まで伴走します。<br/>
            ネクスライドは、経営者の構想を整理し、現場の業務に落とし込み、AI・DX・開発の力で実行可能な形にするDXパートナーです。
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCXrDY5SRCaUjFrLmmeQJZE-AplexXv6OYzvfm4z4eoGbKKA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="bg-[#E67E22] text-white px-8 py-4 rounded-md font-bold shadow-lg hover:bg-opacity-90 w-full sm:w-auto transition inline-block text-center">無料相談する</a>
        </div>
    </header>

    {/* 2. 課題提起 */}
    <section id="problems" className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1A2B4C] mb-12">こんなお悩み、ありませんか？</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 課題カード */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#E67E22] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <p className="text-gray-800 font-medium leading-relaxed">AIやDXを活用したいが、何から始めればいいか分からない</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#E67E22] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <p className="text-gray-800 font-medium leading-relaxed">業務が属人化していて、現場改善が進まない</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#E67E22] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <p className="text-gray-800 font-medium leading-relaxed">Excel、紙、LINE、電話、口頭確認が多い</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#E67E22] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <p className="text-gray-800 font-medium leading-relaxed">新規事業アイデアを早く形にしたい</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#E67E22] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <p className="text-gray-800 font-medium leading-relaxed">社内にIT・AI・DXの相談相手がいない</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#E67E22] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <p className="text-gray-800 font-medium leading-relaxed">開発会社に依頼する前に、全体像を整理したい</p>
                </div>
            </div>
            
            <div className="mt-16 text-center bg-white p-10 rounded-lg shadow-md border-t-4 border-[#1A2B4C]">
                <p className="text-gray-600 mb-6 font-medium">AIやDXの情報は増えていますが、実際の改善につながりきっていません。</p>
                <p className="text-xl md:text-2xl font-bold text-[#1A2B4C] leading-relaxed">
                    理由は、<span className="text-[#E67E22] border-b-2 border-[#E67E22]">「経営の言葉」「現場の言葉」「ITの言葉」が<br className="hidden md:block" />分断されているから</span>です。
                </p>
            </div>
        </div>
    </section>

    {/* 3. ネクスライドができること */}
    <section id="features" className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A2B4C] leading-tight">ネクスライドは、<br className="sm:hidden"/>単なるシステム開発会社ではありません。</h2>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                経営者の構想を整理し、現場の業務に落とし込み、必要に応じてAI活用・業務改善・Webアプリ開発まで伴走します。<br className="hidden sm:block"/>重視しているのは、経営・現場・IT・AIをつなぎ、<span className="font-bold text-[#1A2B4C]">「実行できる形」</span>にすることです。
            </p>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 text-left shadow-sm hover:shadow-md transition">
                    <div className="text-[#E67E22] font-black text-5xl mb-6 opacity-30">01</div>
                    <h3 className="text-xl font-bold text-[#1A2B4C] mb-3">相談する</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">AI・DX・IT活用の壁打ち、経営判断の相談</p>
                </div>
                <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 text-left shadow-sm hover:shadow-md transition">
                    <div className="text-[#E67E22] font-black text-5xl mb-6 opacity-30">02</div>
                    <h3 className="text-xl font-bold text-[#1A2B4C] mb-3">整理する</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">業務フロー、現場課題、改善優先順位の整理</p>
                </div>
                <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 text-left shadow-sm hover:shadow-md transition">
                    <div className="text-[#E67E22] font-black text-5xl mb-6 opacity-30">03</div>
                    <h3 className="text-xl font-bold text-[#1A2B4C] mb-3">形にする</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">PoC、MVP、業務システム、Webアプリ、AI連携ツールの開発</p>
                </div>
                <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 text-left shadow-sm hover:shadow-md transition">
                    <div className="text-[#E67E22] font-black text-5xl mb-6 opacity-30">04</div>
                    <h3 className="text-xl font-bold text-[#1A2B4C] mb-3">運用する</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">現場で使われる形に改善し、継続的にアップデート</p>
                </div>
            </div>
        </div>
    </section>

    {/* 4. プラン一覧 */}
    <section id="plans" className="bg-[#1A2B4C] py-24 px-6 md:px-12 text-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">自社のフェーズに合わせた支援プラン</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 1 */}
                <div className="bg-white text-[#1A2B4C] rounded-xl p-8 shadow-xl flex flex-col">
                    <h3 className="text-xl font-bold mb-2">1. DX顧問プラン</h3>
                    <p className="text-[#E67E22] font-bold text-2xl mb-2">月額 7万円<span className="text-base font-normal text-gray-500">〜</span></p>
                    <p className="text-xs text-gray-500 mb-6">最低契約期間：3ヶ月〜</p>
                    <p className="text-sm text-gray-600 mb-8 flex-grow leading-relaxed">経営者のAI・DX・IT活用に関する相談相手として、事業構築、業務改善、システム導入、AI活用の壁打ちを行うプラン。</p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm border border-gray-100">
                        <p className="font-bold mb-3 text-[#1A2B4C]">向いている企業</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>まずはAI・DXについて相談したい</li>
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>社内にIT・DXの相談相手がいない</li>
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>経営判断の前に、外部の相談相手がほしい</li>
                        </ul>
                    </div>
                </div>

                {/* 2 */}
                <div className="bg-white text-[#1A2B4C] rounded-xl p-8 shadow-xl flex flex-col">
                    <h3 className="text-xl font-bold mb-2">2. DX伴走支援プラン</h3>
                    <p className="text-[#E67E22] font-bold text-2xl mb-2">月額 15万円<span className="text-base font-normal text-gray-500">〜</span></p>
                    <p className="text-xs text-gray-500 mb-6">最低契約期間：3ヶ月〜</p>
                    <p className="text-sm text-gray-600 mb-8 flex-grow leading-relaxed">経営者や現場責任者と定期的に対話しながら、業務フローの整理、課題抽出、AI・DX活用案の設計、実行支援を行うプラン。</p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm border border-gray-100">
                        <p className="font-bold mb-3 text-[#1A2B4C]">向いている企業</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>業務が属人化している</li>
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>現場改善を進めたいが社内では進まない</li>
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>経営と現場の間に入って整理してほしい</li>
                        </ul>
                    </div>
                </div>

                {/* 3 */}
                <div className="bg-white text-[#1A2B4C] rounded-xl p-8 shadow-xl flex flex-col">
                    <h3 className="text-xl font-bold mb-2">3. DX業務改善パッケージ</h3>
                    <p className="text-[#E67E22] font-bold text-2xl mb-2">3ヶ月 150万円<span className="text-base font-normal text-gray-500">〜</span></p>
                    <p className="text-xs text-gray-500 mb-6">※ 月50万円相当</p>
                    <p className="text-sm text-gray-600 mb-8 flex-grow leading-relaxed">経営者・現場責任者へのヒアリングを通じて、業務課題を可視化し、AI・DX活用の優先順位と実行ロードマップを作成するパッケージ。</p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm border border-gray-100">
                        <p className="font-bold mb-3 text-[#1A2B4C]">向いている企業</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>社内DXの全体像を整理したい</li>
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>いきなり開発に進む前に失敗しない設計をしたい</li>
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>現場の課題が複雑で優先順位がつけられない</li>
                        </ul>
                    </div>
                </div>

                {/* 4 */}
                <div className="bg-white text-[#1A2B4C] rounded-xl p-8 shadow-xl flex flex-col">
                    <h3 className="text-xl font-bold mb-2">4. PoC・MVP高速開発支援</h3>
                    <p className="text-[#E67E22] font-bold text-2xl mb-2">2週間 30万円<span className="text-base font-normal text-gray-500">〜</span></p>
                    <p className="text-xs text-gray-500 mb-6">1ヶ月 50万円〜</p>
                    <p className="text-sm text-gray-600 mb-8 leading-relaxed">新規事業や業務改善のアイデアを、最小単位で動くモック・プロトタイプにするプラン。</p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm border border-gray-100">
                        <p className="font-bold mb-3 text-[#1A2B4C]">向いている企業</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>新規事業アイデアを早く形にしたい</li>
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>社内向けの業務改善ツールを試したい</li>
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>投資前に動くものを見て判断したい</li>
                        </ul>
                    </div>
                </div>

                {/* 5 */}
                <div className="bg-white text-[#1A2B4C] rounded-xl p-8 shadow-xl flex flex-col">
                    <h3 className="text-xl font-bold mb-2">5. 業務システム・Webアプリ開発</h3>
                    <p className="text-[#E67E22] font-bold text-2xl mb-2">1プロダクト 80万円<span className="text-base font-normal text-gray-500">〜</span></p>
                    <p className="text-xs text-gray-500 mb-6">期間：最短1ヶ月〜</p>
                    <p className="text-sm text-gray-600 mb-8 leading-relaxed">業務課題や事業アイデアに合わせて、必要な機能を絞ったシステム・Webアプリを開発するプラン。</p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm border border-gray-100">
                        <p className="font-bold mb-3 text-[#1A2B4C]">向いている企業</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>既存業務をシステム化したい</li>
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>新規サービスのWebアプリを作りたい</li>
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>パッケージツールでは業務に合わない</li>
                        </ul>
                    </div>
                </div>

                {/* 6 */}
                <div className="bg-white text-[#1A2B4C] rounded-xl p-8 shadow-2xl border-4 border-[#E67E22] relative flex flex-col">
                    <div className="absolute top-0 right-0 bg-[#E67E22] text-white text-sm font-bold px-4 py-1 rounded-bl-lg">2社限定</div>
                    <h3 className="text-xl font-bold mb-2">6. 開発し放題パッケージ</h3>
                    <p className="text-[#E67E22] font-bold text-3xl mb-2 mt-2">6ヶ月 500万円<span className="text-base font-normal text-gray-500">〜</span></p>
                    <p className="text-xs text-gray-500 mb-6 opacity-0">spacer</p>
                    <p className="text-sm text-gray-600 mb-8 flex-grow leading-relaxed">6ヶ月間、経営者のアイデアや社内DX施策を優先順位順に形にしていく、継続開発パートナープラン。</p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm border border-gray-100 mb-6">
                        <p className="font-bold mb-3 text-[#1A2B4C]">向いている企業</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>複数のアイデアを継続的に形にしたい</li>
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>社内DXを一気に進めたい</li>
                            <li className="flex items-start"><span className="text-[#E67E22] mr-2">✔</span>毎回見積もりするよりスピード重視</li>
                        </ul>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1 mt-auto pt-4 border-t border-gray-100">
                        <p>※ 月間対応時間・同時進行案件数には上限があります。</p>
                        <p>※ 同時進行は最大2案件までを目安とします。</p>
                        <p>※ 新規開発・改修・相談は優先順位順に対応します。</p>
                        <p>※ 大規模開発、外部API費用、デザイン制作等は別途お見積もりとなります。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* 中間CTA */}
    <section className="bg-[#E67E22] text-white py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">AI活用・業務改善・開発について、まずはご相談ください。</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCXrDY5SRCaUjFrLmmeQJZE-AplexXv6OYzvfm4z4eoGbKKA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="bg-white text-[#E67E22] px-8 py-4 rounded-md font-bold shadow hover:bg-gray-100 transition inline-block text-center">無料相談する</a>
        </div>
    </section>

    {/* 5. どのプランを選べばいいか */}
    <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1A2B4C] mb-12">目的別・おすすめプラン</h2>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row items-center bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="sm:w-1/2 text-lg font-bold text-gray-800 text-center sm:text-right sm:pr-8">まず相談したい</div>
                    <div className="hidden sm:block text-[#E67E22]">➔</div>
                    <div className="sm:hidden text-[#E67E22] my-2">⬇</div>
                    <div className="sm:w-1/2 sm:pl-8 text-xl font-bold text-[#1A2B4C] text-center sm:text-left">DX顧問プラン</div>
                </div>
                <div className="flex flex-col sm:flex-row items-center bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="sm:w-1/2 text-lg font-bold text-gray-800 text-center sm:text-right sm:pr-8">現場改善を進めたい</div>
                    <div className="hidden sm:block text-[#E67E22]">➔</div>
                    <div className="sm:hidden text-[#E67E22] my-2">⬇</div>
                    <div className="sm:w-1/2 sm:pl-8 text-xl font-bold text-[#1A2B4C] text-center sm:text-left">DX伴走支援プラン</div>
                </div>
                <div className="flex flex-col sm:flex-row items-center bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="sm:w-1/2 text-lg font-bold text-gray-800 text-center sm:text-right sm:pr-8">社内DXの全体像を整理したい</div>
                    <div className="hidden sm:block text-[#E67E22]">➔</div>
                    <div className="sm:hidden text-[#E67E22] my-2">⬇</div>
                    <div className="sm:w-1/2 sm:pl-8 text-xl font-bold text-[#1A2B4C] text-center sm:text-left">DX業務改善パッケージ</div>
                </div>
                <div className="flex flex-col sm:flex-row items-center bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="sm:w-1/2 text-lg font-bold text-gray-800 text-center sm:text-right sm:pr-8">アイデアを早く形にしたい</div>
                    <div className="hidden sm:block text-[#E67E22]">➔</div>
                    <div className="sm:hidden text-[#E67E22] my-2">⬇</div>
                    <div className="sm:w-1/2 sm:pl-8 text-xl font-bold text-[#1A2B4C] text-center sm:text-left">PoC・MVP高速開発支援</div>
                </div>
                <div className="flex flex-col sm:flex-row items-center bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="sm:w-1/2 text-lg font-bold text-gray-800 text-center sm:text-right sm:pr-8">必要なシステムを作りたい</div>
                    <div className="hidden sm:block text-[#E67E22]">➔</div>
                    <div className="sm:hidden text-[#E67E22] my-2">⬇</div>
                    <div className="sm:w-1/2 sm:pl-8 text-xl font-bold text-[#1A2B4C] text-center sm:text-left">業務システム・Webアプリ開発</div>
                </div>
                <div className="flex flex-col sm:flex-row items-center bg-[#1A2B4C] rounded-lg p-6 shadow-md border border-[#1A2B4C] text-white mt-4">
                    <div className="sm:w-1/2 text-lg font-bold text-center sm:text-right sm:pr-8">まとめて開発を進めたい</div>
                    <div className="hidden sm:block text-[#E67E22]">➔</div>
                    <div className="sm:hidden text-[#E67E22] my-2">⬇</div>
                    <div className="sm:w-1/2 sm:pl-8 text-xl font-bold text-[#E67E22] text-center sm:text-left">開発し放題パッケージ</div>
                </div>
            </div>
        </div>
    </section>

    {/* 6. 支援の流れ */}
    <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1A2B4C] mb-16">ご相談から運用までの流れ</h2>
            
            <div className="relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
                
                <div className="space-y-8 md:space-y-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 mb-4 md:mb-0 w-full">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full text-center md:text-right">
                                <h3 className="text-xl font-bold text-[#1A2B4C] mb-2">初回相談</h3>
                                <p className="text-sm text-gray-600">経営課題、業務課題、やりたいことをヒアリング</p>
                            </div>
                        </div>
                        <div className="w-10 h-10 bg-[#E67E22] rounded-full border-4 border-white shadow flex items-center justify-center text-white font-bold z-10 hidden md:flex">1</div>
                        <div className="md:w-1/2 hidden md:block md:pl-12"></div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 hidden md:block md:pr-12"></div>
                        <div className="w-10 h-10 bg-[#E67E22] rounded-full border-4 border-white shadow flex items-center justify-center text-white font-bold z-10 hidden md:flex">2</div>
                        <div className="md:w-1/2 flex justify-center md:justify-start md:pl-12 mt-4 md:mt-0 w-full">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full text-center md:text-left">
                                <h3 className="text-xl font-bold text-[#1A2B4C] mb-2">課題整理</h3>
                                <p className="text-sm text-gray-600">現場業務、既存ツール、改善余地を整理</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 mb-4 md:mb-0 w-full">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full text-center md:text-right">
                                <h3 className="text-xl font-bold text-[#1A2B4C] mb-2">優先順位決定</h3>
                                <p className="text-sm text-gray-600">すぐやること、後でやること、開発すべきことを整理</p>
                            </div>
                        </div>
                        <div className="w-10 h-10 bg-[#E67E22] rounded-full border-4 border-white shadow flex items-center justify-center text-white font-bold z-10 hidden md:flex">3</div>
                        <div className="md:w-1/2 hidden md:block md:pl-12"></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 hidden md:block md:pr-12"></div>
                        <div className="w-10 h-10 bg-[#E67E22] rounded-full border-4 border-white shadow flex items-center justify-center text-white font-bold z-10 hidden md:flex">4</div>
                        <div className="md:w-1/2 flex justify-center md:justify-start md:pl-12 mt-4 md:mt-0 w-full">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full text-center md:text-left">
                                <h3 className="text-xl font-bold text-[#1A2B4C] mb-2">PoC・設計・開発</h3>
                                <p className="text-sm text-gray-600">必要に応じて、モック・MVP・業務システムを開発</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 mb-4 md:mb-0 w-full">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full text-center md:text-right">
                                <h3 className="text-xl font-bold text-[#1A2B4C] mb-2">運用・改善</h3>
                                <p className="text-sm text-gray-600">現場で使いながら改善し、継続的にアップデート</p>
                            </div>
                        </div>
                        <div className="w-10 h-10 bg-[#E67E22] rounded-full border-4 border-white shadow flex items-center justify-center text-white font-bold z-10 hidden md:flex">5</div>
                        <div className="md:w-1/2 hidden md:block md:pl-12"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* 7. 選ばれる理由 */}
    <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1A2B4C] mb-16">ネクスライドが選ばれる5つの理由</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-[#1A2B4C] text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">1</div>
                    <h3 className="text-xl font-bold text-[#1A2B4C] mb-4">経営者の構想を整理できる</h3>
                    <p className="text-gray-600 leading-relaxed">単なる要件定義ではなく、経営者の考えていることを事業・業務・システムに落とし込みます。</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-[#1A2B4C] text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">2</div>
                    <h3 className="text-xl font-bold text-[#1A2B4C] mb-4">現場業務を理解して整理できる</h3>
                    <p className="text-gray-600 leading-relaxed">現場の業務フローや属人化した作業を整理し、改善ポイントを明確にします。</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-[#1A2B4C] text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">3</div>
                    <h3 className="text-xl font-bold text-[#1A2B4C] mb-4">AI・DX・開発まで一気通貫</h3>
                    <p className="text-gray-600 leading-relaxed">相談だけで終わらず、必要に応じてPoC、MVP、業務システム、Webアプリ開発まで対応します。</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-[#1A2B4C] text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">4</div>
                    <h3 className="text-xl font-bold text-[#1A2B4C] mb-4">小さく作って改善できる</h3>
                    <p className="text-gray-600 leading-relaxed">大きく作りすぎず、必要な機能から現実的に使える形で開発します。</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-[#1A2B4C] text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">5</div>
                    <h3 className="text-xl font-bold text-[#1A2B4C] mb-4">経営と現場の間に入れる</h3>
                    <p className="text-gray-600 leading-relaxed">経営者の意図と現場の実務をつなぎ、実行しやすい形にします。</p>
                </div>
            </div>
        </div>
    </section>

    {/* NEW: 代表メッセージ & 運営会社 */}
    <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1A2B4C] mb-12">代表メッセージ</h2>
            <div className="w-full max-w-4xl mx-auto">
                <img src="/images/dx-support/代表挨拶.png" alt="代表挨拶" className="w-full h-auto rounded-xl shadow-md border border-gray-100" />
            </div>

            {/* 運営会社 & 事例・実績 */}
            <div className="mt-16 text-center">
                <p className="text-gray-600 font-bold mb-6">運営会社情報・開発実績</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="https://www.nexride.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white border-2 border-[#1A2B4C] text-[#1A2B4C] px-8 py-4 rounded-md font-bold shadow-sm hover:bg-[#1A2B4C] hover:text-white transition group w-full sm:w-auto">
                        ネクスライド株式会社 コーポレートサイト
                        <svg className="w-5 h-5 ml-2 text-[#1A2B4C] group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                    <a href="https://www.nexride.jp/cases" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white border-2 border-[#E67E22] text-[#E67E22] px-8 py-4 rounded-md font-bold shadow-sm hover:bg-[#E67E22] hover:text-white transition group w-full sm:w-auto">
                        導入事例・開発実績を見る
                        <svg className="w-5 h-5 ml-2 text-[#E67E22] group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* 8. 最後のCTA */}
    <section className="py-24 px-6 text-center bg-[#1A2B4C] text-white">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">AI活用・業務改善・開発について、<br className="hidden sm:block"/>まずはご相談ください。</h2>
            <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                何から始めればよいか分からない段階でも問題ありません。<br/>
                経営者の構想や現場の課題をお聞きし、今取り組むべきことを一緒に整理します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCXrDY5SRCaUjFrLmmeQJZE-AplexXv6OYzvfm4z4eoGbKKA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="bg-[#E67E22] text-white px-10 py-5 rounded-md font-bold shadow-lg hover:bg-opacity-90 transition text-lg w-full sm:w-auto inline-block text-center">無料相談する</a>
            </div>
        </div>
    </section>




    </div>
  );
}
