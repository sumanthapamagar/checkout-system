import PricingRule from "./PricingRule.js";

class ThreeForTwoRule extends PricingRule {
    constructor({ productSKU, description = "" }) {
        super();
        this.productSKU = productSKU;
        this.description = description;
    }

    /**
     * Applies the "Three for Two" rule to the given products.
     * Returns the dicount amount
     * dicount is sum of price of every third product
     */
    apply(cart) {
        const productCount = cart.filter(
            (product) => product.sku === this.productSKU
        ).length;
        if (productCount < 3) {
            return 0;
        }

        const productPrice = cart.find(
            (product) => product.sku === this.productSKU
        ).price;

        const discountAmount = Math.floor(productCount / 3) * productPrice;

        return discountAmount;
    }
}

export default ThreeForTwoRule;
