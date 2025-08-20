const fetch = require("node-fetch");
const WEBHOOK_URL = "YOUR_WEBHOOK_URL_HERE"; // replace with your Discord webhook URL

let logQueue = [];
let sending = false;

async function sendWebhook(msg) {
  try {
    const formattedMsg = `\`\`\`ansi\n${msg}\n\`\`\``;

    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: formattedMsg,
        username: "Console Logger",
        avatar_url: "https://cdn-icons-png.flaticon.com/512/2620/2620995.png"
      })
    });
  } catch (err) {
    console.error("Webhook send failed:", err);
  }
}

// queue system
function queueLog(msg) {
  logQueue.push(msg);
  processQueue();
}

async function processQueue() {
  if (sending || logQueue.length === 0) return;
  sending = true;

  while (logQueue.length > 0) {
    const msg = logQueue.shift();
    await sendWebhook(msg);
    // delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 1200));
  }

  sending = false;
}

// redirect console
['log', 'error', 'warn', 'info'].forEach(type => {
  const old = console[type];
  console[type] = (...args) => {
    try {
      old(...args); // print normal console
      const msg = args.map(a => (typeof a === 'string' ? a : JSON.stringify(a, null, 2))).join(" ");
      queueLog(`[${type.toUpperCase()}] ${msg}`);
    } catch { }
  };
});