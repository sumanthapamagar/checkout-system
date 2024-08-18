import BulkDiscountRule from "./BulkDiscountRule.js";
import FreeProductRule from "./FreeProductRule.js";
import ThreeForTwoRule from "./ThreeForTwoRule.js";

/**
 * Factory Class to create Pricing Rules based on the rule name
 * @class
 */
class PricingRuleFactory {

    createPricingRule(ruleType, ruleParams) {
        switch (ruleType) {
            case "ThreeForTwoRule":
                return new ThreeForTwoRule(ruleParams);
            case "BulkDiscountRule":
                return new BulkDiscountRule(ruleParams);
            case "FreeProductRule":
                return new FreeProductRule(ruleParams);
            default:
                throw new Error(`Invalid pricing rule: ${ruleType}`);
        }
    }
}

export default PricingRuleFactory