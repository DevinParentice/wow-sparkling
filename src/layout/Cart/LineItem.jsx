import { AddIcon, CloseIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useLocation } from "wouter";

import cart from "../../stores/cart";
import shopifyCartRemoveItemQuery from "../../utils/shopifyCartRemoveItemQuery";
import shopifyCartUpdateItemQuery from "../../utils/shopifyCartUpdateItemQuery";

export default function LineItem({ item }) {
    const [userQuantity, setUserQuantity] = useState(item.node.quantity);
    const [disabled, setDisabled] = useState(false);
    const [, setLocation] = useLocation();
    const shoppingCart = cart(state => state.cart);
    const dispatchEditCart = cart(state => state.dispatchEditCart);
    const dispatchSetShowCart = cart(state => state.dispatchSetShowCart);

    const removeItem = useMutation(shopifyCartRemoveItemQuery, {
        onSuccess: data => {
            if (data !== undefined) {
                dispatchEditCart(data.checkoutLineItemsRemove.checkout);
                localStorage.setItem(
                    "cart",
                    JSON.stringify(data.checkoutLineItemsRemove.checkout)
                );
                setDisabled(false);
            }
            return true;
        },
    });
    const updateItem = useMutation(shopifyCartUpdateItemQuery);

    useEffect(() => {
        if (item.node.quantity !== userQuantity) {
            const timeoutId = setTimeout(() => {
                updateItem.mutate(
                    {
                        quantity: Number(userQuantity),
                        productID: item.node.id,
                        variantID: item.node.variant.id,
                        cartID: shoppingCart.id,
                    },
                    {
                        onSuccess: data => {
                            if (data !== undefined) {
                                dispatchEditCart(
                                    data.checkoutLineItemsUpdate.checkout
                                );
                                localStorage.setItem(
                                    "cart",
                                    JSON.stringify(
                                        data.checkoutLineItemsUpdate.checkout
                                    )
                                );
                                setDisabled(false);
                            }
                        },
                    }
                );
            }, 500);
            return () => clearTimeout(timeoutId);
        }
        return true;
    }, [userQuantity]);

    return (
        <Box
            style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
                padding: "1rem",
                borderBottom: "1px solid #eee8e4",
                width: "100%",
                position: "relative",
            }}
        >
            <Box
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                style={{
                    marginRight: "3rem",
                    minWidth: "100px",
                    maxWidth: "100px",
                }}
            >
                <Image
                    src={item.node.variant.image.url}
                    alt={item.node.variant.image.altText}
                    style={{
                        minWidth: "100px",
                        maxWidth: "100px",
                    }}
                />
            </Box>
            <Box
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <Box>
                    <Text
                        fontWeight="bold"
                        fontSize="xl"
                        cursor="pointer"
                        onClick={() => {
                            dispatchSetShowCart(false);
                            setLocation(
                                `/shop/${item.node.title
                                    .split(" ")[0]
                                    .toLowerCase()}`
                            );
                        }}
                    >
                        {item.node.title}
                    </Text>
                    <Text fontSize="sm">{item.node.variant.title}</Text>
                    <Box
                        style={{
                            border: "1px solid #1A202C",
                            borderRadius: "0.375rem",
                            display: "flex",
                            justifyContent: "space-around",
                            maxWidth: "125px",
                            marginTop: "1rem",
                        }}
                        boxShadow="md"
                    >
                        <button
                            type="button"
                            onClick={() => {
                                if (item.node.quantity > 1 && !disabled) {
                                    setDisabled(true);
                                    setUserQuantity(item.node.quantity - 1);
                                }
                            }}
                            style={{
                                padding: "6px 18px",
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
                                    event.target.value <= 999 &&
                                    event.target.value >= 1
                                ) {
                                    setUserQuantity(event.target.value);
                                }
                            }}
                            value={userQuantity}
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
                                if (item.node.quantity < 999 && !disabled) {
                                    setDisabled(true);
                                    setUserQuantity(item.node.quantity + 1);
                                }
                            }}
                            style={{
                                padding: "6px 18px",
                                flexShrink: 0,
                            }}
                        >
                            <AddIcon />
                        </button>
                    </Box>
                </Box>
                <Box style={{ right: 0 }}>
                    <Text color="black" fontSize="lg">{`$${
                        Number(item.node.variant.priceV2.amount) *
                        Number(item.node.quantity)
                    }.00`}</Text>
                </Box>
            </Box>
            <Box
                style={{
                    position: "absolute",
                    top: 16,
                    right: 0,
                }}
            >
                <button
                    onClick={() => {
                        if (!disabled) {
                            setDisabled(true);
                            removeItem.mutate({
                                variantID: item.node.id,
                                cartID: shoppingCart.id,
                            });
                        }
                    }}
                    type="button"
                >
                    <CloseIcon />
                </button>
            </Box>
        </Box>
    );
}
