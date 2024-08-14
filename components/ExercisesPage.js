import React from 'react';
import './ExercisesPage.css';

const ExercisesPage = () => {
  return (
    <div className="remedy-container">
      <header className="header-section">
        <h1>Exercises for Stress Relief</h1>
        <p>Exercise is a powerful stress reliever. Here are some exercises that can help:</p>
      </header>

      <div className="card-container">
        <div className="card">
          <img src="/images/yoga.jpg" alt="Yoga" className="card-image" />
          <div className="card-content">
            <h2>1. Yoga</h2>
            <p>Yoga combines physical postures, breathing exercises, and meditation to reduce stress.</p>
          </div>
        </div>
        
        <div className="card">
          <img src="/images/walking.jpg" alt="Walking" className="card-image" />
          <div className="card-content">
            <h2>2. Walking</h2>
            <p>A simple walk can help clear your mind and reduce stress.</p>
          </div>
        </div>
        
        <div className="card">
          <img src="/images/strength_training.jpg" alt="Strength Training" className="card-image" />
          <div className="card-content">
            <h2>3. Strength Training</h2>
            <p>Strength training can help improve your mood and reduce anxiety.</p>
          </div>
        </div>
        
        <div className="card">
          <img src="/images/aerobic_exercise.jpg" alt="Aerobic Exercise" className="card-image" />
          <div className="card-content">
            <h2>4. Aerobic Exercise</h2>
            <p>Activities like running, cycling, and swimming can boost your mood and reduce stress.</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/stretching.jpg" alt="Stretching" className="card-image" />
          <div className="card-content">
            <h2>5. Stretching</h2>
            <p>Regular stretching can improve flexibility and reduce muscle tension, helping to relieve stress.</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/meditation.jpg" alt="Meditation" className="card-image" />
          <div className="card-content">
            <h2>6. Meditation</h2>
            <p>Combining meditation with exercise can enhance relaxation and stress relief.</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/dancing.jpg" alt="Dancing" className="card-image" />
          <div className="card-content">
            <h2>7. Dancing</h2>
            <p>Engaging in dancing can be a fun way to relieve stress and boost your mood.</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/relaxation_exercises.jpg" alt="Relaxation Exercises" className="card-image" />
          <div className="card-content">
            <h2>8. Relaxation Exercises</h2>
            <p>Techniques such as progressive muscle relaxation can help reduce stress and promote a sense of calm.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisesPage;
