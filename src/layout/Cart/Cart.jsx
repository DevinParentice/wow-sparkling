import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import cart from "../../stores/cart";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";

export default function Cart() {
    const shoppingCart = cart(state => state.cart);
    const showCart = cart(state => state.showCart);
    const dispatchSetShowCart = cart(state => state.dispatchSetShowCart);
    const AnimatedBox = motion(Box);
    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
        <AnimatePresence>
            {showCart && (
                <>
                    <AnimatedBox
                        style={{
                            position: "absolute",
                            width: "100vw",
                            height: "100vh",
                            top: 0,
                            left: 0,
                            backgroundColor: "black",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={transition}
                        onClick={() => {
                            dispatchSetShowCart(false);
                        }}
                    />
                    <motion.div
                        style={{
                            height: "100vh",
                            width: "40vw",
                            position: "fixed",
                            top: 0,
                            right: 0,
                            zIndex: 3,
                            backgroundColor: "whitesmoke",
                        }}
                        key="cart"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={transition}
                    >
                        {shoppingCart.lineItems.edges.length === 0 && (
                            <EmptyCart />
                        )}
                        {shoppingCart.lineItems.edges.length > 0 && (
                            <CartItems items={shoppingCart.lineItems.edges} />
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
