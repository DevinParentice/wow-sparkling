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
                        <div
                            style={{
                                height: "60vh",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                                alignItems: "flex-start",
                                fontSize: "2.5rem",
                            }}
                        >
                            <Link to="/shop/blackberry">
                                <a
                                    onMouseEnter={dispatchShowBlackberry}
                                    onMouseLeave={dispatchShowBlackberry}
                                >
                                    Blackberry | Lemon | Lavender
                                </a>
                            </Link>
                            <Link to="/shop/cucumber">
                                <a
                                    onMouseEnter={dispatchShowCucumber}
                                    onMouseLeave={dispatchShowCucumber}
                                >
                                    Cucumber | Lime | Basil
                                </a>
                            </Link>
                            <Link to="/shop/grapefruit">
                                <a
                                    onMouseEnter={dispatchShowGrapefruit}
                                    onMouseLeave={dispatchShowGrapefruit}
                                >
                                    Grapefruit | Elderflower | Rosemary
                                </a>
                            </Link>
                            <Link to="/shop/pineapple">
                                <a
                                    onMouseEnter={dispatchShowPineapple}
                                    onMouseLeave={dispatchShowPineapple}
                                >
                                    Pineapple | Ginger | Hibiscus
                                </a>
                            </Link>
                        </div>
                    </div>
                    <MenuCanvas />
                </MotionBox>
            )}
        </AnimatePresence>
    );
}
