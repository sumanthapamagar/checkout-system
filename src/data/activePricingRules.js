export const pricingRules = [
    {
        type: "ThreeForTwoRule",
        productSKU: "atv",
        description: "Buy 3 Apple TVs for the price of 2"
    },
    {
        type: "BulkDiscountRule",
        productSKU: "ipd",
        minimum: 5,
        newPrice: 499.99,
        description: "Bulk discount for 5 or more Super iPads"
    },
    {
        type: "FreeProductRule",
        productSKU: "mbp",
        freeProductSKU: "vga",
        description: "Free VGA adapter with every MacBook Pro"
    }
];
