// src/components/Form.js
import React, { useState } from "react";
import { API_URL } from "../services/api";

function Form() {
  const [heartRate, setHeartRate] = useState("");
  const [spo2, setSpo2] = useState("");
  const [age, setAge] = useState("");
  const [risk, setRisk] = useState("");

  const handlePredict = async () => {
    if (!heartRate || !spo2 || !age) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heart_rate: Number(heartRate),
          spo2: Number(spo2),
          age: Number(age),
        }),
      });
      const data = await res.json();
      setRisk(data.risk_level);
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend!");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Heart Rate"
        value={heartRate}
        onChange={(e) => setHeartRate(e.target.value)}
      />
      <br /><br />
      <input
        type="number"
        placeholder="SpO₂"
        value={spo2}
        onChange={(e) => setSpo2(e.target.value)}
      />
      <br /><br />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br />
      <button onClick={handlePredict}>Predict</button>
      <h2>Risk Level: {risk}</h2>
    </div>
  );
}

export default Form;