import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TherapistsPage.css';

const TherapistsPage = () => {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/therapists');
        setTherapists(response.data);
      } catch (error) {
        console.error('Error fetching therapists:', error);
      }
    };

    fetchTherapists();
  }, []);

  return (
    <div className="therapists-page-container">
      <h1>Meet Our Therapists</h1>
      <div className="therapists-list">
        {therapists.map((therapist, index) => (
          <div key={therapist.id} className="therapist-card">
            <img
              src={therapist.image ? therapist.image : getDefaultImage(index)}
              alt={therapist.name}
              className="therapist-image"
            />
            <div className="therapist-info">
              <h2>{therapist.name}</h2>
              <p><strong>Email:</strong> {therapist.email}</p>
              <p><strong>Specialization:</strong> {therapist.specialization}</p>
              <p><strong>Phone:</strong> {therapist.phone}</p>
              <p className="therapist-description">{therapist.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getDefaultImage = (index) => {
  const images = [
    'https://www.shutterstock.com/image-photo/psychotherapy-consultation-counselor-talking-black-260nw-1997810351.jpg',
    'https://media.istockphoto.com/id/1351342379/photo/cheerful-millennial-lady-sitting-at-desk-and-posing-with-glasses.jpg?s=612x612&w=0&k=20&c=iNPvrUVtIeEVR1NsO5T_XfJqhbFozuKGa48rA2tNMpQ=',
    'https://media.istockphoto.com/id/1058782840/photo/counseling-session.jpg?s=612x612&w=0&k=20&c=JKqQqaiSnu0b8mXwkGMdzh8xX0sx796wSOgMVcUMHfU=',
    'https://media.istockphoto.com/id/639072334/photo/mid-adult-businessman-interviews-potential-employee.jpg?s=612x612&w=0&k=20&c=XG-4c-XhOx3EVejgmoR4v1fmhMxZ0zf_n2vA6qee_T4=',
    'https://media.istockphoto.com/id/1326420590/photo/portrait-of-happy-black-male-psychologist-looking-at-camera-and-taking-notes-during-therapy.jpg?s=612x612&w=0&k=20&c=sQIUcX108sC9tH4CG9Vh4RYjthJ5bJpUFfdcGcdKiM4=',
  ];
  return images[index % images.length];
};

export default TherapistsPage;
