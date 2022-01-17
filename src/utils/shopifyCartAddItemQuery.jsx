import.meta.env;

export const shopifyCartAddItemQuery = ({ quantity, variantID, cartID }) => {
    return fetch(__SNOWPACK_ENV__.API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": __SNOWPACK_ENV__.ACCESS_TOKEN,
        },
        body: JSON.stringify({
            query: `mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
				checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
				  checkout {
					id
					webUrl
					lineItems(first: 8) {
					  edges {
						node {
						  id
						  title
						  quantity
						  variant {
							id
							title
							priceV2 {
								amount
								currencyCode
							}
							image {
							  url
							  altText
							}
						  }
						}
					  }
					}
					lineItemsSubtotalPrice {
					  amount
					  currencyCode
					}
				  }
				  checkoutUserErrors {
					code
					field
					message
				  }
				}
			  }`,
            variables: {
                lineItems: [
                    {
                        quantity,
                        variantId: variantID,
                    },
                ],
                checkoutId: cartID,
            },
        }),
    })
        .then(response => response.json())
        .then(response => response.data);
};

export default shopifyCartAddItemQuery;
