# HookLogger.js 🚀

A simple Node.js utility that captures console output (`log`, `error`, `warn`, `info`) and forwards it to a webhook endpoint (e.g., Discord).  
It preserves message order with a queue and applies a short delay to avoid hitting rate limits.

---

## ✨ Features
- 🔁 Redirects `console.log`, `console.error`, `console.warn`, `console.info`
- ⏳ Uses a **queue system** to keep log order
- 🚦 Adds a **1.2s delay** to help prevent webhook rate limits
- 🧾 Formats messages with Markdown code blocks for readability
- 👤 Customizable `username` and `avatar_url` for webhook messages

---

## 📦 Installation

1. Clone or copy `HookLogger.js` into your Node.js project.
2. Install `node-fetch` (required for HTTP requests):
   ```bash
   npm install node-fetch
   ```

---

## ⚙️ Usage

### 1) Set your webhook URL
Edit `HookLogger.js` and replace:
```js
const WEBHOOK_URL = "YOUR_WEBHOOK_URL_HERE";
```
with your actual webhook URL (e.g., from Discord or another service).

### 2) Import the logger at the start of your app
```js
require("./HookLogger");
```

### 3) Log as usual
```js
console.log("Server started on port 3000");
console.warn("This is a warning");
console.error("Something went wrong!");
```

Messages will appear in your webhook channel in the same order.

---

## 🔐 Notes
- Keep your webhook URL secret. Do **not** commit it to public repositories.
- Webhooks can post to your channel. If leaked, regenerate/rotate the webhook URL.


---

## 📝 License
Read the License first !

---
## Code Prieview 
<img width="1850" height="2382" alt="code" src="https://github.com/user-attachments/assets/10100f2e-466f-4260-92a2-e00a4a6519da" />
