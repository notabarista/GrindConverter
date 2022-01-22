import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>

      <Link to="/">CONVERTER</Link>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Navbar;