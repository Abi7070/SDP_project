import { Link } from 'react-router-dom';
import './OptionsPage.css'; // Import CSS for styling

const OptionsPage = () => {
  return (
    <div className="options-container">
      <h1>Select the Cause of Your Stress</h1>
      <div className="options-list">
        <Link to="/remedy/it-worker">IT Work Stress</Link>
        <Link to="/remedy/financial">Financial Stress</Link>
        <Link to="/remedy/relationship">Relationship Stress</Link>
        <Link to="/remedy/health">Health Stress</Link>
        <Link to="/remedy/exercises">Exercises</Link>
        <Link to="/remedy/meditations">Meditations</Link>
      </div>
    </div>
  );
};

export default OptionsPage;

