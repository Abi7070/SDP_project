import React from 'react';
import './HealthStressPage.css'; // Import the dedicated CSS file

const HealthStressPage = () => {
  return (
    <div className="remedy-container">
      <header className="header-section">
        <h1>Remedies for Health Stress</h1>
        <p>Health-related stress can be difficult to manage. Here are some tips to help:</p>
      </header>

      <div className="card-container">
        <div className="card">
          <h2>1. Follow Your Doctor’s Advice</h2>
          <img src="/images/doctor-advice.jpg" alt="Following Doctor's Advice" className="card-image" />
          <p>Adhere to your healthcare provider’s recommendations to manage your health condition effectively.</p>
        </div>

        <div className="card">
          <h2>2. Maintain a Healthy Lifestyle</h2>
          <img src="/images/healthy-lifestyle.jpg" alt="Healthy Lifestyle" className="card-image" />
          <p>Eat a balanced diet, exercise regularly, and get enough sleep to support your overall health.</p>
        </div>

        <div className="card">
          <h2>3. Stay Informed</h2>
          <img src="/images/stay-informed.jpg" alt="Stay Informed" className="card-image" />
          <p>Educate yourself about your health condition to feel more in control and reduce anxiety.</p>
        </div>

        <div className="card">
          <h2>4. Seek Support</h2>
          <img src="/images/support.jpg" alt="Seek Support" className="card-image" />
          <p>Join support groups or talk to friends and family about your health concerns.</p>
        </div>

        {/* New cards */}
        <div className="card">
          <h2>5. Practice Relaxation Techniques</h2>
          <img src="/images/relaxation-techniques.jpg" alt="Relaxation Techniques" className="card-image" />
          <p>Incorporate techniques like deep breathing, meditation, or yoga to help manage stress.</p>
        </div>

        <div className="card">
          <h2>6. Regular Check-Ups</h2>
          <img src="/images/regular-checkups.jpg" alt="Regular Check-Ups" className="card-image" />
          <p>Schedule regular check-ups with your doctor to monitor your health and address any issues early.</p>
        </div>

        <div className="card">
          <h2>7. Limit Stress Triggers</h2>
          <img src="/images/limit-stress-triggers.jpg" alt="Limit Stress Triggers" className="card-image" />
          <p>Identify and minimize sources of stress in your daily life to improve your overall well-being.</p>
        </div>

        <div className="card">
          <h2>8. Stay Active</h2>
          <img src="/images/stay-active.jpg" alt="Stay Active" className="card-image" />
          <p>Engage in regular physical activity to boost your mood and reduce stress levels.</p>
        </div>
      </div>
    </div>
  );
};

export default HealthStressPage;
