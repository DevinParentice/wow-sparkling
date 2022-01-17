import create from "zustand";

export const cart = create(set => ({
    cart: {
        id: "",
        webUrl: "",
        lineItems: { edges: [] },
        lineItemsSubtotalPrice: {
            amount: 0,
            currencyCode: "",
        },
    },
    showCart: false,
    dispatchEditCart: newCart => {
        set(() => ({
            cart: newCart,
        }));
    },
    dispatchSetShowCart: show =>
        set(() => ({
            showCart: show,
        })),
}));

export default cart;
