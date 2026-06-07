import { MapPin, Shield, Clock, BadgeDollarSign, Heart, MessageCircle } from 'lucide-react'

const iconMap = { MapPin, Shield, Clock, BadgeDollarSign, Heart, MessageCircle }

export default function WhyCard({ title, description, icon }) {
  const Icon = iconMap[icon] || Shield

  return (
    <div className="why-card">
      <div className="why-icon">
        <Icon size={24} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
