import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "wouter";

import Background from "../../components/Background";
import shopifyItemQuery from "../../utils/shopifyItemQuery";
import CanDisplay from "./CanDisplay";
import Form from "./Form";
import ProductCopy from "./ProductCopy";
// import styles from "./BuyPage.module.scss";

export default function BuyPage() {
    const [location, ,] = useLocation();
    const { isSuccess, data } = useQuery(["data", location], () =>
        shopifyItemQuery({ location })
    );
    const fadeIn = {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
    };

    if (!isSuccess) return null;
    const product = data.products.edges[0].node;
    return (
        isSuccess && (
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
                    <CanDisplay product={product.handle} />
                    <Form product={product} transition={fadeIn} />
                </div>
            </main>
        )
    );
}
