import "./Home.scss";

import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "wouter";

import Background from "../../components/Background";
import NewCanvas from "../../layout/NewCanvas";

export default function Home() {
    const MotionText = motion(Text);
    const fadeIn = {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
        scale: { delay: 0 },
    };
    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
            },
        },
    };

    return (
        <>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    position: "relative",
                    backgroundColor: "#eeeeee",
                }}
                variants={variants}
                initial="hidden"
                animate="show"
            >
                <Background
                    canvasID="gradient-canvas-main"
                    variants={variants}
                />
                <div style={{ display: "flex", zIndex: 2 }} variants={variants}>
                    <div
                        style={{
                            width: "50vw",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <div
                            style={{
                                zIndex: 2,
                                marginLeft: "5rem",
                                userSelect: "none",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}
                        >
                            <MotionText
                                as="h1"
                                fontSize="6rem"
                                color="whitesmoke"
                                initial={{ opacity: 0, x: -200 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, ...fadeIn }}
                                className="text-shadow"
                            >
                                Add a little{" "}
                                <span>
                                    <em>
                                        <strong>WoW</strong>
                                    </em>
                                </span>{" "}
                                to
                                <br />
                                your life
                            </MotionText>
                            <MotionText
                                as="h2"
                                fontSize="2rem"
                                fontFamily="'Sharp Grotesk Book'"
                                color="whitesmoke"
                                style={{
                                    marginBottom: "3rem",
                                    marginRight: "8rem",
                                }}
                                initial={{ opacity: 0, x: -200 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.75, ...fadeIn }}
                                className="text-shadow-body"
                            >
                                All natural alcohol-free beverages to empower
                                your choice to drink
                            </MotionText>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Link to="/shop">
                                    <motion.a
                                        style={{
                                            backgroundColor: "whitesmoke",
                                            padding: "1.875rem 4rem",
                                            borderRadius: "0.375rem",
                                            fontSize: "1.25rem",
                                            boxShadow:
                                                "0px 0px 10px rgba(0, 0, 0, 0.1)",
                                        }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1, ...fadeIn }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Shop Now
                                    </motion.a>
                                </Link>
                                <motion.div
                                    className="icon-scroll"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 3.5, ...fadeIn }}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ maxWidth: "50vw", overflow: "hidden" }}>
                        <NewCanvas />
                    </div>
                </div>
                <div
                    style={{
                        overflow: "hidden",
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                    }}
                    variants={variants}
                >
                    <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-wave"
                        style={{
                            fill: "#ace",
                            width: "100%",
                            height: 107,
                            transform: "rotate(180deg)",
                        }}
                    >
                        <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
                    </svg>
                </div>
            </div>
            {/* f1c7b9 */}
            <Box
                display="flex"
                justifyContent="center"
                className="home-box"
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#ace",
                }}
            >
                <Box
                    className="text-shadow-body"
                    maxW="50%"
                    textAlign="center"
                    paddingTop="2.5rem"
                >
                    <Text as="h3" color="gray.800" fontSize="4xl">
                        Everyone deserves a beverage that respects our right to
                        choose.
                    </Text>
                    <TriangleDownIcon
                        color="whitesmoke"
                        w={6}
                        h={6}
                        marginRight="1"
                    />
                    <TriangleDownIcon
                        color="whitesmoke"
                        w={6}
                        h={6}
                        marginLeft="1"
                    />
                </Box>
            </Box>
        </>
    );
}
