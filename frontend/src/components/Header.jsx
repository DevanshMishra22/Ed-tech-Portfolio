import "../styles/Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className="navigationbar">
          <div className="logo">Education</div>
          <a href="/">Home</a>
          <a href="#about">About Us</a>
          <a href="#support">Support</a>
          <a href="#Blog">Blog</a>

          <a href="#subscribe">
            {" "}
            <button className="btn" id="subs">
              Subscribe
            </button>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
