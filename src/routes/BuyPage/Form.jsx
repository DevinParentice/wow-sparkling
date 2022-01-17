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
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useLocation } from "wouter";

import cart from "../../stores/cart";
import shopifyCartAddItemQuery from "../../utils/shopifyCartAddItemQuery";
import shopifyCartCreateQuery from "../../utils/shopifyCartCreateQuery";
import RadioCard from "./Radiocard";

export default function Form({ product }) {
    const [packNumber, setPackNumber] = useState(
        product.priceRange.minVariantPrice.amount
    );
    const [quantity, setQuantity] = useState(1);
    const [variant, setVariant] = useState("12 Pack");
    const [variantID, setVariantID] = useState("");
    const [itemsAdded, setItemsAdded] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [total, setTotal] = useState(1);
    const options = ["12 Pack", "24 Pack"];
    const AnimatedBox = motion(Box);
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "packs",
        defaultValue: "12 Pack",
        onChange: choice => {
            setTotal(total === 0 ? 1 : total);
            if (choice === "12 Pack") {
                setVariant("12 Pack");
                setPackNumber(product.priceRange.minVariantPrice.amount);
            } else {
                setVariant("24 Pack");
                setPackNumber(product.priceRange.maxVariantPrice.amount);
            }
        },
    });
    const group = getRootProps();
    const [, setLocation] = useLocation();
    const dispatchEditCart = cart(state => state.dispatchEditCart);
    const dispatchSetShowCart = cart(state => state.dispatchSetShowCart);
    const shoppingCart = cart(state => state.cart);
    const createShopifyCart = useMutation(shopifyCartCreateQuery, {
        onSuccess: data => {
            if (data !== undefined) {
                dispatchEditCart(data.checkoutCreate.checkout);
                localStorage.setItem(
                    "cart",
                    JSON.stringify(data.checkoutCreate.checkout)
                );
                dispatchSetShowCart(true);
                setIsLoading(false);
            }
        },
    });
    const addItemToShopifyCart = useMutation(shopifyCartAddItemQuery, {
        onSuccess: data => {
            if (data !== undefined) {
                dispatchEditCart(data.checkoutLineItemsAdd.checkout);
                localStorage.setItem(
                    "cart",
                    JSON.stringify(data.checkoutLineItemsAdd.checkout)
                );
                dispatchSetShowCart(true);
                setIsLoading(false);
            }
        },
    });
    useEffect(() => {
        if (shoppingCart.id === "") {
            createShopifyCart.mutate({ quantity, variantID });
        } else {
            addItemToShopifyCart.mutate({
                quantity,
                variantID,
                cartID: shoppingCart.id,
            });
        }
    }, [itemsAdded]);
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
                                    setQuantity(event.target.value * 1);
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
                        isLoading={isLoading}
                        loadingText="Adding to cart..."
                        spinnerPlacement="end"
                        onClick={() => {
                            setIsLoading(true);
                            for (const vID of product.variants.edges) {
                                if (vID.node.title === variant) {
                                    setVariantID(vID.node.id);
                                    setItemsAdded(count => count + 1);
                                }
                            }
                        }}
                    >
                        Add to Cart
                    </Button>
                </div>
            </AnimatedBox>
        </div>
    );
}
