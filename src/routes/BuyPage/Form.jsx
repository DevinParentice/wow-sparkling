import { AddIcon, MinusIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Divider,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useRadioGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useLocation } from "wouter";

import RadioCard from "./Radiocard";

export default function Form({ product }) {
    const [packNumber, setPackNumber] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);
    const options = ["12 Pack", "24 Pack"];
    const AnimatedBox = motion(Box);
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "packs",
        onChange: choice => {
            setTotal(total === 0 ? 1 : total);
            if (choice === "12 Pack") {
                setPackNumber(product.priceRange.minVariantPrice.amount);
            } else {
                setPackNumber(product.priceRange.maxVariantPrice.amount);
            }
        },
    });
    const group = getRootProps();
    const [, setLocation] = useLocation();
    return (
        <div
            style={{
                width: "40vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 3,
            }}
        >
            <AnimatedBox
                bg="whitesmoke"
                p="2rem"
                borderRadius="lg"
                boxShadow="lg"
                style={{
                    width: "511px",
                    height: "300px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: "2rem",
                }}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ delay: 1, ...transition }}
            >
                <Menu placement="bottom">
                    <MenuButton
                        as={Button}
                        rightIcon={<TriangleDownIcon />}
                        bg="whitesmoke"
                        size="lg"
                        pt="0.375rem"
                        pb="0.375rem"
                    >
                        {`Flavor: ${
                            product.handle.charAt(0).toUpperCase() +
                            product.handle.slice(1)
                        }`}
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            onClick={() => setLocation("/shop/blackberry")}
                        >
                            Blackberry | Lemon | Lavender
                        </MenuItem>
                        <MenuItem onClick={() => setLocation("/shop/cucumber")}>
                            Cucumber | Lime | Basil
                        </MenuItem>
                        <MenuItem
                            onClick={() => setLocation("/shop/grapefruit")}
                        >
                            Grapefruit | Elderflower | Rosemary
                        </MenuItem>
                        <MenuItem
                            onClick={() => setLocation("/shop/pineapple")}
                        >
                            Pineapple | Ginger | Lemon
                        </MenuItem>
                    </MenuList>
                </Menu>
                <div
                    style={{
                        width: "100%",
                        marginTop: "1rem",
                        display: "flex",
                        justifyContent: "space-around",
                    }}
                >
                    <HStack {...group}>
                        {options.map(option => {
                            return (
                                <RadioCard
                                    key={option}
                                    {...getRadioProps({
                                        value: option,
                                    })}
                                >
                                    {option}
                                </RadioCard>
                            );
                        })}
                    </HStack>
                </div>
                <Divider
                    p={2}
                    style={{
                        borderColor: "#1A202C",
                        width: "75%",
                    }}
                />
                <div
                    style={{
                        width: "66%",
                        color: "#1A202C",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "1rem",
                    }}
                >
                    <Box
                        style={{
                            border: "1px solid #1A202C",
                            borderRadius: "0.375rem",
                            display: "flex",
                            justifyContent: "space-around",
                            maxWidth: "125px",
                        }}
                        boxShadow="md"
                    >
                        <button
                            type="button"
                            onClick={() => {
                                if (quantity > 1) {
                                    setQuantity(quantity - 1);
                                }
                            }}
                            style={{
                                padding: "16px 18px",
                                flexShrink: 0,
                            }}
                        >
                            <MinusIcon />
                        </button>
                        <input
                            type="number"
                            name="quantity"
                            min="1"
                            max="999"
                            onChange={event => {
                                if (
                                    event.target.value < 999 &&
                                    event.target.value > 1
                                ) {
                                    setQuantity(event.target.value);
                                }
                            }}
                            value={quantity}
                            style={{
                                textAlign: "center",
                                fontSize: "18px",
                                flex: 1,
                                border: 0,
                                padding: 0,
                                outline: 0,
                                color: "#1A202C",
                                backgroundColor: "transparent",
                                width: "30px",
                                position: "relative",
                                top: "2px",
                                appearance: "none",
                                resize: "none",
                            }}
                        />
                        <button
                            type="button"
                            onClick={() => {
                                if (quantity < 999) {
                                    setQuantity(quantity + 1);
                                }
                            }}
                            style={{
                                padding: "16px 18px",
                                flexShrink: 0,
                            }}
                        >
                            <AddIcon />
                        </button>
                    </Box>
                    <p style={{ fontSize: "1.5rem" }}>
                        {`$${(
                            total *
                            packNumber *
                            quantity
                        ).toLocaleString()}.00`}
                    </p>
                </div>
                <div style={{ marginTop: "1rem" }}>
                    <Button
                        variant="outline"
                        colorScheme="whitealpha"
                        size="lg"
                        boxShadow="lg"
                    >
                        Add to Cart
                    </Button>
                </div>
            </AnimatedBox>
        </div>
    );
}
