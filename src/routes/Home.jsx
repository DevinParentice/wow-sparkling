import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "wouter";

import Background from "../layout/Background";
import Header from "../layout/Header";
import NewCanvas from "../layout/NewCanvas";

export default function Home() {
    const MotionText = motion(Text);
    const fadeIn = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
        <>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    position: "relative",
                    backgroundColor: "#eeeeee",
                }}
            >
                <Header />
                <Background />
                <div style={{ display: "flex", zIndex: 2 }}>
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
                        <div style={{ zIndex: 2, marginLeft: "5rem" }}>
                            <MotionText
                                as="h1"
                                fontSize="6rem"
                                color="whitesmoke"
                                initial={{ opacity: 0, x: -200 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, ...fadeIn }}
                            >
                                Add a little&nbsp;
                                <em>
                                    <strong>WoW</strong>
                                </em>
                                &nbsp; to your life
                            </MotionText>
                            <MotionText
                                as="h2"
                                fontSize="1.625rem"
                                color="whitesmoke"
                                style={{ marginBottom: "3rem" }}
                                initial={{ opacity: 0, x: -200 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.75, ...fadeIn }}
                            >
                                All natural alcohol-free beverages to empower
                                your choice to drink
                            </MotionText>
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
                                    transition={{ delay: 1.2, ...fadeIn }}
                                >
                                    Shop Now
                                </motion.a>
                            </Link>
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
                >
                    <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            fill: "#f1c7b9",
                            width: "100%",
                            height: 107,
                            transform: "rotate(180deg)",
                        }}
                    >
                        <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
                    </svg>
                </div>
            </div>
            {/* <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#fff",
                }}
            ></div> */}
        </>
    );
}
