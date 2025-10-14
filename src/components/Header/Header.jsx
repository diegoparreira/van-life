import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <nav className="header">
            <div className="header-logo-container">
                <Link to="/" className="header-logo">
                    #VANLIFE
                </Link>
            </div>
            <div className="header-links">
                <Link to="/about" className="header-link">
                    About
                </Link>
                <Link to="/vans" className="header-link">
                    Vans
                </Link>
            </div>
        </nav>
    );
}
