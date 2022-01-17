import.meta.env;

export const shopifyCartUpdateItemQuery = ({
    quantity,
    productID,
    variantID,
    cartID,
}) => {
    return fetch(__SNOWPACK_ENV__.API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": __SNOWPACK_ENV__.ACCESS_TOKEN,
        },
        body: JSON.stringify({
            query: `mutation checkoutLineItemsUpdate($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
				checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
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
			  }
			  `,
            variables: {
                checkoutId: cartID,
                lineItems: [
                    {
                        id: productID,
                        quantity,
                        variantId: variantID,
                    },
                ],
            },
        }),
    })
        .then(response => response.json())
        .then(response => response.data);
};

export default shopifyCartUpdateItemQuery;
