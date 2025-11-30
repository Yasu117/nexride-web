'use client';

import React, { useState } from 'react';

interface ContactFormProps {
    className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
    const [submitting, setSubmitting] = useState(false);
    const [succeeded, setSucceeded] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);

        const formData = new FormData(event.currentTarget);
        const ENDPOINT = "https://ssgform.com/s/pkLhTw9PZkIk";

        try {
            // no-corsモードで送信することで、画面遷移せずに送信可能にします。
            // ただし、サーバーからのレスポンス（成功/失敗）は読み取れません。
            await fetch(ENDPOINT, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            });

            // エラーがthrowされなければ送信成功とみなして完了画面を表示
            setSucceeded(true);
        } catch (err) {
            alert('送信エラーが発生しました。しばらく経ってから再度お試しください。');
        } finally {
            setSubmitting(false);
        }
    };

    if (succeeded) {
        return (
            <div className={`p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center ${className}`}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">送信完了</h3>
                <p className="text-slate-600">
                    お問い合わせありがとうございます。<br />
                    内容を確認次第、担当者よりご連絡させていただきます。
                </p>
                <button
                    onClick={() => setSucceeded(false)}
                    className="mt-6 text-sm text-slate-500 hover:text-slate-700 underline"
                >
                    戻る
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`space-y-3 p-5 md:p-6 rounded-3xl bg-white border border-slate-200 shadow-sm ${className}`}>

            {/* お問い合わせ種別 */}
            <div>
                <label htmlFor="type" className="block text-xs font-medium text-slate-600 mb-1">お問い合わせ種別 <span className="text-red-500">*</span></label>
                <div className="relative">
                    <select
                        id="type"
                        name="type"
                        required
                        className="w-full px-3 py-2 text-base md:text-sm rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#57C7D4] focus:ring-1 focus:ring-[#57C7D4] transition-colors appearance-none"
                    >
                        <option value="">選択してください</option>
                        <option value="開発・DXのご相談">開発・DXのご相談（見積もり・依頼）</option>
                        <option value="SES・パートナー協業">SES・パートナー協業のご相談</option>
                        <option value="採用応募・質問">採用へのご応募・ご質問</option>
                        <option value="その他">その他</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* 会社名（任意） */}
                <div>
                    <label htmlFor="company" className="block text-xs font-medium text-slate-600 mb-1">会社名 <span className="text-slate-400 text-[10px] ml-1">(任意)</span></label>
                    <input
                        id="company"
                        type="text"
                        name="company"
                        placeholder="株式会社ネクスライド"
                        className="w-full px-3 py-2 text-base md:text-sm rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#57C7D4] focus:ring-1 focus:ring-[#57C7D4] transition-colors"
                    />
                </div>

                {/* お名前 */}
                <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-600 mb-1">お名前 <span className="text-red-500">*</span></label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="山田 太郎"
                        className="w-full px-3 py-2 text-base md:text-sm rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#57C7D4] focus:ring-1 focus:ring-[#57C7D4] transition-colors"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* 電話番号 */}
                <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-slate-600 mb-1">電話番号 <span className="text-red-500">*</span></label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="03-1234-5678"
                        className="w-full px-3 py-2 text-base md:text-sm rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#57C7D4] focus:ring-1 focus:ring-[#57C7D4] transition-colors"
                    />
                </div>

                {/* メールアドレス */}
                <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-600 mb-1">メールアドレス <span className="text-red-500">*</span></label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="info@example.com"
                        className="w-full px-3 py-2 text-base md:text-sm rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#57C7D4] focus:ring-1 focus:ring-[#57C7D4] transition-colors"
                    />
                </div>
            </div>

            {/* お問い合わせ内容 */}
            <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-600 mb-1">お問い合わせ内容 <span className="text-red-500">*</span></label>
                <textarea
                    id="message"
                    name="message"
                    rows={3}
                    required
                    placeholder="お問い合わせ内容をご記入ください"
                    className="w-full px-3 py-2 text-base md:text-sm rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#57C7D4] focus:ring-1 focus:ring-[#57C7D4] transition-colors"
                />
            </div>

            <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#0F4C5C] to-[#57C7D4] text-white font-bold text-base transition-transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(87,199,212,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {submitting ? '送信中...' : '送信する'}
            </button>
        </form>
    );
}
