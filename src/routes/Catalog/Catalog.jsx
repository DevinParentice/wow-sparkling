import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "wouter";

import BlackberryCanImage from "../../assets/images/blackberry-can.png";
import CucumberCanImage from "../../assets/images/cucumber-can.png";
import GrapefruitCanImage from "../../assets/images/grapefruit-can.png";
import PineappleCanImage from "../../assets/images/pineapple-can.png";

export default function Catalog() {
    return (
        <Box w="100vw" h="100vh">
            <Box
                display="flex"
                w="100%"
                backgroundColor="purple.100"
                position="relative"
            >
                <img src={BlackberryCanImage} alt="" width="50%" />
                <Box
                    w="50%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        textAlign="center"
                    >
                        <Text fontSize="6xl">Blackberry</Text>
                        <Text fontSize="6xl">Lemon</Text>
                        <Text fontSize="6xl">Lavender</Text>
                        <Link
                            to="/shop/blackberry"
                            style={{
                                fontSize: "2rem",
                                textDecoration: "underline",
                            }}
                        >
                            Shop now
                        </Link>
                    </Box>
                </Box>
                <Box
                    position="absolute"
                    bottom="0"
                    h="1rem"
                    w="100%"
                    backgroundImage="linear-gradient(to bottom, rgba(0,0,0,0), #C6F6D5)"
                />
            </Box>
            <Box
                display="flex"
                w="100%"
                backgroundColor="green.100"
                position="relative"
            >
                <Box
                    w="50%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        textAlign="center"
                    >
                        <Text fontSize="6xl">Cucumber</Text>
                        <Text fontSize="6xl">Lime</Text>
                        <Text fontSize="6xl">Basil</Text>
                        <Link
                            to="/shop/cucumber"
                            style={{
                                fontSize: "2rem",
                                textDecoration: "underline",
                            }}
                        >
                            Shop now
                        </Link>
                    </Box>
                </Box>
                <img src={CucumberCanImage} alt="" width="50%" />
                <Box
                    position="absolute"
                    bottom="0"
                    h="1rem"
                    w="100%"
                    backgroundImage="linear-gradient(to bottom, rgba(0,0,0,0), #FED7D7)"
                />
            </Box>
            <Box
                display="flex"
                w="100%"
                backgroundColor="red.100"
                position="relative"
            >
                <img src={GrapefruitCanImage} alt="" width="50%" />
                <Box
                    w="50%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        textAlign="center"
                    >
                        <Text fontSize="6xl">Grapefruit</Text>
                        <Text fontSize="6xl">Elderflower</Text>
                        <Text fontSize="6xl">Rosemary</Text>
                        <Link
                            to="/shop/grapefruit"
                            style={{
                                fontSize: "2rem",
                                textDecoration: "underline",
                            }}
                        >
                            Shop now
                        </Link>
                    </Box>
                </Box>
                <Box
                    position="absolute"
                    bottom="0"
                    h="1rem"
                    w="100%"
                    backgroundImage="linear-gradient(to bottom, rgba(0,0,0,0), #FEFCBF)"
                />
            </Box>
            <Box display="flex" w="100%" backgroundColor="yellow.100">
                <Box
                    w="50%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        textAlign="center"
                    >
                        <Text fontSize="6xl">Pineapple</Text>
                        <Text fontSize="6xl">Ginger</Text>
                        <Text fontSize="6xl">Hibiscus</Text>
                        <Link
                            to="/shop/pineapple"
                            style={{
                                fontSize: "2rem",
                                textDecoration: "underline",
                            }}
                        >
                            Shop now
                        </Link>
                    </Box>
                </Box>
                <img src={PineappleCanImage} alt="" width="50%" />
            </Box>
        </Box>
    );
}
