import "./Header.css";

function Header() {
  return (
    <header className="header" aria-label="Application header">
      <div className="header__inner">
        <p className="header__eyebrow">Combine Docs</p>
        <h1>PDF Merger Workspace</h1>
        <p className="header__subtitle">
          Combine multiple PDF files into one clean output, in the exact order
          you choose.
        </p>
      </div>
    </header>
  );
}

export default Header;
