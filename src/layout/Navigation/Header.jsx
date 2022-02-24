import "./Header.scss";

import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import React, { useEffect, useState } from "react";
import { Link } from "wouter";

import CartIcon from "../../assets/icons/CartIcon";
import BlackLogo from "../../assets/images/wow-logo-black.png";
import WhiteLogo from "../../assets/images/wow-logo-white.png";
import activeObjects from "../../stores/activeObjects";
import cart from "../../stores/cart";
import uiElements from "../../stores/uiElements";
import Cart from "../Cart";
import Menu from "../Menu";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const showCart = cart(state => state.showCart);
    const backgroundColor = uiElements(state => state.backgroundColor);
    const dispatchSetBackgroundColor = uiElements(
        state => state.dispatchSetBackgroundColor
    );
    const dispatchShowBlackberry = activeObjects(
        state => state.dispatchShowBlackberry
    );
    const dispatchShowCucumber = activeObjects(
        state => state.dispatchShowCucumber
    );
    const dispatchShowGrapefruit = activeObjects(
        state => state.dispatchShowGrapefruit
    );
    const dispatchShowPineapple = activeObjects(
        state => state.dispatchShowPineapple
    );
    const fadeIn = { delay: 1, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

    const handleScroll = () => {
        if (window.pageYOffset >= 1750) {
            dispatchSetBackgroundColor("#a2b0ff");
        } else if (window.pageYOffset >= 870) {
            dispatchSetBackgroundColor("#eca3b4");
        } else {
            dispatchSetBackgroundColor("");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.header
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
                backgroundColor,
                transition: "background-color 0.5s",
            }}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: fadeIn,
            }}
        >
            <div
                style={{ zIndex: 6 }}
                tabIndex="0"
                role="button"
                onKeyDown={event => {
                    if (event.key === "Enter") {
                        setShowMenu(!showMenu);
                        dispatchShowBlackberry(false);
                        dispatchShowCucumber(false);
                        dispatchShowGrapefruit(false);
                        dispatchShowPineapple(false);
                    }
                }}
            >
                <Hamburger
                    toggled={showMenu}
                    onToggle={() => {
                        setShowMenu(!showMenu);
                        setShowMenu(!showMenu);
                        dispatchShowBlackberry(false);
                        dispatchShowCucumber(false);
                        dispatchShowGrapefruit(false);
                        dispatchShowPineapple(false);
                    }}
                    color={
                        backgroundColor !== "" || showMenu ? "#1A202C" : "white"
                    }
                    size={42}
                    rounded
                    label="Show Menu"
                />
            </div>
            <div style={{ zIndex: 6 }}>
                <Link to="/">
                    <a
                        tabIndex={0}
                        role="link"
                        onClick={() => setShowMenu(false)}
                        onKeyDown={event => {
                            if (event.key === "Enter") {
                                setShowMenu(false);
                            }
                        }}
                    >
                        <img
                            src={
                                backgroundColor !== "" || showMenu
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
                iconColor={
                    backgroundColor !== "" || showCart ? "#1A202C" : "#fff"
                }
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
                    <Link to="/story" onClick={() => setShowMenu(!showMenu)}>
                        <a>Our Story</a>
                    </Link>
                    <Link to="/contact" onClick={() => setShowMenu(!showMenu)}>
                        <a>Contact Us</a>
                    </Link>
                </motion.div>
            )}
            <Cart />
            <Menu showSelf={showMenu} setShowSelf={setShowMenu} />
        </motion.header>
    );
}
