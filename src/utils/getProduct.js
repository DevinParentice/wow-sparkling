export const getProduct = flavor => {
    let productInfo = {};
    switch (flavor) {
        case "blackberry":
            productInfo = {
                name: "Blackberry | Lemon | Lavender",
                headline: "Enticing & Vibrant",
                description:
                    "A layering of tangy blackberry and bright lemon with hints of delicate lavender and earthy rooibos tea lightly sweetened with agave.",
                available: true,
            };
            break;
        case "cucumber":
            productInfo = {
                name: "Cucumber | Lime | Basil",
                headline: "Calming & Fresh",
                description:
                    "A layering of cool cucumber and tart lime with a hint of aromatic basil and green tea lightly sweetened with agave.",
                available: true,
            };
            break;
        case "grapefruit":
            productInfo = {
                name: "Grapefruit | Elderflower | Rosemary",
                headline: "Refreshing & Crisp",
                description:
                    "A layering of zesty red grapefruit and floral elderflower with a touch of aromatic rosemary, green tea and juniper berry lightly sweetened with agave.",
                available: true,
            };
            break;
        case "pineapple":
            productInfo = {
                name: "Pineapple | Ginger | Lemon",
                headline: "Intriguing & Exotic",
                description:
                    "A layering of tropical pineapple and spicy ginger with lemon and a hint of tart hibiscus tea lightly sweetened with agave.",
                available: true,
            };
            break;
        default:
            productInfo = {
                name: "Product not found",
                headline: "Not & Found",
                description:
                    "The product you were looking for was not found. Are you sure you visited the right link?",
                available: false,
            };
    }
    return productInfo;
};

export default getProduct;
