import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
        <img src="/images/profile-picture.jpg" alt="Profile" className="profile-picture" />
      </div>
      <div className="profile-details">
        <h2>Abirami S</h2>
        <p>abiramiselvaraj7070@gmail.com</p>
        <p>Member since: January 2023</p>
        <p>Interests: Yoga, Meditation, Running</p>
      </div>
      <div className="profile-links">
        <h3>Resources</h3>
        <ul>
          <li><a href="/remedy/exercises">Exercises for Stress Relief</a></li>
          <li><a href="/remedy/meditations">Meditation Techniques</a></li>
          <li><a href="/professional-counseling">Find a Therapist</a></li>
        </ul>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
