// Images
import LogoInstagram from "../images/logo-instagram.svg";
import LogoFacebook from "../images/logo-facebook.svg";
import LogoLinkedin from "../images/logo-linkedin.svg";
import LogoTelegram from "../images/logo-telegram.svg";

function Footer() {
    return (
        <footer className="w-full pt-5 border border-t-[1px] border-secondary/30 tracking-wider">
            <div className="flex flex-col  items-center gap-20 flex-wrap mx-auto px-5 max-w-[1200px] sm:items-start sm:justify-between sm:flex-row">
                <div>
                    <p className="mb-6 text-2xl font-bold text-center sm:text-start">Pages</p>
                    <ul className="flex flex-row gap-5 justify-center flex-wrap sm:justify-start sm:flex-col sm:max-h-24">
                        <li><a href="./">Home</a></li>
                        <li><a href="./about">About Me</a></li>
                        <li><a href="./resume">Resume</a></li>
                        <li><a href="./portfolio">Portfolio</a></li>
                        <li><a href="./blog">Blog</a></li>
                        <li><a href="./contact">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <p className="mb-6 text-2xl font-bold text-center sm:text-start">Small Projects</p>
                    <ul className="flex flex-row gap-5 flex-wrap sm:flex-col sm:max-h-24">
                        <li><a href="#">Todo App</a></li>
                        <li><a href="#">Color Picker</a></li>
                    </ul>
                </div>
                <div>
                    <p className="mb-6 text-2xl font-bold text-center sm:text-start">Social Media</p>
                    <ul className="flex gap-5">
                        <li>
                            <a href="https://www.instagram.com/efdeveloper/">
                                <img src={LogoInstagram} className="w-10" />
                            </a>
                        </li>
                        <li>
                            <a href="t.me/@efdeveloper">
                                <img src={LogoTelegram} className="w-10" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={LogoLinkedin} className="w-10" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={LogoFacebook} className="w-10" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="pt-7 pb-2 text-center">© Erfan khedmati. All rights reserved.</p>
        </footer>
    )
}

export default Footer;