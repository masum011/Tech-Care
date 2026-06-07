import { Wrench, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Wrench size={24} />
              <span>TechCare</span>
            </div>
            <p>Fast, affordable, and professional technical assistance delivered right to your doorstep.</p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>Computer & Laptop Repair</li>
              <li>CCTV Installation</li>
              <li>Wi-Fi & Network Setup</li>
              <li>Printer Support</li>
              <li>Electrical Repair</li>
              <li>Smart Home Setup</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li><Phone size={14} />+91 9800141571</li>
              <li><Mail size={14} /> masumre1010@gmail.com</li>
              <li><MapPin size={14} /> Serving your local area</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 TechCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
