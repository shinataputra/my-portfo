export default function Projects() {
  const data = [
    { name: "GUMEL APP", desc: "Aplikasi manajemen nilai guru", link: "#" },
    { name: "AI Generate Text", desc: "Aplikasi AI berbasis PHP MVC", link: "#" },
    { name: "Kurikulum App", desc: "Sistem manajemen kurikulum sekolah", link: "#" },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>🧱 Proyek Saya</h2>
      <div className="projects-grid">
        {data.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} className="project-link">Lihat Detail →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
