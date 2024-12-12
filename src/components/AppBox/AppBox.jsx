import Navigation from "../../components/Navigation/Navigation";
import { UserMenu} from "../UserMenu/UserMenu";
import { useSelector } from 'react-redux';
import  {AuthNav} from "../Authnav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBox.module.css";



 const AppBox = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);


    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};
export default AppBox;
