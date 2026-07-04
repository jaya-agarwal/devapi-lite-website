const chromeSteps = [
  { step: '01', title: 'Download the extension zip', desc: "Click Download (.zip) in the Chrome card below. You'll get a ready-to-load zip file.", code: null },
  { step: '02', title: 'Unzip the file', desc: "Extract the zip — you'll get a folder called dist/ with all extension files inside.", code: 'unzip devapi-lite-chrome.zip' },
  { step: '03', title: 'Load into Chrome', desc: 'Go to chrome://extensions, enable Developer Mode, click Load Unpacked and select the dist/ folder.', code: 'chrome://extensions → Developer Mode → Load Unpacked' },
  { step: '04', title: 'Start testing APIs', desc: 'Click the DevAPI Lite icon in your Chrome toolbar. Hit the ↗ button for full-screen web view.', code: null },
]

const vscodeSteps = [
  { step: '01', title: 'Download the .vsix file', desc: 'Click Download (.vsix) in the VS Code card below to get the extension package.', code: null },
  { step: '02', title: 'Open VS Code Extensions', desc: 'Press Ctrl+Shift+X to open the Extensions panel, then click the ··· menu at the top right.', code: 'Ctrl+Shift+X → ··· → Install from VSIX' },
  { step: '03', title: 'Install from VSIX', desc: 'Select "Install from VSIX...", browse to the downloaded .vsix file and click Install.', code: null },
  { step: '04', title: 'Open DevAPI Lite', desc: 'Press Ctrl+Shift+A (or Cmd+Shift+A on Mac) to open the DevAPI panel inside VS Code.', code: 'Ctrl+Shift+A  /  Cmd+Shift+A' },
]

const softwareSteps = [
  { step: '01', title: 'Download for your OS', desc: 'Click your operating system (Windows / macOS / Linux) in the Desktop card below.', code: null },
  { step: '02', title: 'Run the installer', desc: 'Open the downloaded file. On Windows run the .exe setup wizard. On Mac open the .dmg and drag to Applications.', code: null },
  { step: '03', title: 'Launch DevAPI Lite', desc: 'Find DevAPI Lite in your Start Menu or Applications folder. Opens as a full native desktop app.', code: null },
]

function Step({ step, isLast }) {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: '34px', height: '34px', borderRadius: '50%',
          background: 'linear-gradient(135deg,#6c8fff22,#a855f722)',
          border: '1px solid #3d4060',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '11px', fontWeight: 800, color: '#6c8fff', fontFamily: 'monospace',
          flexShrink: 0,
        }}>
          {step.step}
        </div>
        {!isLast && <div style={{ width: '1px', flex: 1, background: 'linear-gradient(to bottom,#3d4060,transparent)', marginTop: '6px', minHeight: '28px' }}/>}
      </div>
      <div style={{ paddingBottom: isLast ? 0 : '24px' }}>
        <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#e2e4f0', marginBottom: '5px' }}>{step.title}</h4>
        <p style={{ fontSize: '12px', color: '#8b8fa8', lineHeight: 1.6, marginBottom: step.code ? '8px' : 0 }}>{step.desc}</p>
        {step.code && (
          <div style={{ background: '#0d0e14', border: '1px solid #2a2d3e', borderRadius: '6px', padding: '6px 10px', fontFamily: 'monospace', fontSize: '11px', color: '#6c8fff' }}>
            {step.code}
          </div>
        )}
      </div>
    </div>
  )
}

function PlatformCard({ color, icon, title, sub, steps }) {
  return (
    <div style={{ background: '#13141c', border: '1px solid #2a2d3e', borderRadius: '14px', padding: '26px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '26px' }}>
        <div style={{ width: '30px', height: '30px', borderRadius: '7px', background: `${color}18`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {icon}
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#e2e4f0' }}>{title}</div>
          <div style={{ fontSize: '11px', color: '#4a4d62' }}>{sub}</div>
        </div>
      </div>
      {steps.map((s, i) => <Step key={s.step} step={s} isLast={i === steps.length - 1}/>)}
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#a855f7', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
            Setup in minutes
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#e2e4f0', lineHeight: 1.15 }}>
            How it works
          </h2>
          <p style={{ marginTop: '14px', fontSize: '15px', color: '#8b8fa8' }}>
            Three ways to install — pick the one that fits your workflow.
          </p>
        </div>

        {/* 3-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '18px' }}>
          <PlatformCard
            color="#6c8fff"
            icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6c8fff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M21.17 8H12M3.95 6.06L8.54 14M10.88 21.94L15.46 14"/></svg>}
            title="Chrome Extension"
            sub="Load unpacked in browser"
            steps={chromeSteps}
          />
          <PlatformCard
            color="#38bdf8"
            icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2"><path d="M16.5 2.5L8 13l-4-3L2 12l4 3-4 5 2.5 1.5L8 17l8.5 5.5 3.5-2V4l-3.5-1.5z"/></svg>}
            title="VS Code Extension"
            sub="Install .vsix in VS Code"
            steps={vscodeSteps}
          />
          <PlatformCard
            color="#a855f7"
            icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>}
            title="Desktop Software"
            sub="Native app for any OS"
            steps={softwareSteps}
          />
        </div>
      </div>
    </section>
  )
}