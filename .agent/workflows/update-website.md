---
description: Webサイト更新手順
---

# Webサイト更新ワークフロー

デプロイ後にウェブサイトを更新する標準的な手順です。

## 1. ローカルで修正

### ファイルを編集
```bash
# プロジェクトディレクトリに移動
cd /Users/yasu.shimizu/CoHP09

# 例：ホームページのテキストを修正
# app/page.tsx を編集
```

### ローカルで確認（オプション）
```bash
# 開発サーバーを起動
npm run dev

# ブラウザで http://localhost:3000 にアクセスして確認
```

## 2. GitHubにプッシュ

```bash
# 変更内容を確認
git status

# すべての変更をステージング
git add .

# コミット（わかりやすいメッセージを付ける）
git commit -m "具体的な変更内容を記載（例：お問い合わせフォームのボタンテキストを変更）"

# GitHubにプッシュ
git push origin main
```

## 3. Vercelで自動デプロイ

プッシュ後、以下が自動的に実行されます：

1. **Vercelが変更を検知**（数秒後）
2. **自動ビルド開始**（1〜3分）
3. **本番環境に自動デプロイ**
4. **www.nexride.jp に自動反映**

### デプロイ状況の確認

**Vercelのダッシュボードで確認：**
- https://vercel.com/syasutaka66-gmailcoms-projects/nexride-web
- 「Deployments」タブで進行状況を確認
- 緑色の「Ready」になれば完了

**メール通知：**
- デプロイ完了時にVercelからメールが届きます

## よくある質問

### Q: 修正がすぐに反映されない
**A:** ブラウザのキャッシュをクリアしてください
- Mac: `Cmd + Shift + R`（ハードリロード）
- Windows: `Ctrl + Shift + R`

### Q: デプロイに失敗した場合
**A:** Vercelのダッシュボードでエラーログを確認
1. Vercelの「Deployments」タブを開く
2. 失敗したデプロイをクリック
3. ビルドログでエラー内容を確認
4. エラーを修正して再プッシュ

### Q: 緊急で前のバージョンに戻したい
**A:** Vercelのダッシュボードから即座にロールバック可能
1. 「Deployments」タブを開く
2. 前のバージョンの右側にある「...」メニューをクリック
3. 「Promote to Production」を選択

## 便利なヒント

### プレビューデプロイ
mainブランチ以外にプッシュすると、本番に影響せずにプレビュー環境が作成されます：

```bash
# 新しいブランチを作成
git checkout -b feature/new-button

# 修正してプッシュ
git add .
git commit -m "新しいボタンを追加"
git push origin feature/new-button
```

Vercelが自動的にプレビューURLを生成します（本番に影響なし）。

### コミットメッセージのベストプラクティス
```bash
# ❌ 悪い例
git commit -m "修正"

# ✅ 良い例
git commit -m "お問い合わせページ: フォームのバリデーションを追加"
git commit -m "ホームページ: ヒーローセクションの画像を更新"
git commit -m "修正: モバイル表示でのレイアウト崩れを解消"
```
