import Navbar from './components/Navbar'
import ServiceCard from './components/ServiceCard'
import WhyCard from './components/WhyCard'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'
import { services, whyChooseUs } from './data/services'
import { ArrowDown, Phone, MessageCircle, Wrench } from 'lucide-react'

export default function App() {
  const whatsappNumber = '+919800141571'
  const whatsappMessage = encodeURIComponent('Hi TechCare! I need technical support at my location.')

  return (
    <div className="app">
      <Navbar />

      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <span className="hero-badge">
            <Wrench size={14} /> Doorstep Technical Services
          </span>
          <h1>
            Expert Tech Support, <br />
            <span className="hero-highlight">Delivered to Your Door</span>
          </h1>
          <p className="hero-sub">
            Computer repairs, CCTV installation, Wi-Fi setup, and more — professional assistance
            directly at your location, so you never have to visit a repair shop again.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a Service
            </button>
            <a
              className="btn btn-outline btn-lg"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
          <button className="hero-scroll" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
            <ArrowDown size={20} />
          </button>
        </div>
      </section>

      <section className="section section--alt" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2>Our Services</h2>
            <p>From computer repairs to smart home setup — we handle all your technical needs at your doorstep.</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="why-us">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why TechCare</span>
            <h2>Why Choose Us?</h2>
            <p>We make technical support simple, reliable, and convenient.</p>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item, i) => (
              <WhyCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="booking">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Get Started</span>
            <h2>Book a Service</h2>
            <p>Fill out the form below and our team will reach out to confirm your appointment.</p>
          </div>
          <div className="booking-wrapper">
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <h2>Need Help Right Now?</h2>
          <p>Call us directly or send a WhatsApp message for immediate assistance.</p>
          <div className="cta-actions">
            <a className="btn btn-primary btn-lg" href="tel:+919800141571">
              <Phone size={18} /> Call Now
            </a>
            <a
              className="btn btn-white btn-lg"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
