import PricingRule from "./PricingRule.js";

class FreeProductRule extends PricingRule {
    constructor({ productSKU, freeProductSKU, description = "" }) {
        super();
        this.productSKU = productSKU;
        this.freeProductSKU = freeProductSKU;
        this.description = description;
    }

    /**
     * Applies the "Free Product" rule to the given products.
     * Returns the dicount amount
     * Dicount is sum of price of freeItem in the cart for every eligible product
     * Free products must be scanned and added to the cart for discount
     */
    apply(cart) {
        const productCount = cart.filter(
            (product) => product.sku === this.productSKU
        ).length;

        const freeProductsCountInCart = cart.filter(
            (product) => product.sku === this.freeProductSKU
        ).length;

        if (productCount === 0 || freeProductsCountInCart === 0) {
            // Discount not applicale if
            // No eligible products in the cart or no free products in the cart
            return 0;
        }

        const freeProduct = cart.find(
            (product) => product.sku === this.freeProductSKU
        );

        if (freeProductsCountInCart > productCount) {
            // If there are more freeProductsCountInCart than productCount
            // then limit the discount to the product count * price of the free product
            const discountAmount = productCount * freeProduct.price;
            return discountAmount;
        }

        // total free products is less or same quantity as the total eligible products
        // discount the total price of the free products already in the cart

        const discountAmount = freeProductsCountInCart * freeProduct.price;
        return discountAmount;
    }
}
export default FreeProductRule;
