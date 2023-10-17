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
      <ul>
        <CustomLink to="/Home">Home</CustomLink>
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
