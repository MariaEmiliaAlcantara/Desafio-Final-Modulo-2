import "./Header.css";

const Header = ({ children }) => {
  return (
    <header className="headerWrapper">
      <h1>Eleições</h1>
      <div className="filter">{children}</div>
    </header>
  );
};

export default Header;
