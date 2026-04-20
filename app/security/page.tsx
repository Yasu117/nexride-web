import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: '情報セキュリティ基本方針 | ネクスライド株式会社',
    description: 'ネクスライド株式会社の情報セキュリティ基本方針について',
};

export default function SecurityPolicyPage() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-20 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-sm border border-slate-100 rounded-2xl">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-slate-900 border-b-2 border-slate-100 pb-6">
                    情報セキュリティ基本方針
                </h1>

                <div className="prose prose-slate max-w-none text-slate-700 leading-loose">
                    <p className="mb-6 text-lg">
                        ネクスライド株式会社（以下、「当社」）は、システムエンジニアリングサービス（SES）、デジタルトランスフォーメーション（DX）支援・受託開発、ITコンサルティング、および各種クラウドサービスの提供を含む多角的な事業展開を行う企業として、お客様および社会からの信頼に応えるため、情報セキュリティの確保を経営の最重要課題の一つとして位置付けます。
                        <br className="hidden md:block" />
                        当社は、以下の「情報セキュリティ基本方針」を定め、経営陣をはじめ全従業員がこれを遵守し、情報資産の適切な保護および継続的なセキュリティ水準の向上に努めます。
                    </p>

                    <div className="mb-10 p-6 bg-slate-50 border-l-4 border-[#0F4C5C] text-sm md:text-base flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <div className="shrink-0 bg-white p-2 border border-slate-200 rounded-lg shadow-sm">
                            <Image 
                                src="/images/security_action_futatsuboshi-large_color.png" 
                                alt="SECURITY ACTION 二つ星" 
                                width={100} 
                                height={100} 
                                className="w-24 sm:w-28 h-auto object-contain" 
                            />
                        </div>
                        <div className="leading-relaxed flex-1 mt-2 sm:mt-0 text-slate-700 font-medium">
                            ネクスライド株式会社は、独立行政法人情報処理推進機構（IPA）が創設した「SECURITY ACTION」において、「二つ星」を宣言し、安全・安心なIT社会の実現に貢献してまいります。
                        </div>
                    </div>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-[#0F4C5C] text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">1</span>
                            目的
                        </h2>
                        <p>
                            本方針は、当社が保有または適切に管理すべき情報資産を、漏洩、改ざん、紛失、破壊、不正アクセス等の脅威から保護するための基本的な考え方と行動指針を規定するものです。
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-[#0F4C5C] text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">2</span>
                            適用範囲
                        </h2>
                        <p>
                            本方針は、当社の事業活動に関わるすべての情報資産（お客様からお預かりした機密情報・個人情報、および当社の業務上取り扱うすべての情報・システム・設備を含む）、ならびに当社のすべての役員、正社員、契約社員、アルバイト、および当社業務を委託するパートナー企業・スタッフに適用されます。
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-[#0F4C5C] text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">3</span>
                            情報セキュリティ管理体制
                        </h2>
                        <p>
                            当社は、経営陣を委員長とする情報セキュリティ管理体制を確立し、情報資産の適切な管理、運用、およびセキュリティ対策の実施状況の監視を行います。また、万が一の情報セキュリティ事故発生時には、迅速に対応し被害を最小限に食い止めるための緊急連絡体制を整備します。
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-[#0F4C5C] text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">4</span>
                            情報資産の保護と対策
                        </h2>
                        <ul className="list-none space-y-4 pl-0">
                            <li className="flex items-start">
                                <span className="text-[#0F4C5C] mr-2 font-bold">1.</span>
                                <div>
                                    <strong>機密性・完全性・可用性の確保:</strong> 情報資産の重要度に応じた適切な物理的、技術的、および組織的なセキュリティ対策を実施し、情報資産の機密性（第三者に漏らさない）、完全性（正確で最新の状態を保つ）、可用性（必要な時に利用できる）を維持します。
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#0F4C5C] mr-2 font-bold">2.</span>
                                <div>
                                    <strong>技術的対策の徹底:</strong> クラウドサービスの利用にあたっては多要素認証（MFA）を全従業員に義務付け、通信の暗号化（SSL/TLS）および重要データの暗号化保存を徹底しています。
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#0F4C5C] mr-2 font-bold">3.</span>
                                <div>
                                    <strong>データ保管場所（データレジデンシー）:</strong> お客様からお預かりするデータは、原則として日本国内のデータセンター（AWS/Google Cloud ほか）に保管し、適切な管理を行っております。
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#0F4C5C] mr-2 font-bold">4.</span>
                                <div>
                                    <strong>不正アクセスの防止:</strong> 社内ネットワークおよび開発環境へのアクセス制御を厳格に行い、外部からの不正侵入および内部からの情報漏洩を防止します。
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-[#0F4C5C] text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">5</span>
                            法令・規範の遵守
                        </h2>
                        <p>
                            当社は、情報セキュリティに関する法令、国が定める指針、その他の規範、ならびにお客様との契約上のセキュリティ義務を遵守します。
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-[#0F4C5C] text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">6</span>
                            教育・訓練の実施
                        </h2>
                        <p>
                            当社は、すべての役員・従業員（パートナーエンジニア等を含む）に対し、情報セキュリティの重要性を認識させ、情報資産の適切な取り扱いおよびセキュリティ意識の向上を目的とした教育・訓練を定期的かつ継続的に実施します。
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-[#0F4C5C] text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">7</span>
                            継続的改善
                        </h2>
                        <p>
                            当社は、情報セキュリティを取り巻く環境の変化、技術の進歩、および新たな脅威の発生に対応するため、情報セキュリティ管理体制および対策を定期的に評価・見直し、継続的な改善に努めます。
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-[#0F4C5C] text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">8</span>
                            罰則
                        </h2>
                        <p>
                            当社の役員および従業員等が、本方針または関連する社内規程に違反した場合は、就業規則等に基づく懲戒処分の対象となるほか、法的責任を問われる場合があります。
                        </p>
                    </section>

                    <section className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-xl">
                        <h2 className="text-lg font-bold text-slate-900 mb-3">
                            【情報セキュリティに関するお問い合わせ先】
                        </h2>
                        <p className="text-sm">
                            本方針に関するお問い合わせや、万全を期しておりますが万が一のセキュリティインシデントに関するご報告は、弊社
                            <a href="/#contact" className="text-[#0F4C5C] font-bold underline underline-offset-4 ml-1">
                                お問い合わせフォーム
                            </a>
                            より受け付けております。
                        </p>
                    </section>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col items-end text-slate-800">
                    <div className="text-right">
                        <p className="mb-3 text-sm text-slate-500">制定日：2026年4月1日</p>
                        <p className="font-bold text-lg mb-1">ネクスライド株式会社</p>
                        <p className="text-lg">代表取締役社長 清水 泰孝</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
