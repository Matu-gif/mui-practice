# MUI 管理アプリ演習のタスク

## 進め方

- `[ ]` は未完了、`[x]` は本人または実画面で確認済み。確認前に完了へ変えない。
- 各操作は「説明 → 操作 → 結果確認」で進める。迷った点・エラー・学んだことは必要に応じて項目の下に記録する。
- 管理する対象、機能、MUI コンポーネントの順序は固定しない。決まった時点で追記する。

## 0. 課題の理解と準備

- [x] 03-2 と 03-3 の課題文を確認する。
- [x] この演習用の `AGENTS.md` と `tasks.md` を作る。
- [x] `README.md` を日本語にし、`AGENTS.md` と `tasks.md` をアプリのリポジトリ内に置く。
- [ ] 演習の全体像と2つのプロンプトの内容を学生が確認する。
- [ ] 使用する PC が Windows か Mac かを本人に確認する（作業環境の表示は Mac）。
- [x] GitHub ログイン、VS Code、Node.js、Git が使えることを確認する（GitHub CLI は `Matu-gif` で認証済み）。

## 1. 03-2：Vite アプリの土台

- [x] GitHub に `Matu-gif/mui-practice` リポジトリを作成し、名前と公開範囲を確認する（現在は GitHub Pages 用に公開設定）。
- [x] 既存のローカル `mui-practice` フォルダーを Git リポジトリにし、`Matu-gif/mui-practice` を `origin` に設定して確認する。
- [ ] VS Code で `mui-practice` フォルダーを開き、ソース管理画面を確認する。
- [x] ローカルの `mui-practice` フォルダーに Vite + React + TypeScript プロジェクトを作成する（GitHub との接続は未実施）。
- [x] `npm install` を実行し、`src`、`package.json`、`vite.config.ts` を確認する。
- [x] `npm run dev` でローカル画面が表示されることを確認し、開発サーバーを停止する（Chrome で確認済み）。
- [x] Tailwind CSS と Vite 用プラグインをインストールする。
- [x] `vite.config.ts` に Tailwind CSS プラグインと `base: '/mui-practice/'` を設定して確認する。
- [x] `src/index.css` を設定し、Tailwind CSS を読み込む。
- [x] `src/App.tsx` の青い背景・白い「こんにちは」をブラウザで確認する（Chrome の表示を確認済み）。
- [x] `npm run build` と `npm run lint` が成功することを確認する。
- [x] Git で変更をコミットし、ユーザーの指示に従って CLI から GitHub の `main` に送信する。
- [x] GitHub 側に `src`・`package.json`・`vite.config.ts` と `/mui-practice/` の設定が反映されたことを確認する。
- [x] GitHub Pages の Source を GitHub Actions（`build_type: workflow`）に設定して確認する。
- [x] Vite をビルドし `dist` を公開する GitHub Actions workflow ファイルを作成する（GitHub 上での実行は未確認）。
- [x] Actions のビルドと公開ジョブが成功し、PC の Chrome で公開ページの青い背景と白い「こんにちは」を確認する。
- [ ] QR コードでスマートフォンから公開ページを確認する（`../mui-practice-QR.png` を作成済み。学生による確認待ち）。
- [ ] 作成から公開までの流れを振り返る。

## 2. 03-3：管理アプリの設計と準備

- [ ] 管理する対象とアプリ名を学生が決める。**未定**
- [ ] 最初に作る機能を学生が選ぶ。**未定**
- [ ] VS Code で既存の `mui-practice` が開き、`package.json` と `src` があることを確認する。
- [ ] `npm run dev` で既存アプリの動作を確認する。
- [ ] [MUI の公式コンポーネント一覧](https://mui.com/material-ui/all-components/)で実例を確認する。
- [ ] [MUI の公式インストール手順](https://mui.com/material-ui/getting-started/installation/)で現行の安定版と導入方法を確認し、インストールする。

## 3. 03-3：機能と MUI コンポーネント

- [ ] 学生が選んだ機能を小さな単位に分け、必要な MUI コンポーネントを1種類ずつ導入する。
- [ ] 追加ごとに、名前・用途・主な props・アプリ内での役割を説明する。
- [ ] コードは該当箇所だけ編集し、ブラウザで表示・動作を確認する。
- [ ] 可能なら学生が色・サイズ・表示内容などを変更し、効果を確認する。
- [ ] 登録を React の state で動作させる（採用する場合）。
- [ ] 一覧表示を動作させる（採用する場合）。
- [ ] 編集を React の state で動作させる（採用する場合）。
- [ ] 削除を React の state で動作させる（採用する場合）。
- [ ] 学生が選ぶ追加機能（検索、絞り込み、並べ替え、評価、カテゴリー分類、表示切り替えなど）を実装する。
- [ ] 動作確認済みの MUI コンポーネントを20種類以上にする。
- [ ] 既存機能が動くことを確認する。

### 使用済み MUI コンポーネント

動作確認済み：**0 / 20種類**。追加したら、名前・役割・確認結果を下に記録する。

| No. | コンポーネント | アプリ内の役割 | 動作確認 |
| --- | --- | --- | --- |

## 4. 完成と公開

- [ ] アプリの主な機能と20種類以上のコンポーネントを学生が確認する。
- [ ] `npm run build` の成功を確認する。
- [ ] 既存の GitHub Actions を使い GitHub Pages に公開する。
- [ ] 公開版を PC とスマートフォンで確認する。
- [ ] アプリ名、機能、使用したコンポーネントと種類数、重要な学び、公開結果を振り返る。

## 5. 授業の最後に教授へ説明する準備

- [ ] ローカルの親フォルダーにある `03-2_03-3_理解したこと.md` を基に、説明用のまとめHTMLを作る。演習後に分かったことも反映する。
- [ ] まとめHTMLを使い、理解したことと完成したアプリについて担当教授に説明する。

## 参照元

- `03_2_プロンプト_viteアプリ作成_mui-practice.txt`（ローカルの親フォルダー。GitHub リポジトリには含めない）
- `03_3_プロンプト_〇〇管理アプリ作成_mui-practice.txt`（ローカルの親フォルダー。GitHub リポジトリには含めない）

## 現在の状況

- ローカルの土台と公開用 workflow ファイルは作成済み。
- GitHub CLI の認証は `Matu-gif` で確認済み。`Matu-gif/mui-practice` は公開設定で作成済み。ローカル Git の `origin` へ接続し、初回コミット `756c898` を `main` に送信済み。GitHub Pages の公開元は GitHub Actions。再実行した workflow は成功し、PC で公開画面を確認済み。
- 公開URL: https://matu-gif.github.io/mui-practice/ 。スマートフォン用QRコードはローカルの親フォルダーに作成済み。最終確認は学生が行う。
- 学生の了承を得て、`README.md` を日本語に変更し、`AGENTS.md`・`tasks.md` をリポジトリ内に移した。親フォルダーの同名ファイルはリポジトリ内の原本を参照する。
- GitHub Pages の利用条件に合わせ、学生の指示でリポジトリを公開設定へ変更済み。
- ローカル画面表示は確認済み。`vite.config.ts` の設定変更後に HTTP 200、Chrome で青い背景と白い「こんにちは」を確認した。開発サーバーは停止済み。
- 学生から GitHub Pages の公開まで続行する指示を受けている。各項目の結果を報告しながら進める。
