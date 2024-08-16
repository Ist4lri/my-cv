import { Nav, NavLink, NavMenu } from "./NavbarElements";
import skillIcon from '../../assets/Photos2jpg.jpg';

 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activestyle="true">
                        <img src={skillIcon} alt="Retour à l'acceuil" />
                    </NavLink>
                    <NavLink to="/Skills" activestyle="true">
                        My Skills
                    </NavLink>
                    <NavLink to="/Experience" activestyle="true">
                        My Experience
                    </NavLink>
                    <NavLink to="/Contact" activestyle="true">
                        Webwork
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;