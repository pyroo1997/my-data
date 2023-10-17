import "./header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <h1>Praroop</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Conatact</a>
          <button>Login</button>
        </nav>
      </header>
    </>
  );
}
