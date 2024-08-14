import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="home-container">
      <nav className="top-right-nav">
        <div className="brand">MENTAL HEALTH AND WELLNESS</div>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/activity">Wellness</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/form">Intake Form</Link>
        </div>
      </nav>

      <div className="header-content">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRaRDNzU1QqnWU3rnaoTwzxDsaKXqsiPCsxw&s" alt="Welcome to Mindful Oasis" className="header-image" />
      </div>

      <section className="section-container services" id="services">
        <div className="section-header">
          <h1>The Fast & Visual Way to Understand Your Users</h1>
          <p>Everything your team needs to uncover insights and make the right changes.</p>
          <button className="primary-btn" onClick={() => navigate('/signup')}>Sign up for free</button>
          <h2>Our Services</h2>
        </div>
        <div className="services-content">
          <div className="service-item">
            <img src="/images/professional-counseling.jpg" alt="Professional Counseling" />
            <Link to="/professional-counseling">
              <h3>Professional Counseling and Therapy</h3>
            </Link>
            <p>Our licensed therapists and counselors offer professional support tailored to your individual needs.</p>
          </div>
          <div className="service-item">
            <img src="/images/stress-management.jpg" alt="Stress Management" />
            <Link to="/stress-management">
              <h3>Effective Stress Management Techniques</h3>
            </Link>
            <p>Learn effective stress management techniques to handle life's pressures.</p>
          </div>
          <div className="service-item">
            <img src="/images/mood-tracking.jpg" alt="Mood Tracking" />
            <Link to="/mood-tracking">
              <h3>Mood Tracking and Analysis</h3>
            </Link>
            <p>Track your mood to better understand your mental health patterns.</p>
          </div>
          <div className="service-item">
            <img src="/images/support-groups.jpg" alt="Support Groups" />
            <Link to="/support-groups">
              <h3>Support Groups and Community Connections</h3>
            </Link>
            <p>Join support groups and connect with others who share similar experiences.</p>
          </div>
          <div className="service-item">
            <img src="/images/educational-resources.jpg" alt="Educational Resources" />
            <Link to="/educational-resources">
              <h3>Educational Resources on Mental Health</h3>
            </Link>
            <p>Access a variety of resources to educate yourself on mental health topics.</p>
          </div>
        </div>
      </section>

      <section className="section-container upcoming-events" id="upcoming-events">
        <div className="section-header">
          <h2>Upcoming Events</h2>
        </div>
        <div className="events-list">
          <div className="event-item">
            <img src="/images/webinar-icon.png" alt="Webinar Icon" />
            <div>
              <strong>Webinar on Stress Management</strong>
              <p>Date: August 15, 2024</p>
              <p>Time: 3:00 PM - 4:30 PM</p>
              <p>Location: Online</p>
            </div>
          </div>
          <div className="event-item">
            <img src="/images/support-group-icon.png" alt="Support Group Icon" />
            <div>
              <strong>Support Group Meeting</strong>
              <p>Date: August 25, 2024</p>
              <p>Time: 5:00 PM - 6:30 PM</p>
              <p>Location: Wellness Center</p>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join our community and take the first step towards a healthier, happier you. Sign up today!</p>
        <button className="primary-btn" onClick={() => navigate('/signup')}>Get Started</button>
      </section>
    </div>
  );
};

export default HomePage;
