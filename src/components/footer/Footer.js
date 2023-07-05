import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";



import "./style.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div class="container">
                <div class="footer__wrapper">
                    <ul class="social">
                        <li class="social__item"><a href="#!"><img src={instagram} alt="Lhttps://www.instagram.com/its.themike/" /></a></li>
                        <li class="social__item"><a href="#!"><img src={gitHub} alt="https://github.com/thenewmike" /></a></li>
                        <li class="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
                    </ul>
                    <div class="copyright">
                        <p>© 2023 www.pavelsharapa.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;