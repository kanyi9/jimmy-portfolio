// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">Welcome to My Portfolio</div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

// import React from "react";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <span className="typing">Welcome to My Portfolio</span>
//       </div>
//       <ul>
//         <li>Home</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="typing">Welcome to My Portfolio</span>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <a 
            href="https://instagram.com/jimmy_ngare"  // <-- replace with model's Instagram
            target="_blank" 
            rel="noopener noreferrer" 
            className="instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.33 3.608 1.304.975.974 1.242 2.241 1.304 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.33 2.633-1.304 3.608-.974.975-2.241 1.242-3.608 1.304-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.33-3.608-1.304-.975-.974-1.242-2.241-1.304-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.33-2.633 1.304-3.608.974-.975 2.241-1.242 3.608-1.304C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.548.395 3.515 1.428c-1.034 1.034-1.298 2.261-1.357 3.538C2.013 6.668 2 7.077 2 12c0 4.923.013 5.332.072 6.612.059 1.277.323 2.504 1.357 3.538 1.034 1.034 2.261 1.298 3.538 1.357 1.28.059 1.689.072 6.612.072s5.332-.013 6.612-.072c1.277-.059 2.504-.323 3.538-1.357 1.034-1.034 1.298-2.261 1.357-3.538.059-1.28.072-1.689.072-6.612s-.013-5.332-.072-6.612c-.059-1.277-.323-2.504-1.357-3.538-1.034-1.034-2.261-1.298-3.538-1.357C17.332.013 16.923 0 12 0z"/>
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM18.406 4.594a1.44 1.44 0 1 0 0 2.879 1.44 1.44 0 0 0 0-2.879z"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

