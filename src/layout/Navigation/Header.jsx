import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import React, { useEffect, useState } from "react";
import { Link } from "wouter";

import CartIcon from "../../assets/icons/CartIcon";
import BlackLogo from "../../assets/images/wow-logo-black.png";
import WhiteLogo from "../../assets/images/wow-logo-white.png";
import cart from "../../stores/cart";
import Cart from "../Cart";
import Menu from "../Menu";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [bgColor, setBgColor] = useState("");
    const showCart = cart(state => state.showCart);
    const fadeIn = { delay: 1, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

    const handleScroll = () => {
        if (window.pageYOffset >= 870) {
            setBgColor("whitesmoke");
        } else {
            setBgColor("");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div
            style={{
                width: "100vw",
                height: "6rem",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 5rem",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                backgroundColor: bgColor,
                transition: "background-color 0.5s",
                borderBottom: bgColor !== "" ? "1px solid grey" : "",
            }}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: fadeIn,
            }}
        >
            <div style={{ zIndex: 6 }}>
                <Hamburger
                    toggled={showMenu}
                    toggle={setShowMenu}
                    color={bgColor !== "" || showMenu ? "#1A202C" : "white"}
                    size={42}
                    rounded
                    label="Show Menu"
                />
            </div>
            <div style={{ zIndex: 6 }}>
                <Link to="/">
                    <a>
                        <img
                            src={
                                bgColor !== "" || showMenu
                                    ? BlackLogo
                                    : WhiteLogo
                            }
                            alt="Logo"
                            height="50px"
                        />
                    </a>
                </Link>
            </div>
            <CartIcon
                iconColor={bgColor !== "" || showCart ? "#1A202C" : "#fff"}
            />
            {showMenu && (
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        display: "flex",
                        justifyContent: "space-evenly",
                        zIndex: 6,
                        height: "7rem",
                        alignItems: "center",
                        width: "33%",
                        fontSize: "1.5rem",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: fadeIn }}
                >
                    <Link to="/story">
                        <a>Our Story</a>
                    </Link>
                    <Link to="/contact">
                        <a>Contact Us</a>
                    </Link>
                </motion.div>
            )}
            <Cart />
            <Menu showSelf={showMenu} setShowSelf={setShowMenu} />
        </motion.div>
    );
}
