import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    const heightInMeters = height / 100; // convert cm to meters
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px' }}>
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBMI}>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br /><br />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <br /><br />
        <button type="submit">Calculate</button>
      </form>
      {bmi && (
        <p>Your BMI is: <strong>{bmi}</strong></p>
      )}
    </div>
  );
}

export default BMICalculator;
