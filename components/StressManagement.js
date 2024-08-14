import React from 'react';
import './StressManagement.css';

const StressManagement = () => {
  return (
    <div className="service-page">
      <h1>Effective Stress Management Techniques</h1>
      <p>Learn and practice techniques to manage stress effectively. Our stress management programs include workshops and one-on-one sessions focused on relaxation exercises, mindfulness, and coping strategies.</p>
      <p>Discover methods such as deep breathing, progressive muscle relaxation, and guided imagery to help reduce stress and enhance your overall well-being.</p>
      
      <div className="card-container">
        <div className="card">
          <img src="https://img.freepik.com/premium-photo/portrait-sporty-woman-doing-exercises-home_221404-1295.jpg?ga=GA1.1.818974254.1722408833&semt=ais_hybrid" alt="Deep Breathing" />
          <div className="card-content">
            <h3>Deep Breathing Exercises</h3>
            <p>Simple yet effective exercises to calm your mind and body.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4HZEAQ-rLLOJP0xWPbqCYDVuX8BQR3j-wQ&s"/>
          <div className="card-content">
            <h3>Progressive Muscle Relaxation</h3>
            <p>Techniques to reduce muscle tension and stress.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://img.freepik.com/free-photo/woman-practicing-advanced-yoga-by-water_1157-37118.jpg?ga=GA1.1.818974254.1722408833&semt=ais_hybrid" alt="Yoga" />
          <div className="card-content">
            <h3>Yoga</h3>
            <p>Combining physical postures, breathing exercises, and meditation.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://img.freepik.com/free-photo/young-men-working-overtime-office_1112-1095.jpg?ga=GA1.1.818974254.1722408833&semt=ais_hybrid" alt="Time Management" />
          <div className="card-content">
            <h3>Time Management</h3>
            <p>Strategies to manage your time effectively and reduce stress.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://img.freepik.com/free-photo/clipboard-fitness-elements_23-2147692042.jpg?ga=GA1.1.818974254.1722408833&semt=ais_hybrid" alt="Healthy Lifestyle" />
          <div className="card-content">
            <h3>Healthy Lifestyle</h3>
            <p>Tips on maintaining a healthy lifestyle to keep stress at bay.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRND0gPhjCycwcbynXF3Bv0c7hf7qcMxI6AMg&s" alt="Support Systems" />
          <div className="card-content">
            <h3>Support Systems</h3>
            <p>The importance of having a strong support system in place.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StressManagement;
