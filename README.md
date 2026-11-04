# GPT Chat Exporter · GPT 聊天记录导出器 · GPT チャット履歴エクスポーター

面向公众免费提供、源码公开的 ChatGPT 聊天记录导出工具。支持 ChatGPT 对话、聊天记录和消息的导出、下载、保存与备份，提供 PDF / Markdown / TXT / JSON 格式及中文、English、日本語界面。

A free public-benefit project with publicly available source code. Export, download, save and back up ChatGPT conversations, chat history and messages as PDF, Markdown, plain-text TXT or JSON.

公益目的の無料・ソース公開プロジェクトです。ChatGPT の会話履歴やメッセージをエクスポート、ダウンロード、保存、バックアップできます。PDF、Markdown、TXT、JSON に対応しています。

[中文](#中文) · [English](#english) · [日本語](#日本語)

## 中文

### 项目宗旨

本项目以公益共享为宗旨，面向有对话备份、学习资料保存和个人知识整理需求的用户，提供免费、易用的 ChatGPT 聊天记录导出工具。

项目源码与更新记录通过本仓库公开。所有现有导出功能均可免费使用，用户可自行下载并在浏览器中安装。欢迎通过 GitHub Issues 提交问题和建议，通过 Pull Requests 参与改进。

### 功能

- **完整对话导出**。自动读取当前对话分支从开头到末尾的消息，无需手动滚动加载。
- **多种文件格式**。支持 PDF、Markdown、纯文本 TXT 和 JSON，适用于阅读、备份与后续整理。
- **导出进度显示**。在当前聊天页面展示进度弹窗，显示登录检查、响应等待、数据接收及文件生成状态。
- **格式转换**。使用已读取的完整记录生成其他格式，减少重复请求。
- **多语言界面**。支持中文、英语和日语，保存首次选择，并提供随时切换语言的入口。
- **统一消息计数**。统一显示「共 X 条消息」，用户消息和助手回复分别计为一条。
- **本地文件生成**。使用用户当前登录的 ChatGPT 会话读取记录，在浏览器内生成导出文件。

### 安装

1. 在本仓库页面点击 **Code → Download ZIP**，然后解压。
2. 在 Microsoft Edge 地址栏打开 `edge://extensions`。
3. 开启「开发人员模式」，点击「加载解压缩的扩展」。
4. 选择解压后包含 `manifest.json` 的文件夹，并保留这个文件夹。
5. 从浏览器工具栏的扩展菜单打开本扩展，首次使用时选择界面语言。

### 使用

1. 登录 ChatGPT，打开一段已保存的对话，等待当前回复完成。
2. 点击扩展，选择需要的格式。
3. 保持聊天页面打开。弹窗会显示导出进度，完成后开始下载。
4. 导出 PDF 时，点击「打印 / 保存 PDF」，在打印窗口选择「另存为 PDF」。
5. 需要其他格式时，点击「转换其他格式」，在转换页保存。

更新扩展文件后，到扩展管理页点击「重新加载」，再刷新 ChatGPT 页面。

### 导出范围

- Markdown、TXT 和 PDF 包含当前分支的用户消息及可见助手回复，过滤工具执行日志、系统记录、隐藏分析和空消息。
- JSON 保留接口返回的数据。其他编辑或重新生成分支是否包含在内，取决于接口返回的内容。
- 图片、音视频和附件保留文字或资源信息，原文件不会打包。公式保留源文。
- 扩展使用 ChatGPT 网页内部接口。登录状态、访问权限、网络和接口变化会影响导出。
- 已通过 2000 条消息的模拟长对话测试。该测试不代表所有真实账号和所有内容类型都已验证。

## English

### Project purpose

GPT Chat Exporter is a public-benefit software project that helps users export, download, save and back up ChatGPT conversations, chat history and messages for learning and personal knowledge management.

The source code and project history are publicly available in this repository. All current export features are free to use. Users can download and install the extension locally. Feedback through GitHub Issues and improvements through Pull Requests are welcome.

### Features

- Fetch the current conversation branch from beginning to end without scrolling.
- Export PDF, Markdown, plain-text TXT and JSON.
- Follow sign-in checks, response waiting, received data and file generation in an in-page dialog.
- Convert fetched records to another format without fetching the conversation again.
- Choose 中文, English or 日本語 on first use. Your choice is saved and can be changed using the language button.
- See one message total. Each user message and assistant reply counts as one message.
- Generate files locally in the browser using the conversation from your signed-in ChatGPT account.

### Install and use

1. Click **Code → Download ZIP** on this repository and extract the archive.
2. Open `edge://extensions` in Microsoft Edge and enable **Developer mode**.
3. Click **Load unpacked** and select the extracted folder containing `manifest.json`.
4. Open the extension from your toolbar and select your interface language.
5. Open a saved ChatGPT conversation, wait for the reply to finish, then choose an export format.
6. Keep the chat page open until the export finishes. For PDF, choose **Print / Save PDF**, then **Save as PDF** in the print dialog.

Keep the extension folder in place. After updating its files, click **Reload** on the extensions page and refresh ChatGPT.

### Scope

Readable exports contain the selected branch's user messages and visible assistant replies. JSON preserves data returned by ChatGPT. Media and attachments are represented by text or resource information; original files are not bundled. Formulas remain source text.

The extension uses ChatGPT's internal web endpoints. Availability depends on your session, access, connection and endpoint compatibility. Simulated tests cover 2000 messages; real-account and content-type coverage is limited.

## 日本語

### プロジェクトの目的

GPT Chat Exporter（GPT 聊天记录导出器）は、ChatGPT の会話履歴やメッセージのエクスポート、ダウンロード、保存、バックアップを通じて、学習資料の保存と個人の知識整理を支援する公益目的の無料ソフトウェアプロジェクトです。

ソースコードと更新履歴を本リポジトリで公開しています。現在提供している出力機能はすべて無料で利用でき、各自のブラウザーにインストールできます。GitHub Issues での不具合報告・提案、Pull Requests での改善を歓迎します。

### 主な機能

- スクロールせずに、現在の会話の分岐を最初から最後まで取得。
- PDF、Markdown、プレーンテキストの TXT、JSON に対応。
- 会話ページ内でログイン確認、応答待機、受信データ量、ファイル生成の進行状況を表示。
- 取得済みの記録を再利用して、別の形式に変換。
- 初回に中文・English・日本語を選択。設定は保存され、各画面の言語ボタンから変更可能。
- 件数はメッセージの合計に統一。ユーザーの発言とアシスタントの返答をそれぞれ1件として数えます。
- ログイン中の ChatGPT の会話を取得し、ブラウザー内でファイルを生成。

### インストールと使い方

1. リポジトリの **Code → Download ZIP** からダウンロードして解凍します。
2. Microsoft Edge で `edge://extensions` を開き、「開発者モード」を有効にします。
3. 「展開して読み込み」を押し、`manifest.json` を含むフォルダーを選択します。
4. ツールバーから拡張機能を開き、表示言語を選択します。
5. 保存済みの ChatGPT の会話を開き、返答が完了してから出力形式を選びます。
6. 完了まで元の会話ページを開いておきます。PDF は「印刷 / PDF に保存」からブラウザーの印刷画面で保存します。

拡張機能のフォルダーは削除せずに保管してください。更新後は拡張機能を再読み込みし、ChatGPT のページも再読み込みします。

### 保存される内容

読みやすい形式には、現在の分岐のユーザーの発言と表示されるアシスタントの返答を収録します。JSON には ChatGPT が返したデータを保存します。画像・音声・動画・添付ファイルはテキストやリソース情報として保存され、元のファイルは含まれません。数式はソーステキストで保存します。

ChatGPT の内部インターフェースを使用するため、ログイン状態、アクセス権、接続状態、インターフェースの変更によって利用できない場合があります。模擬データで 2000 件の会話を検証していますが、すべての実アカウントや内容を検証したものではありません。

## Development

Requires Node.js 18 or later. Bundled browser dependencies are included in `vendor/`.

After editing the in-page exporter sources, rebuild the bundled runtime.

```sh
node scripts/build-runtime.cjs
```

Check that the bundled runtime matches the sources.

```sh
node scripts/build-runtime.cjs --check
```

Reload the extension in Edge and refresh the ChatGPT tab to apply changes.

## Third-party dependencies

- **Marked** renders Markdown.
- **DOMPurify** sanitizes rendered HTML.

Their license texts are included in `vendor/`.

This project is independently developed. ChatGPT is an OpenAI product.



