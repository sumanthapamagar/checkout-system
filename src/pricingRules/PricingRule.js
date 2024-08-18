/**
 * Represents a pricing rule for a prodcut.
 */
class PricingRule {
    /**
     * Applies the pricing rule to the shopping cart.
     * Implement this method to calculate the discount to be applied to the total price.
     */
    apply(cart) {
        throw new Error("Method not implemented.");
    }
}

export default PricingRule;
