import React, { useState } from "react";

import Cart from "./Cart";
import CartIcon from "./icons/CartIcon";

export default function Header() {
    const [showCart, setShowCart] = useState(false);
    return (
        <div
            style={{
                width: "100vw",
                height: "4rem",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 5rem",
                paddingTop: "2rem",
            }}
        >
            <CartIcon cartState={showCart} showCart={setShowCart} />
            <CartIcon cartState={showCart} showCart={setShowCart} />
            <CartIcon
                cartState={showCart}
                showCart={setShowCart}
                iconColor={showCart ? "black" : "white"}
            />
            <Cart showSelf={showCart} />
        </div>
    );
}
