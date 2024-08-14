import React from 'react';
import './ProfessionalCounseling.css';

const ProfessionalCounseling = () => {
  return (
    <div className="professional-counseling-page">
      <h1>Professional Counseling and Therapy</h1>
      <p>
        Our licensed therapists and counselors offer professional support tailored to your individual needs. Whether you’re facing personal challenges or seeking guidance for mental health concerns, our team is here to help.
      </p>
      <p>
        We provide a range of services including individual therapy, couples therapy, and group counseling. Our approach is personalized, ensuring that each session addresses your specific goals and concerns.
      </p>
      <p>
        <strong>Services Include:</strong>
      </p>

      <div className="card-container">
        <div className="card">
          <img src="https://media.istockphoto.com/id/1400319344/photo/mid-adult-female-manager-interviews-unrecognizable-woman-for-job.jpg?s=612x612&w=0&k=20&c=KAl86n_S5K3Siz7IVBVQp8SpPIJPVgkblwYcOnO5CT0=" alt="One-on-one therapy" />
          <div className="card-content">
            <h3>One-on-one Therapy Sessions</h3>
            <p>Personalized therapy sessions to address your specific mental health needs.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://media.istockphoto.com/id/1406775078/photo/young-couple-having-marriage-counseling-with-their-therapist-in-the-office.jpg?s=612x612&w=0&k=20&c=n6OwGqlM-29xS_op2VpAaqE7toimHobmx67ZIjFjsO4=" alt="Couples counseling" />
          <div className="card-content">
            <h3>Couples Counseling</h3>
            <p>Helping couples strengthen their relationships and resolve conflicts.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgyY92AFSSAjgrdUFV5u2FqF567KudKFV9w&s" alt="Family therapy" />
          <div className="card-content">
            <h3>Family Therapy</h3>
            <p>Working with families to improve communication and relationships.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://plus.unsplash.com/premium_photo-1661420065219-0aacd19525e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VwcG9ydCUyMHNlcnZpY2VzfGVufDB8fDB8fHww" alt="Specialized support" />
          <div className="card-content">
            <h3>Specialized Support</h3>
            <p>Support for various mental health issues tailored to your unique situation.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaThOZR3sEB71dZqNnqF61bexvQAgrdut5gQ&s" alt="Group therapy" />
          <div className="card-content">
            <h3>Group Therapy</h3>
            <p>Facilitated group sessions to share experiences and gain support from peers.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sz7MCZyk9CdbKBLSFlpx3IoQzLS0PH0xuA&s" alt="Online therapy" />
          <div className="card-content">
            <h3>Online Therapy</h3>
            <p>Convenient online sessions to support your mental health from anywhere.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkaUZOBaH206-KoPC78bG0V49SwWMYeeftHw&s" alt="Stress management" />
          <div className="card-content">
            <h3>Stress Management Techniques</h3>
            <p>Learn effective strategies to manage and reduce stress in your life.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.squarespace-cdn.com/content/v1/5f133f9f1f4b2a1a167b24e5/1daa8878-2304-4585-ab18-52d29d17a29e/Work-Life-Balance-Counseling-Missouri" alt="Work-life balance" />
          <div className="card-content">
            <h3>Work-Life Balance Counseling</h3>
            <p>Guidance on balancing professional and personal life effectively.</p>
          </div>
        </div>
      </div>

      <p>
        To learn more or schedule an appointment, <a href="/contact">contact us</a> today. Our team is here to support you on your journey to better mental health.
      </p>
    </div>
  );
};

export default ProfessionalCounseling;
