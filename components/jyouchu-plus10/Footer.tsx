import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-primary-500 rounded flex items-center justify-center text-white font-bold text-xs">
                                +
                            </div>
                            <span className="text-xl font-bold text-white">
                                常駐<span className="text-primary-500">Plus10</span>エージェント
                            </span>
                        </div>
                        <p className="text-sm text-slate-400 max-w-xs">
                            エンジニアの価値を最大化する、新しい常駐型エージェントサービス。
                            月収アップ保証で、あなたのキャリアを支援します。
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">サービス</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#features" className="hover:text-primary-400 transition-colors">特徴</a></li>
                            <li><a href="#jobs" className="hover:text-primary-400 transition-colors">案件例</a></li>
                            <li><a href="#flow" className="hover:text-primary-400 transition-colors">ご利用の流れ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">会社情報</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="https://www.nexride.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">運営会社</a></li>
                            <li><Link href="/privacy" className="hover:text-primary-400 transition-colors">プライバシーポリシー</Link></li>
                            <li><Link href="/terms" className="hover:text-primary-400 transition-colors">利用規約</Link></li>
                            <li><a href="https://www.nexride.jp/#contact" className="hover:text-primary-400 transition-colors">お問い合わせ</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} NexRide Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
