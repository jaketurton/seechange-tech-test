import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/seechange-logo.png";

export default function Layout() {
  return (
    <div>
      <header className="inline-block">
        <img
          src={logo}
          alt="SeeChange Logo"
          height="34"
          width="205"
          className="inline-block mr-10"
        />
        <nav className="inline-block">
          <ul className="flex flex-row mt-1">
            <li className="mr-5">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}
