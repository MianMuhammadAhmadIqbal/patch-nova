import { marqueeItems } from '../../data/siteData'

function MarqueeTrack({ items, direction = 1 }) {
  const doubled = [...items, ...items]
  return (
    <div
      className="flex items-center gap-8 whitespace-nowrap"
      style={{
        animation: `marquee${direction > 0 ? '' : '2'} 30s linear infinite`,
      }}
    >
      {doubled.map((item, i) => (
        <div key={i} className="flex items-center gap-8 flex-shrink-0">
          <span className="text-sm font-semibold tracking-[0.12em] uppercase text-primary/40">{item}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
        </div>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="py-6 bg-white border-y border-border overflow-hidden">
      <div className="flex gap-8 overflow-hidden">
        <MarqueeTrack items={marqueeItems} direction={1} />
        <MarqueeTrack items={marqueeItems} direction={1} />
      </div>
    </div>
  )
}
