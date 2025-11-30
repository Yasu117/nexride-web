'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
    const [workStyle, setWorkStyle] = useState('');
    const [salary, setSalary] = useState('');
    const [engineerType, setEngineerType] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch(form.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });

            setIsSubmitted(true);
            // 完了画面へスクロール
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('送信エラーが発生しました。');
        } finally {
            setIsLoading(false);
        }
    };

    return (

        <section id="contact" className="py-12 bg-gradient-to-br from-slate-50 to-white scroll-mt-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                            まずは無料で登録
                        </h2>
                        <p className="text-sm md:text-base text-slate-600">
                            最短30秒で登録完了。強引な勧誘は一切いたしません。
                        </p>
                    </div>

                    {/* Main CTA Card */}
                    <div className="bg-white rounded-2xl shadow-xl border-2 border-primary-200 overflow-hidden mb-6">
                        <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-4 text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                無料エージェント登録
                            </h3>
                            <p className="text-primary-100 text-xs">
                                ※最短30秒で完了
                            </p>
                        </div>

                        {isSubmitted ? (
                            <div className="p-12 text-center space-y-6">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    送信が完了しました
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    お問い合わせありがとうございます。<br />
                                    ご登録いただいたメールアドレス宛に、<br className="md:hidden" />自動返信メールをお送りしました。<br />
                                    <br />
                                    今後の流れについてはメールをご確認ください。
                                </p>
                                <div className="pt-6">
                                    <Button asChild variant="outline" className="min-w-[200px]">
                                        <Link href="/">トップページへ戻る</Link>
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <form
                                action="https://ssgform.com/s/3fNzUZCIy2FO"
                                method="post"
                                className="p-6 space-y-3"
                                onSubmit={handleSubmit}
                            >
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <Label htmlFor="name" className="text-xs">お名前 <span className="text-red-500">*</span></Label>
                                        <Input id="name" name="name" placeholder="山田 太郎" required className="h-9 text-sm" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="email" className="text-xs">メールアドレス <span className="text-red-500">*</span></Label>
                                        <Input id="email" name="email" type="email" placeholder="taro@example.com" required className="h-9 text-sm" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <Label htmlFor="phone" className="text-xs">電話番号 <span className="text-red-500">*</span></Label>
                                        <Input id="phone" name="phone" type="tel" placeholder="090-1234-5678" required className="h-9 text-sm" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="engineer-type" className="text-xs">エンジニア種別 <span className="text-red-500">*</span></Label>
                                        <Select onValueChange={setEngineerType} required>
                                            <SelectTrigger className="h-9 text-sm">
                                                <SelectValue placeholder="選択してください" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="frontend">フロントエンド</SelectItem>
                                                <SelectItem value="backend">バックエンド</SelectItem>
                                                <SelectItem value="infrastructure">インフラ/クラウド</SelectItem>
                                                <SelectItem value="mobile">モバイルアプリ</SelectItem>
                                                <SelectItem value="pm">PM/PMO/コンサル</SelectItem>
                                                <SelectItem value="design">Webデザイン/UIUX</SelectItem>
                                                <SelectItem value="other">その他</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <input type="hidden" name="engineer_type" value={engineerType} />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <Label htmlFor="salary" className="text-xs">
                                            現在の月収（額面） <span className="text-[10px] text-slate-500 font-normal">※正社員の方は年収÷12の目安</span>
                                        </Label>
                                        <Select onValueChange={setSalary}>
                                            <SelectTrigger className="h-9 text-sm">
                                                <SelectValue placeholder="選択してください" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="~25">〜25万円</SelectItem>
                                                <SelectItem value="25-35">25〜35万円</SelectItem>
                                                <SelectItem value="35-45">35〜45万円</SelectItem>
                                                <SelectItem value="45-55">45〜55万円</SelectItem>
                                                <SelectItem value="55-65">55〜65万円</SelectItem>
                                                <SelectItem value="65-75">65〜75万円</SelectItem>
                                                <SelectItem value="75-85">75〜85万円</SelectItem>
                                                <SelectItem value="85-95">85〜95万円</SelectItem>
                                                <SelectItem value="95-105">95〜105万円</SelectItem>
                                                <SelectItem value="105-115">105〜115万円</SelectItem>
                                                <SelectItem value="115~">115万円〜</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <input type="hidden" name="salary" value={salary} />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="work-style" className="text-xs">常駐可否 <span className="text-red-500">*</span></Label>
                                        <Select onValueChange={setWorkStyle} required>
                                            <SelectTrigger className="h-9 text-sm">
                                                <SelectValue placeholder="選択してください" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="fulltime">週5常駐OK</SelectItem>
                                                <SelectItem value="hybrid">週2–3出社 OK</SelectItem>
                                                <SelectItem value="remote">フルリモートのみ</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <input type="hidden" name="work_style" value={workStyle} />
                                    </div>
                                </div>

                                {/* 保証対象の注意表示 */}
                                {workStyle && workStyle !== 'fulltime' && (
                                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                                        <p className="text-xs text-orange-800 flex items-start gap-2">
                                            <span className="text-orange-500 font-bold">⚠️</span>
                                            <span>
                                                <strong>ご注意：</strong>週5常駐以外の案件は10万円アップ保証の対象外となりますが、フリーランス向けエージェントサービスとして案件のご紹介は可能です。
                                            </span>
                                        </p>
                                    </div>
                                )}

                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 text-base shadow-lg hover:shadow-xl transition-all"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? '送信中...' : (
                                            <>
                                                無料で登録して＋10万円アップを狙う
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </Button>
                                </div>

                                <p className="text-[10px] text-center text-slate-500">
                                    ご登録いただくことで、<Link href="/terms" className="underline">利用規約</Link>および<Link href="/privacy" className="underline">プライバシーポリシー</Link>に同意したものとみなします。
                                </p>

                                <div className="pt-3 border-t border-slate-100">
                                    <p className="text-xs text-slate-600 text-center mb-2 font-medium">
                                        📝 登録後に追加で必要な情報
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <CheckCircle2 className="h-3 w-3 text-primary-500" />
                                            スキルシート
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <CheckCircle2 className="h-3 w-3 text-primary-500" />
                                            報酬エビデンス（保証希望時）
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <CheckCircle2 className="h-3 w-3 text-primary-500" />
                                            職務経歴書
                                        </span>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
