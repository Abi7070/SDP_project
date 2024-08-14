import React from 'react';
import './ITWorkStressPage.css';

const ITWorkStressPage = () => {
  return (
    <div className="remedy-container">
      <header className="header-section">
        <h1>Remedies for IT Workers' Mental Stress</h1>
        <p>
          The IT industry is fast-paced, requiring constant adaptation to new technologies, tight deadlines, and long hours. Managing stress effectively is crucial for mental well-being. Here are some proven remedies to help IT workers manage and reduce mental stress:
        </p>
      </header>

      <div className="card-container">
        <div className="card">
          <h2>1. Take Regular Breaks</h2>
          <img src="/images/take-breaks.jpg" alt="Take Regular Breaks" className="card-image" />
          <p>
            Continuous work without breaks can lead to burnout. Incorporate short breaks throughout your workday to recharge. The Pomodoro Technique, where you work for 25 minutes followed by a 5-minute break, is highly effective.
          </p>
        </div>

        <div className="card">
          <h2>2. Exercise Regularly</h2>
          <img src="/images/exercise-regularly.jpg" alt="Exercise Regularly" className="card-image" />
          <p>
            Regular physical activity reduces stress hormones and stimulates the production of endorphins. Simple activities like walking, yoga, or a quick workout during breaks can boost your energy and mood.
          </p>
        </div>

        <div className="card">
          <h2>3. Maintain a Healthy Diet</h2>
          <img src="/images/healthy-diet.jpg" alt="Maintain a Healthy Diet" className="card-image" />
          <p>
            A balanced diet provides the nutrients needed for energy and mental clarity. Avoid excessive caffeine and sugary snacks. Opt for fruits, vegetables, whole grains, and lean proteins to keep your mind sharp and stress levels low.
          </p>
        </div>

        <div className="card">
          <h2>4. Stay Connected</h2>
          <img src="/images/stay-connected.jpg" alt="Stay Connected" className="card-image" />
          <p>
            Working remotely or independently can feel isolating. Stay connected with colleagues, friends, and family to share experiences and reduce feelings of stress. Communication is key to maintaining a healthy work-life balance.
          </p>
        </div>

        <div className="card">
          <h2>5. Practice Mindfulness</h2>
          <img src="/images/mindfulness-it.jpg" alt="Practice Mindfulness" className="card-image" />
          <p>
            Mindfulness practices, such as meditation and deep breathing, can help you stay focused and calm. Even a few minutes of mindfulness can reduce stress and improve concentration, making it easier to tackle complex tasks.
          </p>
        </div>

        <div className="card">
          <h2>6. Get Enough Sleep</h2>
          <img src="/images/get-sleep.jpg" alt="Get Enough Sleep" className="card-image" />
          <p>
            Adequate sleep is essential for cognitive function and emotional well-being. Aim for 7-9 hours of quality sleep each night to ensure you’re well-rested and ready to face the challenges of the day.
          </p>
        </div>

        <div className="card">
          <h2>7. Set Realistic Goals</h2>
          <img src="/images/set-goals.jpg" alt="Set Realistic Goals" className="card-image" />
          <p>
            Break down large projects into smaller, manageable tasks. Setting realistic and achievable goals helps prevent overwhelm and reduces stress. Prioritize your tasks and focus on completing them step by step.
          </p>
        </div>

        <div className="card">
          <h2>8. Seek Professional Help</h2>
          <img src="/images/seek-help.jpg" alt="Seek Professional Help" className="card-image" />
          <p>
            If stress becomes overwhelming, don’t hesitate to seek help from a mental health professional. Therapy provides strategies and support for managing stress and maintaining mental health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ITWorkStressPage;
