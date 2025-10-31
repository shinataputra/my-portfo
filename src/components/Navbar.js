import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <a className="brand" href="/">Bro's Portfolio</a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)} className="btn">Contact</a>
        </nav>
      </div>
    </header>
  );
}
