import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div className="stats-container">
      <div className="stat-item"><strong>Height:</strong> 5'9"</div>
      <div className="stat-item"><strong>Bust:</strong> 32"</div>
      <div className="stat-item"><strong>Waist:</strong> 24"</div>
      <div className="stat-item"><strong>Hips:</strong> 34"</div>
      <div className="stat-item"><strong>Shoe:</strong> 8</div>
      <div className="stat-item"><strong>Hair:</strong> Black</div>
      <div className="stat-item"><strong>Eyes:</strong> Brown</div>
    </div>
  );
}

export default Stats;
