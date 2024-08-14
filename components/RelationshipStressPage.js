import React from 'react';
import './RelationshipStressPage.css';

const RelationshipStressPage = () => {
  return (
    <div className="remedy-container">
      <header className="header-section">
        <h1>Remedies for Relationship Stress</h1>
        <p>Relationship stress can be challenging. Here are some tips to help manage it:</p>
      </header>

      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <h2>1. Communicate Openly</h2>
            <img src="/images/open-communication.jpg" alt="Open Communication" className="relationship-stress-image" />
            <p>Open and honest communication is key to resolving conflicts and reducing stress in relationships.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>2. Spend Quality Time Together</h2>
            <img src="/images/quality-time.jpg" alt="Quality Time" className="relationship-stress-image" />
            <p>Make time for each other to strengthen your bond and reduce stress.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>3. Seek Counseling</h2>
            <img src="/images/seeking-counseling.jpg" alt="Seek Counseling" className="relationship-stress-image" />
            <p>If relationship stress becomes overwhelming, consider seeking help from a relationship counselor.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>4. Practice Empathy</h2>
            <img src="/images/empathy.jpg" alt="Practice Empathy" className="relationship-stress-image" />
            <p>Try to understand your partner’s perspective and show empathy towards their feelings.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>5. Set Healthy Boundaries</h2>
            <img src="/images/healthy-boundaries.jpg" alt="Set Healthy Boundaries" className="relationship-stress-image" />
            <p>Establishing clear boundaries can help prevent misunderstandings and reduce stress.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>6. Focus on Self-Care</h2>
            <img src="/images/self-care.jpg" alt="Focus on Self-Care" className="relationship-stress-image" />
            <p>Take time for yourself to recharge and maintain your own well-being, which can positively impact your relationship.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>7. Engage in Joint Activities</h2>
            <img src="/images/joint-activities.jpg" alt="Engage in Joint Activities" className="relationship-stress-image" />
            <p>Participate in activities you both enjoy to strengthen your connection and reduce stress.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>8. Practice Forgiveness</h2>
            <img src="/images/forgiveness.jpg" alt="Practice Forgiveness" className="relationship-stress-image" />
            <p>Holding onto grudges can increase stress. Practice forgiveness to move forward and improve your relationship.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelationshipStressPage;
