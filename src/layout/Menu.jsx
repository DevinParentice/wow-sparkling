import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "wouter";

import activeObjects from "../stores/activeObjects";
import MenuCanvas from "./MenuCanvas";

export default function Menu({ showSelf }) {
    const MotionBox = motion(Box);
    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
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
    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2,
            },
        },
    };
    const item = {
        hidden: { opacity: 0, x: -50 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
            },
        },
    };
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
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
                        <motion.div
                            style={{
                                height: "60vh",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                                alignItems: "flex-start",
                                fontSize: "2.5rem",
                            }}
                            variants={variants}
                            initial="hidden"
                            animate="show"
                        >
                            <Link to="/shop/blackberry">
                                <motion.a
                                    onMouseEnter={dispatchShowBlackberry}
                                    onMouseLeave={dispatchShowBlackberry}
                                    variants={item}
                                >
                                    Blackberry | Lemon | Lavender
                                </motion.a>
                            </Link>
                            <Link to="/shop/cucumber">
                                <motion.a
                                    onMouseEnter={dispatchShowCucumber}
                                    onMouseLeave={dispatchShowCucumber}
                                    variants={item}
                                >
                                    Cucumber | Lime | Basil
                                </motion.a>
                            </Link>
                            <Link to="/shop/grapefruit">
                                <motion.a
                                    onMouseEnter={dispatchShowGrapefruit}
                                    onMouseLeave={dispatchShowGrapefruit}
                                    variants={item}
                                >
                                    Grapefruit | Elderflower | Rosemary
                                </motion.a>
                            </Link>
                            <Link to="/shop/pineapple">
                                <motion.a
                                    onMouseEnter={dispatchShowPineapple}
                                    onMouseLeave={dispatchShowPineapple}
                                    variants={item}
                                >
                                    Pineapple | Ginger | Hibiscus
                                </motion.a>
                            </Link>
                        </motion.div>
                    </div>
                    <MenuCanvas />
                </MotionBox>
            )}
        </AnimatePresence>
    );
}
