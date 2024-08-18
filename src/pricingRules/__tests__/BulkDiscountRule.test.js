import BulkDiscountRule from "../BulkDiscountRule.js";

describe("BulkDiscountRule", () => {
    // Test case 1: Minimum is not reached, no discount should be applied
    test("Minimum is not reached, no discount should be applied", () => {
        const rule1 = new BulkDiscountRule({
            productSKU: "exampleProduct1",
            minimum: 5,
            newPrice: 300,
            description: "Bulk discount rule for Example Product 1",
        });

        const cart1 = [
            { sku: "exampleProduct1", price: 400 },
            { sku: "exampleProduct1", price: 400 },
            { sku: "exampleProduct1", price: 400 },
            { sku: "exampleProduct1", price: 400 },
        ];

        expect(rule1.apply(cart1)).toEqual(0);
    });

    // Test case 2: Minimum is reached, discount should be applied
    test("Minimum is reached, discount should be applied", () => {
        const rule2 = new BulkDiscountRule({
            productSKU: "exampleProduct2",
            minimum: 5,
            newPrice: 100,
            description: "Bulk discount rule for Example Product 2",
        });

        const cart2 = [
            { sku: "exampleProduct2", price: 120 },
            { sku: "exampleProduct2", price: 120 },
            { sku: "exampleProduct2", price: 120 },
            { sku: "exampleProduct2", price: 120 },
            { sku: "exampleProduct2", price: 120 },
        ];

        expect(rule2.apply(cart2)).toEqual(100);
    });

    // Test case 3: Minimum is reached, discount should be applied
    test("Minimum is reached, discount should be applied", () => {
        const rule3 = new BulkDiscountRule({
            productSKU: "exampleProduct3",
            minimum: 2,
            newPrice: 100,
            description: "Bulk discount rule for Example Product 3",
        });

        const cart3 = [
            { sku: "exampleProduct3", price: 150 },
            { sku: "exampleProduct3", price: 150 },
        ];

        expect(rule3.apply(cart3)).toEqual(100);
    });

    // Additional test case: Minimum is reached, discount should be applied
    test("Minimum is reached, discount should be applied", () => {
        const rule4 = new BulkDiscountRule({
            productSKU: "exampleProduct4",
            minimum: 5,
            newPrice: 100,
            description: "Bulk discount rule for Example Product 4",
        });

        const cart4 = [
            { sku: "exampleProduct4", price: 150 },
            { sku: "exampleProduct4", price: 150 },
            { sku: "exampleProduct4", price: 150 },
            { sku: "exampleProduct4", price: 150 },
            { sku: "exampleProduct4", price: 150 },
        ];

        expect(rule4.apply(cart4)).toEqual(250);
    });

    // Additional test case: Minimum is not reached, no discount should be applied
    test("Minimum is not reached, no discount should be applied", () => {
        const rule5 = new BulkDiscountRule({
            productSKU: "exampleProduct5",
            minimum: 3,
            newPrice: 100,
            description: "Bulk discount rule for Example Product 5",
        });

        const cart5 = [];

        expect(rule5.apply(cart5)).toEqual(0);
    });
});
