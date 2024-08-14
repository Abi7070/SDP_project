import React from 'react';
import { Link } from 'react-router-dom';
import './DescriptionPage.css'; // Import the CSS file

const DescriptionPage = () => {
  return (
    <div className="description-container">
      <div className="content">
        <div className="section animate-fade-in">
          <h1>Why Mental Health is Important</h1>
          <p>
            Mental health includes our emotional, psychological, and social well-being. 
            It affects how we think, feel, and act. It also helps determine how we handle 
            stress, relate to others, and make choices. Mental health is important at every 
            stage of life, from childhood and adolescence through adulthood.
          </p>
        </div>
        <div className="section animate-fade-in">
          <h2>Impact of Mental Health Problems</h2>
          <p>
            Over the course of your life, if you experience mental health problems, your 
            thinking, mood, and behavior could be affected. Many factors contribute to 
            mental health problems, including:
          </p>
          <ul>
            <li>Biological factors, such as genes or brain chemistry</li>
            <li>Life experiences, such as trauma or abuse</li>
            <li>Family history of mental health problems</li>
          </ul>
        </div>
        <div className="quotation-box animate-slide-in">
          <blockquote>
            “Mental health is not just the absence of mental illness. It’s not just the absence of pain. It’s emotional, physical, and social well-being.” 
            <span>– Meghan McCain</span>
          </blockquote>
        </div>

        
      </div>
    </div>
  );
};

export default DescriptionPage;
