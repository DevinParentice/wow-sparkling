import { Text } from "@chakra-ui/react";
import React from "react";

import FrownIcon from "../../assets/icons/FrownIcon";

export default function EmptyCart() {
    return (
        <div
            style={{
                position: "static",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        borderRadius: "50%",
                        backgroundColor: "#1A202C",
                        width: "150px",
                        height: "150px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "1.5rem",
                    }}
                >
                    <FrownIcon />
                </div>
                <Text as="p" fontFamily="Sharp Grotesk Book" fontSize="2xl">
                    Your cart is empty
                </Text>
            </div>
        </div>
    );
}
