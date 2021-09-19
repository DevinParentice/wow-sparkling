import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "wouter";

import Background from "../../components/Background";
import getProduct from "../../utils/getProduct";
import CanDisplay from "./CanDisplay";
import Form from "./Form";

export default function BuyPage({ flavor }) {
    const product = getProduct(flavor);
    const [location, ,] = useLocation();
    const flavorList = product.name.split(" ");
    const fadeIn = {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
    };
    return (
        <main>
            {location === "/shop/blackberry" && (
                <Background canvasID="gradient-canvas-blackberry" />
            )}
            {location === "/shop/cucumber" && (
                <Background canvasID="gradient-canvas-cucumber" />
            )}
            {location === "/shop/grapefruit" && (
                <Background canvasID="gradient-canvas-grapefruit" />
            )}
            {location === "/shop/pineapple" && (
                <Background canvasID="gradient-canvas-pineapple" />
            )}
            <div style={{ display: "flex", userSelect: "none" }}>
                <div
                    style={{
                        width: "40vw",
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "whitesmoke",
                        zIndex: 3,
                    }}
                >
                    <Box
                        style={{
                            width: "650px",
                            padding: "2rem",
                            color: "whitesmoke",
                            lineHeight: 1.2,
                            textAlign: "center",
                        }}
                    >
                        <motion.h1
                            style={{
                                fontFamily: "Sharp Grotesk Regular",
                                fontSize: "4.5rem",
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ delay: 1, ...fadeIn }}
                            className="text-shadow"
                        >
                            {flavorList[0]}
                            <br />
                            {flavorList[1]}
                            <br />
                            {flavorList[2]}
                        </motion.h1>
                        <motion.h2
                            style={{
                                fontFamily: "Sharp Grotesk Regular",
                                fontSize: "2.5rem",
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ delay: 1.25, ...fadeIn }}
                            className="text-shadow"
                        >
                            {product.headline}
                        </motion.h2>
                        <motion.h3
                            style={{
                                marginTop: "1rem",
                                fontFamily: "Sharp Grotesk Book",
                                fontSize: "1.5rem",
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ delay: 1.5, ...fadeIn }}
                            className="text-shadow-body"
                        >
                            {product.description}
                        </motion.h3>
                    </Box>
                </div>
                <CanDisplay product={product.key} />
                <Form product={product} />
            </div>
        </main>
    );
}
