// ╔══════════════════════════════════════════════════════════════════════════╗
// ║                     FILE PLACEMENT GUIDE                                ║
// ║  Put your files inside the  public/  folder of this project,            ║
// ║  then update the 3 constants below to match the exact filenames.        ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  CHROME  → public/devapi-lite-chrome.zip   (your dist/ folder zipped)  ║
// ║  VSCODE  → public/devapi-lite.vsix         (your .vsix file)           ║
// ║  WINDOWS → public/devapi-lite-setup.exe    (your Electron .exe)        ║
// ║  MACOS   → public/devapi-lite.dmg          (your Electron .dmg)        ║
// ║  LINUX   → public/devapi-lite.AppImage     (your Electron .AppImage)   ║
// ╚══════════════════════════════════════════════════════════════════════════╝

const CHROME_ZIP_URL  = '/devapi-lite-chrome.zip'   // ← REPLACE with your chrome zip filename
const VSCODE_VSIX_URL = '/devapi-lite.vsix'         // ← REPLACE with your .vsix filename
const WIN_EXE_URL     = '/win-unpacked'    // ← REPLACE with your .exe filename
const MAC_DMG_URL     = '/devapi-lite.dmg'          // ← REPLACE with your .dmg filename
const LINUX_URL       = '/devapi-lite.AppImage'     // ← REPLACE with your .AppImage filename

// ──────────────────────────────────────────────────────────────────────────

const DL_BTN = (bg, border, color, shadow) => ({
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
  padding: '12px 24px', borderRadius: '8px', textDecoration: 'none',
  fontSize: '14px', fontWeight: 700, transition: 'all 150ms',
  background: bg, border, color, boxShadow: shadow || 'none',
})

function CheckItem({ text }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#8b8fa8' }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      {text}
    </li>
  )
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
    </svg>
  )
}

export default function Download() {
  return (
    <section id="download" style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '700px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(108,143,255,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: '1060px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#4ade80', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
            Free forever · 3 ways to use it
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#e2e4f0', lineHeight: 1.1 }}>
            Get DevAPI Lite
          </h2>
          <p style={{ marginTop: '14px', fontSize: '15px', color: '#8b8fa8', maxWidth: '460px', margin: '14px auto 0' }}>
            Chrome Extension, VS Code Extension, or full Desktop App — all free, all sharing the same powerful features.
          </p>
        </div>

        {/* ── 3-column grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>

          {/* ── Card 1: Chrome Extension ── */}
          <div className="glow-border" style={{ background: '#13141c', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#6c8fff,#a855f7)' }}/>

            {/* Icon + title */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: 'rgba(108,143,255,0.1)', border: '1px solid rgba(108,143,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6c8fff" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
                  <path d="M21.17 8H12M3.95 6.06L8.54 14M10.88 21.94L15.46 14"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#e2e4f0' }}>Chrome Extension</div>
                <div style={{ fontSize: '11px', color: '#8b8fa8', marginTop: '2px' }}>Load as unpacked · MV3</div>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {['Toolbar popup (900×600)', 'Full-screen web view', 'Works on any website', 'No install wizard needed'].map(t => <CheckItem key={t} text={t}/>)}
            </ul>

            <div style={{ marginTop: 'auto', paddingTop: '8px', borderTop: '1px solid #1e2030', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#4a4d62' }}>
                <span>Manifest V3</span><span>~300 KB</span>
              </div>
              <a href={CHROME_ZIP_URL} download
                style={DL_BTN('linear-gradient(135deg,#6c8fff,#a855f7)', 'none', '#fff', '0 4px 20px rgba(108,143,255,0.3)')}
                onMouseEnter={e => { e.currentTarget.style.opacity='0.88'; e.currentTarget.style.transform='translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity='1'; e.currentTarget.style.transform='' }}
              >
                <DownloadIcon/> Download (.zip)
              </a>
              <div style={{ fontSize: '11px', color: '#4a4d62', textAlign: 'center' }}>
                chrome://extensions → Load Unpacked
              </div>
            </div>
          </div>

          {/* ── Card 2: VS Code Extension ── */}
          <div className="glow-border" style={{ background: '#13141c', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#38bdf8,#6c8fff)' }}/>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {/* VS Code icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8">
                  <path d="M16.5 2.5L8 13l-4-3L2 12l4 3-4 5 2.5 1.5L8 17l8.5 5.5 3.5-2V4l-3.5-1.5z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#e2e4f0' }}>VS Code Extension</div>
                <div style={{ fontSize: '11px', color: '#8b8fa8', marginTop: '2px' }}>Install via .vsix file</div>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {['Panel inside VS Code', 'CodeLens on .devapi files', 'Run requests from editor', 'Cmd+Shift+A shortcut'].map(t => <CheckItem key={t} text={t}/>)}
            </ul>

            <div style={{ marginTop: 'auto', paddingTop: '8px', borderTop: '1px solid #1e2030', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#4a4d62' }}>
                <span>VS Code 1.74+</span><span>.vsix file</span>
              </div>
              <a href={VSCODE_VSIX_URL} download
                style={DL_BTN('rgba(56,189,248,0.12)', '1px solid rgba(56,189,248,0.3)', '#38bdf8', 'none')}
                onMouseEnter={e => e.currentTarget.style.background='rgba(56,189,248,0.22)'}
                onMouseLeave={e => e.currentTarget.style.background='rgba(56,189,248,0.12)'}
              >
                <DownloadIcon/> Download (.vsix)
              </a>
              <div style={{ fontSize: '11px', color: '#4a4d62', textAlign: 'center' }}>
                Extensions → ··· → Install from VSIX
              </div>
            </div>
          </div>

          {/* ── Card 3: Desktop Software ── */}
          <div className="glow-border" style={{ background: '#13141c', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#a855f7,#f87171)' }}/>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#e2e4f0' }}>Desktop Software</div>
                <div style={{ fontSize: '11px', color: '#8b8fa8', marginTop: '2px' }}>Windows · macOS · Linux</div>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {['Full-screen native app', 'Works without a browser', 'No Node.js required', 'System tray integration'].map(t => <CheckItem key={t} text={t}/>)}
            </ul>

            <div style={{ marginTop: 'auto', paddingTop: '8px', borderTop: '1px solid #1e2030', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {/* OS pills */}
              <div style={{ display: 'flex', gap: '6px' }}>
                {[
                  { os: 'Windows', icon: '⊞', url: WIN_EXE_URL },
                  { os: 'macOS',   icon: '',  url: MAC_DMG_URL },
                  { os: 'Linux',   icon: '🐧', url: LINUX_URL  },
                ].map(({ os, icon, url }) => (
                  <a key={os} href={url} download style={{
                    flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px',
                    padding: '7px 4px', background: '#1a1b26', border: '1px solid #2a2d3e',
                    borderRadius: '7px', textDecoration: 'none', transition: 'all 150ms',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='#3d4060'; e.currentTarget.style.background='#1f2030' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='#2a2d3e'; e.currentTarget.style.background='#1a1b26' }}
                  >
                    <span style={{ fontSize: '13px' }}>{icon}</span>
                    <span style={{ fontSize: '10px', color: '#8b8fa8' }}>{os}</span>
                  </a>
                ))}
              </div>
              <a href={WIN_EXE_URL} download
                style={DL_BTN('rgba(168,85,247,0.12)', '1px solid rgba(168,85,247,0.3)', '#a855f7', 'none')}
                onMouseEnter={e => e.currentTarget.style.background='rgba(168,85,247,0.22)'}
                onMouseLeave={e => e.currentTarget.style.background='rgba(168,85,247,0.12)'}
              >
                <DownloadIcon/> Download Software
              </a>
              <div style={{ fontSize: '11px', color: '#4a4d62', textAlign: 'center' }}>
                Run installer → Launch from Applications
              </div>
            </div>
          </div>
        </div>

        {/* Reassurance strip */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '36px', marginTop: '44px', flexWrap: 'wrap' }}>
          {[
            { icon: '🔒', text: 'All data stays on your device' },
            { icon: '⚡', text: 'No account or login required' },
            { icon: '🆓', text: 'Free forever, no trial' },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', color: '#4a4d62' }}>
              <span>{item.icon}</span><span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}