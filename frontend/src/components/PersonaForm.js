import React, { useState } from 'react';

const PersonaForm = ({ onSubmit }) => {
  const [persona, setPersona] = useState({
    name: '',
    traits: '',
    preferences: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(persona);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={persona.name} 
        onChange={handleChange} 
        placeholder="Persona Name" 
      />
      <input 
        type="text" 
        name="traits" 
        value={persona.traits} 
        onChange={handleChange} 
        placeholder="Traits" 
      />
      <input 
        type="text" 
        name="preferences" 
        value={persona.preferences} 
        onChange={handleChange} 
        placeholder="Preferences" 
      />
      <button type="submit">Save Persona</button>
    </form>
  );
};

export default PersonaForm;
