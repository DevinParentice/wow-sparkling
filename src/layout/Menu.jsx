import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "wouter";

import MenuCanvas from "./MenuCanvas";

export default function Menu({ showSelf }) {
    const MotionBox = motion(Box);
    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
        <AnimatePresence>
            {showSelf && (
                <MotionBox
                    bgColor="whitesmoke"
                    width="100vw"
                    height="100vh"
                    position="absolute"
                    top="0"
                    left="0"
                    display="flex"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={transition}
                    zIndex="5"
                >
                    <div
                        style={{
                            width: "60vw",
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: "4rem",
                        }}
                    >
                        <div
                            style={{
                                height: "60vh",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                                fontSize: "2.5rem",
                            }}
                        >
                            <Link to="/shop/blackberry">
                                <a>Blackberry | Lemon | Lavender</a>
                            </Link>
                            <Link to="/shop/cucumber">
                                <a>Cucumber | Lime | Basil</a>
                            </Link>
                            <Link to="/shop/grapefruit">
                                <a>Grapefruit | Elderflower | Rosemary</a>
                            </Link>
                            <Link to="/shop/pineapple">
                                <a>Pineapple | Ginger | Hibiscus</a>
                            </Link>
                        </div>
                    </div>
                    <MenuCanvas />
                </MotionBox>
            )}
        </AnimatePresence>
    );
}
