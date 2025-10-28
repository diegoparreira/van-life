import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import UserDropdown from "../UserDropdown/UserDropdown";

export default function Header() {
    function fakeLogOut() {
        localStorage.removeItem("logged");
    }

    return (
        <nav className="header">
            <div className="header-logo-container">
                <Link to="" className="header-logo">
                    #VANLIFE
                </Link>
            </div>
            <nav className="header-links">
                <NavLink to="host" className={({ isActive }) => (isActive ? "header-link active-link" : "header-link")}>
                    Host
                </NavLink>
                <NavLink
                    to="about"
                    className={({ isActive }) => (isActive ? "header-link active-link" : "header-link")}
                >
                    About
                </NavLink>
                <NavLink to="vans" className={({ isActive }) => (isActive ? "header-link active-link" : "header-link")}>
                    Vans
                </NavLink>
                <UserDropdown />
            </nav>
        </nav>
    );
}
