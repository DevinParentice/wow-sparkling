import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "wouter";

import CartIcon from "../assets/icons/CartIcon";
import WhiteLogo from "../assets/images/wow-logo-white.png";
import Cart from "./Cart";

export default function Header() {
    const [showCart, setShowCart] = useState(false);
    const fadeIn = { delay: 1, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
        <div
            style={{
                width: "100vw",
                height: "4rem",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 5rem",
                paddingTop: "2rem",
            }}
        >
            <CartIcon cartState={showCart} showCart={setShowCart} />
            <Link to="/">
                <a>
                    <motion.img
                        src={WhiteLogo}
                        alt="Logo"
                        height="50px"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: fadeIn }}
                    />
                </a>
            </Link>
            <CartIcon
                cartState={showCart}
                showCart={setShowCart}
                iconColor={showCart ? "black" : "white"}
            />
            <Cart showSelf={showCart} />
        </div>
    );
}
