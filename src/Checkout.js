import PricingRuleFactory from "./pricingRules/PricingRuleFactory.js";

class Checkout {
    constructor(pricingRules = []) {
        this.cart = [];
        const pricingRuleFactory = new PricingRuleFactory();
        this.pricingRules = pricingRules.map(({ type, ...rule }) =>
            pricingRuleFactory.createPricingRule(type, rule)
        );
    }

    scan(item) {
        this.cart.push(item);
    }

    total() {
        const targetPrice = this.cart.reduce(
            (total, item) => total + item.price,
            0
        );

        const discounts = this.pricingRules.map((rule) => rule.apply(this.cart));

        const totalDiscount = discounts.reduce(
            (total, discount) => total + discount,
            0
        );

        const totalPrice = targetPrice - totalDiscount;

        // return the total price in the format $xx.xx
        return `$${totalPrice.toFixed(2)}`;
    }
}

export default Checkout;
