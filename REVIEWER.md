# Reviewer instructions

Product: GPT Chat Exporter
Version: 3.0.4
Status: Confirmed free core; store approval pending

Single purpose: export the user-selected saved conversation to local PDF/Markdown/TXT/JSON. The extension itself performs the export; it does not redirect users to another extension. Target hosts: chatgpt.com, chat.openai.com.

Install, sign in to the target AI service with your own authorized test account, open a saved conversation and wait for generation to finish. Click the toolbar action, choose a language, export TXT and compare the first/last messages. Repeat with a long conversation; no manual scrolling should be needed. Open cached format conversion and confirm no second history fetch is required. Cancel/retry and inspect errors. The extension does not send messages or modify conversations.

No test account credentials are bundled. No purchase, remote code or backend is required. Rebuild runtime.js from the included readable sources with node scripts/build-runtime.cjs. Third-party vendor code and licenses are local. ZIP files are unsigned; Firefox distribution requires AMO signing.

Do not describe this document as a completed submission or approval. New provider adapters must pass a real-account acceptance run before public-store review.
