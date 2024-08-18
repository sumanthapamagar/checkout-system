import Checkout from "../Checkout.js";

const pricingRules = [
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

const ipd = {
    id: 1,
    sku: "ipd",
    name: "Super iPad",
    price: 549.99
};
const mbp = {
    id: 2,
    sku: "mbp",
    name: "MacBook Pro",
    price: 1399.99
};
const atv = {
    id: 3,
    sku: "atv",
    name: "Apple TV",
    price: 109.50
};
const vga = {
    id: 4,
    sku: "vga",
    name: "VGA adapter",
    price: 30.00
};

describe("Checkout", () => {
    // Test case 1: No items in the cart;    Total expected: 0
    test("should return 0 when there are no items in the cart", () => {
        const checkout1 = new Checkout(pricingRules);
        expect(checkout1.total()).toBe("$0.00");
    });

    // Test case 2: atv, atv, atv, vga;    Total expected: 249.00
    test("should discount 249.00 for the cart items: atv, atv, atv, vga", () => {
        const checkout2 = new Checkout(pricingRules);
        checkout2.scan(atv);
        checkout2.scan(atv);
        checkout2.scan(atv);
        checkout2.scan(vga);
        expect(checkout2.total()).toBe("$249.00");
    });

    // Test case 3:    atv, ipd, ipd, atv, ipd, ipd, ipd; Total expected: $2718.95
    test("should return the sum of prices of two items when no discounts are applied", () => {
        const checkout3 = new Checkout(pricingRules);
        checkout3.scan(atv);
        checkout3.scan(ipd);
        checkout3.scan(ipd);
        checkout3.scan(atv);
        checkout3.scan(ipd);
        checkout3.scan(ipd);
        checkout3.scan(ipd);
        expect(checkout3.total()).toBe("$2718.95");
    });

    // Test case 4: mbp, vga, ipd; Total expected: $1949.98
    test("should return the discounted price when the ThreeForTwoRule is applied to three items", () => {
        const checkout4 = new Checkout(pricingRules);
        checkout4.scan(mbp);
        checkout4.scan(vga);
        checkout4.scan(ipd);
        expect(checkout4.total()).toBe("$1949.98");
    });
});
