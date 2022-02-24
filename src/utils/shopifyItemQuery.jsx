import.meta.env;

export const shopifyItemQuery = ({ location }) => {
    return fetch(__SNOWPACK_ENV__.API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": __SNOWPACK_ENV__.ACCESS_TOKEN,
        },
        body: JSON.stringify({
            query: `
				query product {
					products(first:1, query:"tag:${location.split("/")[2]}") {
						edges {
							node {
							  id
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
        .then(response => response.data);
};

export default shopifyItemQuery;
