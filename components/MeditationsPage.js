import React from 'react';
import './MeditationsPage.css';

const MeditationsPage = () => {
  return (
    <div className="remedy-container">
      <header className="header-section">
        <h1>Meditations for Stress Relief</h1>
        <p>Meditation is an effective way to reduce stress. Here are some techniques to try:</p>
      </header>

      <div className="card-container">
        <div className="card">
          <img src="/images/mindfulness.jpg" alt="Mindfulness Meditation" className="card-image" />
          <div className="card-content">
            <h2>1. Mindfulness Meditation</h2>
            <p>Focus on the present moment without judgment to reduce stress and increase awareness.</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/guided-meditation.jpg" alt="Guided Meditation" className="card-image" />
          <div className="card-content">
            <h2>2. Guided Meditation</h2>
            <p>Listen to guided meditations to help you relax and focus your mind.</p>
          </div>
        </div>
        
        <div className="card">
          <img src="/images/deep-breathing.jpg" alt="Deep Breathing" className="card-image" />
          <div className="card-content">
            <h2>3. Deep Breathing</h2>
            <p>Practice deep breathing exercises to calm your mind and reduce stress.</p>
          </div>
        </div>
        
        <div className="card">
          <img src="/images/visualization.jpg" alt="Visualization" className="card-image" />
          <div className="card-content">
            <h2>4. Visualization</h2>
            <p>Imagine a peaceful scene to help reduce anxiety and promote relaxation.</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/body-scan.jpg" alt="Body Scan Meditation" className="card-image" />
          <div className="card-content">
            <h2>5. Body Scan Meditation</h2>
            <p>Focus on different parts of your body, noticing any tension and letting it go.</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/loving-kindness.jpg" alt="Loving-Kindness Meditation" className="card-image" />
          <div className="card-content">
            <h2>6. Loving-Kindness Meditation</h2>
            <p>Send positive thoughts and feelings to yourself and others to foster compassion.</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/mantra-meditation.jpg" alt="Mantra Meditation" className="card-image" />
          <div className="card-content">
            <h2>7. Mantra Meditation</h2>
            <p>Repeat a calming word or phrase to help focus your mind and reduce stress.</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/zen-meditation.jpg" alt="Zen Meditation" className="card-image" />
          <div className="card-content">
            <h2>8. Zen Meditation</h2>
            <p>Practice sitting meditation to cultivate mindfulness and inner peace.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationsPage;
