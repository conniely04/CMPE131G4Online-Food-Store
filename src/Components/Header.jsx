import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Header() {
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
      <Link to="/" className="logo">
        Online Food Store
      </Link>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products"
          onKeyDown={handleSearch}
        />
      </div>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Login">Login</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
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
