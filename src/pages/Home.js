import React from "react";
import Stats from "../components/Stats";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="header-section">
        <h1 className="model-name">James Ngare Mureithi</h1>
        <p className="model-title">Fashion Model</p>
        <p className="model-location">Nairobi, Kenya</p>
      </header>

      <section className="stats-section">
        <Stats />
      </section>

      <section className="gallery-section">
        <h2>Portfolio</h2>
        <div className="gallery-grid">
          <img src="/images/1.jpg" alt="Portfolio 1" />
          <img src="/images/2.jpg" alt="Portfolio 2" />
          <img src="/images/3.jpg" alt="Portfolio 3" />
          <img src="/images/4.jpg" alt="Portfolio 4" />
          <img src="/images/5.jpg" alt="Portfolio 5" />
          <img src="/images/6.jpg" alt="Portfolio 6" />
          <img src="/images/7.jpg" alt="Portfolio 7" />
          <img src="/images/8.jpg" alt="Portfolio 8" />
          <img src="/images/9.jpg" alt="Portfolio 9" />
          <img src="/images/10.jpg" alt="Portfolio 10" />
          <img src="/images/11.jpg" alt="Portfolio 11" />
          <img src="/images/12.jpg" alt="Portfolio 12" />
          <img src="/images/13.jpg" alt="Portfolio 13" />
          <img src="/images/14.jpg" alt="Portfolio 14" />
          <img src="/images/15.jpg" alt="Portfolio 15" />
          <img src="/images/16.jpg" alt="Portfolio 16" />
          <img src="/images/17.jpg" alt="Portfolio 17" />
          <img src="/images/18.jpg" alt="Portfolio 18" />
          <img src="/images/19.jpg" alt="Portfolio 19" />
        </div>
      </section>
    </div>
  );
}

export default Home;
