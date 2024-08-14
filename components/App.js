import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages
import HomePage from './components/HomePage';
import OptionsPage from './components/OptionsPage';
import ITWorkStressPage from './components/ITWorkStressPage'; // Ensure this file exists
import FinancialStressPage from './components/FinancialStressPage';
import RelationshipStressPage from './components/RelationshipStressPage';
import HealthStressPage from './components/HealthStressPage';
import ExercisesPage from './components/ExercisesPage';
import MeditationsPage from './components/MeditationsPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import DescriptionPage from './components/DescriptionPage';
import FormPage from './components/FormPage';
import AboutPage from './components/AboutPage';
import ReviewsPage from './components/ReviewsPage';
import UserProfile from './components/UserProfile';
import ActivityPage from './components/ActivityPage';
import ContactUsPage from './components/ContactUsPage';
import AdminPage from './components/AdminPage'; // Ensure this file exists
import DashboardPage from './components/DashboardPage';
import AppointmentsPage from './components/AppointmentsPage';
import TherapistsPage from './components/TherapistsPage';
import ProfessionalCounseling from './components/ProfessionalCounseling';
import StressManagement from './components/StressManagement';
import MoodTracking from './components/MoodTracking';
import SupportGroups from './components/SupportGroups';
import EducationalResources from './components/EducationalResources';

// Import CSS
import './App.css';
import ITWorkStressPage from './ITWorkStressPage';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/description" element={<DescriptionPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/options" element={<OptionsPage />} />
          <Route path="/remedy/it-worker" element={<ITWorkStressPage />} />
          <Route path="/remedy/financial" element={<FinancialStressPage />} />
          <Route path="/remedy/relationship" element={<RelationshipStressPage />} />
          <Route path="/remedy/health" element={<HealthStressPage />} />
          <Route path="/remedy/exercises" element={<ExercisesPage />} />
          <Route path="/remedy/meditations" element={<MeditationsPage />} />
          <Route path="/professional-counseling" element={<ProfessionalCounseling />} />
          <Route path="/stress-management" element={<StressManagement />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/mood-tracking" element={<MoodTracking />} /> 
          <Route path="/support-groups" element={<SupportGroups />} />
          <Route path="/educational-resources" element={<EducationalResources />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/appointments" element={<AppointmentsPage />} />
          <Route path="/admin/therapists" element={<TherapistsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
