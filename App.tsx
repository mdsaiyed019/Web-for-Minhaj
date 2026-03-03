import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">📚</span>
            <span>Minhaj Library</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Minhaj Library Chittagong</h1>
          <p className="hero-subtitle">Searching for the soul in the light of Tasawwuf</p>
          <p className="hero-description">
            A declaration of harmony on the path of peace. Explore our collection of Islamic literature, 
            Quranic studies, and spiritual wisdom from renowned scholars.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Explore Our Collection</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="book-stack">
            <div className="book book-1">Al-Mawsu'ah</div>
            <div className="book book-2">Irfan-ul-Quran</div>
            <div className="book book-3">Quranic Studies</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Discover what makes Minhaj Library your trusted source for Islamic knowledge</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📖</div>
            <h3>Quranic Encyclopedia</h3>
            <p>Comprehensive collection of Al-Mawsu'ah al-Qur'aniyyah with detailed Quranic studies and interpretations.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">✨</div>
            <h3>Tasawwuf & Spirituality</h3>
            <p>Explore the depths of Islamic spirituality and mysticism through curated selections of spiritual texts.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🎓</div>
            <h3>Educational Research</h3>
            <p>Access scholarly works and research materials for academic and personal development in Islamic studies.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🚚</div>
            <h3>Delivery Service</h3>
            <p>Fast and reliable delivery service available throughout Chittagong for your convenience.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Online Booking</h3>
            <p>Easy online booking system to reserve your books and place orders from the comfort of your home.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🕌</div>
            <h3>Community Engagement</h3>
            <p>Join our community of learners and participate in discussions about Islamic knowledge and wisdom.</p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="testimonials">
        <div className="section-header">
          <h2>What Our Community Says</h2>
          <p>Join 363+ followers who trust Minhaj Library for authentic Islamic knowledge</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "An excellent collection of Islamic literature. The staff is knowledgeable and helpful. Highly recommended for anyone seeking authentic Islamic knowledge."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">👤</div>
              <div>
                <p className="author-name">Ahmed Hassan</p>
                <p className="author-role">Student of Islamic Studies</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "The Quranic Encyclopedia collection here is unmatched. Perfect for both beginners and advanced scholars. A true gem in Chittagong!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">👤</div>
              <div>
                <p className="author-name">Fatima Rahman</p>
                <p className="author-role">Islamic Scholar</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Their online booking system is convenient and the delivery is always on time. Great service and authentic books. Keep up the good work!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">👤</div>
              <div>
                <p className="author-name">Muhammad Ali</p>
                <p className="author-role">Regular Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            
            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Mohora Wasa Gate, Mohora, Chandgaon<br/>Chittagong, Bangladesh</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+880 1818-816509</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">🕐</span>
                <div>
                  <h4>Hours</h4>
                  <p>Always Open</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+880 1XXX-XXXXXX"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Your message here..."
                rows={5}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Minhaj Library</h4>
            <p>Your trusted source for Islamic knowledge and spiritual wisdom.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/minhaj.library.chittagong" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Minhaj Library Chittagong. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
