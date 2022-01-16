import { AddIcon, CloseIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

import cart from "../../stores/cart";

export default function CartItems({ items }) {
    const dispatchRemoveItem = cart(state => state.dispatchRemoveItem);
    const dispatchEditItem = cart(state => state.dispatchEditItem);
    return (
        <Box
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                padding: "1rem",
            }}
        >
            <Box style={{ width: "90%" }}>
                <Text
                    fontSize="4xl"
                    style={{
                        marginTop: "1rem",
                        borderBottom: "1px solid #eee8e4",
                    }}
                >
                    Your Cart
                </Text>
            </Box>
            <Box
                style={{
                    position: "static",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "90%",
                }}
            >
                {items.map(item => {
                    return (
                        <Box
                            key={item.product.id}
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
                                    src={item.product.images.edges[0].node.url}
                                    alt={
                                        item.product.images.edges[0].node
                                            .altText
                                    }
                                    style={{
                                        minWidth: "100px",
                                        maxWidth: "100px",
                                    }}
                                />
                            </Box>
                            <Box
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                }}
                            >
                                <Box>
                                    <Text fontWeight="bold" fontSize="xl">
                                        {item.product.title}
                                    </Text>
                                    <Text fontSize="sm">{item.variant}</Text>
                                    <Box
                                        style={{
                                            border: "1px solid #1A202C",
                                            borderRadius: "0.375rem",
                                            display: "flex",
                                            justifyContent: "space-around",
                                            maxWidth: "125px",
                                            marginTop: "1rem",
                                        }}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => {
                                                if (item.quantity > 1) {
                                                    const oldItem = item;
                                                    item.quantity -= 1;
                                                    item.total -= item.price;
                                                    dispatchEditItem(
                                                        oldItem,
                                                        item
                                                    );
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
                                            value={item.quantity}
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
                                                if (item.quantity < 999) {
                                                    const oldItem = item;
                                                    item.quantity += 1;
                                                    item.total += item.price;
                                                    dispatchEditItem(
                                                        oldItem,
                                                        item
                                                    );
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
                                    <Text
                                        color="black"
                                        fontSize="lg"
                                    >{`$${item.total.toLocaleString()}.00`}</Text>
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
                                    onClick={() => dispatchRemoveItem(item)}
                                    type="button"
                                >
                                    <CloseIcon />
                                </button>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}
