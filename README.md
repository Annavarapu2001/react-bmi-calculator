 ### What is useState in React?

 
useState is a React Hook that lets you add state variables to functional components.

Before hooks, only class components could hold state. Now, with useState, any functional component can hold and manage data that changes over time (like form inputs, counters, toggles, etc.).

##Syntax
js
Copy
Edit
const [state, setState] = useState(initialValue);
state — the current value

setState — function to update the value

initialValue — the starting value (can be a number, string, boolean, object, etc.)

### Example 1: Counter
jsx
Copy
Edit
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial value is 0

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
Each time the button is clicked, count increases by 1 and the UI updates automatically.

 ## Example 2: Input Field (Controlled Component)
jsx
Copy
Edit
function NameInput() {
  const [name, setName] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
This binds the input field value to the state variable name.

##  Example 3: Multiple Fields (with one object)
jsx
Copy
Edit
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <p>{formData.name} - {formData.email}</p>
    </form>
  );
}

## When to Use useState?
Use useState when:

You need to store input values

You want to track clicks, toggles, or dynamic values

You need component-local state (not shared globally)

## Real Example: BMI Calculator using useState
jsx
Copy
Edit
function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
  };

  return (
    <form onSubmit={calculateBMI}>
      <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight (kg)" />
      <input value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height (cm)" />
      <button type="submit">Calculate</button>
      {bmi && <p>Your BMI is {bmi}</p>}
    </form>
  );
}
