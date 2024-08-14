// src/pages/MoodTracking.js
import React from 'react';
import './MoodTracking.css';

const MoodTracking = () => {
  return (
    <div className="service-page">
      <h1>Mood Tracking and Analysis</h1>
      <section className="intro">
        <p>Our mood tracking tools help you monitor and analyze your emotional patterns over time. By tracking your mood daily, you can gain insights into triggers and trends, which can be useful for managing mental health.</p>
        <p>We offer easy-to-use apps and journals to log your mood, along with resources and support to help you interpret your data and make informed decisions about your mental health.</p>
      </section>

      <section className="resource-section apps">
        <h2>Mood Tracking Apps</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/mood-tracking-app1.jpg" alt="Mood Tracking App 1" />
            <h3>Mood Tracker Pro</h3>
            <p>A comprehensive app to track your mood and get detailed analytics.</p>
          </div>
          <div className="card">
            <img src="/images/mood-tracking-app2.jpg" alt="Mood Tracking App 2" />
            <h3>Daily Mood Journal</h3>
            <p>Log your mood daily with this easy-to-use journaling app.</p>
          </div>
          <div className="card">
            <img src="/images/mood-tracking-app3.jpg" alt="Mood Tracking App 3" />
            <h3>Mood Analyzer</h3>
            <p>Analyze your mood patterns and get insights on triggers and trends.</p>
          </div>
        </div>
      </section>

      <section className="resource-section tools">
        <h2>Interactive Tools</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/mood-tracker-tool1.jpg" alt="Mood Tracker Tool 1" />
            <h3>Mood Graphs</h3>
            <p>Visualize your mood patterns with interactive graphs and charts.</p>
          </div>
          <div className="card">
            <img src="/images/mood-tracker-tool2.jpg" alt="Mood Tracker Tool 2" />
            <h3>Emotion Analyzer</h3>
            <p>Analyze your emotions and understand the underlying causes.</p>
          </div>
          <div className="card">
            <img src="/images/mood-tracker-tool3.jpg" alt="Mood Tracker Tool 3" />
            <h3>Mood Calendar</h3>
            <p>Track your daily mood on a calendar and see long-term trends.</p>
          </div>
        </div>
      </section>

      <section className="resource-section tips">
        <h2>Tips and Resources</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/mood-tracking-tips1.jpg" alt="Mood Tracking Tips 1" />
            <h3>How to Keep a Mood Journal</h3>
            <p>Learn how to effectively keep a mood journal for better insights.</p>
          </div>
          <div className="card">
            <img src="/images/mood-tracking-tips2.jpg" alt="Mood Tracking Tips 2" />
            <h3>Understanding Mood Patterns</h3>
            <p>Gain a deeper understanding of your mood patterns and triggers.</p>
          </div>
          <div className="card">
            <img src="/images/mood-tracking-tips3.jpg" alt="Mood Tracking Tips 3" />
            <h3>Resources for Mood Tracking</h3>
            <p>Find additional resources to help you track and manage your mood.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoodTracking;
