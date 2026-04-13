import "./App.css";

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>My Blog</h1>
      <nav style={styles.nav}>
        <a href="#">Home</a>
        <a href="#">Posts</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}

function PostCard({ title, desc }) {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <button style={styles.button}>Read More</button>
    </div>
  );
}

function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <h3>Categories</h3>
      <ul>
        <li>React</li>
        <li>Django</li>
        <li>Python</li>
        <li>AI</li>
      </ul>
    </aside>
  );
}

function App() {
  return (
    <div>
      <Header />

      <div style={styles.container}>
        <main style={styles.main}>
          <PostCard
            title="Learning React Basics"
            desc="React is a JavaScript library for building user interfaces."
          />

          <PostCard
            title="Django for Backend"
            desc="Django helps you build powerful backend systems quickly."
          />

          <PostCard
            title="AI Future"
            desc="Artificial Intelligence is changing the world fast."
          />
        </main>

        <Sidebar />
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  container: {
    display: "flex",
    padding: "20px",
    gap: "20px",
  },
  main: {
    flex: 3,
  },
  sidebar: {
    flex: 1,
    padding: "15px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
  },
  button: {
    padding: "8px 12px",
    marginTop: "10px",
    cursor: "pointer",
  },
};

export default App;
