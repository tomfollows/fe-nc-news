import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className = "Nav">
      <Link to="/"> Home </Link>
      <Link to="/articles"> View All Articles </Link>
      <Link to="/topics"> View All Topics </Link>
    </nav>
  );
};
export default Nav;
