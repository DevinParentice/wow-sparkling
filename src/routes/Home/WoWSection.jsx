import { Box, Divider, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function OldWoWSection() {
    return (
        <Box
            as="section"
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="home-box"
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#eca3b4",
                position: "relative",
            }}
        >
            <Box
                className="text-shadow-body"
                maxW="53rem"
                textAlign="center"
                marginTop="8rem"
            >
                <Text as="h3" color="gray.800" fontSize="4xl">
                    Everyone deserves a beverage that respects their right to
                    choose.
                </Text>
            </Box>
            <Box display="flex" width="100%" height="100%">
                <Box
                    width="50%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                        cursor: "default",
                    }}
                >
                    <p className="wow-text text-with">With</p>
                </Box>
                <Box height="100%" display="flex" alignItems="center">
                    <Box
                        height="80%"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{
                            cursor: "default",
                        }}
                    >
                        <Divider
                            orientation="vertical"
                            opacity="0.8"
                            border="2px"
                            borderColor="gray.800"
                            margin="auto"
                        />
                        <Text fontSize="6rem" className="text-shadow">
                            Or
                        </Text>
                        <Divider
                            orientation="vertical"
                            opacity="0.8"
                            border="2px"
                            borderColor="gray.800"
                            margin="auto"
                        />
                    </Box>
                </Box>
                <Box
                    width="50%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                        cursor: "default",
                    }}
                >
                    <p className="wow-text text-without">
                        With
                        <br />
                        out
                    </p>
                </Box>
            </Box>
            <div
                style={{
                    position: "absolute",
                    overflow: "hidden",
                    bottom: 0,
                    width: "100%",
                }}
            >
                <motion.svg
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-wave"
                    initial={false}
                    style={{
                        width: "100%",
                        height: 107,
                        transform: "rotate(180deg)",
                    }}
                    animate={{
                        fill: "rgba(162, 176, 255)",
                    }}
                >
                    <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
                </motion.svg>
            </div>
        </Box>
    );
}
