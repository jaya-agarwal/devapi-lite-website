export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1e2030',
      padding: '40px 24px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg,#6c8fff,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#e2e4f0' }}>
              Dev<span style={{ color: '#6c8fff' }}>API</span>
              <span style={{ fontWeight: 400, color: '#4a4d62', marginLeft: '3px' }}>Lite</span>
            </span>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Features', 'How it works', 'Download'].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g,'-')}`}
                style={{ fontSize: '12px', color: '#4a4d62', textDecoration: 'none', transition: 'color 150ms' }}
                onMouseEnter={e => e.target.style.color = '#8b8fa8'}
                onMouseLeave={e => e.target.style.color = '#4a4d62'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#1e2030', marginBottom: '20px' }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ fontSize: '12px', color: '#4a4d62' }}>
            Built for developers who value speed over ceremony.
          </div>

          {/* Developer credit */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#4a4d62' }}>
            <span>Designed & developed by</span>
            <span style={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6c8fff, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Jaya Agarwal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}