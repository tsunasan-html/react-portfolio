import { useState, useEffect } from "react";   
import { Link, useLocation } from "react-router-dom";  

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (path) => {
    if (location.pathname === "/" && !isScrolled) {
      return "link-fff";
    }
    const allowedPaths = ["/", "/about", "/works", "/contact", "/works01", "/works02"];
  
    return allowedPaths.some(allowedPath => location.pathname.startsWith(allowedPath))
      ? "link-gold"
      : "link-gold";
  };

  return (
    <header className="header">
      <div className="header_inner">
        <ul className="header_inner_list">
          <li className="header_inner_listItem header_inner_listItem--home">
            <Link to="/" className={getLinkClass("/")}>HOME</Link>
          </li>
          <li className="header_inner_listItem header_inner_listItem--about">
            <Link to="/about/" className={getLinkClass("/about/")}>ABOUT</Link>
          </li>
          <li className="header_inner_listItem header_inner_listItem--works">
            <Link to="/portfolio/" className={getLinkClass("/works/")}>PORTFOLIO</Link>
          </li>
          <li className="header_inner_listItem header_inner_listItem--contact">
            <Link to="/contact/" className={getLinkClass("/contact/")}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
