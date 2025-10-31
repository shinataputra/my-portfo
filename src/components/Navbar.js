export default function Navbar() {
  return (
    <nav>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
        <h1>Bro’s Portfolio</h1>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}