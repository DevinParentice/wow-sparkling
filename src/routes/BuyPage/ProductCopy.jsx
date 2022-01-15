import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function ProductCopy({ product, transition }) {
    const flavorList = product.title.split(" ");
    const headline = product.tags.map(tag => {
        if (tag.includes("&")) {
            return tag;
        }
        return null;
    });
    return (
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
                    transition={{ delay: 1, ...transition }}
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
                    transition={{ delay: 1.25, ...transition }}
                    className="text-shadow"
                >
                    {headline}
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
                    transition={{ delay: 1.5, ...transition }}
                    className="text-shadow-body"
                >
                    {product.description}
                </motion.h3>
            </Box>
        </div>
    );
}
