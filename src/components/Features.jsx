const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
      </svg>
    ),
    color: '#6c8fff',
    title: 'All HTTP Methods',
    desc: 'GET, POST, PUT, PATCH, DELETE — with full control over headers, query params, and request body. JSON, form-data, or raw.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: '#a855f7',
    title: 'Environment Variables',
    desc: 'Use {{BASE_URL}}, {{TOKEN}} anywhere in URLs, headers, or body. Manage multiple environments — dev, staging, production.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
      </svg>
    ),
    color: '#4ade80',
    title: 'Collections & Folders',
    desc: 'Save requests into organized folders. Import/export collections. Load from history in one click.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    color: '#fbbf24',
    title: 'cURL Generator',
    desc: 'Any request becomes a cURL command instantly. Copy and share with your team or paste into CI pipelines.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    color: '#f87171',
    title: 'OpenAPI Import',
    desc: 'Paste any Swagger 2.0 or OpenAPI 3.0 spec — DevAPI instantly generates organized request collections.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    color: '#818cf8',
    title: 'Request History',
    desc: 'Every request is auto-saved with status, timing, and size. Grouped by date. Reload any past request in one click.',
  },
]

function FeatureCard({ feature, delay }) {
  return (
    <div
      className="card-hover glow-border"
      style={{
        background: '#13141c',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        animationDelay: `${delay}ms`,
      }}
    >
      <div style={{
        width: '40px', height: '40px', borderRadius: '10px',
        background: `${feature.color}18`,
        border: `1px solid ${feature.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: feature.color,
      }}>
        {feature.icon}
      </div>
      <div>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#e2e4f0', marginBottom: '7px' }}>
          {feature.title}
        </h3>
        <p style={{ fontSize: '13px', color: '#8b8fa8', lineHeight: 1.65 }}>
          {feature.desc}
        </p>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, color: '#6c8fff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
            Everything you need
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#e2e4f0', lineHeight: 1.15 }}>
            Postman-level power,<br/>
            <span style={{ background: 'linear-gradient(135deg,#6c8fff,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              zero friction
            </span>
          </h2>
          <p style={{ marginTop: '16px', fontSize: '15px', color: '#8b8fa8', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.6 }}>
            All the tools a developer actually uses, none of the enterprise bloat.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {features.map((f, i) => <FeatureCard key={f.title} feature={f} delay={i * 80} />)}
        </div>
      </div>
    </section>
  )
}
