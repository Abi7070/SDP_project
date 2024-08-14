import React, { useState } from 'react';
import './MoodTrackerPage.css';

const MoodTrackerPage = () => {
  const [mood, setMood] = useState('');
  const [message, setMessage] = useState('');
  const [moodHistory, setMoodHistory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMood = { mood, message, date: new Date().toLocaleString() };
    setMoodHistory([...moodHistory, newMood]);
    setMood('');
    setMessage('');
  };

  const calculateMoodPercentages = () => {
    const totalMoods = moodHistory.length;
    const moodCounts = moodHistory.reduce((acc, entry) => {
      acc[entry.mood] = (acc[entry.mood] || 0) + 1;
      return acc;
    }, {});

    const moodPercentages = Object.keys(moodCounts).map(mood => {
      return {
        mood,
        percentage: ((moodCounts[mood] / totalMoods) * 100).toFixed(2)
      };
    });

    return moodPercentages;
  };

  const moodPercentages = calculateMoodPercentages();

  return (
    <div className="mood-tracker-container">
      <h1>Mood Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select Your Mood:
          <select value={mood} onChange={(e) => setMood(e.target.value)} required>
            <option value="">Select Mood</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="angry">Angry</option>
            <option value="anxious">Anxious</option>
            <option value="excited">Excited</option>
          </select>
        </label>
        <label>
          Message:
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your mood or any specific reason..."
            required
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="mood-percentages">
        <h2>Mood Percentages</h2>
        <ul>
          {moodPercentages.map((entry, index) => (
            <li key={index}>
              <span>{entry.mood}: {entry.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoodTrackerPage;
