export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">プライバシーポリシー</h1>

            <div className="space-y-12">
                <section>
                    <h2 className="text-xl font-bold mb-4 text-slate-800 border-b border-gray-200 pb-2">1. はじめに</h2>
                    <p className="text-slate-600 leading-relaxed">
                        ネクスライド株式会社（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービスにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-slate-800 border-b border-gray-200 pb-2">2. 取得する情報</h2>
                    <p className="text-slate-600 leading-relaxed">
                        当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先などから収集することがあります。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-slate-800 border-b border-gray-200 pb-2">3. 利用目的</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        当社が個人情報を収集・利用する目的は、以下のとおりです。
                    </p>
                    <ul className="list-disc list-inside text-slate-600 leading-relaxed pl-4 space-y-1">
                        <li>当社サービスの提供・運営のため</li>
                        <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                        <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                        <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-slate-800 border-b border-gray-200 pb-2">4. 第三者提供について</h2>
                    <p className="text-slate-600 leading-relaxed">
                        当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-slate-800 border-b border-gray-200 pb-2">5. 安全管理措置</h2>
                    <p className="text-slate-600 leading-relaxed">
                        当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-slate-800 border-b border-gray-200 pb-2">6. 個人情報に関するお問い合わせ窓口</h2>
                    <p className="text-slate-600 leading-relaxed">
                        本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                    </p>
                    <div className="mt-4 bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <p className="text-slate-600 leading-relaxed">
                            住所：東京都港区新橋2丁目20-15-601<br />
                            社名：ネクスライド株式会社<br />
                            担当部署：個人情報保護管理担当<br />
                            Eメールアドレス：info@nexride.co.jp
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-slate-800 border-b border-gray-200 pb-2">7. 制定日・改定日</h2>
                    <p className="text-slate-600 leading-relaxed">
                        制定日：2022年12月27日<br />
                        改定日：2025年11月27日
                    </p>
                </section>
            </div>
        </div>
    )
}
