import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 300ms ease',
      background: scrolled ? 'rgba(13,14,20,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid #1e2030' : '1px solid transparent',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none' }}>
          <div style={{
            width: '28px', height: '28px',
            background: 'linear-gradient(135deg, #6c8fff 0%, #a855f7 100%)',
            borderRadius: '7px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </div>
          <span style={{ fontSize: '15px', fontWeight: 700, color: '#e2e4f0', letterSpacing: '-0.02em' }}>
            Dev<span style={{ color: '#6c8fff' }}>API</span>
            <span style={{ fontWeight: 400, color: '#8b8fa8', marginLeft: '3px', fontSize: '13px' }}>Lite</span>
          </span>
        </a>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {['Features', 'How it works', 'Download'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                padding: '6px 14px', borderRadius: '6px',
                color: '#8b8fa8', fontSize: '13px', textDecoration: 'none',
                transition: 'color 150ms',
              }}
              onMouseEnter={e => e.target.style.color = '#e2e4f0'}
              onMouseLeave={e => e.target.style.color = '#8b8fa8'}
            >
              {link}
            </a>
          ))}
          <a
            href="#download"
            style={{
              marginLeft: '8px', padding: '7px 16px',
              background: 'linear-gradient(135deg, #6c8fff, #a855f7)',
              borderRadius: '7px', color: '#fff',
              fontSize: '13px', fontWeight: 600, textDecoration: 'none',
              boxShadow: '0 0 20px rgba(108,143,255,0.2)',
              transition: 'opacity 150ms',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Get DevAPI
          </a>
        </div>
      </div>
    </nav>
  )
}
