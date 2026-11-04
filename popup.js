const buttons = [...document.querySelectorAll("[data-format]")];
const status = document.querySelector("#status");
localizeInterface(document.body);
const languageControl = addLanguageControl(document.body, {
  firstRun: true,
  onReady: () => document.body.removeAttribute("data-first-language")
});

async function currentConversation() {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  const url = new URL(tab?.url || "about:blank");
  const id = url.pathname.match(/\/c\/([a-zA-Z0-9-]+)(?:\/|$)/)?.[1];
  if (!["https://chatgpt.com", "https://chat.openai.com"].includes(url.origin) || !id) return null;
  return {tabId: tab.id, id, origin: url.origin};
}

async function exportChat(format) {
  buttons.forEach(button => { button.disabled = true; });
  try {
    const source = await currentConversation();
    if (!source) throw new Error("请先打开一段已保存的 ChatGPT 对话。");
    await chrome.scripting.executeScript({target: {tabId: source.tabId}, files: ["runtime.js"]});
    await chrome.scripting.executeScript({
      target: {tabId: source.tabId},
      func: (selectedFormat, id, language) => globalThis.__gptChatExporter.open(selectedFormat, id, language),
      args: [format, source.id, currentLanguage]
    });
    window.close();
  } catch (error) {
    status.textContent = interfaceError(error, "无法打开导出弹窗，请刷新对话后重试。");
    status.classList.add("error");
    buttons.forEach(button => { button.disabled = false; });
  }
}

buttons.forEach(button => button.addEventListener("click", () => exportChat(button.dataset.format)));
currentConversation().then(source => {
  status.textContent = source ? "自动读取完整消息历史，无需向上翻页。" : "请先打开一段已保存的 ChatGPT 对话。";
}).catch(() => { status.textContent = "无法读取当前标签页。"; });
