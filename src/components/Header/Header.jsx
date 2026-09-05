import "./Header.css";

function Header() {
  return (
    <header className="header" aria-label="Application header">
      <div className="header__inner">
        <h1>PDF Merger</h1>
        <p>Combine multiple PDF files into one document.</p>
      </div>
    </header>
  );
}

export default Header;
