import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import LineItem from "./LineItem";

export default function CartItems({ shoppingCart, items }) {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <Box
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "100%",
                padding: "1rem",
            }}
        >
            <Box
                backgroundColor="whitesmoke"
                style={{ width: "90%", zIndex: 1 }}
            >
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "90%",
                    overflowY: "scroll",
                }}
            >
                {items.map(item => {
                    return <LineItem item={item} key={item.node.id} />;
                })}
            </Box>
            <Box
                width="90%"
                position="fixed"
                bottom="0"
                paddingBottom="25px"
                backgroundColor="whitesmoke"
                style={{ paddingTop: "1rem", borderTop: "1px solid #eee8e4" }}
            >
                <Box
                    style={{
                        right: 0,
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Text color="gray.800" fontSize="lg">
                        Subtotal:
                    </Text>
                    <Text color="gray.800" fontSize="lg">
                        {`$${shoppingCart.lineItemsSubtotalPrice.amount}0`}
                    </Text>
                </Box>
                <Button
                    isFullWidth
                    isLoading={isLoading}
                    loadingText="Sending to checkout..."
                    spinnerPlacement="end"
                    variant="outline"
                    colorScheme="whitealpha"
                    _hover={{ backgroundColor: "gray.200" }}
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
