import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "wouter";

import Background from "../../components/Background";
import CanDisplay from "./CanDisplay";
import Form from "./Form";
import ProductCopy from "./ProductCopy";
// import styles from "./BuyPage.module.scss";

export default function BuyPage() {
    const [location, ,] = useLocation();
    const { isSuccess, data } = useQuery(["data", location], () =>
        fetch(__SNOWPACK_ENV__.API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token":
                    __SNOWPACK_ENV__.ACCESS_TOKEN,
            },
            body: JSON.stringify({
                query: `
				query product {
					products(first:1, query:"tag:${location.split("/")[2]}") {
						edges {
							node {
							  title
							  description
							  tags
							  handle
							  variants(first: 2) {
								edges {
								  node {
									title
									id
									priceV2 {
									  amount
									  currencyCode
									}
								  }
								}
							  }
							  priceRange {
								minVariantPrice {
								  amount
								}
								maxVariantPrice {
								  amount
								}
							  }
							  images(first: 1) {
								edges {
								  node {
									url
									altText
								  }
								}
							  }
							}
						  }
					}
				  }
			`,
            }),
        })
            .then(response => response.json())
            .then(response => response.data)
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
