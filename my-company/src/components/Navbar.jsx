import { Links } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'purple', color: 'white', padding: '10px' }}>
      <h2>My Company</h2>
      <ul style={{ listStyle: 'none', textAlign: 'center', display: 'flex', gap: '20px' }}>
        <li><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
        <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a></li>
        <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
}


export default Navbar;