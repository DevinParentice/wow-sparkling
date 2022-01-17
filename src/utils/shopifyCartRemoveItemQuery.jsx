import.meta.env;

export const shopifyCartRemoveItemQuery = ({ variantID, cartID }) => {
    return fetch(__SNOWPACK_ENV__.API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": __SNOWPACK_ENV__.ACCESS_TOKEN,
        },
        body: JSON.stringify({
            query: `mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
				checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
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
                checkoutId: cartID,
                lineItemIds: [variantID],
            },
        }),
    })
        .then(response => response.json())
        .then(response => response.data);
};

export default shopifyCartRemoveItemQuery;
