import { HashLink } from "react-router-hash-link";
import { Outlet } from "react-router-dom";
import '../App.css'

const Navbar = () => {
  return (
    <div>
      <nav>

      <HashLink to="#">CONVERTER</HashLink>
        <ul>
          <li>
            <HashLink to="#about">About</HashLink>
          </li>
          <li>
            <HashLink to="#faq">FAQ</HashLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Navbar;