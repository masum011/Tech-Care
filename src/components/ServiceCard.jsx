import { Monitor, Camera, Wifi, Printer, Zap, Home } from 'lucide-react'

const iconMap = { Monitor, Camera, Wifi, Printer, Zap, Home }

export default function ServiceCard({ title, description, icon }) {
  const Icon = iconMap[icon] || Monitor

  return (
    <div className="service-card">
      <div className="service-icon">
        <Icon size={28} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
