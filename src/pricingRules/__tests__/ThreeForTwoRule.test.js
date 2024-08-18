import ThreeForTwoRule from "../ThreeForTwoRule.js";

describe("ThreeForTwoRule", () => {
    // Test case 1: Five products in the cart, discount applied must is price of 1 product
    test("should apply the 'Three for Two' rule to the given products and return the discount amount", () => {
        const exampleProduct1 = {
            sku: "exampleProduct1",
            price: 20,
        };

        const rule1 = new ThreeForTwoRule({
            productSKU: exampleProduct1.sku,
            description: "Three for Two rule for Example Product 1",
        });

        const cart1 = [
            exampleProduct1,
            exampleProduct1,
            exampleProduct1,
            exampleProduct1,
            exampleProduct1,
        ];

        expect(rule1.apply(cart1)).toEqual(exampleProduct1.price);
    });

    // Test case 2: Six products in the cart, discount applied must be price of 2 products
    test("should apply the 'Three for Two' rule to the given products and return the discount amount", () => {
        const exampleProduct2 = {
            sku: "exampleProduct2",
            price: 10,
        };
        const rule2 = new ThreeForTwoRule({
            productSKU: exampleProduct2.sku,
            description: "Three for Two rule for Example Product 2",
        });

        const cart2 = [
            exampleProduct2,
            exampleProduct2,
            exampleProduct2,
            exampleProduct2,
            exampleProduct2,
            exampleProduct2,
        ];

        expect(rule2.apply(cart2)).toEqual(exampleProduct2.price * 2);
    });

    // Test case 3: Two products in the cart, discount must not be applied
    test("should not apply the 'Three for Two' rule to the cart", () => {
        const exampleProduct3 = {
            sku: "exampleProduct3",
            price: 100,
        };
        const rule3 = new ThreeForTwoRule({
            productSKU: exampleProduct3.sku,
            description: "Three for Two rule for Example Product 3",
        });

        const cart3 = [exampleProduct3, exampleProduct3];

        expect(rule3.apply(cart3)).toEqual(0);
    });
});
