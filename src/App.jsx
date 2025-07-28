import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">My Website</div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {menuOpen && (
          <div className="dropdown-menu">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
        )}
      </header>

      <main className="content">
        <h1>Welcome to My Responsive Website</h1>
        <p>This design adopts various screen designs</p>
      </main>

      <footer className="footer">
        © 2025 GreenLeaf Technologies Pvt. Ltd. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
