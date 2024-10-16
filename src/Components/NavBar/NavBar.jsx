import React, { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
    const [menuIcon, setMenuicon] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");

    const handleMenuIcon = () => {
        setMenuicon(!menuIcon);
    };

    const handleClick = (e,item) => {
        e.preventDefault();
        setActiveItem(item);
    };

    return (
        <div className="nav">
            <a className="logo" href="">ASHIQUE</a>
            <div>
                <ul id="navbar-items" className={menuIcon ? "show" : ""}>
                    <li>
                        <a className={activeItem === "Home" ? "active" : ""} href="#home" onClick={(e) => handleClick(e,"Home")}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className={activeItem === "Service" ? "active" : ""}
                            href=""
                            onClick={(e) => handleClick(e,"Service")}
                        >
                            Service
                        </a>
                    </li>
                    <li>
                        <a className={activeItem === "About" ? "active" : ""} href="" onClick={(e) => handleClick(e,"About")}>
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className={activeItem === "Portfolio" ? "active" : ""}
                            href=""
                            onClick={(e) => handleClick(e,"Portfolio")}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            className={activeItem === "Contact" ? "active" : ""}
                            href=""
                            onClick={(e) => handleClick(e,"Contact")}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div id="mobile" onClick={handleMenuIcon}>
                <i id="bar" className={menuIcon ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </div>
    );
};



export default NavBar;
