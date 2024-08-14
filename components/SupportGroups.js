// src/pages/SupportGroups.js
import React from 'react';
import './SupportGroups.css';

const SupportGroups = () => {
  return (
    <div className="service-page">
      <h1>Support Groups and Community Connections</h1>
      <section className="intro">
        <p>
          Join our support groups to connect with others who share similar experiences and challenges. Our groups provide a safe and supportive environment for sharing, learning, and growing together.
        </p>
        <p>
          Participation in support groups can help you feel less isolated and provide you with valuable peer support and advice from individuals who understand what you're going through.
        </p>
      </section>

      <section className="resource-section types-of-groups">
        <h2>Types of Support Groups</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/anxiety-support-group.jpg" alt="Anxiety Support Group" />
            <h3>Anxiety Support Group</h3>
            <p>Connect with others who are managing anxiety and share coping strategies.</p>
          </div>
          <div className="card">
            <img src="/images/depression-support-group.jpg" alt="Depression Support Group" />
            <h3>Depression Support Group</h3>
            <p>Join a community of individuals who are navigating through depression.</p>
          </div>
          <div className="card">
            <img src="/images/stress-management-group.jpg" alt="Stress Management Group" />
            <h3>Stress Management Group</h3>
            <p>Learn effective techniques for managing stress in a supportive setting.</p>
          </div>
        </div>
      </section>

      <section className="resource-section upcoming-events">
        <h2>Upcoming Group Events</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/support-group-event1.jpg" alt="Support Group Event 1" />
            <h3>Monthly Anxiety Group Meeting</h3>
            <p>Date: August 20, 2024 | Time: 6:00 PM</p>
            <p>Location: Wellness Center</p>
          </div>
          <div className="card">
            <img src="/images/support-group-event2.jpg" alt="Support Group Event 2" />
            <h3>Stress Management Workshop</h3>
            <p>Date: August 25, 2024 | Time: 3:00 PM</p>
            <p>Location: Online Webinar</p>
          </div>
          <div className="card">
            <img src="/images/support-group-event3.jpg" alt="Support Group Event 3" />
            <h3>Depression Support Meetup</h3>
            <p>Date: September 1, 2024 | Time: 5:00 PM</p>
            <p>Location: Wellness Center</p>
          </div>
        </div>
      </section>

      <section className="resource-section testimonials">
        <h2>Member Testimonials</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/testimonial1.jpg" alt="Member Testimonial 1" />
            <h3>Jane's Story</h3>
            <p>"Joining the anxiety support group changed my life. I've learned so much from others' experiences."</p>
          </div>
          <div className="card">
            <img src="/images/testimonial2.jpg" alt="Member Testimonial 2" />
            <h3>John's Story</h3>
            <p>"The depression group gave me hope when I felt completely alone."</p>
          </div>
          <div className="card">
            <img src="/images/testimonial3.jpg" alt="Member Testimonial 3" />
            <h3>Sarah's Story</h3>
            <p>"The stress management techniques I've learned have been incredibly helpful."</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportGroups;
