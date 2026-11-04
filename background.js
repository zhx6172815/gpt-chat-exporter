chrome.runtime.onMessage.addListener((message, sender, respond) => {
  if (message?.type !== "openConverter") return;
  const source = sender.tab;
  let url;
  try {
    url = new URL(source?.url || "");
  } catch {
    respond({ok: false, error: "无法定位原聊天标签页。"});
    return;
  }
  const id = url.pathname.match(/\/c\/([a-zA-Z0-9-]+)(?:\/|$)/)?.[1];
  if (!["https://chatgpt.com", "https://chat.openai.com"].includes(url.origin) || !id ||
      !/^[0-9a-f-]{36}$/.test(message.key || "")) {
    respond({ok: false, error: "原聊天页面已改变，请重新导出。"});
    return;
  }
  const params = new URLSearchParams({tabId: source.id, id, origin: url.origin, snapshot: message.key});
  chrome.tabs.create({url: chrome.runtime.getURL("export.html#" + params)}).then(
    () => respond({ok: true}),
    () => respond({ok: false, error: "转换窗口未能打开，请重试。"})
  );
  return true;
});
