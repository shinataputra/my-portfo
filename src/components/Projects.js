export default function Projects() {
  const data = [
    { name: "GUMEL APP", desc: "Aplikasi manajemen nilai guru", link: "#" },
    { name: "AI Generate Text", desc: "Aplikasi AI berbasis PHP MVC", link: "#" },
    { name: "Kurikulum App", desc: "Sistem manajemen kurikulum sekolah", link: "#" },
  ];

  return (
    <section id="projects" style={{ background: "#fff" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>🧱 Proyek Saya</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {data.map((p, i) => (
            <div key={i} style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "20px", background: "#fafafa" }}>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <a href={p.link} style={{ color: "gold" }}>Lihat Detail →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}