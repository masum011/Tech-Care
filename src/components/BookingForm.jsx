import { useState } from 'react'
// import { supabase } from '../lib/supabase'
import { services } from '../data/services'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, Loader2, MessageCircle } from 'lucide-react'

// const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
// const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    address: '',
    preferred_date: '',
    preferred_time: '',
    notes: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('submitting')

  try {
    await emailjs.send(
      'service_nupsuvo',
      'template_nb3ukgx',
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service,
        address: form.address,
        preferred_date: form.preferred_date,
        preferred_time: form.preferred_time,
        notes: form.notes,
      },
      {
        publicKey: 'ixShfXw8JnyzKAQGA',
      }
    )

    setStatus('success')

    setForm({
      name: '',
      phone: '',
      email: '',
      service: '',
      address: '',
      preferred_date: '',
      preferred_time: '',
      notes: '',
    })
  } catch (error) {
    console.error(error)
    setStatus('error')
  }
}

  if (status === 'success') {
    return (
      <div className="booking-success">
        <CheckCircle size={48} />
        <h3>Booking Confirmed!</h3>
        <p>We've received your request. Our team will contact you shortly to confirm your appointment.</p>
        <div className="booking-success-actions">
          <button className="btn btn-primary" onClick={() => setStatus('idle')}>
            Book Another Service
          </button>
          <a
            className="btn btn-whatsapp"
            href="https://wa.me/919800141571?text=Hi%20TechCare!%20I%20just%20booked%20a%20service."
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    )
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Your phone number"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email (Optional)</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service Required *</label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">Other / General Inquiry</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="address">Your Address *</label>
        <input
          id="address"
          name="address"
          type="text"
          required
          placeholder="Full address where service is needed"
          value={form.address}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="preferred_date">Preferred Date</label>
          <input
            id="preferred_date"
            name="preferred_date"
            type="date"
            value={form.preferred_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="preferred_time">Preferred Time</label>
          <select
            id="preferred_time"
            name="preferred_time"
            value={form.preferred_time}
            onChange={handleChange}
          >
            <option value="">Any time</option>
            <option value="morning">Morning (8AM - 12PM)</option>
            <option value="afternoon">Afternoon (12PM - 4PM)</option>
            <option value="evening">Evening (4PM - 8PM)</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="notes">Additional Notes</label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Describe your issue or any special requirements..."
          value={form.notes}
          onChange={handleChange}
        />
      </div>

      {status === 'error' && (
        <p className="form-error">Something went wrong. Please try again or contact us on WhatsApp.</p>
      )}

      <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="spin" /> Submitting...
          </>
        ) : (
          <>
            <Send size={18} /> Book Service
          </>
        )}
      </button>
    </form>
  )
}
