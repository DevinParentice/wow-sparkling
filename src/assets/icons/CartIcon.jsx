import { motion } from "framer-motion";
import React from "react";

import cart from "../../stores/cart";

export default function ShoppingBag3FillIcon({ iconColor }) {
    const dispatchSetShowCart = cart(state => state.dispatchSetShowCart);
    const showCart = cart(state => state.showCart);
    const shoppingCart = cart(state => state.cart);
    const fadeIn = { delay: 1, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
        <motion.div
            style={{ position: "relative", zIndex: "4" }}
            whileHover={{ scale: 1.1, cursor: "pointer" }}
            tabIndex="0"
            onKeyDown={event => {
                if (event.key === "Enter") {
                    dispatchSetShowCart(!showCart);
                }
            }}
        >
            {shoppingCart.lineItems.edges.length > 0 && (
                <div
                    style={{
                        position: "absolute",
                        top: "-5px",
                        right: "-5px",
                        color:
                            iconColor === "#1A202C" ? "whitesmoke" : "#1A202C",
                        backgroundColor: iconColor,
                        borderRadius: "50%",
                        width: "1.5rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: "5",
                        cursor: "pointer",
                    }}
                >
                    {shoppingCart.lineItems.edges.length}
                </div>
            )}
            <motion.svg
                viewBox="0 0 24 24"
                style={{
                    zIndex: 4,
                    transition: "fill 0.4s cubic-bezier(0, 0, 0, 1) 0s",
                    cursor: "pointer",
                }}
                fill={iconColor}
                height="3em"
                width="3em"
                whileTap={{ color: iconColor, transition: fadeIn }}
                onClick={() => {
                    dispatchSetShowCart(!showCart);
                }}
            >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6.5 2h11a1 1 0 01.8.4L21 6v15a1 1 0 01-1 1H4a1 1 0 01-1-1V6l2.7-3.6a1 1 0 01.8-.4zm12 4L17 4H7L5.5 6h13zM9 10H7v2a5 5 0 0010 0v-2h-2v2a3 3 0 01-6 0v-2z" />
            </motion.svg>
        </motion.div>
    );
}
