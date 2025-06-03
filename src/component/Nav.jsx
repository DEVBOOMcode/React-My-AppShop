import logo from "../logo.svg"
import { Link, NavLink } from "react-router-dom";

const Nav = () => {

  const activeLink = ({isActive}) =>
  isActive
  ? "isActive-f"
  : "isActive-t";

  return (
    <>
        <nav>
            <Link to="/"><img src={logo} alt="img" /></Link>
            <h1>Code Shop</h1>
              <ul>
                  <li className="li">
                    <NavLink to="/" className={activeLink}>Home</NavLink>
                  </li>
                  <li className="li">
                    <NavLink to="/shop" className={activeLink}>Shop</NavLink>
                  </li>
                  <li className="li">
                    <NavLink to="/login" className={activeLink}>Login</NavLink>
                  </li>
              </ul>
        </nav>
    </>
  )
}

export default Nav