import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.style.opacity = 1
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{ 
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '100px 24px 80px', position: 'relative', zIndex: 1,
      textAlign: 'center',
    }}>
      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '7px',
        padding: '5px 14px',
        background: 'rgba(108,143,255,0.08)',
        border: '1px solid rgba(108,143,255,0.2)',
        borderRadius: '99px',
        marginBottom: '28px',
        animation: 'fadeUp 500ms ease both',
      }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', animation: 'pulse-glow 2s ease infinite' }} />
        <span style={{ fontSize: '12px', color: '#8b8fa8', letterSpacing: '0.04em' }}>Free & Open Source · No account needed</span>
      </div>

      {/* Headline */}
      <h1 ref={ref} style={{
        fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 800,
        lineHeight: 1.08, letterSpacing: '-0.04em',
        maxWidth: '820px', marginBottom: '20px',
        opacity: 0, transition: 'opacity 600ms ease',
      }}>
        API Testing,{' '}
        <span style={{
          background: 'linear-gradient(135deg, #6c8fff 0%, #a855f7 60%, #f87171 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          built for developers
        </span>
      </h1>

      {/* Sub */}
      <p style={{
        fontSize: 'clamp(15px, 2vw, 18px)', color: '#8b8fa8',
        maxWidth: '520px', lineHeight: 1.7, marginBottom: '40px',
        animation: 'fadeUp 600ms 200ms ease both',
      }}>
        Test, debug and manage your APIs directly in Chrome or VS Code.
        No cloud, no signup, no bloat — just instant results.
      </p>

      {/* CTAs */}
      <div style={{
        display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center',
        animation: 'fadeUp 600ms 350ms ease both',
      }}>
        <a href="#download" style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '13px 28px',
          background: 'linear-gradient(135deg, #6c8fff, #a855f7)',
          borderRadius: '10px', color: '#fff',
          fontSize: '14px', fontWeight: 700, textDecoration: 'none',
          boxShadow: '0 0 40px rgba(108,143,255,0.25)',
          transition: 'transform 150ms, box-shadow 150ms',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(108,143,255,0.4)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 40px rgba(108,143,255,0.25)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          Download Free
        </a>
        <a href="#how-it-works" style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '13px 28px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid #2a2d3e',
          borderRadius: '10px', color: '#e2e4f0',
          fontSize: '14px', fontWeight: 600, textDecoration: 'none',
          transition: 'all 150ms',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = '#3d4060' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = '#2a2d3e' }}
        >
          See how it works
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </a>
      </div>

      {/* Stats */}
      <div style={{
        display: 'flex', gap: '40px', marginTop: '64px',
        borderTop: '1px solid #1e2030', paddingTop: '32px',
        animation: 'fadeUp 600ms 500ms ease both',
        flexWrap: 'wrap', justifyContent: 'center',
      }}>
        {[
          { val: '5', unit: 'HTTP methods', desc: 'GET POST PUT PATCH DELETE' },
          { val: '0', unit: 'account needed', desc: 'Works completely offline' },
          { val: '2', unit: 'platforms', desc: 'Chrome + VS Code' },
        ].map(s => (
          <div key={s.unit} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.03em', background: 'linear-gradient(135deg, #6c8fff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {s.val}<span style={{ fontSize: '14px', marginLeft: '4px', color: '#8b8fa8', WebkitTextFillColor: '#8b8fa8' }}>{s.unit}</span>
            </div>
            <div style={{ fontSize: '11px', color: '#4a4d62', marginTop: '3px', letterSpacing: '0.02em' }}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* App preview mockup */}
      <div style={{
        marginTop: '72px', width: '100%', maxWidth: '860px',
        background: '#13141c', border: '1px solid #2a2d3e',
        borderRadius: '16px', overflow: 'hidden',
        boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(108,143,255,0.08)',
        animation: 'fadeUp 700ms 600ms ease both',
      }}>
        {/* Window chrome */}
        <div style={{ padding: '12px 16px', background: '#0d0e14', borderBottom: '1px solid #1e2030', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['#f87171','#fbbf24','#4ade80'].map(c => <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c, opacity: 0.6 }} />)}
          </div>
          <div style={{ flex: 1, textAlign: 'center', fontSize: '11px', color: '#4a4d62', fontFamily: 'monospace' }}>DevAPI Lite</div>
        </div>
        {/* App chrome preview */}
        <div style={{ display: 'flex', height: '340px' }}>
          {/* Sidebar */}
          <div style={{ width: '180px', borderRight: '1px solid #1e2030', padding: '12px 0', flexShrink: 0 }}>
            <div style={{ padding: '0 12px 8px', fontSize: '10px', color: '#4a4d62', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>Collections</div>
            {[
              { name: 'Auth API', color: '#6c8fff' },
              { name: 'Users', color: '#a855f7' },
              { name: 'Products', color: '#4ade80' },
            ].map(f => (
              <div key={f.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 12px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={f.color} strokeWidth="1.8">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                </svg>
                <span style={{ fontSize: '11px', color: '#8b8fa8' }}>{f.name}</span>
              </div>
            ))}
            <div style={{ margin: '16px 12px 8px', height: '1px', background: '#1e2030' }} />
            {[
              { method: 'GET',    url: '/users', color: '#4ade80' },
              { method: 'POST',   url: '/auth/login', color: '#818cf8' },
              { method: 'DELETE', url: '/session', color: '#f87171' },
            ].map(r => (
              <div key={r.url} style={{ display: 'flex', gap: '6px', padding: '5px 12px', alignItems: 'center' }}>
                <span style={{ fontSize: '9px', fontFamily: 'monospace', fontWeight: 700, color: r.color, minWidth: '36px' }}>{r.method}</span>
                <span style={{ fontSize: '10px', color: '#4a4d62', fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.url}</span>
              </div>
            ))}
          </div>
          {/* Main */}
          <div style={{ flex: 1, padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
            {/* URL bar */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', background: '#0d0e14', border: '1px solid #2a2d3e', borderRadius: '8px', padding: '8px 12px' }}>
              <span style={{ fontSize: '11px', fontFamily: 'monospace', fontWeight: 700, color: '#4ade80', background: 'rgba(74,222,128,0.1)', padding: '2px 7px', borderRadius: '4px' }}>GET</span>
              <span style={{ flex: 1, fontSize: '11px', fontFamily: 'monospace', color: '#8b8fa8' }}>https://api.example.com/users</span>
              <div style={{ padding: '5px 14px', background: 'linear-gradient(135deg,#6c8fff,#a855f7)', borderRadius: '5px', fontSize: '11px', fontWeight: 700, color: '#fff' }}>Send</div>
            </div>
            {/* Response */}
            <div style={{ flex: 1, background: '#0d0e14', border: '1px solid #1e2030', borderRadius: '8px', padding: '12px', overflow: 'hidden' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#4ade80' }}>200</span>
                <span style={{ fontSize: '10px', color: '#4a4d62' }}>OK</span>
                <span style={{ fontSize: '10px', color: '#4a4d62', marginLeft: 'auto' }}>142ms · 1.2 KB</span>
              </div>
              <pre style={{ fontSize: '11px', fontFamily: 'monospace', lineHeight: 1.7, color: '#8b8fa8', overflow: 'hidden' }}>{`[
  {
    <span style="color:#7c9fff">"id"</span>: <span style="color:#ffb86c">1</span>,
    <span style="color:#7c9fff">"name"</span>: <span style="color:#a8d8a8">"Alice Chen"</span>,
    <span style="color:#7c9fff">"role"</span>: <span style="color:#a8d8a8">"admin"</span>
  }
]`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.4, animation: 'fadeUp 600ms 900ms ease both' }}>
        <span style={{ fontSize: '11px', color: '#4a4d62', letterSpacing: '0.06em', textTransform: 'uppercase' }}>scroll to explore</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #4a4d62, transparent)' }} />
      </div>
    </section>
  )
}
