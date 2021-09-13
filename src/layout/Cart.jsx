import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Cart({ showSelf }) {
    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
        <AnimatePresence>
            {showSelf && (
                <motion.div
                    style={{
                        height: "100vh",
                        width: "400px",
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
                    <div style={{ position: "static" }} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
