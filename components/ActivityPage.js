import React from 'react';
import { Link } from 'react-router-dom';
import './ActivityPage.css';

const ActivityPage = () => {
  const activities = [
    { path: "/description", label: "Description", className: "description-card" },
    { path: "/remedy/it-worker", label: "IT Worker Stress", className: "it-worker-card" },
    { path: "/remedy/financial", label: "Financial Stress", className: "financial-card" },
    { path: "/remedy/relationship", label: "Relationship Stress", className: "relationship-card" },
    { path: "/remedy/health", label: "Health Stress", className: "health-card" },
    { path: "/remedy/exercises", label: "Exercises", className: "exercises-card" },
    { path: "/remedy/meditations", label: "Meditations", className: "meditations-card" },
    { path: "/reviews", label: "Patient Reviews", className: "reviews-card" }
  ];

  return (
    <div className="activity-page-alt">
      <div className="header-container-alt">
        <h1>WELLNESS</h1>
      </div>
      <div className="content-container-alt">
        <div className="card-container-alt">
          {activities.map((activity, index) => (
            <div className="activity-card-container" key={index}>
              <Link to={activity.path} className={`activity-card-alt ${activity.className}`}>
                <h3>{activity.label}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
