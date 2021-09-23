import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useLocation } from "wouter";

import SocialMedia from "../../components/SocialMedia";
import activeObjects from "../../stores/activeObjects";
import MenuCanvas from "../MenuCanvas";

export default function Menu({ showSelf, setShowSelf }) {
    const [, setLocation] = useLocation();
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
                            <motion.p
                                style={{
                                    cursor: "pointer",
                                }}
                                tabIndex={0}
                                onMouseEnter={() => {
                                    dispatchShowBlackberry(true);
                                    dispatchShowCucumber(false);
                                    dispatchShowGrapefruit(false);
                                    dispatchShowPineapple(false);
                                }}
                                variants={item}
                                onClick={() => {
                                    setShowSelf(false);
                                    dispatchShowBlackberry(false);
                                    setLocation("/shop/blackberry");
                                }}
                            >
                                Blackberry | Lemon | Lavender
                            </motion.p>
                            <motion.p
                                style={{
                                    cursor: "pointer",
                                }}
                                tabIndex={0}
                                onMouseEnter={() => {
                                    dispatchShowBlackberry(false);
                                    dispatchShowCucumber(true);
                                    dispatchShowGrapefruit(false);
                                    dispatchShowPineapple(false);
                                }}
                                variants={item}
                                onClick={() => {
                                    setShowSelf(false);
                                    dispatchShowCucumber(false);
                                    setLocation("/shop/cucumber");
                                }}
                            >
                                Cucumber | Lime | Basil
                            </motion.p>
                            <motion.p
                                style={{
                                    cursor: "pointer",
                                }}
                                tabIndex={0}
                                onMouseEnter={() => {
                                    dispatchShowBlackberry(false);
                                    dispatchShowCucumber(false);
                                    dispatchShowGrapefruit(true);
                                    dispatchShowPineapple(false);
                                }}
                                variants={item}
                                onClick={() => {
                                    setShowSelf(false);
                                    dispatchShowGrapefruit(false);
                                    setLocation("/shop/grapefruit");
                                }}
                            >
                                Grapefruit | Elderflower | Rosemary
                            </motion.p>
                            <motion.p
                                style={{
                                    cursor: "pointer",
                                }}
                                tabIndex={0}
                                onMouseEnter={() => {
                                    dispatchShowBlackberry(false);
                                    dispatchShowCucumber(false);
                                    dispatchShowGrapefruit(false);
                                    dispatchShowPineapple(true);
                                }}
                                variants={item}
                                onClick={() => {
                                    setShowSelf(false);
                                    dispatchShowPineapple(false);
                                    setLocation("/shop/pineapple");
                                }}
                            >
                                Pineapple | Ginger | Hibiscus
                            </motion.p>
                        </motion.div>
                    </div>
                    <MenuCanvas />
                    <SocialMedia />
                </MotionBox>
            )}
        </AnimatePresence>
    );
}
