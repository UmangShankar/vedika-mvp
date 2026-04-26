interface IdentityStripProps {
  identity: string
  epistemology: string
  ontology: string
  soteriology: string
  color: string
}

export function IdentityStrip({ identity, epistemology, ontology, soteriology, color }: IdentityStripProps) {
  const cols = [
    { label: 'Identity',      body: identity },
    { label: 'Epistemology',  body: epistemology },
    { label: 'Ontology',      body: ontology },
    { label: 'Soteriology',   body: soteriology },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[rgba(192,120,40,0.12)] bg-sandal-50 border-b border-[rgba(192,120,40,0.16)]">
      {cols.map(col => (
        <div key={col.label} className="px-6 py-6">
          <p
            className="text-overline uppercase tracking-widest mb-2"
            style={{ color }}
          >
            {col.label}
          </p>
          <p className="text-body-sm text-ink-muted leading-relaxed">{col.body}</p>
        </div>
      ))}
    </div>
  )
}
