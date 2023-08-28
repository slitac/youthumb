import React, { useState } from 'react';

export default function Home() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState(null);

  const calculateExactAge = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    const months = monthDiff < 0 ? 12 + monthDiff : monthDiff;
    const days = dayDiff < 0 ? new Date(today.getFullYear(), today.getMonth(), 0).getDate() + dayDiff : dayDiff;

    return {
      years: age,
      months: months,
      days: days,
    };
  };

  const handleSubmit = () => {
    if (day && month && year) {
      const exactAge = calculateExactAge(day, month, year);
      setAge(exactAge);
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <div className="container">
      <h1>Age Calculator</h1>
      <p>
      Exacte Age Calculator accurately calculates your exact age and gives the answer of How old are you ?
      </p>
      
      <div className="ageCalculatorBox">
      <h2>Enter your birth date to calculate your exact age.</h2>
      <div className="dateInputs">
          <select 
              value={day}
              onChange={(e) => setDay(e.target.value)}
          >
              <option value="">Day</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
              ))}
          </select>

          <select 
              value={month}
              onChange={(e) => setMonth(e.target.value)}
          >
              <option value="">Month</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <option key={m} value={m}>{m}</option>
              ))}
          </select>

          <input 
              placeholder="YYYY"
              maxLength="4"
              value={year}
              onChange={(e) => setYear(e.target.value)}
          />
          </div>
          </div>
      </div>

      <button className="btn-blue"
       onClick={handleSubmit}>Calculate Age</button>
      {age && (
        <h2>
          You are {age.years} years, {age.months} months, and {age.days} days old.
        </h2>
      )}
      <div className="home-container">
      <div className="content">
    
      <h1>Why Do You Need the Exact Age Calculator?</h1>
      <p>In our digital age, there are countless reasons one might need to know their exact age:</p>
      <ul>
        <li>Precise age requirement submissions for online forms or applications</li>
        <li>Personal curiosity to know your age down to the day</li>
        <li>Fun comparisons among friends and family members</li>
      </ul>
      <p>Whatever the reason, our Age Calculator provides an accurate and fast solution.</p>

      <h1>How Does Our Age Calculator Work?</h1>
      <p>To provide the most accurate results, our calculator considers not just the year but the exact day and month of your birth. It even accounts for those years when February has an extra day!</p>
      <h1>Steps to Calculate Your Exact Age:</h1>
      <ol>
        <li>Visit our Age Calculator platform.</li>
        <li>Select your date of birth using the dropdowns provided.</li>
        <li>Hit the "Calculate Age" button and voila! Your age in years, months, and days will appear instantly.</li>
      </ol>
      <h1>Why Our Age Calculator Stands Out</h1>
      
      <div className="feature">
        <h2>User-Friendly Interface</h2>
        <p>With an intuitive design, our platform is accessible for users of all ages.</p>
      </div>
      <div className="feature">
        <h2>Accurate and Fast</h2>
        <p>Our algorithm ensures that you get the most precise age calculation almost instantly.</p>
      </div>
      <div className="feature">
        <h2>Mobile Optimized</h2>
        <p>Whether you’re on desktop or mobile, our site is optimized for a seamless experience.</p>
      </div>
      

      <h1>Wrapping Up</h1>
      <p>
        In today's fast-paced digital world, having tools that are both efficient and precise is a must. Our Exact Age Calculator is just one such tool, promising a user-friendly experience that gives you accurate results in seconds. So, the next time a friend or a form asks for your exact age, you’ll know where to look!
      </p>
    <style jsx>{`
        p {
          border-bottom: 1px solid #d1d1d1;
          padding-bottom: 15px;
          line-height: 1.5;
          margin-bottom: 15px;
        }

        p:last-child {
          border-bottom: none;
      
        }
        li {
          margin-bottom: 10px;
        }
        ul {
          margin-left: 20px;
          line-height: 1.5;
          margin-bottom: 20px;
          color: #444;
        }
        .feature {
          margin-bottom: 20px;
        
      `}</style>
  </div>
    </div>
</div>
    
  );
  
}

