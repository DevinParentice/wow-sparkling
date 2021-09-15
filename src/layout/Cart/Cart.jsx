import { Box, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import FrownIcon from "../../assets/icons/FrownIcon";

export default function Cart({ showSelf, setShowSelf }) {
    const AnimatedBox = motion(Box);
    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
        <AnimatePresence>
            {showSelf && (
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
                        onClick={() => setShowSelf(false)}
                    />
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
                        <div
                            style={{
                                position: "static",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        borderRadius: "50%",
                                        backgroundColor: "#1A202C",
                                        width: "150px",
                                        height: "150px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginBottom: "1.5rem",
                                    }}
                                >
                                    <FrownIcon />
                                </div>
                                <Text
                                    as="p"
                                    fontFamily="Sharp Grotesk Book"
                                    fontSize="2xl"
                                >
                                    Cart is empty
                                </Text>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
