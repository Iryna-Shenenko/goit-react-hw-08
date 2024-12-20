import { NavLink} from "react-router-dom";
import css from "./AuthNav.module.css"
import clsx from "clsx";

const buildLinkClass = ({ isActive}) => {
    return clsx (css.link, isActive && css.active);
};

export const AuthNav = () => {
    return (
        <header className={css.header}> 
        <nav className={css.nav}>
            <NavLink className={buildLinkClass} to="/register">Register</NavLink>
            <NavLink  className={buildLinkClass} to="/login">Log In</NavLink>
        
        </nav>
        </header>
    );
};