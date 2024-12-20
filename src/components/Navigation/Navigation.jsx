import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./Navigation.module.css";
import clsx from "clsx";


 const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

const buildLinkClass = ({ isActive}) => {
    return clsx(css.link, isActive && css.active);
}
    return (
        <header className={css.header}> 
        <nav className={css.nav}>
            <NavLink className={buildLinkClass} to="/">
            Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={buildLinkClass} to="/contacts">Contacts</NavLink>
            )}
        </nav>
        </header>
    );
};
export default Navigation;