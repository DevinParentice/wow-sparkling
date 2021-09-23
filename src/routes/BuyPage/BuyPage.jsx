import React from "react";
import { useLocation } from "wouter";

import Background from "../../components/Background";
import getProduct from "../../utils/getProduct";
import CanDisplay from "./CanDisplay";
import Form from "./Form";
import ProductCopy from "./ProductCopy";

export default function BuyPage({ flavor }) {
    const product = getProduct(flavor);
    const [location, ,] = useLocation();
    const fadeIn = {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
    };
    return (
        <main>
            {location === "/shop/blackberry" && (
                <Background canvasID="gradient-canvas-blackberry" />
            )}
            {location === "/shop/cucumber" && (
                <Background canvasID="gradient-canvas-cucumber" />
            )}
            {location === "/shop/grapefruit" && (
                <Background canvasID="gradient-canvas-grapefruit" />
            )}
            {location === "/shop/pineapple" && (
                <Background canvasID="gradient-canvas-pineapple" />
            )}
            <div style={{ display: "flex", userSelect: "none" }}>
                <ProductCopy product={product} transition={fadeIn} />
                <CanDisplay product={product.key} />
                <Form product={product} transition={fadeIn} />
            </div>
        </main>
    );
}
