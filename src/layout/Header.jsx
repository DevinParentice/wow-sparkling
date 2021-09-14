import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { Link } from "wouter";

import CartIcon from "../assets/icons/CartIcon";
import BlackLogo from "../assets/images/wow-logo-black.png";
import WhiteLogo from "../assets/images/wow-logo-white.png";
import Cart from "./Cart";
import Menu from "./Menu";

export default function Header() {
    const [showCart, setShowCart] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const fadeIn = { delay: 1, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
        <motion.div
            style={{
                width: "100vw",
                height: "4rem",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 5rem",
                paddingTop: "2rem",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: fadeIn }}
        >
            <div style={{ zIndex: 6 }}>
                <Hamburger
                    toggled={showMenu}
                    toggle={setShowMenu}
                    color={showMenu ? "#1A202C" : "white"}
                    size={42}
                    rounded
                    label="Show Menu"
                />
            </div>
            <div style={{ zIndex: 6 }}>
                <Link to="/">
                    <a>
                        <img
                            src={showMenu ? BlackLogo : WhiteLogo}
                            alt="Logo"
                            height="50px"
                        />
                    </a>
                </Link>
            </div>
            <CartIcon
                cartState={showCart}
                showCart={setShowCart}
                iconColor={showCart ? "#1A202C" : "white"}
            />
            <Cart showSelf={showCart} setShowSelf={setShowCart} />
            <Menu showSelf={showMenu} setShowSelf={setShowMenu} />
        </motion.div>
    );
}
