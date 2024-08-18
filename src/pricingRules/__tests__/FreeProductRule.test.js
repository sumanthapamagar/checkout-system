import FreeProductRule from "../FreeProductRule.js";

describe("FreeProductRule", () => {
    // Test case 1: No free product in the cart, no discount should be applied
    test("should return 0 discount when there are no free products in the cart", () => {
        const exampleProduct1 = {
            sku: "exampleProduct1",
            price: 20,
        };

        const freeProduct1 = {
            sku: "freeProduct1",
            price: 10,
        };

        const rule1 = new FreeProductRule({
            productSKU: exampleProduct1.sku,
            freeProductSKU: freeProduct1.sku,
            description: "Free product rule for Example Product 1",
        });

        const cart1 = [
            exampleProduct1,
            exampleProduct1,
            exampleProduct1,
            exampleProduct1,
            exampleProduct1,
        ];

        expect(rule1.apply(cart1)).toEqual(0);
    });

    // Test case 2: More free products than eligible products, discount should be limited to eligible products count * price of the free product
    test("should limit the discount to eligible products count * price of the free product", () => {
        const exampleProduct2 = {
            sku: "exampleProduct2",
            price: 30,
        };

        const freeProduct2 = {
            sku: "freeProduct2",
            price: 10,
        };

        const rule2 = new FreeProductRule({
            productSKU: exampleProduct2.sku,
            freeProductSKU: freeProduct2.sku,
            description: "Free product rule for Example Product 2",
        });

        const cart2 = [exampleProduct2, freeProduct2, freeProduct2, freeProduct2];

        expect(rule2.apply(cart2)).toEqual(10);
    });

    // Test case 3: Less free products than eligible products,    discount the total price of the free products already in the cart
    test("should discount the total price of the free products already in the cart", () => {
        const exampleProduct3 = {
            sku: "exampleProduct3",
            price: 40,
        };

        const freeProduct3 = {
            sku: "freeProduct3",
            price: 5,
        };

        const rule3 = new FreeProductRule({
            productSKU: exampleProduct3.sku,
            freeProductSKU: freeProduct3.sku,
            description: "Free product rule for Example Product 3",
        });

        const cart3 = [
            exampleProduct3,
            exampleProduct3,
            exampleProduct3,
            freeProduct3,
            freeProduct3,
        ];

        expect(rule3.apply(cart3)).toEqual(10);
    });

    // Test case 4: No eligible products in the cart, no discount should be applied
    test("should return 0 discount when there are no eligible products in the cart", () => {
        const exampleProduct4 = {
            sku: "exampleProduct4",
            price: 40,
        };

        const freeProduct4 = {
            sku: "freeProduct4",
            price: 5,
        };

        const rule4 = new FreeProductRule({
            productSKU: exampleProduct4.sku,
            freeProductSKU: freeProduct4.sku,
            description: "Free product rule for example Product 4",
        });

        const cart4 = [freeProduct4, freeProduct4, freeProduct4, freeProduct4];

        expect(rule4.apply(cart4)).toEqual(0);
    });
});
