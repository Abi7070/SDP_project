import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './OurServicesPage.css';

const OurServicesPage = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <Carousel 
        showThumbs={false} 
        infiniteLoop 
        useKeyboardArrows 
        autoPlay 
        transitionTime={600}
        className="services-carousel"
      >
        <div className="service-item">
          <h3><Link to="/professional-counseling">Professional Counseling</Link></h3>
          <p>Our licensed therapists provide professional counseling to address various mental health issues.</p>
        </div>
        <div className="service-item">
          <h3><Link to="/one-on-one-therapy-sessions">One-on-one Therapy Sessions</Link></h3>
          <p>Personalized one-on-one therapy sessions tailored to individual needs.</p>
        </div>
        <div className="service-item">
          <h3><Link to="/group-therapy">Group Therapy</Link></h3>
          <p>Engage in group therapy to share and learn from others with similar experiences.</p>
        </div>
        <div className="service-item">
          <h3><Link to="/family-therapy">Family Therapy</Link></h3>
          <p>Improve family dynamics and relationships through professional family therapy.</p>
        </div>
      </Carousel>
    </div>
  );
};

export default OurServicesPage;
