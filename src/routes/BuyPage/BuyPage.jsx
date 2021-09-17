import React from "react";

import getProduct from "../../utils/getProduct";
import CanDisplay from "./CanDisplay";

export default function BuyPage({ flavor }) {
    const product = getProduct(flavor);
    return (
        <main>
            <CanDisplay product={product.name} />
            <h1>{product.name}</h1>
            <h2>{product.description}</h2>
        </main>
    );
}
