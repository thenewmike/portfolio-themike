import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";





function Navbar () {

const activeLink = "nav-list_link nav-list_link--active";
const normalLink = "nav-list_link";



    return(
    <nav class="nav">
    <div class="container">
        <div class="nav-row">
            <NavLink to="/" class="logo"><strong>Freelancer</strong> portfolio</NavLink>
        <BtnDarkMode />

            

            <ul class="nav-list">
                <li class="nav-list__item">
                <NavLink to="/"className={({isActive}) =>  isActive ? activeLink : normalLink
                }>Home</NavLink>
                </li>

                <li class="nav-list__item">
                <NavLink to="/projects"className={({isActive}) =>  isActive ? activeLink : normalLink
                }  >Projects</NavLink>
                </li>


                <li class="nav-list__item">
                <NavLink to="/contacts"className={({isActive}) =>  isActive ? activeLink : normalLink
                }  >Contacts</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
);
}
export default Navbar;