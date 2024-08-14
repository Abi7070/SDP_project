import React from 'react';
import './AboutPage.css'; // Import CSS for styling

const AboutPage = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="about-container">
          <div className="content-box">
            <h1>About Mindful Oasis</h1>
            <p>
              At Mindful Oasis, we believe that mental health is a cornerstone of overall well-being. Our platform is dedicated to providing comprehensive resources and support to help individuals better understand and manage their mental health.
            </p>
            <p>
              <strong>Our Mission:</strong> We are committed to creating a safe and supportive environment where individuals can explore mental health topics, access valuable resources, and seek professional guidance. Our goal is to empower individuals to achieve better mental health and overall wellness.
            </p>
            <p>
              <strong>Contact Us:</strong> For any inquiries, feedback, or additional information about our services, feel free to reach out to us at <a href="mailto:mindfuloasis@gmail.com">mindfuloasis@gmail.com</a> or through our <a href="/contact">contact form</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Mindful Oasis. All rights reserved.</p>
        <p>
          Follow us on:
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
        <div className="team">
          <h2>Meet Our Team</h2>
          <div className="team-list">
            <div className="team-card">
              <img src={`${process.env.PUBLIC_URL}/images/team-member-1.jpg`} alt="John Doe" />
              <div className="team-info">
                
                <p>Lead Therapist</p>
              </div>
            </div>
            <div className="team-card">
              <img src={`${process.env.PUBLIC_URL}/images/team-member-2.jpg`} alt="Jane Smith" />
              <div className="team-info">
                
                <p>Chief Technology Officer</p>
              </div>
            </div>
            <div className="team-card">
              <img src={`${process.env.PUBLIC_URL}/images/team-member-3.jpg`} alt="Emily Johnson" />
              <div className="team-info">
               
                <p>Community</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
