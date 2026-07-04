# DevAPI Lite

> Professional API testing tool for developers — available as a Chrome Extension, VS Code Extension, and Desktop Software.

![DevAPI Lite](public/favicon.svg)

---

## What is DevAPI Lite?

DevAPI Lite is a lightweight, fast, and fully-featured API testing tool built for developers who want instant results without the overhead of heavy tools like Postman. Test your APIs directly from your browser toolbar, inside VS Code, or as a standalone desktop app — all from the same tool with the same features.

No account. No cloud. No bloat. Just you and your APIs.

---

## Features

- **All HTTP Methods** — GET, POST, PUT, PATCH, DELETE with full header, query param, and body support
- **Environment Variables** — Use `{{BASE_URL}}`, `{{TOKEN}}` anywhere in URLs, headers, or body. Manage multiple environments (dev, staging, production)
- **Collections & Folders** — Save and organize requests into folders. Import/export collections
- **Request History** — Every request auto-saved with status, timing, and size. Grouped by date
- **cURL Generator** — Convert any request to a cURL command instantly
- **OpenAPI / Swagger Import** — Paste any OpenAPI 3.0 or Swagger 2.0 spec and auto-generate request collections
- **Response Viewer** — Status code, response time, payload size, syntax-highlighted JSON
- **Auth Support** — Bearer Token, API Key, Basic Auth
- **Dark / Light Mode** — Toggle from the toolbar
- **Works Offline** — All data stored locally, nothing sent to any server

---

## Download

| Platform | Format | Instructions |
|---|---|---|
| Chrome Extension | `.zip` | Extract → `chrome://extensions` → Load Unpacked |
| VS Code Extension | `.vsix` | Extensions → `···` → Install from VSIX |
| Windows | `.exe` | Run installer → Launch from Start Menu |
| macOS | `.dmg` | Open → Drag to Applications |
| Linux | `.AppImage` | `chmod +x` → Run |

---

## Chrome Extension — Setup

1. Download `devapi-lite-chrome.zip`
2. Extract the zip — you get a `dist/` folder
3. Open Chrome and go to `chrome://extensions`
4. Enable **Developer Mode** (top right toggle)
5. Click **Load Unpacked** and select the `dist/` folder
6. Click the DevAPI Lite icon in your toolbar

> Click the ↗ button inside the popup to open the full web view in a new tab

---

## VS Code Extension — Setup

1. Download `devapi-lite.vsix`
2. Open VS Code
3. Press `Ctrl+Shift+X` to open Extensions
4. Click the `···` menu (top right of Extensions panel)
5. Select **Install from VSIX...**
6. Browse to the downloaded `.vsix` file and click Install
7. Press `Ctrl+Shift+A` (`Cmd+Shift+A` on Mac) to open DevAPI Lite

### .devapi File Support

Create `.devapi` files to define requests directly in your editor:

```
### Get Users
GET https://jsonplaceholder.typicode.com/users

### Create Post
POST https://jsonplaceholder.typicode.com/posts
Content-Type: application/json

{
  "title": "Hello World",
  "userId": 1
}
```

Click the **▶ Run GET** CodeLens button above any request to run it instantly.

---

## Desktop Software — Setup

1. Download the installer for your OS
2. **Windows** — Run the `.exe` and follow the setup wizard
3. **macOS** — Open the `.dmg`, drag DevAPI Lite to Applications
4. **Linux** — Run `chmod +x devapi-lite.AppImage` then execute it
5. Launch DevAPI Lite from your Applications / Start Menu

---

## Environment Variables

Use `{{VARIABLE_NAME}}` syntax anywhere:

```
URL:     {{BASE_URL}}/users/{{USER_ID}}
Header:  Authorization: Bearer {{TOKEN}}
Body:    { "secret": "{{API_SECRET}}" }
```

Click the **Default** badge in the toolbar to manage environments and set variables.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS |
| Extension | Chrome MV3, VS Code Extension API |
| Desktop | Electron |
| Storage | chrome.storage.local / localStorage (dual adapter) |
| Marketing Site | React, Vite, Three.js, Tailwind CSS |

---

## Project Structure

```
devapi-lite/
├── src/
│   ├── components/          # UI Components
│   ├── context/             # Global state (AppContext)
│   ├── hooks/               # useApi hook
│   ├── pages/               # Popup.jsx (main layout)
│   ├── services/            # API, cURL, Storage, Swagger services
│   └── utils/               # Constants, formatJson
├── public/
│   └── manifest.json        # Chrome Extension MV3 manifest
├── vscode-extension/
│   ├── src/extension.js     # VS Code extension entry point
│   └── syntaxes/            # .devapi syntax highlighting
└── vite.config.js
```

---

## Development

```bash
# Install dependencies
npm install

# Run in browser (web app mode)
npm run dev

# Build Chrome extension
npm run build
# → Load dist/ folder in chrome://extensions

# Build + copy to VS Code extension
npm run build:ext

# Build desktop app (Windows)
npm run dist:win

# Build desktop app (macOS)
npm run dist:mac
```

---

## Developer

Designed and developed by **Jaya Agarwal**

---

## License

MIT — free to use, modify, and distribute.