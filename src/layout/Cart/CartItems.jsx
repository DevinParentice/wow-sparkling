import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import cart from "../../stores/cart";
import LineItem from "./LineItem";

export default function CartItems({ items }) {
    const [isLoading, setIsLoading] = useState(false);
    const shoppingCart = cart(state => state.cart);
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
                    return <LineItem item={item} key={item.node.id} />;
                })}
            </Box>
            <Box width="80">
                <Box style={{ right: 0 }}>
                    <Text
                        color="black"
                        fontSize="lg"
                    >{`Subtotal: $${shoppingCart.lineItemsSubtotalPrice.amount}0`}</Text>
                </Box>
                <Button
                    isFullWidth
                    isLoading={isLoading}
                    loadingText="Sending to checkout..."
                    spinnerPlacement="end"
                    backgroundColor="blue.200"
                    _hover={{ backgroundColor: "blue.300" }}
                    borderColor="green.800"
                    height="50px"
                    onClick={() => {
                        setIsLoading(true);
                        window.location.href = shoppingCart.webUrl;
                    }}
                >
                    Checkout
                </Button>
            </Box>
        </Box>
    );
}
