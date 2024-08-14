import React, { useState } from 'react';
import './FormPage.css'; // Import any CSS for the form

const FormPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [problems, setProblems] = useState('');
  const [psychiatricMedications, setPsychiatricMedications] = useState('');
  const [allergies, setAllergies] = useState('');
  const [smoking, setSmoking] = useState(false);
  const [alcoholic, setAlcoholic] = useState(false);
  const [inRelationship, setInRelationship] = useState(false);
  const [itWorker, setItWorker] = useState(false);
  const [suicidalThoughts, setSuicidalThoughts] = useState(false); // New state for suicidal thoughts
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      name, phone, age, address, dateOfBirth, gender, maritalStatus, height, weight, hobbies, problems, psychiatricMedications, allergies, smoking, alcoholic, inRelationship, itWorker, suicidalThoughts, message
    });
    setName('');
    setPhone('');
    setAge('');
    setAddress('');
    setDateOfBirth('');
    setGender('');
    setMaritalStatus('');
    setHeight('');
    setWeight('');
    setHobbies('');
    setProblems('');
    setPsychiatricMedications('');
    setAllergies('');
    setSmoking(false);
    setAlcoholic(false);
    setInRelationship(false);
    setItWorker(false);
    setSuicidalThoughts(false);
    setMessage('');
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h1>Form Page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
          <label>
            Phone Number:
            <input 
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
          </label>
          <label>
            Age:
            <input 
              type="number" 
              value={age}
              onChange={(e) => setAge(e.target.value)} 
              required 
            />
          </label>
          <label>
            Address:
            <input 
              type="text" 
              value={address}
              onChange={(e) => setAddress(e.target.value)} 
              required 
            />
          </label>
          <label>
            Date of Birth:
            <input 
              type="date" 
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)} 
              required 
            />
          </label>
          <label>
            Gender:
            <select 
              value={gender}
              onChange={(e) => setGender(e.target.value)} 
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            Marital Status:
            <select 
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)} 
              required
            >
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </label>
          <label>
            Height (cm):
            <input 
              type="number" 
              value={height}
              onChange={(e) => setHeight(e.target.value)} 
              required 
            />
          </label>
          <label>
            Weight (kg):
            <input 
              type="number" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)} 
              required 
            />
          </label>
          <label>
            Hobbies:
            <input 
              type="text" 
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)} 
              required 
            />
          </label>
          <label>
            Problems:
            <textarea 
              value={problems}
              onChange={(e) => setProblems(e.target.value)} 
              required 
            />
          </label>
          <label>
            Psychiatric Medications:
            <textarea 
              value={psychiatricMedications}
              onChange={(e) => setPsychiatricMedications(e.target.value)} 
              required 
            />
          </label>
          <label>
            Smoking:
            <select 
              value={smoking ? 'yes' : 'no'} 
              onChange={(e) => setSmoking(e.target.value === 'yes')} 
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <label>
            Are you an alcoholic?
            <select 
              value={alcoholic ? 'yes' : 'no'} 
              onChange={(e) => setAlcoholic(e.target.value === 'yes')} 
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <label>
            Are you an IT worker?
            <select 
              value={itWorker ? 'yes' : 'no'} 
              onChange={(e) => setItWorker(e.target.value === 'yes')} 
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <label>
            Suicidal Thoughts:
            <select 
              value={suicidalThoughts ? 'yes' : 'no'} 
              onChange={(e) => setSuicidalThoughts(e.target.value === 'yes')} 
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
