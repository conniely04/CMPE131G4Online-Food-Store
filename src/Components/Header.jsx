import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../Components/Navbar.css";
import "../Components/SideBar.css";
import { useState } from "react";
//add when u click on somewhere else menu closes
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  <html>
    <head>
      <link
        href="https://fonts.googleapis.com/css?family=Cabin"
        rel="stylesheet"
      ></link>
    </head>
  </html>;
  return (
    <nav className="navbar">
      <CustomLink to="/"> 
                <img
                  src="/images/logo5.png"
                  alt="Home Page"
                  className="logo"
                />
      </CustomLink>
      <Link to="/" className="store-name">
        Online Food Store
      </Link>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products"
          onKeyDown={handleSearch}
        />
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <p className="side-bar-name">Menu</p>
          {
            <div>
              <CustomLink className="contentin" to="/">
                Home
              </CustomLink>
              <CustomLink className="contentin" to="/Login">
                Login
              </CustomLink>
              <CustomLink className="contentin" to="/Tracking">
                Orders
              </CustomLink>
              <CustomLink className="contentin" to="/About">
                About
              </CustomLink>

              <CustomLink className="contentin" to="/Contact">
                Contact
              </CustomLink>
            </div>
          }
        </div>
      </div>

      <ul className="navigation-links">
        <div className="sidebar-toggle" onClick={toggleMenu}>
          <div className="hamicon">&#8801; </div>
          {/* Unicode hamburger icon */}
        </div>
        <div className="loginbutton">
          <CustomLink to="/Login">Login</CustomLink>
        </div>
        <li className="shopping-cart">
          <CustomLink to="/ShoppingCart">
            <img
              src="/cart.png"
              alt="Shopping Cart"
              className="shopping-cart-icon"
            />
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? " active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

const handleSearch = (e) => {
  if (e.key === "Enter") {
    // Redirect or trigger a search action here
    console.log("Performing search for:", e.target.value);
  }
};
