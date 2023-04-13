import { LOGO_URL } from "../utils/constants";

const Header = () =>{
    return(
        <div className="header-container">
            <div className="logo-container">
                <img
                    className="logo-image"
                    alt="restaurant app logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="header-links">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
