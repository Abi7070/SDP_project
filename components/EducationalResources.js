// src/pages/EducationalResources.js
import React from 'react';
import './EducationalResources.css';

const EducationalResources = () => {
  return (
    <div className="service-page">
      <h1>Educational Resources on Mental Health</h1>

      <section className="intro">
        <p>
          Our Educational Resources page provides a comprehensive collection of materials designed to support and enhance your understanding of mental health. Whether you're looking for in-depth articles, informative videos, or interactive tools, we have resources to help you stay informed and proactive in managing your mental well-being.
        </p>
      </section>

      <section className="resource-section articles">
        <h2>Articles</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/anxiety-management.jpg" alt="Anxiety Management" />
            <h3>Anxiety Management</h3>
            <p>Strategies to cope with anxiety and improve mental resilience.</p>
          </div>
          <div className="card">
            <img src="/images/understanding-depression.jpg" alt="Understanding Depression" />
            <h3>Understanding Depression</h3>
            <p>Signs, symptoms, and treatment options for depression.</p>
          </div>
          <div className="card">
            <img src="/images/stress-reduction.jpg" alt="Stress Reduction Techniques" />
            <h3>Stress Reduction Techniques</h3>
            <p>Practical tips for managing daily stress and achieving balance.</p>
          </div>
          <div className="card">
            <img src="/images/mindfulness-practices.jpg" alt="Mindfulness Practices" />
            <h3>Mindfulness Practices</h3>
            <p>Techniques to cultivate mindfulness and enhance well-being.</p>
          </div>
        </div>
      </section>

      <section className="resource-section videos">
        <h2>Images</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/webinars.jpg" alt="Webinars on Stress Management" />
            <h3>Webinars on Stress Management</h3>
            <p>Live and recorded sessions with mental health professionals.</p>
          </div>
          <div className="card">
            <img src="/images/guided-meditations.jpg" alt="Guided Meditations" />
            <h3>Guided Meditations</h3>
            <p>Audio and video guides to help you practice mindfulness and relaxation.</p>
          </div>
          <div className="card">
            <img src="/images/expert-talks.jpg" alt="Expert Talks" />
            <h3>Expert Talks</h3>
            <p>Interviews with experts discussing various mental health topics.</p>
          </div>
        </div>
      </section>

      <section className="resource-section interactive-tools">
        <h2>Interactive Tools</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/mood-tracker.jpg" alt="Mood Tracker" />
            <h3>Mood Tracker</h3>
            <p>A tool to record and analyze your mood patterns over time.</p>
          </div>
          <div className="card">
            <img src="/images/stress-assessment.jpg" alt="Stress Assessment" />
            <h3>Stress Assessment</h3>
            <p>An interactive questionnaire to evaluate your stress levels and coping strategies.</p>
          </div>
          <div className="card">
            <img src="/images/self-care-planner.jpg" alt="Self-Care Planner" />
            <h3>Self-Care Planner</h3>
            <p>A tool to help you create and track your self-care routines.</p>
          </div>
        </div>
      </section>

      <section className="resource-section further-reading">
        <h2>Further Reading</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/anxiety-phobia-workbook.jpg" alt="The Anxiety and Phobia Workbook" />
            <h3>"The Anxiety and Phobia Workbook" by Edmund J. Bourne</h3>
            <p>A comprehensive guide to understanding and managing anxiety.</p>
          </div>
          <div className="card">
            <img src="/images/feeling-good.jpg" alt="Feeling Good: The New Mood Therapy" />
            <h3>"Feeling Good: The New Mood Therapy" by David D. Burns</h3>
            <p>Techniques for overcoming depression and improving mood.</p>
          </div>
          <div className="card">
            <img src="/images/mindfulness-solution.jpg" alt="The Mindfulness Solution" />
            <h3>"The Mindfulness Solution" by Ronald D. Siegel</h3>
            <p>Practical mindfulness strategies for everyday life.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationalResources;
